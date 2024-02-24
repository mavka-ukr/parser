#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitNumber(MavkaParser::NumberContext* context) {
    const auto number_node = new ast::NumberNode();
    fill_ast_value(number_node, context);
    number_node->value = process_number(context->getText());
    return (ast::make_ast_some(number_node));
  }
} // namespace mavka::parser