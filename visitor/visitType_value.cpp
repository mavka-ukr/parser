#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value(
      MavkaParser::Type_valueContext* context) {
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitType_value_item(
      MavkaParser::Type_value_itemContext* context) {
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitType_value_item_array(
      MavkaParser::Type_value_item_arrayContext* context) {
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitType_value_item_simple(
      MavkaParser::Type_value_item_simpleContext* context) {
    return new ast::ASTValue();
  }
} // namespace mavka::parser