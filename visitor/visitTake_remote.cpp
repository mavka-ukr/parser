#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTake_remote(
      MavkaParser::Take_remoteContext* context) {
    const auto take_pak_node = new ast::TakePakNode();
    fill_ast_value(take_pak_node, context);
    take_pak_node->name = context->tr_url->getText().substr(
        1, context->tr_url->getText().length() - 2);
    take_pak_node->version = context->tr_version->getText().substr(
        1, context->tr_version->getText().length() - 2);
    take_pak_node->as = context->tr_as ? context->tr_as->getText() : "";
    return (ast::make_ast_some(take_pak_node));
  }
} // namespace mavka::parser