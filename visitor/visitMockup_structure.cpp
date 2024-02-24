#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_structure(
      MavkaParser::Mockup_structureContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser