#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitWait(MavkaParser::WaitContext* context) {
    const auto wait_ast_value = ast::WaitNode::ast_value(new ast::WaitNode());
    fill_ast_value(wait_ast_value, context);
    wait_ast_value->data.WaitNode->value =
        any_to_ast_value(_visitContext(context->w_value));
    return wait_ast_value;
  }

  std::any MavkaASTVisitor::visitWait_assign(
      MavkaParser::Wait_assignContext* context) {
    const auto assign_ast_value =
        any_to_ast_value(visitAssign(context->wa_assign));
    if (assign_ast_value->kind == ast::KindAssignNode) {
      const auto wait_ast_value = ast::WaitNode::ast_value(new ast::WaitNode());
      wait_ast_value->start_line = assign_ast_value->start_line;
      wait_ast_value->start_column = assign_ast_value->start_column;
      wait_ast_value->end_line = assign_ast_value->end_line;
      wait_ast_value->end_column = assign_ast_value->end_column;
      wait_ast_value->data.WaitNode->value =
          assign_ast_value->data.AssignNode->value;
      assign_ast_value->data.AssignNode->value = wait_ast_value;
      return assign_ast_value;
    } else {
      throw std::runtime_error("Expected assign node");
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser