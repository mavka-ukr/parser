#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGive_element(
      MavkaParser::Give_elementContext* context) {
    const auto give_element_node = new ast::GiveElementNode();
    fill_ast_value(give_element_node, context);
    give_element_node->name = context->ge_name->getText();
    if (context->ge_as) {
      give_element_node->as = context->ge_as->getText();
    }
    return (ast::make_ast_some(give_element_node));
  }
} // namespace mavka::parser