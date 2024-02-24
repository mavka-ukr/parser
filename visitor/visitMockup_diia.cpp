#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_diia(
      MavkaParser::Mockup_diiaContext* context) {
    const auto mockup_diia_node = new ast::MockupDiiaNode();
    fill_ast_value(mockup_diia_node, context);
    mockup_diia_node->ee = context->md_static != nullptr;
    mockup_diia_node->async = context->md_async != nullptr;
    mockup_diia_node->name = context->md_name->getText();
    if (context->md_structure) {
      mockup_diia_node->structure = context->md_structure->getText();
    }
    if (context->md_generics) {
      mockup_diia_node->generics = std::any_cast<std::vector<ast::Generic*>>(
          visitGenerics(context->md_generics));
    }
    if (context->md_params) {
      mockup_diia_node->params = std::any_cast<std::vector<ast::Param*>>(
          visitParams(context->md_params));
    }
    if (context->md_type) {
      mockup_diia_node->return_types =
          std::any_cast<std::vector<ast::TypeNode*>>(
              visitType_value(context->md_type));
    }
    return ast::make_ast_some(mockup_diia_node);
  }
} // namespace mavka::parser