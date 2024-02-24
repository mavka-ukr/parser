#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitModule(MavkaParser::ModuleContext* context) {
    const auto ast_value = new ast::ASTValue(ast::KindModuleNode);
    fill_ast_value(ast_value, context);
    const auto module_node = new ast::ModuleNode();
    module_node->name = context->m_name->getText();
    if (context->module_body()) {
      std::any module_body = visitModule_body(context->module_body());
      module_node->body =
          std::any_cast<std::vector<ast::ASTValue*>>(module_body);
    }
    ast_value->data.ModuleNode = module_node;
    return ast_value;
  }

  std::any MavkaASTVisitor::visitModule_body(
      MavkaParser::Module_bodyContext* context) {
    std::vector<ast::ASTValue*> body;
    for (const auto module_element : context->module_body_element()) {
      const auto ast_result =
          any_to_ast_value(visitModule_body_element(module_element));
      body.push_back(ast_result);
    }
    processASTBody(body);
    return body;
  }

  std::any MavkaASTVisitor::visitModule_body_element(
      MavkaParser::Module_body_elementContext* context) {
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
    return new ast::ASTValue();
  }
} // namespace mavka::parser