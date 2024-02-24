#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitWait_assign(
      MavkaParser::Wait_assignContext* context) {
    const auto assign_node = any_to_ast_value(visitAssign(context->wa_assign));
    if (assign_node->AssignNode) {
      const auto assign_simple_node = assign_node->AssignNode;
      const auto new_assign_simple_node = new ast::AssignNode();
      new_assign_simple_node->start_line = assign_simple_node->start_line;
      new_assign_simple_node->start_column = assign_simple_node->start_column;
      new_assign_simple_node->end_line = assign_simple_node->end_line;
      new_assign_simple_node->end_column = assign_simple_node->end_column;
      const auto wait_node = new ast::WaitNode();
      wait_node->start_line = assign_simple_node->start_line;
      wait_node->start_column = assign_simple_node->start_column;
      wait_node->end_line = assign_simple_node->end_line;
      wait_node->end_column = assign_simple_node->end_column;
      wait_node->value = assign_simple_node->value;
      new_assign_simple_node->op = assign_simple_node->op;
      new_assign_simple_node->name = assign_simple_node->name;
      new_assign_simple_node->value = ast::make_ast_some(wait_node);
      return (ast::make_ast_some(new_assign_simple_node));
    }
    if (assign_node->AssignByIdentifierNode) {
      const auto assign_by_identifier_node =
          assign_node->AssignByIdentifierNode;
      const auto new_assign_by_identifier_node =
          new ast::AssignByIdentifierNode();
      new_assign_by_identifier_node->start_line =
          assign_by_identifier_node->start_line;
      new_assign_by_identifier_node->start_column =
          assign_by_identifier_node->start_column;
      new_assign_by_identifier_node->end_line =
          assign_by_identifier_node->end_line;
      new_assign_by_identifier_node->end_column =
          assign_by_identifier_node->end_column;
      const auto wait_node = new ast::WaitNode();
      wait_node->start_line = assign_by_identifier_node->start_line;
      wait_node->start_column = assign_by_identifier_node->start_column;
      wait_node->end_line = assign_by_identifier_node->end_line;
      wait_node->end_column = assign_by_identifier_node->end_column;
      wait_node->value = assign_by_identifier_node->value;
      new_assign_by_identifier_node->op = assign_by_identifier_node->op;
      new_assign_by_identifier_node->left = assign_by_identifier_node->left;
      new_assign_by_identifier_node->identifier =
          assign_by_identifier_node->identifier;
      new_assign_by_identifier_node->value = ast::make_ast_some(wait_node);
      return (ast::make_ast_some(new_assign_by_identifier_node));
    }
    if (assign_node->AssignByElementNode) {
      const auto assign_by_element_node = assign_node->AssignByElementNode;
      const auto new_assign_by_element_node = new ast::AssignByElementNode();
      new_assign_by_element_node->start_line =
          assign_by_element_node->start_line;
      new_assign_by_element_node->start_column =
          assign_by_element_node->start_column;
      new_assign_by_element_node->end_line = assign_by_element_node->end_line;
      new_assign_by_element_node->end_column =
          assign_by_element_node->end_column;
      const auto wait_node = new ast::WaitNode();
      wait_node->start_line = assign_by_element_node->start_line;
      wait_node->start_column = assign_by_element_node->start_column;
      wait_node->end_line = assign_by_element_node->end_line;
      wait_node->end_column = assign_by_element_node->end_column;
      wait_node->value = assign_by_element_node->value;
      new_assign_by_element_node->op = assign_by_element_node->op;
      new_assign_by_element_node->left = assign_by_element_node->left;
      new_assign_by_element_node->element = assign_by_element_node->element;
      new_assign_by_element_node->value = ast::make_ast_some(wait_node);
      return (ast::make_ast_some(new_assign_by_element_node));
    }
    return new ast::ASTSome();
  }
} // namespace mavka::parser