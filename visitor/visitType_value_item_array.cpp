#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value_item_array(
      MavkaParser::Type_value_item_arrayContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser