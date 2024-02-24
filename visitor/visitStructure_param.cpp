#include "../parser.h"

namespace mavka::parser {
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