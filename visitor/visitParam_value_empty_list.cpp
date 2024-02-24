#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value_empty_list(
      MavkaParser::Param_value_empty_listContext* context) {
    const auto list_ast_value = ast::ListNode::ast_value(new ast::ListNode());
    fill_ast_value(list_ast_value, context);
    return list_ast_value;
  }
} // namespace mavka::parser