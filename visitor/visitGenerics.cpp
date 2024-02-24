#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGenerics(
      MavkaParser::GenericsContext* context) {
    std::vector<ast::ASTValue*> generics;
    for (const auto identifier_context : context->identifier()) {
      const auto identifier_result =
          any_to_ast_value(visitIdentifier(identifier_context));
      const auto identifier = identifier_result->data.IdentifierNode;
      const auto generic_ast_value =
          ast::GenericNode::ast_value(new ast::GenericNode());
      fill_ast_value(generic_ast_value, identifier_context);
      generic_ast_value->data.GenericNode->name = identifier->name;
      generics.push_back(generic_ast_value);
    }
    return generics;
  }
} // namespace mavka::parser