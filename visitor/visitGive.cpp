#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGive(MavkaParser::GiveContext* context) {
    const auto give_node = new ast::GiveNode();
    fill_ast_value(give_node, context);
    for (const auto give_element : context->give_element()) {
      const auto ast_result = any_to_ast_value(visitGive_element(give_element));
      const auto give_element_node = ast_result->GiveElementNode;
      give_node->elements.push_back(give_element_node);
    }
    return (ast::make_ast_some(give_node));
  }
} // namespace mavka::parser