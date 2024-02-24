#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup(MavkaParser::MockupContext* context) {
    if (context->mockup_module()) {
      return visitMockup_module(context->mockup_module());
    }
    if (context->mockup_structure()) {
      return visitMockup_structure(context->mockup_structure());
    }
    if (context->mockup_diia()) {
      return visitMockup_diia(context->mockup_diia());
    }
    if (context->mockup_subject()) {
      return visitMockup_subject(context->mockup_subject());
    }
    return new ast::ASTSome();
  }
} // namespace mavka::parser