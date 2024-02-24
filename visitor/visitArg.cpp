#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitArg(MavkaParser::ArgContext* context,
                                     int index) {
    const auto arg = new ast::Arg();
    arg->index = index;
    arg->value = any_to_ast_value(_visitContext(context->a_value));
    return arg;
  }
} // namespace mavka::parser