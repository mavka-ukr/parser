#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value_item(
      MavkaParser::Type_value_itemContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser