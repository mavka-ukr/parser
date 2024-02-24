#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAssign(MavkaParser::AssignContext* context) {
    if (context->assign_simple()) {
      return visitAssign_simple(context->assign_simple());
    }
    if (context->assign_by_identifier()) {
      return visitAssign_by_identifier(context->assign_by_identifier());
    }
    if (context->assign_by_element()) {
      return visitAssign_by_element(context->assign_by_element());
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser