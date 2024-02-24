#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitReturn_body_line(
      MavkaParser::Return_body_lineContext* context) {
    const auto return_ast_value =
        ast::ReturnNode::ast_value(new ast::ReturnNode());
    fill_ast_value(return_ast_value, context);
    return_ast_value->data.ReturnNode->value =
        any_to_ast_value(_visitContext(context->rbl_value));
    return return_ast_value;
  }
} // namespace mavka::parser