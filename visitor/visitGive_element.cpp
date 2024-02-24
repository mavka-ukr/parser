#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGive_element(
      MavkaParser::Give_elementContext* context) {
    const auto give_element_ast_value =
        ast::GiveElementNode::ast_value(new ast::GiveElementNode());
    fill_ast_value(give_element_ast_value, context);
    give_element_ast_value->data.GiveElementNode->name =
        context->ge_name->getText();
    if (context->ge_as) {
      give_element_ast_value->data.GiveElementNode->as =
          context->ge_as->getText();
    }
    return give_element_ast_value;
  }
} // namespace mavka::parser