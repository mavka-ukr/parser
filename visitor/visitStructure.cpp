#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitStructure(
      MavkaParser::StructureContext* context) {
    const std::string name = context->s_name->getText();
    std::vector<ast::ASTValue*> generics;
    if (context->s_generics) {
      generics = std::any_cast<std::vector<ast::ASTValue*>>(
          visitGenerics(context->s_generics));
    }
    const auto structure_ast_value =
        ast::StructureNode::ast_value(new ast::StructureNode());
    fill_ast_value(structure_ast_value, context);
    structure_ast_value->data.StructureNode->name = name;
    structure_ast_value->data.StructureNode->generics = generics;
    if (context->s_parent) {
      const auto parent =
          any_to_ast_value(visitSuper_identifiers_chain(context->s_parent));
      structure_ast_value->data.StructureNode->parent = parent;
    }
    if (context->s_elements) {
      const auto elements = std::any_cast<std::vector<ast::ASTValue*>>(
          visitStructure_elements(context->s_elements));
      for (const auto element : elements) {
        if (element->kind == ast::KindParamNode) {
          structure_ast_value->data.StructureNode->params.push_back(element);
        }
      }
    }
    return structure_ast_value;
  }
} // namespace mavka::parser