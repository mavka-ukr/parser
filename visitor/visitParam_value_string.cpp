#include "../parser.h"

namespace mavka::parser {
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