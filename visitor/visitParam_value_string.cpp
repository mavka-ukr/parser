#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_string(
      MavkaParser::Param_value_stringContext* context) {
    if (context->string()->STRING()) {
      const auto string_node = new ast::StringNode();
      fill_ast_value(string_node, context);
      string_node->value = context->string()->STRING()->getText();
      if (string_node->value.starts_with(R"(""")")) {
        string_node->value =
            string_node->value.substr(3, string_node->value.length() - 6);
      } else {
        string_node->value =
            string_node->value.substr(1, string_node->value.length() - 2);
      }
      return (ast::make_ast_some(string_node));
    } else if (context->string()->STRING_MULTILINE()) {
      const auto string_node = new ast::StringNode();
      fill_ast_value(string_node, context);
      string_node->value = context->string()->STRING_MULTILINE()->getText();
      if (string_node->value.starts_with(R"(""")")) {
        string_node->value =
            string_node->value.substr(3, string_node->value.length() - 6);
      } else {
        string_node->value =
            string_node->value.substr(1, string_node->value.length() - 2);
      }
      return (ast::make_ast_some(string_node));
    }
    return new ast::ASTSome();
  }
} // namespace mavka::parser