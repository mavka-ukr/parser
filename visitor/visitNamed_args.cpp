#include "../parser.h"

namespace mavka::parser {
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