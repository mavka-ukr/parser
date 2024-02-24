#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitProgram(MavkaParser::ProgramContext* context) {
    std::vector<ast::ASTValue*> body;
    for (const auto program_element : context->program_element()) {
      const auto ast_some =
          any_to_ast_value(visitProgram_element(program_element));
      body.push_back(ast_some);
    }
    processASTBody(body);
    const auto module_node = new ast::ModuleNode();
    module_node->body = body;
    return make_ast_value(ast::KindModuleNode, module_node);
  }
} // namespace mavka::parser