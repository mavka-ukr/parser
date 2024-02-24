#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value_item_simple(
      MavkaParser::Type_value_item_simpleContext* context) {
    const auto ast_result =
        any_to_ast_value(visitIdentifiers_chain(context->tvi_value));
    const auto type_value_single = new ast::TypeNode();
    fill_ast_value(type_value_single, context);
    type_value_single->value = ast_result;
    if (context->tvi_generics) {
      for (const auto generic_type : context->tvi_generics->type_value()) {
        type_value_single->generics.push_back(
            std::any_cast<std::vector<ast::TypeNode*>>(
                visitType_value(generic_type)));
      }
    }
    return (ast::make_ast_some(type_value_single));
  }
} // namespace mavka::parser