#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArray_element(
      MavkaParser::Array_elementContext* context) {
    return _visitContext(context->ae_value);
  }
} // namespace mavka::parser