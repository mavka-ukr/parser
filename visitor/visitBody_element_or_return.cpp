#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitBody_element_or_return(
      MavkaParser::Body_element_or_returnContext* context) {
    if (context->body_element()) {
      return visitBody_element(context->body_element());
    }
    if (context->return_body_line()) {
      return visitReturn_body_line(context->return_body_line());
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser