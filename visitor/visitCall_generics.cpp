#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitCall_generics(
      MavkaParser::Call_genericsContext* context) {
    std::vector<ast::ASTValue*> generics;
    for (const auto type_value_node : context->type_value()) {
      const auto type_value_result = visitType_value(type_value_node);
      generics.push_back(std::any_cast<ast::ASTValue*>(type_value_result));
    }
    return generics;
  }
} // namespace mavka::parser