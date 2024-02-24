#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitParam_value(
      MavkaParser::Param_valueContext* context) {
    if (tools::instance_of<MavkaParser::Param_value_stringContext>(context)) {
      return visitParam_value_string(
          dynamic_cast<MavkaParser::Param_value_stringContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Param_value_numberContext>(context)) {
      return visitParam_value_number(
          dynamic_cast<MavkaParser::Param_value_numberContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Param_value_identifierContext>(
            context)) {
      return visitParam_value_identifier(
          dynamic_cast<MavkaParser::Param_value_identifierContext*>(context));
    }
    if (tools::instance_of<MavkaParser::Param_value_empty_dictionaryContext>(
            context)) {
      return visitParam_value_empty_dictionary(
          dynamic_cast<MavkaParser::Param_value_empty_dictionaryContext*>(
              context));
    }
    if (tools::instance_of<MavkaParser::Param_value_empty_listContext>(
            context)) {
      return visitParam_value_empty_list(
          dynamic_cast<MavkaParser::Param_value_empty_listContext*>(context));
    }
    return new ast::ASTValue();
  }
} // namespace mavka::parser