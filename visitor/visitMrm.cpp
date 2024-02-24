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
      for (const auto mrm_arg_context : context->me_args->mrm_arg()) {
        const auto arg_ast_value = ast::ArgNode::ast_value(new ast::ArgNode());
        fill_ast_value(arg_ast_value, mrm_arg_context);
        arg_ast_value->data.ArgNode->index = i;
        arg_ast_value->data.ArgNode->name = mrm_arg_context->ma_name->getText();
        arg_ast_value->data.ArgNode->value =
            any_to_ast_value(_visitContext(mrm_arg_context->ma_value));
        call_ast_value->data.CallNode->args.push_back(arg_ast_value);
        i++;
      }
    }
    const auto content_array_ast_value =
        ast::ListNode::ast_value(new ast::ListNode());
    fill_ast_value(content_array_ast_value, context);
    if (context->me_content->children.empty()) {
      const auto hidden_tokens_right = this->tokens->getHiddenTokensToRight(
          context->me_me->getTokenIndex(), 1);
      const auto string_ast_value =
          ast::StringNode::ast_value(new ast::StringNode());
      fill_ast_value(string_ast_value, context->me_content);
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
          fill_ast_value(hidden_tokens_left_ast_value, mrm_child);
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
          fill_ast_value(hidden_tokens_right_ast_value, mrm_child);
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
    const auto children_arg_ast_value =
        ast::ArgNode::ast_value(new ast::ArgNode());
    fill_ast_value(children_arg_ast_value, context);
    children_arg_ast_value->data.ArgNode->index =
        call_ast_value->data.CallNode->args.size();
    children_arg_ast_value->data.ArgNode->name = "дочірні";
    children_arg_ast_value->data.ArgNode->value = content_array_ast_value;
    call_ast_value->data.CallNode->args.push_back(children_arg_ast_value);
    return call_ast_value;
  }
} // namespace mavka::parser