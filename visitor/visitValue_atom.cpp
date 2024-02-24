#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitValue_atom(
      MavkaParser::Value_atomContext* context) {
    return _visitContext(context->atom());
  }
} // namespace mavka::parser