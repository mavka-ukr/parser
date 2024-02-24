#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMrm_element(
      MavkaParser::Mrm_elementContext* context) {
    const auto call_node = new ast::CallNode();
    fill_ast_value(call_node, context);
    if (context->me_name->getText() != context->me_end_name->getText()) {
      const auto mavka_parser_error = new MavkaParserError();
      mavka_parser_error->line = context->me_name->getStart()->getLine();
      mavka_parser_error->column =
          context->me_name->getStart()->getCharPositionInLine();
      mavka_parser_error->message = "Назва тегу не збігається з закриваючим.";
      throw mavka_parser_error;
    }
    call_node->value =
        any_to_ast_value(visitIdentifiers_chain(context->me_name));
    if (context->me_args) {
      size_t i = 0;
      for (const auto mrm_arg : context->me_args->mrm_arg()) {
        const auto arg_node = new ast::Arg();
        fill_ast_value(arg_node, mrm_arg);
        arg_node->index = i;
        arg_node->name = mrm_arg->ma_name->getText();
        arg_node->value = any_to_ast_value(_visitContext(mrm_arg->ma_value));
        call_node->args.push_back(arg_node);
        i++;
      }
    }
    const auto content_array_node = new ast::ListNode();
    if (context->me_content->children.empty()) {
      const auto hidden_tokens_right = this->tokens->getHiddenTokensToRight(
          context->me_me->getTokenIndex(), 1);
      const auto string_node = new ast::StringNode();
      for (const auto token : hidden_tokens_right) {
        string_node->value += token->getText();
      }
      content_array_node->elements.push_back(ast::make_ast_some(string_node));
    } else {
      for (int i = 0; i < context->me_content->children.size(); ++i) {
        const auto mrm_element = context->me_content->children[i];
        const auto is_first = i == 0;
        const auto is_last = i == context->me_content->children.size() - 1;
        if (const auto mrm_chardata =
                dynamic_cast<MavkaParser::Mrm_chardataContext*>(mrm_element)) {
          const auto string_node = new ast::StringNode();
          fill_ast_value(string_node, mrm_chardata);
          const auto tokens =
              this->tokens->getTokens(mrm_chardata->getStart()->getTokenIndex(),
                                      mrm_chardata->getStop()->getTokenIndex());
          const auto hidden_tokens_left = this->tokens->getHiddenTokensToLeft(
              mrm_chardata->getStart()->getTokenIndex(), 1);
          const auto hidden_tokens_right = this->tokens->getHiddenTokensToRight(
              mrm_chardata->getStop()->getTokenIndex(), 1);
          for (const auto token : hidden_tokens_left) {
            string_node->value += token->getText();
          }
          for (const auto token : tokens) {
            string_node->value += token->getText();
          }
          for (const auto token : hidden_tokens_right) {
            string_node->value += token->getText();
          }
          const auto lines = tools::explode(string_node->value, "\n");
          std::vector<std::string> new_lines;
          for (int j = 0; j < lines.size(); ++j) {
            const auto& line = lines[j];
            const auto new_line = tools::trim(line);
            if (new_line.empty()) {
              if ((j == 0) && (j == lines.size() - 1)) {
                new_lines.push_back(line);
              }
            } else {
              if ((j == 0) && (j == lines.size() - 1)) {
                new_lines.push_back(line);
              } else if (j == 0) {
                new_lines.push_back(tools::rtrim(line));
              } else if (j == lines.size() - 1) {
                new_lines.push_back(tools::ltrim(line));
              } else {
                new_lines.push_back(new_line);
              }
            }
          }
          string_node->value = tools::implode(new_lines, " ");
          content_array_node->elements.push_back(
              ast::make_ast_some(string_node));
        }
        if (const auto mrm_child =
                dynamic_cast<MavkaParser::MrmContext*>(mrm_element)) {
          const auto ast_result = any_to_ast_value(visitMrm(mrm_child));

          const auto hidden_tokens_left = this->tokens->getHiddenTokensToLeft(
              mrm_child->getStart()->getTokenIndex(), 1);
          const auto hidden_tokens_left_node = new ast::StringNode();
          for (const auto token : hidden_tokens_left) {
            hidden_tokens_left_node->value += token->getText();
          }
          if (is_first &&
              hidden_tokens_left_node->value.find('\n') == std::string::npos &&
              !hidden_tokens_left_node->value.empty()) {
            content_array_node->elements.push_back(
                ast::make_ast_some(hidden_tokens_left_node));
          }

          content_array_node->elements.push_back(ast_result);

          const auto hidden_tokens_right = this->tokens->getHiddenTokensToRight(
              mrm_child->getStop()->getTokenIndex(), 1);
          const auto hidden_tokens_right_node = new ast::StringNode();
          for (const auto token : hidden_tokens_right) {
            hidden_tokens_right_node->value += token->getText();
          }
          if (is_last &&
              hidden_tokens_right_node->value.find('\n') == std::string::npos &&
              !hidden_tokens_right_node->value.empty()) {
            content_array_node->elements.push_back(
                ast::make_ast_some(hidden_tokens_right_node));
          }
        }
      }
    }
    const auto children_arg_node = new ast::Arg();
    children_arg_node->index = call_node->args.size();
    children_arg_node->name = "дочірні";
    children_arg_node->value = ast::make_ast_some(content_array_node);
    call_node->args.push_back(children_arg_node);
    return ast::make_ast_some(call_node);
  }
} // namespace mavka::parser