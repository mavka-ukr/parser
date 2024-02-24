#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitDiia(MavkaParser::DiiaContext* context) {
    const auto diia_ast_value = ast::DiiaNode::ast_value(new ast::DiiaNode());
    fill_ast_value(diia_ast_value, context);
    diia_ast_value->data.DiiaNode->ee = context->d_static != nullptr;
    diia_ast_value->data.DiiaNode->async = context->d_async != nullptr;
    diia_ast_value->data.DiiaNode->structure =
        context->d_structure ? context->d_structure->getText() : "";
    diia_ast_value->data.DiiaNode->name =
        context->d_name ? context->d_name->getText() : "";
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

  std::any MavkaASTVisitor::visitAnonymous_diia(
      MavkaParser::Anonymous_diiaContext* context) {
    const auto diia_ast_value = any_to_ast_value(visitDiia(context->diia()));
    diia_ast_value->data.DiiaNode->anonymous = true;
    return diia_ast_value;
  }

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
      return_ast_value->start_line = body_ast_value->start_line;
      return_ast_value->start_column = body_ast_value->start_column;
      return_ast_value->end_line = body_ast_value->end_line;
      return_ast_value->end_column = body_ast_value->end_column;
      return_ast_value->data.ReturnNode->value = body_ast_value;
      diia_ast_value->data.DiiaNode->body = {return_ast_value};
    }
    diia_ast_value->data.DiiaNode->anonymous = true;
    return diia_ast_value;
  }

  std::any MavkaASTVisitor::_visitDiiaBody(MavkaParser::BodyContext* context) {
    auto body = std::any_cast<std::vector<ast::ASTValue*>>(visitBody(context));
    if (!body.empty()) {
      const auto last_ast_value = body.back();
      if (ast::is_ast_value_returnable(last_ast_value)) {
        const auto return_ast_value =
            ast::ReturnNode::ast_value(new ast::ReturnNode());
        return_ast_value->start_line = last_ast_value->start_line;
        return_ast_value->start_column = last_ast_value->start_column;
        return_ast_value->end_line = last_ast_value->end_line;
        return_ast_value->end_column = last_ast_value->end_column;
        return_ast_value->data.ReturnNode->value = last_ast_value;
        body.pop_back();
        body.push_back(return_ast_value);
      }
    }
    return body;
  }
} // namespace mavka::parser