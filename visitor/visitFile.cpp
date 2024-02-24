#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFile(MavkaParser::FileContext* ctx) {
    return visitProgram(ctx->f_program);
  }
} // namespace mavka::parser