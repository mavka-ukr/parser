#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_structure_body(
      MavkaParser::Mockup_structure_bodyContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser