#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTypeless_array(
      MavkaParser::Typeless_arrayContext* context) {
    const auto list_ast_value = ast::ListNode::ast_value(new ast::ListNode());
    fill_ast_value(list_ast_value, context);
    if (context->a_elements) {
      list_ast_value->data.ListNode->elements =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitArray_elements(context->a_elements));
    }
    return list_ast_value;
  }
} // namespace mavka::parser