#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitEach(MavkaParser::EachContext* context) {
    if (context->e_iterator) {
      const auto each_ast_value = ast::EachNode::ast_value(new ast::EachNode());
      fill_ast_value(each_ast_value, context);
      each_ast_value->data.EachNode->value =
          any_to_ast_value(_visitContext(context->e_iterator));
      each_ast_value->data.EachNode->keyName =
          context->e_key_name ? context->e_key_name->getText() : "";
      each_ast_value->data.EachNode->name = context->e_name->getText();
      if (context->e_body) {
        each_ast_value->data.EachNode->body =
            std::any_cast<std::vector<ast::ASTValue*>>(
                visitBody(context->e_body));
      }
      return each_ast_value;
    }
    if (context->e_fromto) {
      if (context->e_fromto->fromto_simple()) {
        const auto to_name = std::to_string(this->each_count) + "_до";

        const auto fromto_simple = context->e_fromto->fromto_simple();
        // х = 0
        const auto assign_ast_value =
            ast::AssignNode::ast_value(new ast::AssignNode());
        assign_ast_value->data.AssignNode->name = context->e_name->getText();
        assign_ast_value->data.AssignNode->value =
            any_to_ast_value(visitFromto_value(fromto_simple->fs_from));

        // до = 10
        const auto assign_ast_value2 =
            ast::AssignNode::ast_value(new ast::AssignNode());
        assign_ast_value2->data.AssignNode->name = to_name;
        assign_ast_value2->data.AssignNode->value =
            any_to_ast_value(visitFromto_value(fromto_simple->fs_to));

        const auto op = fromto_simple->fs_to_symbol
                            ? fromto_simple->fs_to_symbol->getText()
                            : ">=";

        // поки до >= х
        const auto while_ast_value =
            ast::WhileNode::ast_value(new ast::WhileNode());

        // до >= х
        const auto condition_binary_ast_value =
            ast::BinaryNode::ast_value(new ast::BinaryNode());
        // до
        condition_binary_ast_value->data.BinaryNode->left =
            ast::IdentifierNode::ast_value(new ast::IdentifierNode(to_name));
        // х
        condition_binary_ast_value->data.BinaryNode->right =
            ast::IdentifierNode::ast_value(
                new ast::IdentifierNode(context->e_name->getText()));
        // <
        if (op == "<") {
          condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_LT;
        } else if (op == "<=") {
          condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_LE;
        } else if (op == ">") {
          condition_binary_ast_value->data.BinaryNode->op = ast::COMPARISON_GT;
        } else if (op == ">=") {
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
        // х
        binary_ast_value->data.BinaryNode->left =
            ast::IdentifierNode::ast_value(
                new ast::IdentifierNode(context->e_name->getText()));
        // 1
        binary_ast_value->data.BinaryNode->right =
            ast::NumberNode::ast_value(new ast::NumberNode("1"));
        // +
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_ADD;

        // х = х + 1
        const auto assign_ast_value3 =
            ast::AssignNode::ast_value(new ast::AssignNode());
        assign_ast_value3->data.AssignNode->name = context->e_name->getText();
        assign_ast_value3->data.AssignNode->value = binary_ast_value;

        while_ast_value->data.WhileNode->body.push_back(assign_ast_value3);

        const auto block_ast_value =
            ast::BlockNode::ast_value(new ast::BlockNode());
        block_ast_value->data.BlockNode->body = {
            assign_ast_value, assign_ast_value2, while_ast_value};

        return block_ast_value;
      }
      if (context->e_fromto->fromto_complex()) {
        const auto fromto_complex = context->e_fromto->fromto_complex();
      }
    }

    return nullptr;
  }
} // namespace mavka::parser