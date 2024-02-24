#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTernary(MavkaParser::TernaryContext* context) {
    const auto ternary_ast_value =
        ast::TernaryNode::ast_value(new ast::TernaryNode());
    fill_ast_value(ternary_ast_value, context);
    ternary_ast_value->data.TernaryNode->condition =
        any_to_ast_value(_visitContext(context->t_value));
    std::vector<ast::ASTValue*> body;
    if (context->t_positive) {
      ternary_ast_value->data.TernaryNode->body =
          any_to_ast_value(_visitContext(context->t_positive));
    }
    if (context->t_negative) {
      ternary_ast_value->data.TernaryNode->else_body =
          any_to_ast_value(_visitContext(context->t_negative));
    }
    return ternary_ast_value;
  }
} // namespace mavka::parser