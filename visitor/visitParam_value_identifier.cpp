#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_identifier(
      MavkaParser::Param_value_identifierContext* context) {
    const auto identifier_ast_value =
        ast::IdentifierNode::ast_value(new ast::IdentifierNode());
    fill_ast_value(identifier_ast_value, context);
    identifier_ast_value->data.IdentifierNode->name =
        context->identifier()->getText();
    return identifier_ast_value;
  }
} // namespace mavka::parser