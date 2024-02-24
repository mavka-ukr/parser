#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPre_increment(
      MavkaParser::Pre_incrementContext* context) {
    const auto pre_increment_node = new ast::PreIncrementNode();
    fill_ast_value(pre_increment_node, context);
    pre_increment_node->value =
        any_to_ast_value(_visitContext(context->pi_value));
    return (ast::make_ast_some(pre_increment_node));
  }
} // namespace mavka::parser