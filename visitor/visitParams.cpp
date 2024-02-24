#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParams(MavkaParser::ParamsContext* context) {
    std::vector<ast::ASTValue*> params;
    for (int i = 0; i < context->param().size(); ++i) {
      const auto param =
          any_cast<ast::ASTValue*>(visitParam(context->param()[i]));
      params.push_back(param);
    }
    if (context->p_variadic) {
      const auto param = new ast::ParamNode();
      param->name = context->p_variadic_name->getText();
      if (context->p_variadic_type) {
        param->type = std::any_cast<ast::ASTValue*>(
            visitType_value(context->p_variadic_type));
      }
      param->variadic = true;
      params.push_back(ast::ParamNode::ast_value(param));
    }
    return params;
  }
} // namespace mavka::parser