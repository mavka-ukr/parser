#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAnonymous_diia(
      MavkaParser::Anonymous_diiaContext* context) {
    const auto diia_ast_value = any_to_ast_value(visitDiia(context->diia()));
    diia_ast_value->data.DiiaNode->anonymous = true;
    return diia_ast_value;
  }
} // namespace mavka::parser