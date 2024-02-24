#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitStructure_element(
      MavkaParser::Structure_elementContext* context) {
    if (context->structure_param()) {
      return visitStructure_param(context->structure_param());
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser