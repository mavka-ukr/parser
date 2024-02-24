#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPost_decrement(
      MavkaParser::Post_decrementContext* context) {
    const auto post_decrement_node = new ast::PostDecrementNode();
    fill_ast_value(post_decrement_node, context);
    post_decrement_node->value =
        any_to_ast_value(_visitContext(context->pd_value));
    return (ast::make_ast_some(post_decrement_node));
  }
} // namespace mavka::parser