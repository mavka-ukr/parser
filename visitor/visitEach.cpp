#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitEach(MavkaParser::EachContext* context) {
    const auto each_node = new ast::EachNode();
    fill_ast_value(each_node, context);
    if (context->e_iterator) {
      each_node->value = any_to_ast_value(_visitContext(context->e_iterator));
    }
    if (context->e_fromto) {
      each_node->value = any_to_ast_value(visitFromto(context->e_fromto));
    }
    each_node->keyName =
        context->e_key_name ? context->e_key_name->getText() : "";
    each_node->name = context->e_name->getText();
    if (context->e_body) {
      each_node->body = std::any_cast<std::vector<ast::ASTValue*>>(
          visitBody(context->e_body));
    }
    return (ast::make_ast_some(each_node));
  }
} // namespace mavka::parser