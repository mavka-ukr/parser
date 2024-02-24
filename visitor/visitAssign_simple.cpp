#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAssign_simple(
      MavkaParser::Assign_simpleContext* context) {
    const auto op_text = context->assign_symbol()->getText();
    if (op_text != "=" && op_text != "це") {
      // todo: handle this
    }
    const auto assign_ast_value =
        ast::AssignNode::ast_value(new ast::AssignNode());
    fill_ast_value(assign_ast_value, context);
    assign_ast_value->data.AssignNode->name =
        context->as_identifier->ID()->getText();
    if (context->as_type) {
      assign_ast_value->data.AssignNode->types =
          std::any_cast<ast::ASTValue*>(visitType_value(context->as_type));
    }
    assign_ast_value->data.AssignNode->value =
        any_to_ast_value(_visitContext(context->as_value));
    return assign_ast_value;
  }
} // namespace mavka::parser