#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitDiia(MavkaParser::DiiaContext* context) {
    const auto diia_node = new ast::DiiaNode();
    fill_ast_value(diia_node, context);
    diia_node->ee = context->d_static != nullptr;
    diia_node->async = context->d_async != nullptr;
    diia_node->structure =
        context->d_structure ? context->d_structure->getText() : "";
    diia_node->name = context->d_name->getText();
    if (context->d_generics) {
      diia_node->generics = std::any_cast<std::vector<ast::Generic*>>(
          visitGenerics(context->d_generics));
    }
    if (context->d_params) {
      diia_node->params = std::any_cast<std::vector<ast::Param*>>(
          visitParams(context->d_params));
    }
    if (context->d_type) {
      diia_node->return_types = std::any_cast<std::vector<ast::TypeNode*>>(
          visitType_value(context->d_type));
    }
    if (context->d_body) {
      diia_node->body = std::any_cast<std::vector<ast::ASTValue*>>(
          _visitDiiaBody(context->d_body));
    }
    return (ast::make_ast_some(diia_node));
  }
} // namespace mavka::parser