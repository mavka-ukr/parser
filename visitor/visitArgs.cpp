#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArgs(MavkaParser::ArgsContext* context) {
    std::vector<ast::Arg*> args;
    for (int i = 0; i < context->arg().size(); ++i) {
      const auto arg = std::any_cast<ast::Arg*>(visitArg(context->arg()[i], i));
      args.push_back(arg);
    }
    return args;
  }
} // namespace mavka::parser