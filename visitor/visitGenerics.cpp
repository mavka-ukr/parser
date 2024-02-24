#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGenerics(
      MavkaParser::GenericsContext* context) {
    std::vector<ast::Generic*> generics;
    for (const auto identifier_node : context->identifier()) {
      const auto identifier_result =
          any_to_ast_value(visitIdentifier(identifier_node));
      const auto identifier = identifier_result->IdentifierNode;
      const auto generic = new ast::Generic();
      fill_ast_value(generic, identifier_node);
      generic->name = identifier->name;
      generics.push_back(generic);
    }
    return generics;
  }
} // namespace mavka::parser