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
} // namespace mavka::parser