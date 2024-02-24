#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitReturn_body_line(
      MavkaParser::Return_body_lineContext* context) {
    const auto return_node = new ast::ReturnNode();
    fill_ast_value(return_node, context);
    return_node->value = any_to_ast_value(_visitContext(context->rbl_value));
    return (ast::make_ast_some(return_node));
  }
} // namespace mavka::parser