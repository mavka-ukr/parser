#include "ast.h"

namespace mavka::ast {
  std::string ASTValue::to_string() const {
    if (this->kind == KindArgNode) {
      return this->data.ArgNode->to_string();
    }
    if (this->kind == KindPropertySetNode) {
      return this->data.PropertySetNode->to_string();
    }
    if (this->kind == KindAssignNode) {
      return this->data.AssignNode->to_string();
    }
    if (this->kind == KindBinaryNode) {
      return this->data.BinaryNode->to_string();
    }
    if (this->kind == KindBlockNode) {
      return this->data.BlockNode->to_string();
    }
    if (this->kind == KindBreakNode) {
      return this->data.BreakNode->to_string();
    }
    if (this->kind == KindCallNode) {
      return this->data.CallNode->to_string();
    }
    if (this->kind == KindPropertyGetNode) {
      return this->data.PropertyGetNode->to_string();
    }
    if (this->kind == KindCompInstBlockProgramNode) {
      return this->data.CompInstBlockProgramNode->to_string();
    }
    if (this->kind == KindCompInstAssignNode) {
      return this->data.CompInstAssignNode->to_string();
    }
    if (this->kind == KindContinueNode) {
      return this->data.ContinueNode->to_string();
    }
    if (this->kind == KindDictionaryNode) {
      return this->data.DictionaryNode->to_string();
    }
    if (this->kind == KindDictionaryElementNode) {
      return this->data.DictionaryElementNode->to_string();
    }
    if (this->kind == KindDiiaNode) {
      return this->data.DiiaNode->to_string();
    }
    if (this->kind == KindGenericNode) {
      return this->data.GenericNode->to_string();
    }
    if (this->kind == KindGiveElementNode) {
      return this->data.GiveElementNode->to_string();
    }
    if (this->kind == KindGiveNode) {
      return this->data.GiveNode->to_string();
    }
    if (this->kind == KindGodNode) {
      return this->data.GodNode->to_string();
    }
    if (this->kind == KindIdentifierNode) {
      return this->data.IdentifierNode->to_string();
    }
    if (this->kind == KindIfNode) {
      return this->data.IfNode->to_string();
    }
    if (this->kind == KindListNode) {
      return this->data.ListNode->to_string();
    }
    if (this->kind == KindMockupDiiaNode) {
      return this->data.MockupDiiaNode->to_string();
    }
    if (this->kind == KindMockupModuleNode) {
      return this->data.MockupModuleNode->to_string();
    }
    if (this->kind == KindMockupStructureNode) {
      return this->data.MockupStructureNode->to_string();
    }
    if (this->kind == KindMockupSubjectNode) {
      return this->data.MockupSubjectNode->to_string();
    }
    if (this->kind == KindModuleNode) {
      return this->data.ModuleNode->to_string();
    }
    if (this->kind == KindMRMDiiaNode) {
      return this->data.MRMDiiaNode->to_string();
    }
    if (this->kind == KindNumberNode) {
      return this->data.NumberNode->to_string();
    }
    if (this->kind == KindUnaryNode) {
      return this->data.UnaryNode->to_string();
    }
    if (this->kind == KindParamNode) {
      return this->data.ParamNode->to_string();
    }
    if (this->kind == KindReturnNode) {
      return this->data.ReturnNode->to_string();
    }
    if (this->kind == KindStringNode) {
      return this->data.StringNode->to_string();
    }
    if (this->kind == KindStructureNode) {
      return this->data.StructureNode->to_string();
    }
    if (this->kind == KindTakeNode) {
      return this->data.TakeNode->to_string();
    }
    if (this->kind == KindTernaryNode) {
      return this->data.TernaryNode->to_string();
    }
    if (this->kind == KindTestNode) {
      return this->data.TestNode->to_string();
    }
    if (this->kind == KindThrowNode) {
      return this->data.ThrowNode->to_string();
    }
    if (this->kind == KindTryNode) {
      return this->data.TryNode->to_string();
    }
    if (this->kind == KindTypeNode) {
      return this->data.TypeNode->to_string();
    }
    if (this->kind == KindTypeUnionNode) {
      return this->data.TypeUnionNode->to_string();
    }
    if (this->kind == KindWaitNode) {
      return this->data.WaitNode->to_string();
    }
    if (this->kind == KindWhileNode) {
      return this->data.WhileNode->to_string();
    }
    return "WAT";
  }

  bool is_ast_value_returnable(const ASTValue* ast_value) {
    if (ast_value->kind == KindBinaryNode) {
      return true;
    }
    if (ast_value->kind == KindCallNode) {
      return true;
    }
    if (ast_value->kind == KindPropertyGetNode) {
      return true;
    }
    if (ast_value->kind == KindDictionaryNode) {
      return true;
    }
    if (ast_value->kind == KindDiiaNode) {
      return true;
    }
    if (ast_value->kind == KindGodNode) {
      return true;
    }
    if (ast_value->kind == KindIdentifierNode) {
      return true;
    }
    if (ast_value->kind == KindListNode) {
      return true;
    }
    if (ast_value->kind == KindNumberNode) {
      return true;
    }
    if (ast_value->kind == KindUnaryNode) {
      return true;
    }
    if (ast_value->kind == KindStringNode) {
      return true;
    }
    if (ast_value->kind == KindStructureNode) {
      return true;
    }
    if (ast_value->kind == KindTernaryNode) {
      return true;
    }
    if (ast_value->kind == KindTestNode) {
      return true;
    }
    return false;
  }

  ASTValue* module_ast_value_to_diia_call_ast_value(ASTValue* module_ast_value,
                                                    const std::string& path) {
    const auto module_node = module_ast_value->data.ModuleNode;

    // (
    //   дія()
    //     ...
    //   кінець
    // )()
    const auto call_node = new CallNode();
    const auto call_ast_value = new ASTValue(KindCallNode);
    call_ast_value->data.CallNode = call_node;

    // дія()
    //   я = створити_модуль("назва")
    //   ...
    // кінець
    const auto diia_node = new DiiaNode();
    diia_node->name = module_node->name;
    diia_node->anonymous = true;
    const auto diia_ast_value = new ASTValue(KindDiiaNode);
    diia_ast_value->data.DiiaNode = diia_node;

    for (auto& ast_value : module_node->body) {
      if (ast_value->kind == KindGiveNode) {
        // я.назва = значення
        const auto give_node = ast_value->data.GiveNode;
        for (auto& give_element_ast_value : give_node->elements) {
          const auto give_element_node =
              give_element_ast_value->data.GiveElementNode;

          const auto property_set_node = new PropertySetNode();
          const auto property_set_ast_value = new ASTValue(KindPropertySetNode);
          property_set_ast_value->data.PropertySetNode = property_set_node;

          // я
          const auto me_identifier_node = new IdentifierNode();
          me_identifier_node->name = "я";
          const auto me_identifier_ast_value = new ASTValue(KindIdentifierNode);
          me_identifier_ast_value->data.IdentifierNode = me_identifier_node;

          property_set_node->left = me_identifier_ast_value;

          // .назва
          if (give_element_node->as.empty()) {
            property_set_node->name = give_element_node->name;
          } else {
            property_set_node->name = give_element_node->as;
          }

          // значення
          const auto name_identifier_node = new IdentifierNode();
          name_identifier_node->name = give_element_node->name;
          const auto name_identifier_ast_value =
              new ASTValue(KindIdentifierNode);
          name_identifier_ast_value->data.IdentifierNode = name_identifier_node;

          property_set_node->value = name_identifier_ast_value;

          diia_node->body.push_back(property_set_ast_value);
        }
      } else {
        diia_node->body.push_back(ast_value);
      }
    }

    // створити_модуль("назва")
    const auto create_module_call_node = new CallNode();
    const auto create_module_call_ast_value = new ASTValue(KindCallNode);
    create_module_call_ast_value->data.CallNode = create_module_call_node;

    const auto create_module_call_node_identifier_node = new IdentifierNode();
    create_module_call_node_identifier_node->name = "створити_модуль";
    const auto create_module_call_node_identifier_ast_value =
        new ASTValue(KindIdentifierNode);
    create_module_call_node_identifier_ast_value->data.IdentifierNode =
        create_module_call_node_identifier_node;

    create_module_call_node->value =
        create_module_call_node_identifier_ast_value;

    const auto name_string_node = new StringNode();
    name_string_node->value = module_node->name;
    const auto name_string_ast_value = new ASTValue(KindStringNode);
    name_string_ast_value->data.StringNode = name_string_node;
    const auto name_arg_node = new ArgNode();
    name_arg_node->index = 0;
    name_arg_node->value = name_string_ast_value;
    const auto name_arg_ast_value = new ASTValue(KindArgNode);
    name_arg_ast_value->data.ArgNode = name_arg_node;
    create_module_call_node->args.push_back(name_arg_ast_value);

    if (!path.empty()) {
      const auto path_string_node = new StringNode();
      path_string_node->value = path;
      const auto path_string_ast_value = new ASTValue(KindStringNode);
      path_string_ast_value->data.StringNode = path_string_node;
      const auto path_arg_node = new ArgNode();
      path_arg_node->index = 0;
      path_arg_node->value = path_string_ast_value;
      const auto path_arg_ast_value = new ASTValue(KindArgNode);
      path_arg_ast_value->data.ArgNode = path_arg_node;
      create_module_call_node->args.push_back(path_arg_ast_value);
    }

    // я = створити_модуль("назва")
    const auto assign_create_module_call_node = new AssignNode();
    assign_create_module_call_node->name = "я";
    assign_create_module_call_node->value = create_module_call_ast_value;
    const auto assign_create_module_call_ast_value =
        new ASTValue(KindAssignNode);
    assign_create_module_call_ast_value->data.AssignNode =
        assign_create_module_call_node;

    // prepend body with я = створити_модуль("назва")
    diia_node->body.insert(diia_node->body.begin(),
                           assign_create_module_call_ast_value);

    // вернути я
    const auto return_identifier_node = new IdentifierNode();
    return_identifier_node->name = "я";
    const auto return_identifier_ast_value = new ASTValue(KindIdentifierNode);
    return_identifier_ast_value->start_line = module_ast_value->start_line;
    return_identifier_ast_value->start_column = module_ast_value->start_column;
    return_identifier_ast_value->end_line = module_ast_value->end_line;
    return_identifier_ast_value->end_column = module_ast_value->end_column;
    return_identifier_ast_value->data.IdentifierNode = return_identifier_node;
    const auto return_node = new ReturnNode();
    return_node->value = return_identifier_ast_value;
    const auto return_ast_value = new ASTValue(KindReturnNode);
    return_ast_value->start_line = module_ast_value->start_line;
    return_ast_value->start_column = module_ast_value->start_column;
    return_ast_value->end_line = module_ast_value->end_line;
    return_ast_value->end_column = module_ast_value->end_column;
    return_ast_value->data.ReturnNode = return_node;

    // append body with вернути я
    diia_node->body.push_back(return_ast_value);

    call_node->value = diia_ast_value;

    return call_ast_value;
  }
} // namespace mavka::ast