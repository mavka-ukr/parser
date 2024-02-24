#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitStructure_param(
      MavkaParser::Structure_paramContext* context) {
    const std::string name = context->sp_name->getText();
    std::vector<ast::TypeNode*> types;
    if (context->sp_type) {
      types = std::any_cast<std::vector<ast::TypeNode*>>(
          visitType_value(context->sp_type));
    }
    ast::ASTValue* value = nullptr;
    if (context->sp_value) {
      value = any_to_ast_value(visitParam_value(context->sp_value));
    }
    const auto structure_param_node = new ast::Param();
    fill_ast_value(structure_param_node, context);
    structure_param_node->ee = context->sp_static != nullptr;
    structure_param_node->name = name;
    structure_param_node->types = types;
    structure_param_node->value = value;
    return (ast::make_ast_some(structure_param_node));
  }
} // namespace mavka::parser