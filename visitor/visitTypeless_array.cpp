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

  std::any MavkaASTVisitor::visitArray_elements(
      MavkaParser::Array_elementsContext* context) {
    std::vector<ast::ASTValue*> elements;
    for (const auto array_element : context->array_element()) {
      const auto ast_result =
          any_to_ast_value(visitArray_element(array_element));
      elements.push_back(ast_result);
    }
    return elements;
  }

  std::any MavkaASTVisitor::visitArray_element(
      MavkaParser::Array_elementContext* context) {
    return _visitContext(context->ae_value);
  }
} // namespace mavka::parser