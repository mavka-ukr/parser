#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitDictionary_args(
      MavkaParser::Dictionary_argsContext* context) {
    std::vector<ast::DictionaryElement*> elements;
    for (const auto dictionary_arg : context->dictionary_arg()) {
      const auto value =
          any_to_ast_value(_visitContext(dictionary_arg->da_value));
      if (dictionary_arg->da_name_id) {
        const auto dictionary_element_node = new ast::DictionaryElement();
        fill_ast_value(dictionary_element_node, dictionary_arg);
        const auto string_node = new ast::StringNode();
        fill_ast_value(string_node, dictionary_arg->da_name_id);
        string_node->value = dictionary_arg->da_name_id->getText();
        dictionary_element_node->key = ast::make_ast_some(string_node);
        dictionary_element_node->value = value;
        elements.push_back(dictionary_element_node);
      } else if (dictionary_arg->da_name_string) {
        const auto name_string = dictionary_arg->da_name_string->getText();
        if (name_string.starts_with(R"(""")")) {
          const auto dictionary_element_node = new ast::DictionaryElement();
          fill_ast_value(dictionary_element_node, dictionary_arg);
          const auto string_node = new ast::StringNode();
          fill_ast_value(string_node, dictionary_arg);
          string_node->value = name_string.substr(3, name_string.length() - 6);
          dictionary_element_node->key = ast::make_ast_some(string_node);
          dictionary_element_node->value = value;
          elements.push_back(dictionary_element_node);
        } else {
          const auto dictionary_element_node = new ast::DictionaryElement();
          fill_ast_value(dictionary_element_node, dictionary_arg);
          const auto string_node = new ast::StringNode();
          fill_ast_value(string_node, dictionary_arg);
          string_node->value = name_string.substr(1, name_string.length() - 2);
          dictionary_element_node->key = ast::make_ast_some(string_node);
          dictionary_element_node->value = value;
          elements.push_back(dictionary_element_node);
        }
      }
    }
    return elements;
  }
} // namespace mavka::parser