#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTernary(MavkaParser::TernaryContext* context) {
    const auto ternary_node = new ast::TernaryNode();
    fill_ast_value(ternary_node, context);
    ternary_node->condition = any_to_ast_value(_visitContext(context->t_value));
    std::vector<ast::ASTValue*> body;
    if (context->t_positive) {
      ternary_node->body = any_to_ast_value(_visitContext(context->t_positive));
    }
    if (context->t_negative) {
      ternary_node->else_body =
          any_to_ast_value(_visitContext(context->t_negative));
    }
    return (ast::make_ast_some(ternary_node));
  }
} // namespace mavka::parser