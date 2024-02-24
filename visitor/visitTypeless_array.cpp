#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTypeless_array(
      MavkaParser::Typeless_arrayContext* context) {
    const auto array_node = new ast::ListNode();
    fill_ast_value(array_node, context);
    if (context->a_elements) {
      array_node->elements = std::any_cast<std::vector<ast::ASTValue*>>(
          visitArray_elements(context->a_elements));
    }
    return (ast::make_ast_some(array_node));
  }
} // namespace mavka::parser