#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGod(MavkaParser::GodContext* context) {
    const auto god_node = new ast::GodNode();
    fill_ast_value(god_node, context);
    std::vector<ast::ASTValue*> elements;
    for (const auto value : context->atom()) {
      const auto value_node = any_to_ast_value(_visitContext(value));
      elements.push_back(value_node);
    }
    god_node->elements = elements;
    return (ast::make_ast_some(god_node));
  }
} // namespace mavka::parser