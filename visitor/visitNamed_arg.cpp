#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitNamed_arg(
      MavkaParser::Named_argContext* context,
      int index) {
    const auto arg_node = new ast::ArgNode();
    arg_node->index = index;
    arg_node->name = context->na_name->getText();
    arg_node->value = any_to_ast_value(_visitContext(context->na_value));
    return ast::ArgNode::ast_value(arg_node);
  }
} // namespace mavka::parser