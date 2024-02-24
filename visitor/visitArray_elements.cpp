#include "../parser.h"

namespace mavka::parser {
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
} // namespace mavka::parser