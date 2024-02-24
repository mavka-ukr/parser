#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGenerics(
      MavkaParser::GenericsContext* context) {
    std::vector<ast::ASTValue*> generics;
    for (const auto identifier_node : context->identifier()) {
      const auto identifier_result =
          any_to_ast_value(visitIdentifier(identifier_node));
      const auto identifier = identifier_result->data.IdentifierNode;
      const auto generic = new ast::GenericNode();
      generic->name = identifier->name;
      generics.push_back(ast::GenericNode::ast_value(generic));
    }
    return generics;
  }
} // namespace mavka::parser