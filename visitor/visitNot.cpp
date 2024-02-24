#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitNot(MavkaParser::NotContext* context) {
    const auto not_node = new ast::NotNode();
    fill_ast_value(not_node, context);
    not_node->value = any_to_ast_value(_visitContext(context->n_value));
    return (ast::make_ast_some(not_node));
  }
} // namespace mavka::parser