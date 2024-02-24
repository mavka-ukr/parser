#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitThrow(MavkaParser::ThrowContext* context) {
    const auto throw_ast_value =
        ast::ThrowNode::ast_value(new ast::ThrowNode());
    fill_ast_value(throw_ast_value, context);
    throw_ast_value->data.ThrowNode->value =
        any_to_ast_value(_visitContext(context->t_value));
    return throw_ast_value;
  }
} // namespace mavka::parser