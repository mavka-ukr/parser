#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_structure_body_element(
      MavkaParser::Mockup_structure_body_elementContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser