#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_module_body(
      MavkaParser::Mockup_module_bodyContext* context) {
    std::vector<ast::ASTValue*> elements;
    for (const auto mockup_module_element_ctx : context->mockup()) {
      const auto ast_result =
          any_to_ast_value(_visitContext(mockup_module_element_ctx));
      elements.push_back(ast_result);
    }
    std::vector<ast::ASTValue*> give_elements;
    for (const auto element : elements) {
      const auto give_node = new ast::GiveNode();
      // give_node->start_line = element->start_line;
      // give_node->start_column = element->start_column;
      // give_node->end_line = element->end_line;
      // give_node->end_column = element->end_column;
      const auto give_element_node = new ast::GiveElementNode();
      // give_element_node->start_line = element->start_line;
      // give_element_node->start_column = element->start_column;
      // give_element_node->end_line = element->end_line;
      // give_element_node->end_column = element->end_column;

      if (element->MockupDiiaNode) {
        if (!element->MockupDiiaNode->structure.empty()) {
          continue;
        }
        give_element_node->name = element->MockupDiiaNode->name;
        give_node->elements.push_back(give_element_node);
        give_elements.push_back(ast::make_ast_some(give_node));
      }
      if (element->MockupModuleNode) {
        give_element_node->name = element->MockupModuleNode->name;
        give_node->elements.push_back(give_element_node);
        give_elements.push_back(ast::make_ast_some(give_node));
      }
      if (element->MockupSubjectNode) {
        give_element_node->name = element->MockupSubjectNode->name;
        give_node->elements.push_back(give_element_node);
        give_elements.push_back(ast::make_ast_some(give_node));
      }
      if (element->MockupStructureNode) {
        give_element_node->name = element->MockupStructureNode->name;
        give_node->elements.push_back(give_element_node);
        give_elements.push_back(ast::make_ast_some(give_node));
      }
    }
    for (const auto give_element : give_elements) {
      elements.push_back(give_element);
    }
    return elements;
  }
} // namespace mavka::parser