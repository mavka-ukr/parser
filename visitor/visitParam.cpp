#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam(MavkaParser::ParamContext* context) {
    const auto param = new ast::ParamNode();
    param->name = context->p_name->getText();
    if (context->p_type) {
      param->type =
          std::any_cast<ast::ASTValue*>(visitType_value(context->p_type));
    }
    if (context->p_value) {
      param->value = any_to_ast_value(visitParam_value(context->p_value));
    }
    return ast::ParamNode::ast_value(param);
  }
} // namespace mavka::parser