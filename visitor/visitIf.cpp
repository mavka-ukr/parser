#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitIf(MavkaParser::IfContext* context) {
    const auto if_node = new ast::IfNode();
    fill_ast_value(if_node, context);
    if_node->condition = any_to_ast_value(_visitContext(context->i_value));
    if (context->i_body) {
      if_node->body = std::any_cast<std::vector<ast::ASTValue*>>(
          visitBody(context->i_body));
    }
    if (context->i_else_if) {
      const auto else_if = any_to_ast_value(visitIf(context->i_else_if));
      if_node->else_body.push_back(else_if);
    } else if (context->i_else_body) {
      if_node->else_body = std::any_cast<std::vector<ast::ASTValue*>>(
          visitBody(context->i_else_body));
    }
    return (ast::make_ast_some(if_node));
  }
} // namespace mavka::parser