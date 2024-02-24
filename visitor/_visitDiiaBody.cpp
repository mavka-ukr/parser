#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::_visitDiiaBody(MavkaParser::BodyContext* context) {
    auto body = std::any_cast<std::vector<ast::ASTValue*>>(visitBody(context));
    if (!body.empty()) {
      const auto last_node = body.back();
      if (tools::instance_of<ast::ASTValueNode>(
              mavka::ast::get_ast_node(last_node))) {
        const auto return_node = new ast::ReturnNode();
        // return_node->start_line = last_node->start_line;
        // return_node->start_column = last_node->start_column;
        // return_node->end_line = last_node->end_line;
        // return_node->end_column = last_node->end_column;
        return_node->value = last_node;
        body.pop_back();
        body.push_back(ast::make_ast_some(return_node));
      }
    }
    return body;
  }
} // namespace mavka::parser