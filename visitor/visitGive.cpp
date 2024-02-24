#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGive(MavkaParser::GiveContext* context) {
    const auto give_ast_value = ast::GiveNode::ast_value(new ast::GiveNode());
    fill_ast_value(give_ast_value, context);
    for (const auto give_element : context->give_element()) {
      const auto give_element_ast_value =
          any_to_ast_value(visitGive_element(give_element));
      give_ast_value->data.GiveNode->elements.push_back(give_element_ast_value);
    }
    return give_ast_value;
  }
} // namespace mavka::parser