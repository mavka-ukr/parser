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
      const auto mrm_diia_node = new ast::MRMDiiaNode();
      fill_ast_value(mrm_diia_node, context);
      // <дія>inner</дія>
      const auto mrm_diia_text = context->mrm_diia()->getText();
      const auto mrm_diia_text_inner = mrm_diia_text.substr(
          1 + 6 + 1, mrm_diia_text.length() - (2 + 6 + 1 + (1 + 6 + 1)));
      mrm_diia_node->body = mrm_diia_text_inner;
      return ast::make_ast_some(mrm_diia_node);
    }
    return new ast::ASTSome();
  }
} // namespace mavka::parser