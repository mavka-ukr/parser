#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPre_decrement(
      MavkaParser::Pre_decrementContext* context) {
    const auto pre_decrement_node = new ast::PreDecrementNode();
    fill_ast_value(pre_decrement_node, context);
    pre_decrement_node->value =
        any_to_ast_value(_visitContext(context->pd_value));
    return (ast::make_ast_some(pre_decrement_node));
  }
} // namespace mavka::parser