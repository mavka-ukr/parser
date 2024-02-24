#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPre_increment(
      MavkaParser::Pre_incrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }
} // namespace mavka::parser