#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitCall(MavkaParser::CallContext* context) {
    const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
    fill_ast_value(call_ast_value, context);
    call_ast_value->data.CallNode->value =
        any_to_ast_value(_visitContext(context->c_value));
    if (context->call_generics()) {
      call_ast_value->data.CallNode->generics =
          std::any_cast<std::vector<ast::TypeUnionNode*>>(
              visitCall_generics(context->call_generics()));
    }
    if (context->c_args) {
      call_ast_value->data.CallNode->args =
          std::any_cast<std::vector<ast::Arg*>>(visitArgs(context->c_args));
    }
    if (context->c_named_args) {
      call_ast_value->data.CallNode->args =
          std::any_cast<std::vector<ast::Arg*>>(
              visitNamed_args(context->c_named_args));
    }
    return call_ast_value;
  }
} // namespace mavka::parser