#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitStructure_elements(
      MavkaParser::Structure_elementsContext* context) {
    std::vector<ast::ASTValue*> elements;
    for (const auto structure_element : context->structure_element()) {
      const auto ast_result =
          any_to_ast_value(visitStructure_element(structure_element));
      elements.push_back(ast_result);
    }
    return elements;
  }
} // namespace mavka::parser