#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFromto_simple(
      MavkaParser::Fromto_simpleContext* context) {
    const auto fromto_simple_node = new ast::FromToSimpleNode();
    fill_ast_value(fromto_simple_node, context);
    fromto_simple_node->from =
        any_to_ast_value(visitFromto_value(context->fs_from));
    fromto_simple_node->to =
        any_to_ast_value(visitFromto_value(context->fs_to));
    fromto_simple_node->toSymbol =
        context->fs_to_symbol ? context->fs_to_symbol->getText() : "<=";
    return (ast::make_ast_some(fromto_simple_node));
  }
} // namespace mavka::parser