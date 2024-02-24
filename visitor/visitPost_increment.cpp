#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPost_increment(
      MavkaParser::Post_incrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }
} // namespace mavka::parser