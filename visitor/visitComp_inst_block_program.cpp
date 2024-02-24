#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitComp_inst_block_program(
      MavkaParser::Comp_inst_block_programContext* context) {
    const auto comp_inst_block_program_ast_value =
        ast::CompInstBlockProgramNode::ast_value(
            new ast::CompInstBlockProgramNode());
    fill_ast_value(comp_inst_block_program_ast_value, context);
    comp_inst_block_program_ast_value->data.CompInstBlockProgramNode->name =
        context->cibp_name->getText();
    comp_inst_block_program_ast_value->data.CompInstBlockProgramNode->value =
        context->cibp_value->getText().substr(
            1, context->cibp_value->getText().length() - 2);
    if (context->cibp_program) {
      comp_inst_block_program_ast_value->data.CompInstBlockProgramNode->body =
          any_to_ast_value(visitProgram(context->cibp_program))
              ->data.ModuleNode->body;
    }
    return comp_inst_block_program_ast_value;
  }
} // namespace mavka::parser