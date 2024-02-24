#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value_item_simple(
      MavkaParser::Type_value_item_simpleContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser