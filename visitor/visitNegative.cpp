#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitNegative(
      MavkaParser::NegativeContext* context) {
    const auto negative_node = new ast::NegativeNode();
    fill_ast_value(negative_node, context);
    negative_node->value = any_to_ast_value(_visitContext(context->n_value));
    return (ast::make_ast_some(negative_node));
  }
} // namespace mavka::parser