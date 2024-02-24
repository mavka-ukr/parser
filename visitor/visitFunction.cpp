#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFunction(
      MavkaParser::FunctionContext* context) {
    const auto function_node = new ast::FunctionNode();
    fill_ast_value(function_node, context);
    function_node->async = context->f_async != nullptr;
    if (context->f_params) {
      function_node->params = std::any_cast<std::vector<ast::Param*>>(
          visitParams(context->f_params));
    }
    if (context->f_type) {
      function_node->return_types = std::any_cast<std::vector<ast::TypeNode*>>(
          visitType_value(context->f_type));
    }
    if (context->f_body) {
      const auto function_node_body =
          any_to_ast_value(_visitContext(context->f_body));
      const auto return_node = new ast::ReturnNode();
      // return_node->start_line = function_node_body->start_line;
      // return_node->start_column = function_node_body->start_column;
      // return_node->end_line = function_node_body->end_line;
      // return_node->end_column = function_node_body->end_column;
      return_node->value = function_node_body;
      function_node->body.push_back(ast::make_ast_some(return_node));
    }
    return (ast::make_ast_some(function_node));
  }
} // namespace mavka::parser