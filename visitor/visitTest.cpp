#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTest(MavkaParser::TestContext* context) {
    const auto test_ast_value = ast::TestNode::ast_value(new ast::TestNode());
    fill_ast_value(test_ast_value, context);
    test_ast_value->data.TestNode->left =
        any_to_ast_value(_visitContext(context->t_left));
    test_ast_value->data.TestNode->right =
        any_to_ast_value(_visitContext(context->t_right));
    const auto op = context->t_operation->getText();
    if (op == "&&" || op == "і") {
      test_ast_value->data.TestNode->op = ast::TEST_AND;
    } else if (op == "||" || op == "або") {
      test_ast_value->data.TestNode->op = ast::TEST_OR;
    } else {
      throw std::runtime_error("Unknown operation: " + op);
    }
    return test_ast_value;
  }
} // namespace mavka::parser