#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitNamed_args(
      MavkaParser::Named_argsContext* context) {
    std::vector<ast::Arg*> args;
    for (int i = 0; i < context->named_arg().size(); ++i) {
      const auto arg = context->named_arg()[i];
      const auto ast_result = any_to_ast_value(visitNamed_arg(arg, i));
      args.push_back(ast_result->ArgNode);
    }
    return args;
  }
} // namespace mavka::parser