#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitDictionary_args(
      MavkaParser::Dictionary_argsContext* context) {
    std::vector<ast::ASTValue*> elements;
    for (const auto dictionary_arg : context->dictionary_arg()) {
      const auto value =
          any_to_ast_value(_visitContext(dictionary_arg->da_value));
      if (dictionary_arg->da_name_id) {
        const auto dictionary_element = new ast::DictionaryElementNode();
        const auto string_ast_value =
            ast::StringNode::ast_value(new ast::StringNode());
        fill_ast_value(string_ast_value, dictionary_arg->da_name_id);
        string_ast_value->data.StringNode->value =
            dictionary_arg->da_name_id->getText();
        dictionary_element->key = string_ast_value;
        dictionary_element->value = value;
        elements.push_back(
            ast::DictionaryElementNode::ast_value(dictionary_element));
      } else if (dictionary_arg->da_name_string) {
        const auto name_string = dictionary_arg->da_name_string->getText();
        if (name_string.starts_with(R"(""")")) {
          const auto dictionary_element = new ast::DictionaryElementNode();
          const auto string_ast_value =
              ast::StringNode::ast_value(new ast::StringNode());
          fill_ast_value(string_ast_value, dictionary_arg);
          string_ast_value->data.StringNode->value =
              name_string.substr(3, name_string.length() - 6);
          dictionary_element->key = string_ast_value;
          dictionary_element->value = value;
          elements.push_back(
              ast::DictionaryElementNode::ast_value(dictionary_element));
        } else {
          const auto dictionary_element = new ast::DictionaryElementNode();
          const auto string_ast_value =
              ast::StringNode::ast_value(new ast::StringNode());
          fill_ast_value(string_ast_value, dictionary_arg);
          string_ast_value->data.StringNode->value =
              name_string.substr(1, name_string.length() - 2);
          dictionary_element->key = string_ast_value;
          dictionary_element->value = value;
          elements.push_back(
              ast::DictionaryElementNode::ast_value(dictionary_element));
        }
      }
    }
    return elements;
  }
} // namespace mavka::parser