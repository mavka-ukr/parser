#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGet_element(
      MavkaParser::Get_elementContext* context) {
    const auto get_element_node = new ast::GetElementNode();
    fill_ast_value(get_element_node, context);
    get_element_node->value = any_to_ast_value(_visitContext(context->ge_left));
    get_element_node->index =
        any_to_ast_value(_visitContext(context->ge_element));
    return (ast::make_ast_some(get_element_node));
  }
} // namespace mavka::parser