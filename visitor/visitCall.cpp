#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitCall(MavkaParser::CallContext* context) {
    const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
    fill_ast_value(call_ast_value, context);
    call_ast_value->data.CallNode->value =
        any_to_ast_value(_visitContext(context->c_value));
    if (context->call_generics()) {
      call_ast_value->data.CallNode->generics =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitCall_generics(context->call_generics()));
    }
    if (context->c_args) {
      call_ast_value->data.CallNode->args =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitArgs(context->c_args));
    }
    if (context->c_named_args) {
      call_ast_value->data.CallNode->args =
          std::any_cast<std::vector<ast::ASTValue*>>(
              visitNamed_args(context->c_named_args));
    }
    return call_ast_value;
  }

  std::any MavkaASTVisitor::visitCall_generics(
      MavkaParser::Call_genericsContext* context) {
    std::vector<ast::ASTValue*> generics;
    for (const auto type_value_node : context->type_value()) {
      const auto type_value_result =
          any_to_ast_value(visitType_value(type_value_node));
      generics.push_back(type_value_result);
    }
    return generics;
  }
} // namespace mavka::parser