#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_empty_dictionary(
      MavkaParser::Param_value_empty_dictionaryContext* context) {
    const auto dictionary_node = new ast::DictionaryNode();
    fill_ast_value(dictionary_node, context);
    return (ast::make_ast_some(dictionary_node));
  }
} // namespace mavka::parser