#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_module(
      MavkaParser::Mockup_moduleContext* context) {
    const auto mockup_module_node = new ast::MockupModuleNode();
    fill_ast_value(mockup_module_node, context);
    mockup_module_node->name = context->mm_name->getText();
    if (context->mm_elements) {
      mockup_module_node->elements = std::any_cast<std::vector<ast::ASTValue*>>(
          visitMockup_module_body(context->mm_elements));
    }
    return (ast::make_ast_some(mockup_module_node));
  }
} // namespace mavka::parser