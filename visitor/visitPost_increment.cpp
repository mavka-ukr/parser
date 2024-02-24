#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPost_increment(
      MavkaParser::Post_incrementContext* context) {
    const auto post_increment_node = new ast::PostIncrementNode();
    fill_ast_value(post_increment_node, context);
    post_increment_node->value =
        any_to_ast_value(_visitContext(context->pi_value));
    return (ast::make_ast_some(post_increment_node));
  }
} // namespace mavka::parser