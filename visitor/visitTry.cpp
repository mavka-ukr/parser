#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTry(MavkaParser::TryContext* context) {
    const auto try_node = new ast::TryNode();
    fill_ast_value(try_node, context);
    try_node->body =
        std::any_cast<std::vector<ast::ASTValue*>>(visitBody(context->t_body));
    try_node->name = context->tc_name->getText();
    try_node->catch_body =
        std::any_cast<std::vector<ast::ASTValue*>>(visitBody(context->tc_body));
    return (ast::make_ast_some(try_node));
  }
} // namespace mavka::parser