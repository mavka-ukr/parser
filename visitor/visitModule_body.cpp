#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitModule_body(
      MavkaParser::Module_bodyContext* context) {
    std::vector<ast::ASTValue*> body;
    for (const auto module_element : context->module_body_element()) {
      const auto ast_result =
          any_to_ast_value(visitModule_body_element(module_element));
      body.push_back(ast_result);
    }
    processASTBody(body);
    return body;
  }
} // namespace mavka::parser