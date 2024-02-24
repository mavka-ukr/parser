#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFromto_complex(
      MavkaParser::Fromto_complexContext* context) {
    const auto fromto_complex_node = new ast::FromToComplexNode();
    fill_ast_value(fromto_complex_node, context);
    fromto_complex_node->from =
        any_to_ast_value(visitFromto_value(context->fc_from));
    fromto_complex_node->to =
        any_to_ast_value(visitFromto_value(context->fc_to));
    fromto_complex_node->toSymbol =
        context->fc_to_symbol ? context->fc_to_symbol->getText() : "<=";
    fromto_complex_node->step =
        any_to_ast_value(visitFromto_value(context->fc_middle));
    fromto_complex_node->stepSymbol =
        context->fc_middle_symbol ? context->fc_middle_symbol->getText() : "+";
    return (ast::make_ast_some(fromto_complex_node));
  }
} // namespace mavka::parser