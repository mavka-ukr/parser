#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_number(
      MavkaParser::Param_value_numberContext* context) {
    const auto number_ast_value =
        ast::NumberNode::ast_value(new ast::NumberNode());
    fill_ast_value(number_ast_value, context);
    number_ast_value->data.NumberNode->value =
        context->number_token()->getText();
    return number_ast_value;
  }
} // namespace mavka::parser