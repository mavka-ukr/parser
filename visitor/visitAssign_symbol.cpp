#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAssign_symbol(
      MavkaParser::Assign_symbolContext* context) {
    return context->getText();
  }
} // namespace mavka::parser