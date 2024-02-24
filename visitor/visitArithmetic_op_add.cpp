#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArithmetic_op_add(
      MavkaParser::Arithmetic_op_addContext* context) {
    return context->getText();
  }
} // namespace mavka::parser