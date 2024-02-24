#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitChain(MavkaParser::ChainContext* context) {
    const auto chain_ast_value =
        ast::ChainNode::ast_value(new ast::ChainNode());
    fill_ast_value(chain_ast_value, context);
    chain_ast_value->data.ChainNode->left =
        any_to_ast_value(_visitContext(context->c_left));
    chain_ast_value->data.ChainNode->right = context->c_right->getText();
    return chain_ast_value;
  }
} // namespace mavka::parser