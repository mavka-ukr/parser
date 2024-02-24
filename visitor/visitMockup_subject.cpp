#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_subject(
      MavkaParser::Mockup_subjectContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser