#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAssign_by_element(
      MavkaParser::Assign_by_elementContext* context) {
    // значення.чародія_покласти
    const auto chain_ast_value =
        ast::ChainNode::ast_value(new ast::ChainNode());
    chain_ast_value->data.ChainNode->left =
        any_to_ast_value(visitSuper_identifiers_chain(context->abe_left));
    chain_ast_value->data.ChainNode->right = "чародія_покласти";
    // значення.чародія_покласти(елемент, значення)
    const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
    call_ast_value->data.CallNode->value = chain_ast_value;
    // елемент, значення
    const auto element_arg_node = new ast::ArgNode();
    element_arg_node->index = 0;
    element_arg_node->value =
        any_to_ast_value(_visitContext(context->abe_index));
    const auto value_arg_node = new ast::ArgNode();
    value_arg_node->index = 1;
    value_arg_node->value = any_to_ast_value(_visitContext(context->abe_value));
    call_ast_value->data.CallNode->args = {
        ast::ArgNode::ast_value(element_arg_node),
        ast::ArgNode::ast_value(value_arg_node)};
    return call_ast_value;
  }
} // namespace mavka::parser