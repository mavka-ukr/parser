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

  std::any MavkaASTVisitor::visitStructure_element(
      MavkaParser::Structure_elementContext* context) {
    if (context->structure_param()) {
      return visitStructure_param(context->structure_param());
    }
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitStructure_elements(
      MavkaParser::Structure_elementsContext* context) {
    std::vector<ast::ASTValue*> elements;
    for (const auto structure_element : context->structure_element()) {
      const auto ast_result =
          any_to_ast_value(visitStructure_element(structure_element));
      elements.push_back(ast_result);
    }
    return elements;
  }

  std::any MavkaASTVisitor::visitStructure_param(
      MavkaParser::Structure_paramContext* context) {
    const std::string name = context->sp_name->getText();
    ast::ASTValue* type = nullptr;
    if (context->sp_type) {
      type = any_to_ast_value(visitType_value(context->sp_type));
    }
    ast::ASTValue* value = nullptr;
    if (context->sp_value) {
      value = any_to_ast_value(visitParam_value(context->sp_value));
    }
    const auto param_ast_value =
        ast::ParamNode::ast_value(new ast::ParamNode());
    fill_ast_value(param_ast_value, context);
    param_ast_value->data.ParamNode->ee = context->sp_static != nullptr;
    param_ast_value->data.ParamNode->name = name;
    param_ast_value->data.ParamNode->type = type;
    param_ast_value->data.ParamNode->value = value;
    return param_ast_value;
  }
} // namespace mavka::parser