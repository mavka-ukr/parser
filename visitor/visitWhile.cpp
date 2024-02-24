#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitWhile(MavkaParser::WhileContext* context) {
    const auto while_ast_value =
        ast::WhileNode::ast_value(new ast::WhileNode());
    fill_ast_value(while_ast_value, context);
    while_ast_value->data.WhileNode->condition =
        any_to_ast_value(_visitContext(context->w_value));
    if (context->w_body) {
      while_ast_value->data.WhileNode->body =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitBody(context->w_body));
    }
    return while_ast_value;
  }
} // namespace mavka::parser