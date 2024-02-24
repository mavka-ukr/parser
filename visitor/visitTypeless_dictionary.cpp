#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTypeless_dictionary(
      MavkaParser::Typeless_dictionaryContext* context) {
    const auto dictionary_ast_value =
        ast::DictionaryNode::ast_value(new ast::DictionaryNode());
    fill_ast_value(dictionary_ast_value, context);
    if (context->d_args) {
      dictionary_ast_value->data.DictionaryNode->elements =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitDictionary_args(context->d_args));
    }
    return dictionary_ast_value;
  }

  std::any MavkaASTVisitor::visitDictionary_args(
      MavkaParser::Dictionary_argsContext* context) {
    std::vector<ast::ASTValue*> elements;
    for (const auto dictionary_arg_context : context->dictionary_arg()) {
      const auto value =
          any_to_ast_value(_visitContext(dictionary_arg_context->da_value));
      if (dictionary_arg_context->da_name_id) {
        const auto dictionary_element_ast_value =
            ast::DictionaryElementNode::ast_value(
                new ast::DictionaryElementNode());
        fill_ast_value(dictionary_element_ast_value, dictionary_arg_context);
        const auto string_ast_value =
            ast::StringNode::ast_value(new ast::StringNode());
        fill_ast_value(string_ast_value, dictionary_arg_context->da_name_id);
        string_ast_value->data.StringNode->value =
            dictionary_arg_context->da_name_id->getText();
        dictionary_element_ast_value->data.DictionaryElementNode->key =
            string_ast_value;
        dictionary_element_ast_value->data.DictionaryElementNode->value = value;
        elements.push_back(dictionary_element_ast_value);
      } else if (dictionary_arg_context->da_name_string) {
        const auto name_string =
            dictionary_arg_context->da_name_string->getText();
        if (name_string.starts_with(R"(""")")) {
          const auto dictionary_element_ast_value =
              ast::DictionaryElementNode::ast_value(
                  new ast::DictionaryElementNode());
          fill_ast_value(dictionary_element_ast_value, dictionary_arg_context);
          const auto string_ast_value =
              ast::StringNode::ast_value(new ast::StringNode());
          fill_ast_value(string_ast_value, dictionary_arg_context);
          string_ast_value->data.StringNode->value =
              name_string.substr(3, name_string.length() - 6);
          dictionary_element_ast_value->data.DictionaryElementNode->key =
              string_ast_value;
          dictionary_element_ast_value->data.DictionaryElementNode->value =
              value;
          elements.push_back(dictionary_element_ast_value);
        } else {
          const auto dictionary_element_ast_value =
              ast::DictionaryElementNode::ast_value(
                  new ast::DictionaryElementNode());
          fill_ast_value(dictionary_element_ast_value, dictionary_arg_context);
          const auto string_ast_value =
              ast::StringNode::ast_value(new ast::StringNode());
          fill_ast_value(string_ast_value, dictionary_arg_context);
          string_ast_value->data.StringNode->value =
              name_string.substr(1, name_string.length() - 2);
          dictionary_element_ast_value->data.DictionaryElementNode->key =
              string_ast_value;
          dictionary_element_ast_value->data.DictionaryElementNode->value =
              value;
          elements.push_back(dictionary_element_ast_value);
        }
      }
    }
    return elements;
  }
} // namespace mavka::parser