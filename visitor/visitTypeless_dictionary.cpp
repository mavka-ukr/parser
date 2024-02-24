#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTypeless_dictionary(
      MavkaParser::Typeless_dictionaryContext* context) {
    const auto dictionary_node = new ast::DictionaryNode();
    fill_ast_value(dictionary_node, context);
    if (context->d_args) {
      dictionary_node->elements =
          std::any_cast<std::vector<ast::DictionaryElement*>>(
              visitDictionary_args(context->d_args));
    }
    return (ast::make_ast_some(dictionary_node));
  }
} // namespace mavka::parser