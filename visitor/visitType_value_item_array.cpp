#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitType_value_item_array(
      MavkaParser::Type_value_item_arrayContext* context) {
    const auto type_value_array = new ast::TypeNode();
    fill_ast_value(type_value_array, context);
    const auto array_identifier_node = new ast::IdentifierNode();
    fill_ast_value(array_identifier_node, context);
    array_identifier_node->name = "список";
    type_value_array->value = ast::make_ast_some(array_identifier_node);
    const auto type_value_single_result =
        any_to_ast_value(visitType_value_item(context->type_value_item()));
    const auto type_value_single = type_value_single_result->TypeNode;
    type_value_array->generics.push_back({type_value_single});
    return (ast::make_ast_some(type_value_array));
  }
} // namespace mavka::parser