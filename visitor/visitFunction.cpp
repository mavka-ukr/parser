#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFunction(
      MavkaParser::FunctionContext* context) {
    const auto diia_ast_value = ast::DiiaNode::ast_value(new ast::DiiaNode());
    fill_ast_value(diia_ast_value, context);
    diia_ast_value->data.DiiaNode->ee = false;
    diia_ast_value->data.DiiaNode->async = context->f_async != nullptr;
    diia_ast_value->data.DiiaNode->structure = "";
    diia_ast_value->data.DiiaNode->name = "";
    if (context->f_params) {
      diia_ast_value->data.DiiaNode->params =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitParams(context->f_params));
    }
    if (context->f_type) {
      diia_ast_value->data.DiiaNode->return_types =
          any_to_ast_value(visitType_value(context->f_type));
    }
    if (context->f_body) {
      const auto body_ast_value =
          any_to_ast_value(_visitContext(context->f_body));
      const auto return_ast_value =
          ast::ReturnNode::ast_value(new ast::ReturnNode());
      return_ast_value->data.ReturnNode->value = body_ast_value;
      diia_ast_value->data.DiiaNode->body = {return_ast_value};
    }
    return diia_ast_value;
  }
} // namespace mavka::parser