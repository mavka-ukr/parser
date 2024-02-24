#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitDiia(MavkaParser::DiiaContext* context) {
    const auto diia_ast_value = ast::DiiaNode::ast_value(new ast::DiiaNode());
    fill_ast_value(diia_ast_value, context);
    diia_ast_value->data.DiiaNode->ee = context->d_static != nullptr;
    diia_ast_value->data.DiiaNode->async = context->d_async != nullptr;
    diia_ast_value->data.DiiaNode->structure =
        context->d_structure ? context->d_structure->getText() : "";
    diia_ast_value->data.DiiaNode->name = context->d_name->getText();
    if (context->d_generics) {
      diia_ast_value->data.DiiaNode->generics =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitGenerics(context->d_generics));
    }
    if (context->d_params) {
      diia_ast_value->data.DiiaNode->params =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitParams(context->d_params));
    }
    if (context->d_type) {
      diia_ast_value->data.DiiaNode->return_types =
          any_to_ast_value(visitType_value(context->d_type));
    }
    if (context->d_body) {
      diia_ast_value->data.DiiaNode->body =
          std::any_cast<std::vector<ast::ASTValue*>>(
              _visitDiiaBody(context->d_body));
    }
    return diia_ast_value;
  }
} // namespace mavka::parser