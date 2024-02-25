#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitEach(MavkaParser::EachContext* context) {
    if (context->e_iterator) {
      const auto iterator_name = std::to_string(this->iterator_count++) + "_п";
      const auto iterator_identifier_ast_value = ast::IdentifierNode::ast_value(
          new ast::IdentifierNode(iterator_name));
      fill_ast_value(iterator_identifier_ast_value, context);

      const auto value_ast_value =
          any_to_ast_value(_visitContext(context->e_iterator));

      // значення.чародія_перебір
      const auto get_iterator_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      fill_ast_value(get_iterator_ast_value, context);
      get_iterator_ast_value->data.PropertyGetNode->left = value_ast_value;
      get_iterator_ast_value->data.PropertyGetNode->name = "чародія_перебір";
      // значення.чародія_перебір()
      const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
      fill_ast_value(call_ast_value, context);
      call_ast_value->data.CallNode->value = get_iterator_ast_value;

      // п = значення.чародія_перебір()
      const auto assign_ast_value =
          ast::AssignNode::ast_value(new ast::AssignNode());
      fill_ast_value(assign_ast_value, context);
      assign_ast_value->data.AssignNode->name = iterator_name;
      assign_ast_value->data.AssignNode->value = call_ast_value;

      // п.значення
      const auto get_value_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      fill_ast_value(get_value_ast_value, context);
      get_value_ast_value->data.PropertyGetNode->left =
          iterator_identifier_ast_value;
      get_value_ast_value->data.PropertyGetNode->name = "значення";
      // х = п.значення
      const auto assign_ast_value2 =
          ast::AssignNode::ast_value(new ast::AssignNode());
      fill_ast_value(assign_ast_value2, context);
      assign_ast_value2->data.AssignNode->name = context->e_name->getText();
      assign_ast_value2->data.AssignNode->value = get_value_ast_value;

      // п.завершено
      const auto get_done_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      fill_ast_value(get_done_ast_value, context);
      get_done_ast_value->data.PropertyGetNode->left =
          iterator_identifier_ast_value;
      get_done_ast_value->data.PropertyGetNode->name = "завершено";
      // !п.завершено
      const auto not_ast_value =
          ast::UnaryNode::ast_value(new ast::UnaryNode(ast::UNARY_NOT));
      fill_ast_value(not_ast_value, context);
      not_ast_value->data.UnaryNode->value = get_done_ast_value;

      // поки !п.завершено
      const auto while_ast_value =
          ast::WhileNode::ast_value(new ast::WhileNode());
      fill_ast_value(while_ast_value, context);
      while_ast_value->data.WhileNode->condition = not_ast_value;
      if (context->e_body) {
        while_ast_value->data.WhileNode->body =
            std::any_cast<std::vector<ast::ASTValue*>>(
                visitBody(context->e_body));
      }

      // п.далі
      const auto get_next_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      fill_ast_value(get_next_ast_value, context);
      get_next_ast_value->data.PropertyGetNode->left =
          iterator_identifier_ast_value;
      get_next_ast_value->data.PropertyGetNode->name = "далі";
      // п.далі()
      const auto call_next_ast_value =
          ast::CallNode::ast_value(new ast::CallNode());
      fill_ast_value(call_next_ast_value, context);
      call_next_ast_value->data.CallNode->value = get_next_ast_value;

      while_ast_value->data.WhileNode->body.push_back(call_next_ast_value);
      while_ast_value->data.WhileNode->body.push_back(assign_ast_value2);

      const auto block_ast_value =
          ast::BlockNode::ast_value(new ast::BlockNode());
      fill_ast_value(block_ast_value, context);
      block_ast_value->data.BlockNode->body = {
          assign_ast_value, assign_ast_value2, while_ast_value};

      return block_ast_value;
    }
    if (context->e_fromto) {
      std::string comp_symbol;
      std::string arith_symbol;
      ast::ASTValue* from_ast_node;
      ast::ASTValue* middle_ast_node;
      ast::ASTValue* to_ast_node;

      if (context->e_fromto->fromto_simple()) {
        comp_symbol =
            context->e_fromto->fromto_simple()->fs_to_symbol
                ? context->e_fromto->fromto_simple()->fs_to_symbol->getText()
                : ">=";
        arith_symbol = "+";
        from_ast_node = any_to_ast_value(
            visitFromto_value(context->e_fromto->fromto_simple()->fs_from));
        middle_ast_node = ast::NumberNode::ast_value(new ast::NumberNode("1"));
        fill_ast_value(middle_ast_node, context);
        to_ast_node = any_to_ast_value(
            visitFromto_value(context->e_fromto->fromto_simple()->fs_to));
      } else if (context->e_fromto->fromto_complex()) {
        comp_symbol =
            context->e_fromto->fromto_complex()->fc_to_symbol
                ? context->e_fromto->fromto_complex()->fc_to_symbol->getText()
                : ">=";
        arith_symbol = context->e_fromto->fromto_complex()->fc_middle_symbol
                           ? context->e_fromto->fromto_complex()
                                 ->fc_middle_symbol->getText()
                           : "+";
        from_ast_node = any_to_ast_value(
            visitFromto_value(context->e_fromto->fromto_complex()->fc_from));
        middle_ast_node = any_to_ast_value(
            visitFromto_value(context->e_fromto->fromto_complex()->fc_middle));
        to_ast_node = any_to_ast_value(
            visitFromto_value(context->e_fromto->fromto_complex()->fc_to));
      }

      const auto to_name = std::to_string(this->each_count++) + "_до";
      const auto to_identifier_ast_value =
          ast::IdentifierNode::ast_value(new ast::IdentifierNode(to_name));
      fill_ast_value(to_identifier_ast_value, context);
      const auto e_name_ast_value = ast::IdentifierNode::ast_value(
          new ast::IdentifierNode(context->e_name->getText()));
      fill_ast_value(e_name_ast_value, context);

      // х = 0
      const auto assign_ast_value =
          ast::AssignNode::ast_value(new ast::AssignNode());
      fill_ast_value(assign_ast_value, context);
      assign_ast_value->data.AssignNode->name = context->e_name->getText();
      assign_ast_value->data.AssignNode->value = from_ast_node;

      // до = 10
      const auto assign_ast_value2 =
          ast::AssignNode::ast_value(new ast::AssignNode());
      fill_ast_value(assign_ast_value2, context);
      assign_ast_value2->data.AssignNode->name = to_name;
      assign_ast_value2->data.AssignNode->value = to_ast_node;

      // поки до >= х
      const auto while_ast_value =
          ast::WhileNode::ast_value(new ast::WhileNode());
      fill_ast_value(while_ast_value, context);

      // до >= х
      const auto condition_binary_ast_value =
          ast::BinaryNode::ast_value(new ast::BinaryNode());
      fill_ast_value(condition_binary_ast_value, context);
      // до
      condition_binary_ast_value->data.BinaryNode->left =
          to_identifier_ast_value;
      // х
      condition_binary_ast_value->data.BinaryNode->right = e_name_ast_value;
      // <
      if (comp_symbol == "<") {
        condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_LT;
      } else if (comp_symbol == "<=") {
        condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_LE;
      } else if (comp_symbol == ">") {
        condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_GT;
      } else if (comp_symbol == ">=") {
        condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_GE;
      } else {
        condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_LE;
      }
      while_ast_value->data.WhileNode->condition = condition_binary_ast_value;
      if (context->e_body) {
        while_ast_value->data.WhileNode->body =
            std::any_cast<std::vector<ast::ASTValue*>>(
                visitBody(context->e_body));
      }

      // х + 1
      const auto binary_ast_value =
          ast::BinaryNode::ast_value(new ast::BinaryNode());
      fill_ast_value(binary_ast_value, context);
      // х
      binary_ast_value->data.BinaryNode->left = e_name_ast_value;
      binary_ast_value->data.BinaryNode->right = middle_ast_node;
      // +
      if (arith_symbol == "+") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_ADD;
      } else if (arith_symbol == "-") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_SUB;
      } else if (arith_symbol == "*") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_MUL;
      } else if (arith_symbol == "/") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_DIV;
      } else if (arith_symbol == "%") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_MOD;
      } else if (arith_symbol == "//") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_DIVDIV;
      } else if (arith_symbol == "**") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_POW;
      } else {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_ADD;
      }

      // х = х + 1
      const auto assign_ast_value3 =
          ast::AssignNode::ast_value(new ast::AssignNode());
      fill_ast_value(assign_ast_value3, context);
      assign_ast_value3->data.AssignNode->name = context->e_name->getText();
      assign_ast_value3->data.AssignNode->value = binary_ast_value;

      while_ast_value->data.WhileNode->body.push_back(assign_ast_value3);

      const auto block_ast_value =
          ast::BlockNode::ast_value(new ast::BlockNode());
      fill_ast_value(block_ast_value, context);
      block_ast_value->data.BlockNode->body = {
          assign_ast_value, assign_ast_value2, while_ast_value};

      return block_ast_value;
    }

    return nullptr;
  }

  std::any MavkaASTVisitor::visitFromto(MavkaParser::FromtoContext* context) {
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitFromto_complex(
      MavkaParser::Fromto_complexContext* context) {
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitFromto_simple(
      MavkaParser::Fromto_simpleContext* context) {
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitFromto_value(
      MavkaParser::Fromto_valueContext* context) {
    if (const auto number_context =
            dynamic_cast<MavkaParser::Fromto_numberContext*>(context)) {
      const auto number_ast_value =
          ast::NumberNode::ast_value(new ast::NumberNode());
      fill_ast_value(number_ast_value, context);
      number_ast_value->data.NumberNode->value =
          number_context->number_token()->getText();
      return number_ast_value;
    }
    if (const auto id_context =
            dynamic_cast<MavkaParser::Fromto_idContext*>(context)) {
      return visitIdentifier(id_context->identifier());
    }
    if (const auto nested_context =
            dynamic_cast<MavkaParser::Fromto_nestedContext*>(context)) {
      return _visitContext(nested_context->fn_value);
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser