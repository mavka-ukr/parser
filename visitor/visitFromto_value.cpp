#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFromto_value(
      MavkaParser::Fromto_valueContext* context) {
    if (const auto number_context =
            dynamic_cast<MavkaParser::Fromto_numberContext*>(context)) {
      const auto number_ast_value =
          ast::NumberNode::ast_value(new ast::NumberNode());
      fill_ast_value(number_ast_value, context);
      number_ast_value->data.NumberNode->value =
          number_context->number_token()->getText();
      return number_ast_value;
    }
    if (const auto id_context =
            dynamic_cast<MavkaParser::Fromto_idContext*>(context)) {
      return visitIdentifier(id_context->identifier());
    }
    if (const auto nested_context =
            dynamic_cast<MavkaParser::Fromto_nestedContext*>(context)) {
      return _visitContext(nested_context->fn_value);
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser