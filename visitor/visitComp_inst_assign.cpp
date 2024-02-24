#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitComp_inst_assign(
      MavkaParser::Comp_inst_assignContext* context) {
    const auto comp_inst_assign_ast_value =
        ast::CompInstAssignNode::ast_value(new ast::CompInstAssignNode());
    fill_ast_value(comp_inst_assign_ast_value, context);
    comp_inst_assign_ast_value->data.CompInstAssignNode->name =
        context->cia_name->getText();
    comp_inst_assign_ast_value->data.CompInstAssignNode->value =
        context->cia_value->getText().substr(
            1, context->cia_value->getText().length() - 2);
    return comp_inst_assign_ast_value;
  }
} // namespace mavka::parser