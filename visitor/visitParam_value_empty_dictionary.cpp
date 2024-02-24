#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_empty_dictionary(
      MavkaParser::Param_value_empty_dictionaryContext* context) {
    const auto dictionary_ast_value =
        ast::DictionaryNode::ast_value(new ast::DictionaryNode());
    fill_ast_value(dictionary_ast_value, context);
    return dictionary_ast_value;
  }
} // namespace mavka::parser