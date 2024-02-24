#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFromto(MavkaParser::FromtoContext* context) {
    if (context->fromto_simple()) {
      return visitFromto_simple(context->fromto_simple());
    }
    if (context->fromto_complex()) {
      return visitFromto_complex(context->fromto_complex());
    }
    return new ast::ASTSome();
  }
} // namespace mavka::parser