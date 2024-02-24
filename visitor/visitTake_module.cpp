#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTake_module(
      MavkaParser::Take_moduleContext* context) {
    const auto take_ast_value = ast::TakeNode::ast_value(new ast::TakeNode());
    fill_ast_value(take_ast_value, context);
    take_ast_value->data.TakeNode->relative = context->tm_relative != nullptr;
    take_ast_value->data.TakeNode->name = context->tm_name_chain->getText();
    take_ast_value->data.TakeNode->as =
        context->tm_as ? context->tm_as->getText() : "";
    if (context->tm_elements) {
      for (const auto element_node :
           context->tm_elements->take_module_element()) {
        if (element_node->tme_as) {
          take_ast_value->data.TakeNode->elements.insert_or_assign(
              element_node->tme_name->getText(),
              element_node->tme_as->getText());
        } else {
          take_ast_value->data.TakeNode->elements.insert_or_assign(
              element_node->tme_name->getText(),
              element_node->tme_name->getText());
        }
      }
    }
    return take_ast_value;
  }
} // namespace mavka::parser