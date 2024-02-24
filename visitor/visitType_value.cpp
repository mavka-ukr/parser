#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value(
      MavkaParser::Type_valueContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser