#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitFromto_value(
      MavkaParser::Fromto_valueContext* context) {
    //    if (tools::instance_of<MavkaParser::Fromto_numberContext>(context)) {
    //      const auto number_node = new ast::NumberNode();
    //      fill_ast_value(number_node, context);
    //      number_node->value = process_number(
    //          dynamic_cast<MavkaParser::Fromto_numberContext*>(context)
    //              ->number_token()
    //              ->getText());
    //      return (ast::make_ast_some(number_node));
    //    }
    //    if (tools::instance_of<MavkaParser::Fromto_idContext>(context)) {
    //      return visitIdentifier(
    //          dynamic_cast<MavkaParser::Fromto_idContext*>(context)->identifier());
    //    }
    //    if (tools::instance_of<MavkaParser::Fromto_nestedContext>(context)) {
    //      return _visitContext(
    //          dynamic_cast<MavkaParser::Fromto_nestedContext*>(context)->fn_value);
    //    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser