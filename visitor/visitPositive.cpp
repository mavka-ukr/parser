#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPositive(
      MavkaParser::PositiveContext* context) {
    const auto positive_node = new ast::PositiveNode();
    fill_ast_value(positive_node, context);
    positive_node->value = any_to_ast_value(_visitContext(context->p_value));
    return (ast::make_ast_some(positive_node));
  }
} // namespace mavka::parser