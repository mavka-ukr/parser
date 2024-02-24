#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_diia(
      MavkaParser::Mockup_diiaContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser