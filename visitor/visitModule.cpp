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
} // namespace mavka::parser