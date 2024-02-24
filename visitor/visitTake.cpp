#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTake(MavkaParser::TakeContext* context) {
    if (tools::instance_of<MavkaParser::Take_moduleContext>(context)) {
      return visitTake_module(
          dynamic_cast<MavkaParser::Take_moduleContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Take_remoteContext>(context)) {
      return visitTake_remote(
          dynamic_cast<MavkaParser::Take_remoteContext*>(context));
    }
    return new ast::ASTSome();
  }

} // namespace mavka::parser