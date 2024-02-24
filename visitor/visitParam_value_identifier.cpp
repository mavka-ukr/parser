#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_identifier(
      MavkaParser::Param_value_identifierContext* context) {
    const auto identifier_node = new ast::IdentifierNode();
    fill_ast_value(identifier_node, context);
    identifier_node->name = context->identifier()->getText();
    return (ast::make_ast_some(identifier_node));
  }
} // namespace mavka::parser