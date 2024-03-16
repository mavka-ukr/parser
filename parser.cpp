#include "parser.h"

namespace mavka::parser {
  ast::ASTValue* any_to_ast_value(std::any any) {
    return std::any_cast<ast::ASTValue*>(any);
  }

  void fill_ast_value(ast::ASTValue* ast_value,
                      antlr4::ParserRuleContext* context) {
    ast_value->start_line = context->getStart()->getLine();
    ast_value->start_column = context->getStart()->getCharPositionInLine();
    ast_value->end_line = context->getStop()->getLine();
    ast_value->end_column = context->getStop()->getCharPositionInLine();
  }

  ast::ASTValue* make_ast_value(ast::ASTValueKind kind, void* data) {
    const auto ast_value = new ast::ASTValue();
    ast_value->kind = kind;
    ast_value->data.ref = data;
    return ast_value;
  }

  ast::ASTValue* to_string_call_node(ast::ASTValue* ast_value) {
    if (ast_value->kind == ast::KindStringNode) {
      return ast_value;
    }
    const auto identifier_node = new ast::IdentifierNode();
    identifier_node->name = "текст";
    const auto call_node = new ast::CallNode();
    call_node->value = make_ast_value(ast::KindIdentifierNode, identifier_node);
    const auto arg_node = new ast::ArgNode();
    arg_node->index = 0;
    arg_node->value = ast_value;
    call_node->args = {ast::ArgNode::ast_value(arg_node)};
    return make_ast_value(ast::KindCallNode, call_node);
  }

  ast::ASTValue* make_arithmetic_node(
      const std::vector<ast::ASTValue*>& nodes) {
    if (nodes.size() == 0) {
      return make_ast_value(ast::KindStringNode, new ast::StringNode());
    }
    if (nodes.size() == 1) {
      return to_string_call_node(nodes[0]);
    }
    const auto arithmetic_node = new ast::BinaryNode();
    arithmetic_node->op = ast::ARITHMETIC_ADD;
    if (nodes.size() == 2) {
      arithmetic_node->left = to_string_call_node(nodes[0]);
      arithmetic_node->right = to_string_call_node(nodes[1]);
    } else {
      arithmetic_node->left = to_string_call_node(
          make_arithmetic_node(std::vector(nodes.begin(), nodes.end() - 1)));
      arithmetic_node->right = to_string_call_node(nodes.back());
    }
    return make_ast_value(ast::KindBinaryNode, arithmetic_node);
  }

  std::any process_string(antlr4::ParserRuleContext* context,
                          const std::string& value) {
    std::vector<ast::ASTValue*> parts;
    std::string current_part;
    bool interpolation = false;

    for (int i = 0; i < value.length(); ++i) {
      if (!interpolation && tools::safe_substr(value, i, 1) == "%" &&
          tools::safe_substr(value, i + 1, 1) == "(") {
        interpolation = true;
        if (!current_part.empty()) {
          const auto part_string = new ast::StringNode();
          part_string->value = current_part;
          parts.push_back(make_ast_value(ast::KindStringNode, part_string));
          current_part = "";
        }
        i += 1;
        continue;
      }

      if (interpolation && tools::safe_substr(value, i, 1) == ")") {
        interpolation = false;
        const auto parser_result = parser::parse(current_part);
        if (!parser_result.errors.empty()) {
          throw std::runtime_error("Shit.");
        }
        parts.push_back(parser_result.module_node->body[0]);
        current_part = "";
        continue;
      }

      current_part += tools::safe_substr(value, i, 1);
    }
    if (!current_part.empty()) {
      const auto last_part = new ast::StringNode();
      last_part->value = current_part;
      parts.push_back(make_ast_value(ast::KindStringNode, last_part));
    }

    return make_arithmetic_node(parts);
  }

  void processASTBody(std::vector<ast::ASTValue*>& body) {
    for (const auto& item : body) {
      if (item == nullptr) {
        std::erase(body, item);
      }
      if (item->kind == ast::KindIdentifierNode) {
        if (item->data.IdentifierNode->name == "перервати") {
          item->kind = ast::KindBreakNode;
          item->data.BreakNode = new ast::BreakNode();
          continue;
        }
        if (item->data.IdentifierNode->name == "продовжити") {
          item->kind = ast::KindContinueNode;
          item->data.ContinueNode = new ast::ContinueNode();
          continue;
        }
      }
    }
  }

  std::any MavkaASTVisitor::_visitContext(antlr4::ParserRuleContext* context) {
    if (const auto number_context =
            dynamic_cast<MavkaParser::NumberContext*>(context)) {
      return visitNumber(number_context);
    }
    if (const auto value_atom_context =
            dynamic_cast<MavkaParser::Value_atomContext*>(context)) {
      return visitValue_atom(value_atom_context);
    }
    if (const auto string_value_context =
            dynamic_cast<MavkaParser::String_valueContext*>(context)) {
      return visitString_value(string_value_context);
    }
    if (const auto id_context =
            dynamic_cast<MavkaParser::IdContext*>(context)) {
      return visitId(id_context);
    }
    if (const auto chain_context =
            dynamic_cast<MavkaParser::ChainContext*>(context)) {
      return visitChain(chain_context);
    }
    if (tools::instance_of<MavkaParser::CallContext>(context)) {
      return visitCall(dynamic_cast<MavkaParser::CallContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Get_elementContext>(context)) {
      return visitGet_element(
          dynamic_cast<MavkaParser::Get_elementContext*>(context));
    }
    if (tools::instance_of<MavkaParser::PositiveContext>(context)) {
      return visitPositive(
          dynamic_cast<MavkaParser::PositiveContext*>(context));
    }
    if (tools::instance_of<MavkaParser::NegativeContext>(context)) {
      return visitNegative(
          dynamic_cast<MavkaParser::NegativeContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Pre_decrementContext>(context)) {
      return visitPre_decrement(
          dynamic_cast<MavkaParser::Pre_decrementContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Pre_incrementContext>(context)) {
      return visitPre_increment(
          dynamic_cast<MavkaParser::Pre_incrementContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Post_decrementContext>(context)) {
      return visitPost_decrement(
          dynamic_cast<MavkaParser::Post_decrementContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Post_incrementContext>(context)) {
      return visitPost_increment(
          dynamic_cast<MavkaParser::Post_incrementContext*>(context));
    }
    if (tools::instance_of<MavkaParser::NotContext>(context)) {
      return visitNot(dynamic_cast<MavkaParser::NotContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Bitwise_notContext>(context)) {
      return visitBitwise_not(
          dynamic_cast<MavkaParser::Bitwise_notContext*>(context));
    }
    if (tools::instance_of<MavkaParser::NestedContext>(context)) {
      return visitNested(dynamic_cast<MavkaParser::NestedContext*>(context));
    }
    if (tools::instance_of<MavkaParser::AsContext>(context)) {
      return visitAs(dynamic_cast<MavkaParser::AsContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Arithmetic_mulContext>(context)) {
      return visitArithmetic_mul(
          dynamic_cast<MavkaParser::Arithmetic_mulContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Arithmetic_addContext>(context)) {
      return visitArithmetic_add(
          dynamic_cast<MavkaParser::Arithmetic_addContext*>(context));
    }
    if (tools::instance_of<MavkaParser::BitwiseContext>(context)) {
      return visitBitwise(dynamic_cast<MavkaParser::BitwiseContext*>(context));
    }
    if (tools::instance_of<MavkaParser::ComparisonContext>(context)) {
      return visitComparison(
          dynamic_cast<MavkaParser::ComparisonContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Comp_inst_block_programContext>(
            context)) {
      return visitComp_inst_block_program(
          dynamic_cast<MavkaParser::Comp_inst_block_programContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Comp_inst_assignContext>(context)) {
      return visitComp_inst_assign(
          dynamic_cast<MavkaParser::Comp_inst_assignContext*>(context));
    }
    if (tools::instance_of<MavkaParser::TestContext>(context)) {
      return visitTest(dynamic_cast<MavkaParser::TestContext*>(context));
    }
    if (tools::instance_of<MavkaParser::TernaryContext>(context)) {
      return visitTernary(dynamic_cast<MavkaParser::TernaryContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Typeless_arrayContext>(context)) {
      return visitTypeless_array(
          dynamic_cast<MavkaParser::Typeless_arrayContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Typeless_dictionaryContext>(context)) {
      return visitTypeless_dictionary(
          dynamic_cast<MavkaParser::Typeless_dictionaryContext*>(context));
    }
    if (tools::instance_of<MavkaParser::GodContext>(context)) {
      return visitGod(dynamic_cast<MavkaParser::GodContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Call_parentContext>(context)) {
      const auto call_parent_context =
          dynamic_cast<MavkaParser::Call_parentContext*>(context);

      const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
      fill_ast_value(call_ast_value, context);

      const auto chain_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      fill_ast_value(chain_ast_value, context);

      const auto identifier_ast_value =
          ast::IdentifierNode::ast_value(new ast::IdentifierNode("предок"));
      fill_ast_value(identifier_ast_value, context);

      chain_ast_value->data.PropertyGetNode->left = identifier_ast_value;
      chain_ast_value->data.PropertyGetNode->name =
          call_parent_context->cp_id->getText();

      call_ast_value->data.CallNode->value = chain_ast_value;
      if (call_parent_context->cp_args) {
        call_ast_value->data.CallNode->args =
            std::any_cast<std::vector<ast::ASTValue*>>(
                visitArgs(call_parent_context->cp_args));
      }
      if (call_parent_context->cp_named_args) {
        call_ast_value->data.CallNode->args =
            std::any_cast<std::vector<ast::ASTValue*>>(
                visitNamed_args(call_parent_context->cp_named_args));
      }
      return call_ast_value;
    }
    if (tools::instance_of<MavkaParser::SimpleContext>(context)) {
      const auto simple_context =
          dynamic_cast<MavkaParser::SimpleContext*>(context);
      return _visitContext(simple_context->value());
    }
    if (tools::instance_of<MavkaParser::WaitContext>(context)) {
      const auto wait_context =
          dynamic_cast<MavkaParser::WaitContext*>(context);
      return visitWait(wait_context);
    }
    if (tools::instance_of<MavkaParser::FunctionContext>(context)) {
      const auto function_context =
          dynamic_cast<MavkaParser::FunctionContext*>(context);
      return visitFunction(function_context);
    }
    if (tools::instance_of<MavkaParser::Anonymous_diiaContext>(context)) {
      const auto anonymous_diia_context =
          dynamic_cast<MavkaParser::Anonymous_diiaContext*>(context);
      return visitAnonymous_diia(anonymous_diia_context);
    }
    if (const auto mockup_context =
            dynamic_cast<MavkaParser::MockupContext*>(context)) {
      return visitMockup(mockup_context);
    }
    if (const auto type_value_item_context =
            dynamic_cast<MavkaParser::Type_value_itemContext*>(context)) {
      return visitType_value_item(type_value_item_context);
    }
    if (const auto expr_mrm =
            dynamic_cast<MavkaParser::Expr_mrmContext*>(context)) {
      return visitMrm(expr_mrm->mrm());
    }
    if (const auto mrm = dynamic_cast<MavkaParser::MrmContext*>(context)) {
      return visitMrm(mrm);
    }
    return new ast::ASTValue();
  }

  void MavkaParserErrorListener::syntaxError(antlr4::Recognizer* recognizer,
                                             antlr4::Token* offendingSymbol,
                                             size_t line,
                                             size_t charPositionInLine,
                                             const std::string& msg,
                                             std::exception_ptr e) {
    MavkaParserError error{};
    error.line = line;
    error.column = charPositionInLine;
    error.message = msg;
    this->errors.push_back(error);
  }

  MavkaParserResult parse(const std::string& code) {
    antlr4::ANTLRInputStream input(code);

    const auto lexer_error_listener = new MavkaParserErrorListener();
    MavkaLexer lexer(&input);
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexer_error_listener);

    antlr4::CommonTokenStream tokens(&lexer);

    if (!lexer_error_listener->errors.empty()) {
      return MavkaParserResult{
          .errors = lexer_error_listener->errors,
      };
    }

    const auto parser_error_listener = new MavkaParserErrorListener();
    MavkaParser parser(&tokens);
    parser.removeParseListeners();
    parser.removeErrorListeners();
    parser.addErrorListener(parser_error_listener);

    MavkaParser::FileContext* tree = parser.file();

    if (!parser_error_listener->errors.empty()) {
      return MavkaParserResult{
          .errors = parser_error_listener->errors,
      };
    }

    const auto visitor = new MavkaASTVisitor();
    visitor->tokens = &tokens;

    const auto ast_value = any_to_ast_value(visitor->visitFile(tree));

    const auto module_node = ast_value->data.ModuleNode;
    auto parser_result = MavkaParserResult();
    parser_result.module_node = module_node;
    return parser_result;
  }
} // namespace mavka::parser
