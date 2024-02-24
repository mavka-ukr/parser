#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParams(MavkaParser::ParamsContext* context) {
    std::vector<ast::Param*> params;
    for (int i = 0; i < context->param().size(); ++i) {
      const auto param = context->param()[i];
      const auto ast_result = any_to_ast_value(visitParam(param));
      params.push_back(ast_result->ParamNode);
    }
    if (context->p_variadic) {
      const auto param_node = new ast::Param();
      fill_ast_value(param_node, context);
      param_node->name = context->p_variadic_name->getText();
      if (context->p_variadic_type) {
        param_node->types = std::any_cast<std::vector<ast::TypeNode*>>(
            visitType_value(context->p_variadic_type));
      }
      param_node->variadic = true;
      params.push_back(param_node);
    }
    return params;
  }
} // namespace mavka::parser