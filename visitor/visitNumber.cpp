#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitNumber(MavkaParser::NumberContext* context) {
    const auto number_ast_value =
        ast::NumberNode::ast_value(new ast::NumberNode());
    fill_ast_value(number_ast_value, context);
    number_ast_value->data.NumberNode->value = context->getText();
    return number_ast_value;
  }
} // namespace mavka::parser