#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitBitwise_op(
      MavkaParser::Bitwise_opContext* context) {
    return context->getText();
  }
} // namespace mavka::parser