#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitMrm_element(
      MavkaParser::Mrm_elementContext* context) {
    const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
    fill_ast_value(call_ast_value, context);
    if (context->me_name->getText() != context->me_end_name->getText()) {
      const auto mavka_parser_error = new MavkaParserError();
      mavka_parser_error->line = context->me_name->getStart()->getLine();
      mavka_parser_error->column =
          context->me_name->getStart()->getCharPositionInLine();
      mavka_parser_error->message = "Назва тегу не збігається з закриваючим.";
      throw mavka_parser_error;
    }
    call_ast_value->data.CallNode->value =
        any_to_ast_value(visitIdentifiers_chain(context->me_name));
    if (context->me_args) {
      size_t i = 0;
      for (const auto mrm_arg : context->me_args->mrm_arg()) {
        const auto arg = new ast::ArgNode();
        arg->index = i;
        arg->name = mrm_arg->ma_name->getText();
        arg->value = any_to_ast_value(_visitContext(mrm_arg->ma_value));
        call_ast_value->data.CallNode->args.push_back(
            ast::ArgNode::ast_value(arg));
        i++;
      }
    }
    const auto content_array_ast_value =
        ast::ListNode::ast_value(new ast::ListNode());
    if (context->me_content->children.empty()) {
      const auto hidden_tokens_right = this->tokens->getHiddenTokensToRight(
          context->me_me->getTokenIndex(), 1);
      const auto string_ast_value =
          ast::StringNode::ast_value(new ast::StringNode());
      for (const auto token : hidden_tokens_right) {
        string_ast_value->data.StringNode->value += token->getText();
      }
      content_array_ast_value->data.ListNode->elements.push_back(
          string_ast_value);
    } else {
      for (int i = 0; i < context->me_content->children.size(); ++i) {
        const auto mrm_element = context->me_content->children[i];
        const auto is_first = i == 0;
        const auto is_last = i == context->me_content->children.size() - 1;
        if (const auto mrm_chardata =
                dynamic_cast<MavkaParser::Mrm_chardataContext*>(mrm_element)) {
          const auto string_ast_value =
              ast::StringNode::ast_value(new ast::StringNode());
          fill_ast_value(string_ast_value, mrm_chardata);
          const auto tokens =
              this->tokens->getTokens(mrm_chardata->getStart()->getTokenIndex(),
                                      mrm_chardata->getStop()->getTokenIndex());
          const auto hidden_tokens_left = this->tokens->getHiddenTokensToLeft(
              mrm_chardata->getStart()->getTokenIndex(), 1);
          const auto hidden_tokens_right = this->tokens->getHiddenTokensToRight(
              mrm_chardata->getStop()->getTokenIndex(), 1);
          for (const auto token : hidden_tokens_left) {
            string_ast_value->data.StringNode->value += token->getText();
          }
          for (const auto token : tokens) {
            string_ast_value->data.StringNode->value += token->getText();
          }
          for (const auto token : hidden_tokens_right) {
            string_ast_value->data.StringNode->value += token->getText();
          }
          const auto lines =
              tools::explode(string_ast_value->data.StringNode->value, "\n");
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
          string_ast_value->data.StringNode->value =
              tools::implode(new_lines, " ");
          content_array_ast_value->data.ListNode->elements.push_back(
              string_ast_value);
        }
        if (const auto mrm_child =
                dynamic_cast<MavkaParser::MrmContext*>(mrm_element)) {
          const auto ast_result = any_to_ast_value(visitMrm(mrm_child));

          const auto hidden_tokens_left = this->tokens->getHiddenTokensToLeft(
              mrm_child->getStart()->getTokenIndex(), 1);
          const auto hidden_tokens_left_ast_value =
              ast::StringNode::ast_value(new ast::StringNode());
          for (const auto token : hidden_tokens_left) {
            hidden_tokens_left_ast_value->data.StringNode->value +=
                token->getText();
          }
          if (is_first &&
              hidden_tokens_left_ast_value->data.StringNode->value.find('\n') ==
                  std::string::npos &&
              !hidden_tokens_left_ast_value->data.StringNode->value.empty()) {
            content_array_ast_value->data.ListNode->elements.push_back(
                hidden_tokens_left_ast_value);
          }

          content_array_ast_value->data.ListNode->elements.push_back(
              ast_result);

          const auto hidden_tokens_right = this->tokens->getHiddenTokensToRight(
              mrm_child->getStop()->getTokenIndex(), 1);
          const auto hidden_tokens_right_ast_value =
              ast::StringNode::ast_value(new ast::StringNode());
          for (const auto token : hidden_tokens_right) {
            hidden_tokens_right_ast_value->data.StringNode->value +=
                token->getText();
          }
          if (is_last &&
              hidden_tokens_right_ast_value->data.StringNode->value.find(
                  '\n') == std::string::npos &&
              !hidden_tokens_right_ast_value->data.StringNode->value.empty()) {
            content_array_ast_value->data.ListNode->elements.push_back(
                hidden_tokens_right_ast_value);
          }
        }
      }
    }
    const auto children_arg_node = new ast::ArgNode();
    children_arg_node->index = call_ast_value->data.CallNode->args.size();
    children_arg_node->name = "дочірні";
    children_arg_node->value = content_array_ast_value;
    call_ast_value->data.CallNode->args.push_back(
        ast::ArgNode::ast_value(children_arg_node));
    return call_ast_value;
  }
} // namespace mavka::parser