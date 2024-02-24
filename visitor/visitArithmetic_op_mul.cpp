#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArithmetic_op_mul(
      MavkaParser::Arithmetic_op_mulContext* context) {
    return context->getText();
  }
} // namespace mavka::parser