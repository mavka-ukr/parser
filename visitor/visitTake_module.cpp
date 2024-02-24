#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTake_module(
      MavkaParser::Take_moduleContext* context) {
    const auto take_module_node = new ast::TakeNode();
    fill_ast_value(take_module_node, context);
    take_module_node->relative = context->tm_relative != nullptr;
    take_module_node->name = context->tm_name_chain->getText();
    take_module_node->as = context->tm_as ? context->tm_as->getText() : "";
    if (context->tm_elements) {
      for (const auto element_node :
           context->tm_elements->take_module_element()) {
        if (element_node->tme_as) {
          take_module_node->elements.insert_or_assign(
              element_node->tme_name->getText(),
              element_node->tme_as->getText());
        } else {
          take_module_node->elements.insert_or_assign(
              element_node->tme_name->getText(),
              element_node->tme_name->getText());
        }
      }
    }
    return (ast::make_ast_some(take_module_node));
  }
} // namespace mavka::parser