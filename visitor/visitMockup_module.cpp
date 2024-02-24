#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_module(
      MavkaParser::Mockup_moduleContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser