#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitId(MavkaParser::IdContext* context) {
    const auto identifier_node = new ast::IdentifierNode();
    fill_ast_value(identifier_node, context);
    identifier_node->name = context->getText();
    return (ast::make_ast_some(identifier_node));
  }
} // namespace mavka::parser