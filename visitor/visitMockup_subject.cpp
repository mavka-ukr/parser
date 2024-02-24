#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMockup_subject(
      MavkaParser::Mockup_subjectContext* context) {
    const auto mockup_subject_node = new ast::MockupSubjectNode();
    fill_ast_value(mockup_subject_node, context);
    mockup_subject_node->name = context->ms_name->getText();
    mockup_subject_node->types = std::any_cast<std::vector<ast::TypeNode*>>(
        visitType_value(context->ms_type));
    return (ast::make_ast_some(mockup_subject_node));
  }
} // namespace mavka::parser