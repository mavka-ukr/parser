#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitWait(MavkaParser::WaitContext* context) {
    const auto wait_node = new ast::WaitNode();
    fill_ast_value(wait_node, context);
    wait_node->value = any_to_ast_value(_visitContext(context->w_value));
    return (ast::make_ast_some(wait_node));
  }
} // namespace mavka::parser