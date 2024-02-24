#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAssign_by_identifier(
      MavkaParser::Assign_by_identifierContext* context) {
    const auto op_text = context->assign_symbol()->getText();
    if (op_text != "=" && op_text != "це") {
      // todo: handle this
    }
    const auto assign_by_identifier_ast_value =
        ast::PropertySetNode::ast_value(new ast::PropertySetNode());
    fill_ast_value(assign_by_identifier_ast_value, context);
    assign_by_identifier_ast_value->data.PropertySetNode->left =
        any_to_ast_value(visitSuper_identifiers_chain(context->abi_left));
    assign_by_identifier_ast_value->data.PropertySetNode->name =
        context->abi_identifier->getText();
    assign_by_identifier_ast_value->data.PropertySetNode->value =
        any_to_ast_value(_visitContext(context->abi_value));
    return assign_by_identifier_ast_value;
  }
} // namespace mavka::parser