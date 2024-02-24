#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPositive(
      MavkaParser::PositiveContext* context) {
    const auto unary_ast_value =
        ast::UnaryNode::ast_value(new ast::UnaryNode(ast::UNARY_POSITIVE));
    fill_ast_value(unary_ast_value, context);
    unary_ast_value->data.UnaryNode->value =
        any_to_ast_value(_visitContext(context->p_value));
    return unary_ast_value;
  }
} // namespace mavka::parser