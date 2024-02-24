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

  std::any MavkaASTVisitor::visitBody_element(
      MavkaParser::Body_elementContext* context) {
    if (context->if_()) {
      return visitIf(context->if_());
    }
    if (context->each()) {
      return visitEach(context->each());
    }
    if (context->while_()) {
      return visitWhile(context->while_());
    }
    if (context->try_()) {
      return visitTry(context->try_());
    }
    if (context->expr()) {
      return _visitContext(context->expr());
    }
    if (context->throw_()) {
      return visitThrow(context->throw_());
    }
    if (context->wait_assign()) {
      return visitWait_assign(context->wait_assign());
    }
    if (context->assign()) {
      return visitAssign(context->assign());
    }
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitBody_element_or_return(
      MavkaParser::Body_element_or_returnContext* context) {
    if (context->body_element()) {
      return visitBody_element(context->body_element());
    }
    if (context->return_body_line()) {
      return visitReturn_body_line(context->return_body_line());
    }
    return new ast::ASTValue();
  }

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