#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTest(MavkaParser::TestContext* context) {
    const auto test_node = new ast::TestNode();
    fill_ast_value(test_node, context);
    test_node->left = any_to_ast_value(_visitContext(context->t_left));
    test_node->right = any_to_ast_value(_visitContext(context->t_right));
    test_node->op = context->t_operation->getText();
    return (ast::make_ast_some(test_node));
  }
} // namespace mavka::parser