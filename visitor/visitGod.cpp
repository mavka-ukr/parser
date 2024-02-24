#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitGod(MavkaParser::GodContext* context) {
    const auto god_ast_value = ast::GodNode::ast_value(new ast::GodNode());
    fill_ast_value(god_ast_value, context);
    std::vector<ast::ASTValue*> elements;
    for (const auto value : context->atom()) {
      const auto value_node = any_to_ast_value(_visitContext(value));
      elements.push_back(value_node);
    }
    god_ast_value->data.GodNode->elements = elements;
    return god_ast_value;
  }
} // namespace mavka::parser