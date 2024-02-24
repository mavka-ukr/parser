#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitStructure(
      MavkaParser::StructureContext* context) {
    const std::string name = context->s_name->getText();
    std::vector<ast::Generic*> generics;
    if (context->s_generics) {
      generics = std::any_cast<std::vector<ast::Generic*>>(
          visitGenerics(context->s_generics));
    }
    const auto structure_node = new ast::StructureNode();
    fill_ast_value(structure_node, context);
    structure_node->name = name;
    structure_node->generics = generics;
    if (context->s_parent) {
      const auto parent =
          any_to_ast_value(visitSuper_identifiers_chain(context->s_parent));
      structure_node->parent = parent;
    }
    if (context->s_elements) {
      const auto elements = std::any_cast<std::vector<ast::ASTValue*>>(
          visitStructure_elements(context->s_elements));
      for (const auto element : elements) {
        if (element->ParamNode) {
          structure_node->params.push_back(element->ParamNode);
        }
      }
    }
    return (ast::make_ast_some(structure_node));
  }
} // namespace mavka::parser