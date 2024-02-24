#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_structure_body(
      MavkaParser::Mockup_structure_bodyContext* context) {
    std::vector<ast::ASTValue*> elements;
    for (const auto mockup_structure_element :
         context->mockup_structure_body_element()) {
      const auto ast_result = any_to_ast_value(
          visitMockup_structure_body_element(mockup_structure_element));
      elements.push_back(ast_result);
    }
    return elements;
  }
} // namespace mavka::parser