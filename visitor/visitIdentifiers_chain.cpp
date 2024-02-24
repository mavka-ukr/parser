#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitIdentifiers_chain(
      MavkaParser::Identifiers_chainContext* context) {
    if (context->ic_identifier) {
      return visitIdentifier(context->ic_identifier);
    }
    const auto chain_node = new ast::ChainNode();
    fill_ast_value(chain_node, context);
    chain_node->left =
        any_to_ast_value(visitIdentifiers_chain(context->ic_left));
    chain_node->right =
        any_to_ast_value(visitIdentifier(context->ic_right))->IdentifierNode;
    return (ast::make_ast_some(chain_node));
  }
} // namespace mavka::parser