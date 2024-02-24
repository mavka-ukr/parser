#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitBitwise(MavkaParser::BitwiseContext* context) {
    const auto binary_ast_value =
        ast::BinaryNode::ast_value(new ast::BinaryNode());
    fill_ast_value(binary_ast_value, context);
    binary_ast_value->data.BinaryNode->left =
        any_to_ast_value(_visitContext(context->b_left));
    binary_ast_value->data.BinaryNode->right =
        any_to_ast_value(_visitContext(context->b_right));
    const auto op = context->b_operation->getText();
    if (op == "&") {
      binary_ast_value->data.BinaryNode->op = ast::BITWISE_AND;
    } else if (op == "|") {
      binary_ast_value->data.BinaryNode->op = ast::BITWISE_OR;
    } else if (op == "^") {
      binary_ast_value->data.BinaryNode->op = ast::BITWISE_XOR;
    } else if (op == "<<") {
      binary_ast_value->data.BinaryNode->op = ast::BITWISE_SHIFT_LEFT;
    } else if (op == ">>") {
      binary_ast_value->data.BinaryNode->op = ast::BITWISE_SHIFT_RIGHT;
    } else {
      throw std::runtime_error("Unknown operation: " + op);
    }
    return binary_ast_value;
  }

  std::any MavkaASTVisitor::visitBitwise_op(
      MavkaParser::Bitwise_opContext* context) {
    return nullptr;
  }
} // namespace mavka::parser