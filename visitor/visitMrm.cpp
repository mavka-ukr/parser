#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMrm(MavkaParser::MrmContext* context) {
    if (context->mrm_element()) {
      return visitMrm_element(context->mrm_element());
    }
    if (context->mrm_element_closed()) {
      return visitMrm_element_closed(context->mrm_element_closed());
    }
    if (context->mrm_diia()) {
      const auto mrm_diia_ast_value =
          ast::MRMDiiaNode::ast_value(new ast::MRMDiiaNode());
      fill_ast_value(mrm_diia_ast_value, context);
      // <дія>inner</дія>
      const auto mrm_diia_text = context->mrm_diia()->getText();
      const auto mrm_diia_text_inner = mrm_diia_text.substr(
          1 + 6 + 1, mrm_diia_text.length() - (2 + 6 + 1 + (1 + 6 + 1)));
      mrm_diia_ast_value->data.MRMDiiaNode->body = mrm_diia_text_inner;
      return mrm_diia_ast_value;
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser