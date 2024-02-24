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
      const auto chain_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      fill_ast_value(chain_ast_value, context);
      chain_ast_value->data.PropertyGetNode->left = left;
      chain_ast_value->data.PropertyGetNode->name =
          context->sic_right->getText();
      return chain_ast_value;
    } else {
      // значення.чародія_отримати
      const auto chain_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      chain_ast_value->data.PropertyGetNode->left = left;
      chain_ast_value->data.PropertyGetNode->name = "чародія_отримати";
      // значення.чародія_отримати(елемент)
      const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
      call_ast_value->data.CallNode->value = chain_ast_value;
      // елемент
      const auto arg_ast_value = ast::ArgNode::ast_value(new ast::ArgNode());
      arg_ast_value->data.ArgNode->index = 0;
      arg_ast_value->data.ArgNode->value =
          any_to_ast_value(_visitContext(context->sic_index));
      call_ast_value->data.CallNode->args = {arg_ast_value};
      return call_ast_value;
    }
  }
} // namespace mavka::parser