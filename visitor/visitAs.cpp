#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAs(MavkaParser::AsContext* context) {
    const auto binary_ast_value =
        ast::BinaryNode::ast_value(new ast::BinaryNode(ast::UTIL_AS));
    fill_ast_value(binary_ast_value, context);
    binary_ast_value->data.BinaryNode->left =
        any_to_ast_value(_visitContext(context->a_left));
    binary_ast_value->data.BinaryNode->right =
        any_to_ast_value(_visitContext(context->a_right));
    return binary_ast_value;
  }
} // namespace mavka::parser