#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitCall_generics(
      MavkaParser::Call_genericsContext* context) {
    std::vector<std::vector<ast::TypeNode*>> generics;
    for (const auto type_value_node : context->type_value()) {
      const auto type_value_result = visitType_value(type_value_node);
      generics.push_back(
          std::any_cast<std::vector<ast::TypeNode*>>(type_value_result));
    }
    return generics;
  }
} // namespace mavka::parser