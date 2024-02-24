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
      const auto param_ast_value =
          ast::ParamNode::ast_value(new ast::ParamNode());
      fill_ast_value(param_ast_value, context);
      param_ast_value->data.ParamNode->name =
          context->p_variadic_name->getText();
      if (context->p_variadic_type) {
        param_ast_value->data.ParamNode->type = std::any_cast<ast::ASTValue*>(
            visitType_value(context->p_variadic_type));
      }
      param_ast_value->data.ParamNode->variadic = true;
      params.push_back(param_ast_value);
    }
    return params;
  }

  std::any MavkaASTVisitor::visitParam(MavkaParser::ParamContext* context) {
    const auto param_ast_value =
        ast::ParamNode::ast_value(new ast::ParamNode());
    fill_ast_value(param_ast_value, context);
    param_ast_value->data.ParamNode->name = context->p_name->getText();
    if (context->p_type) {
      param_ast_value->data.ParamNode->type =
          std::any_cast<ast::ASTValue*>(visitType_value(context->p_type));
    }
    if (context->p_value) {
      param_ast_value->data.ParamNode->value =
          any_to_ast_value(visitParam_value(context->p_value));
    }
    return param_ast_value;
  }

  std::any MavkaASTVisitor::visitParam_value(
      MavkaParser::Param_valueContext* context) {
    if (tools::instance_of<MavkaParser::Param_value_stringContext>(context)) {
      return visitParam_value_string(
          dynamic_cast<MavkaParser::Param_value_stringContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Param_value_numberContext>(context)) {
      return visitParam_value_number(
          dynamic_cast<MavkaParser::Param_value_numberContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Param_value_identifierContext>(
            context)) {
      return visitParam_value_identifier(
          dynamic_cast<MavkaParser::Param_value_identifierContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Param_value_empty_dictionaryContext>(
            context)) {
      return visitParam_value_empty_dictionary(
          dynamic_cast<MavkaParser::Param_value_empty_dictionaryContext*>(
              context));
    }
    if (tools::instance_of<MavkaParser::Param_value_empty_listContext>(
            context)) {
      return visitParam_value_empty_list(
          dynamic_cast<MavkaParser::Param_value_empty_listContext*>(context));
    }
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitParam_value_empty_dictionary(
      MavkaParser::Param_value_empty_dictionaryContext* context) {
    const auto dictionary_ast_value =
        ast::DictionaryNode::ast_value(new ast::DictionaryNode());
    fill_ast_value(dictionary_ast_value, context);
    return dictionary_ast_value;
  }

  std::any MavkaASTVisitor::visitParam_value_empty_list(
      MavkaParser::Param_value_empty_listContext* context) {
    const auto list_ast_value = ast::ListNode::ast_value(new ast::ListNode());
    fill_ast_value(list_ast_value, context);
    return list_ast_value;
  }

  std::any MavkaASTVisitor::visitParam_value_identifier(
      MavkaParser::Param_value_identifierContext* context) {
    const auto identifier_ast_value =
        ast::IdentifierNode::ast_value(new ast::IdentifierNode());
    fill_ast_value(identifier_ast_value, context);
    identifier_ast_value->data.IdentifierNode->name =
        context->identifier()->getText();
    return identifier_ast_value;
  }

  std::any MavkaASTVisitor::visitParam_value_number(
      MavkaParser::Param_value_numberContext* context) {
    const auto number_ast_value =
        ast::NumberNode::ast_value(new ast::NumberNode());
    fill_ast_value(number_ast_value, context);
    number_ast_value->data.NumberNode->value =
        context->number_token()->getText();
    return number_ast_value;
  }

  std::any MavkaASTVisitor::visitParam_value_string(
      MavkaParser::Param_value_stringContext* context) {
    if (context->string()->STRING()) {
      const auto string_ast_value =
          ast::StringNode::ast_value(new ast::StringNode());
      fill_ast_value(string_ast_value, context);
      string_ast_value->data.StringNode->value =
          context->string()->STRING()->getText();
      if (string_ast_value->data.StringNode->value.starts_with(R"(""")")) {
        string_ast_value->data.StringNode->value =
            string_ast_value->data.StringNode->value.substr(
                3, string_ast_value->data.StringNode->value.length() - 6);
      } else {
        string_ast_value->data.StringNode->value =
            string_ast_value->data.StringNode->value.substr(
                1, string_ast_value->data.StringNode->value.length() - 2);
      }
      return string_ast_value;
    } else if (context->string()->STRING_MULTILINE()) {
      const auto string_ast_value =
          ast::StringNode::ast_value(new ast::StringNode());
      fill_ast_value(string_ast_value, context);
      string_ast_value->data.StringNode->value =
          context->string()->STRING_MULTILINE()->getText();
      if (string_ast_value->data.StringNode->value.starts_with(R"(""")")) {
        string_ast_value->data.StringNode->value =
            string_ast_value->data.StringNode->value.substr(
                3, string_ast_value->data.StringNode->value.length() - 6);
      } else {
        string_ast_value->data.StringNode->value =
            string_ast_value->data.StringNode->value.substr(
                1, string_ast_value->data.StringNode->value.length() - 2);
      }
      return string_ast_value;
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser