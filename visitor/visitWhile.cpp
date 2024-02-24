#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitWhile(MavkaParser::WhileContext* context) {
    const auto while_node = new ast::WhileNode();
    fill_ast_value(while_node, context);
    while_node->condition = any_to_ast_value(_visitContext(context->w_value));
    if (context->w_body) {
      while_node->body = std::any_cast<std::vector<ast::ASTValue*>>(
          visitBody(context->w_body));
    }
    return (ast::make_ast_some(while_node));
  }
} // namespace mavka::parser