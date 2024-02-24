#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitThrow(MavkaParser::ThrowContext* context) {
    const auto throw_node = new ast::ThrowNode();
    fill_ast_value(throw_node, context);
    throw_node->value = any_to_ast_value(_visitContext(context->t_value));
    return (ast::make_ast_some(throw_node));
  }
} // namespace mavka::parser