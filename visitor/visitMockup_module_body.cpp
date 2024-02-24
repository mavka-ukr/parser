#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_module_body(
      MavkaParser::Mockup_module_bodyContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser