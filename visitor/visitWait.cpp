#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitWait(MavkaParser::WaitContext* context) {
    const auto wait_ast_value = ast::WaitNode::ast_value(new ast::WaitNode());
    fill_ast_value(wait_ast_value, context);
    wait_ast_value->data.WaitNode->value =
        any_to_ast_value(_visitContext(context->w_value));
    return wait_ast_value;
  }
} // namespace mavka::parser