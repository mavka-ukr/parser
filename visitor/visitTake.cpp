#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitTake(MavkaParser::TakeContext* context) {
    if (tools::instance_of<MavkaParser::Take_moduleContext>(context)) {
      return visitTake_module(
          dynamic_cast<MavkaParser::Take_moduleContext*>(context));
    }
    return new ast::ASTValue();
  }

} // namespace mavka::parser