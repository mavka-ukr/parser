#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitIdentifier(
      MavkaParser::IdentifierContext* context) {
    const auto identifier_node = new ast::IdentifierNode();
    fill_ast_value(identifier_node, context);
    if (context->getText()[0] == '\'') {
      identifier_node->name = context->getText().substr(1);
    } else {
      identifier_node->name = context->getText();
    }
    return (ast::make_ast_some(identifier_node));
  }
} // namespace mavka::parser