#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitIf(MavkaParser::IfContext* context) {
    const auto if_ast_value = ast::IfNode::ast_value(new ast::IfNode());
    fill_ast_value(if_ast_value, context);
    if_ast_value->data.IfNode->condition =
        any_to_ast_value(_visitContext(context->i_value));
    if (context->i_body) {
      if_ast_value->data.IfNode->body =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitBody(context->i_body));
    }
    if (context->i_else_if) {
      const auto else_if = any_to_ast_value(visitIf(context->i_else_if));
      if_ast_value->data.IfNode->else_body.push_back(else_if);
    } else if (context->i_else_body) {
      if_ast_value->data.IfNode->else_body =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitBody(context->i_else_body));
    }
    return if_ast_value;
  }
} // namespace mavka::parser