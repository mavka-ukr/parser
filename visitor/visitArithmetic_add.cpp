#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArithmetic_add(
      MavkaParser::Arithmetic_addContext* context) {
    const auto binary_ast_value =
        ast::BinaryNode::ast_value(new ast::BinaryNode());
    fill_ast_value(binary_ast_value, context);
    binary_ast_value->data.BinaryNode->left =
        any_to_ast_value(_visitContext(context->a_left));
    binary_ast_value->data.BinaryNode->right =
        any_to_ast_value(_visitContext(context->a_right));
    const auto op = context->a_operation->getText();
    if (op == "+") {
      binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_ADD;
    } else if (op == "-") {
      binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_SUB;
    } else {
      throw std::runtime_error("Unknown operation: " + op);
    }
    return binary_ast_value;
  }
} // namespace mavka::parser