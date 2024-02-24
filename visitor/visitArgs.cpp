#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArgs(MavkaParser::ArgsContext* context) {
    std::vector<ast::ASTValue*> args;
    for (int i = 0; i < context->arg().size(); ++i) {
      const auto arg =
          std::any_cast<ast::ASTValue*>(visitArg(context->arg()[i], i));
      args.push_back(arg);
    }
    return args;
  }
} // namespace mavka::parser