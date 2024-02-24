#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value_item(
      MavkaParser::Type_value_itemContext* context) {
    if (context->type_value_item_array()) {
      return visitType_value_item_array(context->type_value_item_array());
    }
    if (context->type_value_item_simple()) {
      return visitType_value_item_simple(context->type_value_item_simple());
    }
    return new ast::ASTSome();
  }
} // namespace mavka::parser