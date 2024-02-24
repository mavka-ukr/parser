#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArg(MavkaParser::ArgContext* context,
                                     int index) {
    const auto arg_ast_value = ast::ArgNode::ast_value(new ast::ArgNode());
    fill_ast_value(arg_ast_value, context);
    arg_ast_value->data.ArgNode->index = index;
    arg_ast_value->data.ArgNode->value =
        any_to_ast_value(_visitContext(context->a_value));
    return arg_ast_value;
  }

  std::any MavkaASTVisitor::visitArgs(MavkaParser::ArgsContext* context) {
    std::vector<ast::ASTValue*> args;
    for (int i = 0; i < context->arg().size(); ++i) {
      const auto arg =
          std::any_cast<ast::ASTValue*>(visitArg(context->arg()[i], i));
      args.push_back(arg);
    }
    return args;
  }

  std::any MavkaASTVisitor::visitNamed_arg(
      MavkaParser::Named_argContext* context,
      int index) {
    const auto arg_ast_value = ast::ArgNode::ast_value(new ast::ArgNode());
    fill_ast_value(arg_ast_value, context);
    arg_ast_value->data.ArgNode->index = index;
    arg_ast_value->data.ArgNode->name = context->na_name->getText();
    arg_ast_value->data.ArgNode->value =
        any_to_ast_value(_visitContext(context->na_value));
    return arg_ast_value;
  }

  std::any MavkaASTVisitor::visitNamed_args(
      MavkaParser::Named_argsContext* context) {
    std::vector<ast::ASTValue*> args;
    for (int i = 0; i < context->named_arg().size(); ++i) {
      const auto arg =
          any_cast<ast::ASTValue*>(visitNamed_arg(context->named_arg()[i], i));
      args.push_back(arg);
    }
    return args;
  }
} // namespace mavka::parser