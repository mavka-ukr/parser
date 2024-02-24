#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPre_decrement(
      MavkaParser::Pre_decrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }
} // namespace mavka::parser