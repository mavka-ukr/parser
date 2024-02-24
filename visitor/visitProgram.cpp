#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitProgram(MavkaParser::ProgramContext* context) {
    std::vector<ast::ASTValue*> body;
    for (const auto program_element : context->program_element()) {
      const auto ast_some =
          any_to_ast_value(visitProgram_element(program_element));
      body.push_back(ast_some);
    }
    processASTBody(body);
    const auto module_node = new ast::ModuleNode();
    module_node->body = body;
    return make_ast_value(ast::KindModuleNode, module_node);
  }

  std::any MavkaASTVisitor::visitProgram_element(
      MavkaParser::Program_elementContext* context) {
    if (context->module()) {
      return visitModule(context->module());
    }
    if (context->structure()) {
      return visitStructure(context->structure());
    }
    if (context->mockup()) {
      return visitMockup(context->mockup());
    }
    if (context->diia()) {
      return visitDiia(context->diia());
    }
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
    if (context->take()) {
      return visitTake(context->take());
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
    if (context->give()) {
      return visitGive(context->give());
    }
    if (context->comp_inst_block_program()) {
      return visitComp_inst_block_program(context->comp_inst_block_program());
    }
    if (context->comp_inst_assign()) {
      return visitComp_inst_assign(context->comp_inst_assign());
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser