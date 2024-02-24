#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitIdentifiers_chain(
      MavkaParser::Identifiers_chainContext* context) {
    if (context->ic_identifier) {
      return visitIdentifier(context->ic_identifier);
    }
    const auto chain_ast_value =
        ast::ChainNode::ast_value(new ast::ChainNode());
    fill_ast_value(chain_ast_value, context);
    chain_ast_value->data.ChainNode->left =
        any_to_ast_value(visitIdentifiers_chain(context->ic_left));
    chain_ast_value->data.ChainNode->right = context->ic_right->getText();
    return chain_ast_value;
  }
} // namespace mavka::parser