#include "../parser.h"

namespace mavka::parser {
  std::any MavkaASTVisitor::visitAssign(MavkaParser::AssignContext* context) {
    if (context->assign_simple()) {
      return visitAssign_simple(context->assign_simple());
    }
    if (context->assign_by_identifier()) {
      return visitAssign_by_identifier(context->assign_by_identifier());
    }
    if (context->assign_by_element()) {
      return visitAssign_by_element(context->assign_by_element());
    }
    return new ast::ASTValue();
  }

  std::any MavkaASTVisitor::visitAssign_simple(
      MavkaParser::Assign_simpleContext* context) {
    const auto op_text = context->assign_symbol()->getText();
    if (op_text != "=" && op_text != "це" && op_text != ":= ") {
      const auto assign_ast_value =
          ast::AssignNode::ast_value(new ast::AssignNode());
      fill_ast_value(assign_ast_value, context);
      assign_ast_value->data.AssignNode->name =
          context->as_identifier->ID()->getText();
      const auto binary_ast_value =
          ast::BinaryNode::ast_value(new ast::BinaryNode());
      fill_ast_value(binary_ast_value, context);
      binary_ast_value->data.BinaryNode->left = ast::IdentifierNode::ast_value(
          new ast::IdentifierNode(assign_ast_value->data.AssignNode->name));
      fill_ast_value(binary_ast_value->data.BinaryNode->left, context);
      binary_ast_value->data.BinaryNode->right =
          any_to_ast_value(_visitContext(context->as_value));
      if (op_text == "+=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_ADD;
      } else if (op_text == "-=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_SUB;
      } else if (op_text == "*=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_MUL;
      } else if (op_text == "/=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_DIV;
      } else if (op_text == "%=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_MOD;
      } else if (op_text == "//=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_DIVDIV;
      } else if (op_text == "**=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_POW;
      } else if (op_text == "&=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_AND;
      } else if (op_text == "|=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_OR;
      } else if (op_text == "^=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_XOR;
      } else if (op_text == "<<=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_SHIFT_LEFT;
      } else if (op_text == ">>=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_SHIFT_RIGHT;
      } else {
        throw std::runtime_error("Unknown operation: " + op_text);
      }
      assign_ast_value->data.AssignNode->value = binary_ast_value;
      return assign_ast_value;
    }
    const auto assign_ast_value =
        ast::AssignNode::ast_value(new ast::AssignNode());
    fill_ast_value(assign_ast_value, context);
    assign_ast_value->data.AssignNode->name =
        context->as_identifier->ID()->getText();
    if (context->as_type) {
      assign_ast_value->data.AssignNode->types =
          std::any_cast<ast::ASTValue*>(visitType_value(context->as_type));
    }
    assign_ast_value->data.AssignNode->value =
        any_to_ast_value(_visitContext(context->as_value));
    assign_ast_value->data.AssignNode->parent = op_text == ":=";
    return assign_ast_value;
  }

  std::any MavkaASTVisitor::visitAssign_by_identifier(
      MavkaParser::Assign_by_identifierContext* context) {
    const auto op_text = context->assign_symbol()->getText();
    if (op_text != "=" && op_text != "це") {
      const auto abi_left_ast_value =
          any_to_ast_value(visitSuper_identifiers_chain(context->abi_left));
      const auto abi_identifier = context->abi_identifier->getText();
      const auto property_set_ast_value =
          ast::PropertySetNode::ast_value(new ast::PropertySetNode());
      fill_ast_value(property_set_ast_value, context);
      property_set_ast_value->data.PropertySetNode->left = abi_left_ast_value;
      property_set_ast_value->data.PropertySetNode->name = abi_identifier;
      const auto property_get_ast_value =
          ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
      fill_ast_value(property_get_ast_value, context);
      property_get_ast_value->data.PropertyGetNode->left = abi_left_ast_value;
      property_get_ast_value->data.PropertyGetNode->name = abi_identifier;
      const auto binary_ast_value =
          ast::BinaryNode::ast_value(new ast::BinaryNode());
      fill_ast_value(binary_ast_value, context);
      binary_ast_value->data.BinaryNode->left = property_get_ast_value;
      fill_ast_value(binary_ast_value->data.BinaryNode->left, context);
      binary_ast_value->data.BinaryNode->right =
          any_to_ast_value(_visitContext(context->abi_value));
      if (op_text == "+=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_ADD;
      } else if (op_text == "-=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_SUB;
      } else if (op_text == "*=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_MUL;
      } else if (op_text == "/=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_DIV;
      } else if (op_text == "%=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_MOD;
      } else if (op_text == "//=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_DIVDIV;
      } else if (op_text == "**=") {
        binary_ast_value->data.BinaryNode->op = ast::ARITHMETIC_POW;
      } else if (op_text == "&=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_AND;
      } else if (op_text == "|=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_OR;
      } else if (op_text == "^=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_XOR;
      } else if (op_text == "<<=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_SHIFT_LEFT;
      } else if (op_text == ">>=") {
        binary_ast_value->data.BinaryNode->op = ast::BITWISE_SHIFT_RIGHT;
      } else {
        throw std::runtime_error("Unknown operation: " + op_text);
      }
      property_set_ast_value->data.PropertySetNode->value = binary_ast_value;
      return property_set_ast_value;
    }
    const auto property_set_ast_value =
        ast::PropertySetNode::ast_value(new ast::PropertySetNode());
    fill_ast_value(property_set_ast_value, context);
    property_set_ast_value->data.PropertySetNode->left =
        any_to_ast_value(visitSuper_identifiers_chain(context->abi_left));
    property_set_ast_value->data.PropertySetNode->name =
        context->abi_identifier->getText();
    property_set_ast_value->data.PropertySetNode->value =
        any_to_ast_value(_visitContext(context->abi_value));
    return property_set_ast_value;
  }

  std::any MavkaASTVisitor::visitAssign_by_element(
      MavkaParser::Assign_by_elementContext* context) {
    const auto op_text = context->assign_symbol()->getText();
    if (op_text != "=" && op_text != "це") {
      throw std::runtime_error("Unknown operation: " + op_text);
    }
    // значення.чародія_покласти
    const auto get_element_ast_value =
        ast::PropertyGetNode::ast_value(new ast::PropertyGetNode());
    fill_ast_value(get_element_ast_value, context);
    get_element_ast_value->data.PropertyGetNode->left =
        any_to_ast_value(visitSuper_identifiers_chain(context->abe_left));
    get_element_ast_value->data.PropertyGetNode->name = "чародія_покласти";
    // значення.чародія_покласти(елемент, значення)
    const auto call_ast_value = ast::CallNode::ast_value(new ast::CallNode());
    fill_ast_value(call_ast_value, context);
    call_ast_value->data.CallNode->value = get_element_ast_value;
    // елемент, значення
    const auto element_arg_ast_value =
        ast::ArgNode::ast_value(new ast::ArgNode());
    fill_ast_value(element_arg_ast_value, context);
    element_arg_ast_value->data.ArgNode->index = 0;
    element_arg_ast_value->data.ArgNode->value =
        any_to_ast_value(_visitContext(context->abe_index));
    const auto value_arg_ast_value =
        ast::ArgNode::ast_value(new ast::ArgNode());
    fill_ast_value(value_arg_ast_value, context);
    value_arg_ast_value->data.ArgNode->index = 1;
    value_arg_ast_value->data.ArgNode->value =
        any_to_ast_value(_visitContext(context->abe_value));
    call_ast_value->data.CallNode->args = {element_arg_ast_value,
                                           value_arg_ast_value};
    return call_ast_value;
  }

  std::any MavkaASTVisitor::visitAssign_symbol(
      MavkaParser::Assign_symbolContext* context) {
    return nullptr;
  }
} // namespace mavka::parser