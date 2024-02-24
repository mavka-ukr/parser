#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitPost_decrement(
      MavkaParser::Post_decrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitPost_increment(
      MavkaParser::Post_incrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitPre_decrement(
      MavkaParser::Pre_decrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitPre_increment(
      MavkaParser::Pre_incrementContext* context) {
    // todo: make ast transformations
    return new ast::ASTValue();
  }
} // namespace mavka::parser