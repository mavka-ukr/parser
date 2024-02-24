#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitIdentifier(
      MavkaParser::IdentifierContext* context) {
    const auto identifier_ast_value =
        ast::IdentifierNode::ast_value(new ast::IdentifierNode());
    fill_ast_value(identifier_ast_value, context);
    if (context->getText()[0] == '\'') {
      identifier_ast_value->data.IdentifierNode->name =
          context->getText().substr(1);
    } else {
      identifier_ast_value->data.IdentifierNode->name = context->getText();
    }
    return identifier_ast_value;
  }
} // namespace mavka::parser