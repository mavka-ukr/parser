#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitBody(MavkaParser::BodyContext* context) {
    std::vector<ast::ASTValue*> body;
    for (const auto body_element : context->body_element_or_return()) {
      const auto ast_value =
          any_to_ast_value(visitBody_element_or_return(body_element));
      if (ast_value->kind == ast::KindIdentifierNode) {
        if (ast_value->data.IdentifierNode->name == "перервати") {
          const auto break_ast_value =
              ast::BreakNode::ast_value(new ast::BreakNode());
          break_ast_value->start_line = ast_value->start_line;
          break_ast_value->start_column = ast_value->start_column;
          break_ast_value->end_line = ast_value->end_line;
          break_ast_value->end_column = ast_value->end_column;
          body.push_back(break_ast_value);
        } else if (ast_value->data.IdentifierNode->name == "продовжити") {
          const auto continue_ast_value =
              ast::ContinueNode::ast_value(new ast::ContinueNode());
          continue_ast_value->start_line = ast_value->start_line;
          continue_ast_value->start_column = ast_value->start_column;
          continue_ast_value->end_line = ast_value->end_line;
          continue_ast_value->end_column = ast_value->end_column;
          body.push_back(continue_ast_value);
        } else {
          body.push_back(ast_value);
        }
      } else {
        body.push_back(ast_value);
      }
    }
    return body;
  }
} // namespace mavka::parser