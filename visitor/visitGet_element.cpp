#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGet_element(
      MavkaParser::Get_elementContext* context) {
    // значення.чародія_отримати
    const auto chain_ast_value =
        ast::ChainNode::ast_value(new ast::ChainNode());
    chain_ast_value->data.ChainNode->left =
        any_to_ast_value(_visitContext(context->ge_left));
    chain_ast_value->data.ChainNode->right = "чародія_отримати";
    // значення.чародія_отримати(елемент)
    const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
    call_ast_value->data.CallNode->value = chain_ast_value;
    // елемент
    const auto arg_ast_value = ast::ArgNode::ast_value(new ast::ArgNode());
    arg_ast_value->data.ArgNode->index = 0;
    arg_ast_value->data.ArgNode->value =
        any_to_ast_value(_visitContext(context->ge_element));
    call_ast_value->data.CallNode->args = {arg_ast_value};
    return call_ast_value;
  }
} // namespace mavka::parser