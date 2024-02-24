#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTry(MavkaParser::TryContext* context) {
    const auto try_ast_value = ast::TryNode::ast_value(new ast::TryNode());
    fill_ast_value(try_ast_value, context);
    try_ast_value->data.TryNode->body =
        std::any_cast<std::vector<ast::ASTValue*>>(visitBody(context->t_body));
    try_ast_value->data.TryNode->name = context->tc_name->getText();
    try_ast_value->data.TryNode->catch_body =
        std::any_cast<std::vector<ast::ASTValue*>>(visitBody(context->tc_body));
    return try_ast_value;
  }
} // namespace mavka::parser