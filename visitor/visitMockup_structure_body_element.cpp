#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_structure_body_element(
      MavkaParser::Mockup_structure_body_elementContext* context) {
    if (context->structure_param()) {
      return visitStructure_param(context->structure_param());
    }
    return new ast::ASTSome();
  }
} // namespace mavka::parser