#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitBody(MavkaParser::BodyContext* context) {
    std::vector<ast::ASTValue*> body;
    for (const auto body_element : context->body_element_or_return()) {
      const auto ast_result =
          any_to_ast_value(visitBody_element_or_return(body_element));
      if (ast_result->IdentifierNode) {
        if (ast_result->IdentifierNode->name == "перервати") {
          const auto break_node = new ast::BreakNode();
          break_node->start_line = ast_result->IdentifierNode->start_line;
          break_node->start_column = ast_result->IdentifierNode->start_column;
          break_node->end_line = ast_result->IdentifierNode->end_line;
          break_node->end_column = ast_result->IdentifierNode->end_column;
          body.push_back(ast::make_ast_some(break_node));
        } else if (ast_result->IdentifierNode->name == "продовжити") {
          const auto continue_node = new ast::ContinueNode();
          continue_node->start_line = ast_result->IdentifierNode->start_line;
          continue_node->start_column =
              ast_result->IdentifierNode->start_column;
          continue_node->end_line = ast_result->IdentifierNode->end_line;
          continue_node->end_column = ast_result->IdentifierNode->end_column;
          body.push_back(ast::make_ast_some(continue_node));
        } else {
          body.push_back(ast_result);
        }
      } else {
        body.push_back(ast_result);
      }
    }
    return body;
  }
} // namespace mavka::parser