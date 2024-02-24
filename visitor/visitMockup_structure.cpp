#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_structure(
      MavkaParser::Mockup_structureContext* context) {
    const auto mockup_structure_node = new ast::MockupStructureNode();
    fill_ast_value(mockup_structure_node, context);
    mockup_structure_node->name = context->ms_name->getText();
    if (context->ms_generics) {
      mockup_structure_node->generics =
          std::any_cast<std::vector<ast::Generic*>>(
              visitGenerics(context->ms_generics));
    }
    if (context->ms_elements) {
      const auto elements = std::any_cast<std::vector<ast::ASTValue*>>(
          visitMockup_structure_body(context->ms_elements));
      for (const auto element : elements) {
        if (element->ParamNode) {
          mockup_structure_node->params.push_back(element->ParamNode);
        }
        if (element->MethodDeclarationNode) {
          mockup_structure_node->methods.push_back(
              element->MethodDeclarationNode);
        }
      }
    }
    return (ast::make_ast_some(mockup_structure_node));
  }
} // namespace mavka::parser