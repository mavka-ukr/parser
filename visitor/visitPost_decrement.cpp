#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPost_decrement(
      MavkaParser::Post_decrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }
} // namespace mavka::parser