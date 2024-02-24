#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value(
      MavkaParser::Type_valueContext* context) {
    std::vector<ast::TypeNode*> types;
    for (int i = 0; i < context->type_value_item().size(); ++i) {
      const auto type = context->type_value_item()[i];
      const auto ast_result = any_to_ast_value(visitType_value_item(type));
      types.push_back(ast_result->TypeNode);
    }
    return types;
  }
} // namespace mavka::parser