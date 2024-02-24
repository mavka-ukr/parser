#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitComparison(
      MavkaParser::ComparisonContext* context) {
    const auto binary_ast_value =
        ast::BinaryNode::ast_value(new ast::BinaryNode());
    fill_ast_value(binary_ast_value, context);
    binary_ast_value->data.BinaryNode->left =
        any_to_ast_value(_visitContext(context->c_left));
    binary_ast_value->data.BinaryNode->right =
        any_to_ast_value(_visitContext(context->c_right));
    const auto op = context->c_operation->getText();
    if (op == ">" || op == "більше") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_GT;
    } else if (op == "<" || op == "менше") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_LT;
    } else if (op == ">=" || op == "не менше" || op == "неменше") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_GE;
    } else if (op == "<=" || op == "не більше") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_LE;
    } else if (op == "==" || op == "рівно") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_EQ;
    } else if (op == "!=" || op == "не рівно" || op == "нерівно") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_NE;
    } else if (op == "містить") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_CONTAINS;
    } else if (op == "не містить" | op == "немістить") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_NOT_CONTAINS;
    } else if (op == "є") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_IS;
    } else if (op == "не є" | op == "неє") {
      binary_ast_value->data.BinaryNode->op = ast::COMPARISON_NOT_IS;
    } else {
      throw std::runtime_error("Unknown operation: " + op);
    }
    return binary_ast_value;
  }
} // namespace mavka::parser