#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam(MavkaParser::ParamContext* context) {
    const auto param_node = new ast::Param();
    param_node->name = context->p_name->getText();
    if (context->p_type) {
      param_node->types = std::any_cast<std::vector<ast::TypeNode*>>(
          visitType_value(context->p_type));
    }
    if (context->p_value) {
      param_node->value = any_to_ast_value(visitParam_value(context->p_value));
    }
    return (ast::make_ast_some(param_node));
  }
} // namespace mavka::parser