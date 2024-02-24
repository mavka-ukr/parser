#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAnonymous_diia(
      MavkaParser::Anonymous_diiaContext* context) {
    return visitDiia(context->diia());
  }
} // namespace mavka::parser