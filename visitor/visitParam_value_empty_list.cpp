#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_empty_list(
      MavkaParser::Param_value_empty_listContext* context) {
    const auto array_node = new ast::ListNode();
    fill_ast_value(array_node, context);
    return (ast::make_ast_some(array_node));
  }
} // namespace mavka::parser