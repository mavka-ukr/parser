#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitSuper_identifiers_chain(
      MavkaParser::Super_identifiers_chainContext* context) {
    if (context->sic_identifier) {
      return visitIdentifier(context->sic_identifier);
    }
    const auto left =
        any_to_ast_value(visitSuper_identifiers_chain(context->sic_left));
    if (context->sic_right) {
      const auto right = any_to_ast_value(visitIdentifier(context->sic_right));
      const auto chain_node = new ast::ChainNode();
      fill_ast_value(chain_node, context);
      chain_node->left = left;
      chain_node->right = right->IdentifierNode;
      return (ast::make_ast_some(chain_node));
    }
    const auto index = any_to_ast_value(_visitContext(context->sic_index));
    const auto get_element_node = new ast::GetElementNode();
    fill_ast_value(get_element_node, context);
    get_element_node->value = left;
    get_element_node->index = index;
    return (ast::make_ast_some(get_element_node));
  }
} // namespace mavka::parser