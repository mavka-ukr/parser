#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitString_value(
      MavkaParser::String_valueContext* context) {
    const auto text = context->getText();
    if (text.starts_with(R"(""")")) {
      const auto string_value = text.substr(3, text.length() - 6);
      return process_string(context, string_value);
    } else {
      const auto string_value = text.substr(1, text.length() - 2);
      return process_string(context, string_value);
    }
  }
} // namespace mavka::parser