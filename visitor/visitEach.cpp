#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitEach(MavkaParser::EachContext* context) {
    const auto each_ast_value = ast::EachNode::ast_value(new ast::EachNode());
    fill_ast_value(each_ast_value, context);

    if (context->e_iterator) {
      each_ast_value->data.EachNode->value =
          any_to_ast_value(_visitContext(context->e_iterator));
    }
    if (context->e_fromto) {
      // todo: transform to while
    }
    each_ast_value->data.EachNode->keyName =
        context->e_key_name ? context->e_key_name->getText() : "";
    each_ast_value->data.EachNode->name = context->e_name->getText();
    if (context->e_body) {
      each_ast_value->data.EachNode->body =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitBody(context->e_body));
    }
    return each_ast_value;
  }
} // namespace mavka::parser