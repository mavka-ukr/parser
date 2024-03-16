#pragma once

#ifndef MAVKA_AST_H
#define MAVKA_AST_H

#include <map>
#include <string>
#include <vector>

namespace mavka::ast {
  struct ASTValue;
  struct ArgNode;
  struct PropertySetNode;
  struct AssignNode;
  struct BinaryNode;
  struct BlockNode;
  struct BreakNode;
  struct CallNode;
  struct PropertyGetNode;
  struct ComparisonNode;
  struct CompInstBlockProgramNode;
  struct CompInstAssignNode;
  struct ContinueNode;
  struct DictionaryNode;
  struct DictionaryElementNode;
  struct DiiaNode;
  struct GenericNode;
  struct GiveElementNode;
  struct GiveNode;
  struct GodNode;
  struct IdentifierNode;
  struct IfNode;
  struct ListNode;
  struct MockupDiiaNode;
  struct MockupModuleNode;
  struct MockupStructureNode;
  struct MockupSubjectNode;
  struct ModuleNode;
  struct MRMDiiaNode;
  struct NumberNode;
  struct ParamNode;
  struct ReturnNode;
  struct StringNode;
  struct StructureNode;
  struct TakeNode;
  struct TernaryNode;
  struct TestNode;
  struct ThrowNode;
  struct TryNode;
  struct TypeNode;
  struct UnaryNode;
  struct TypeUnionNode;
  struct WaitNode;
  struct WhileNode;

  enum BinaryOp {
    ARITHMETIC_ADD,
    ARITHMETIC_SUB,
    ARITHMETIC_MUL,
    ARITHMETIC_DIV,
    ARITHMETIC_MOD,
    ARITHMETIC_DIVDIV,
    ARITHMETIC_POW,
    BITWISE_AND,
    BITWISE_OR,
    BITWISE_XOR,
    BITWISE_SHIFT_LEFT,
    BITWISE_SHIFT_RIGHT,
    COMPARISON_EQ,
    COMPARISON_NE,
    COMPARISON_LT,
    COMPARISON_GT,
    COMPARISON_LE,
    COMPARISON_GE,
    COMPARISON_CONTAINS,
    COMPARISON_NOT_CONTAINS,
    COMPARISON_IS,
    COMPARISON_NOT_IS,
    UTIL_AS,
  };

  enum TestOp {
    TEST_OR,
    TEST_AND,
  };

  enum UnaryOp {
    UNARY_POSITIVE,
    UNARY_NEGATIVE,
    UNARY_NOT,
    UNARY_BITWISE_NOT,
  };

  enum ASTValueKind {
    KindNone,
    KindArgNode,
    KindPropertySetNode,
    KindAssignNode,
    KindBinaryNode,
    KindBlockNode,
    KindBreakNode,
    KindCallNode,
    KindPropertyGetNode,
    KindCompInstBlockProgramNode,
    KindCompInstAssignNode,
    KindContinueNode,
    KindDictionaryNode,
    KindDictionaryElementNode,
    KindDiiaNode,
    KindGenericNode,
    KindGiveElementNode,
    KindGiveNode,
    KindGodNode,
    KindIdentifierNode,
    KindIfNode,
    KindListNode,
    KindMockupDiiaNode,
    KindMockupModuleNode,
    KindMockupStructureNode,
    KindMockupSubjectNode,
    KindModuleNode,
    KindMRMDiiaNode,
    KindNumberNode,
    KindUnaryNode,
    KindParamNode,
    KindReturnNode,
    KindStringNode,
    KindStructureNode,
    KindTakeNode,
    KindTernaryNode,
    KindTestNode,
    KindThrowNode,
    KindTryNode,
    KindTypeNode,
    KindTypeUnionNode,
    KindWaitNode,
    KindWhileNode,
  };

  union ASTValueData {
    void* ref;
    mavka::ast::ArgNode* ArgNode;
    mavka::ast::PropertySetNode* PropertySetNode;
    mavka::ast::AssignNode* AssignNode;
    mavka::ast::BinaryNode* BinaryNode;
    mavka::ast::BlockNode* BlockNode;
    mavka::ast::BreakNode* BreakNode;
    mavka::ast::CallNode* CallNode;
    mavka::ast::PropertyGetNode* PropertyGetNode;
    mavka::ast::ComparisonNode* ComparisonNode;
    mavka::ast::CompInstBlockProgramNode* CompInstBlockProgramNode;
    mavka::ast::CompInstAssignNode* CompInstAssignNode;
    mavka::ast::ContinueNode* ContinueNode;
    mavka::ast::DictionaryElementNode* DictionaryElementNode;
    mavka::ast::DictionaryNode* DictionaryNode;
    mavka::ast::DiiaNode* DiiaNode;
    mavka::ast::GenericNode* GenericNode;
    mavka::ast::GiveElementNode* GiveElementNode;
    mavka::ast::GiveNode* GiveNode;
    mavka::ast::GodNode* GodNode;
    mavka::ast::IdentifierNode* IdentifierNode;
    mavka::ast::IfNode* IfNode;
    mavka::ast::ListNode* ListNode;
    mavka::ast::MockupDiiaNode* MockupDiiaNode;
    mavka::ast::MockupModuleNode* MockupModuleNode;
    mavka::ast::MockupStructureNode* MockupStructureNode;
    mavka::ast::MockupSubjectNode* MockupSubjectNode;
    mavka::ast::ModuleNode* ModuleNode;
    mavka::ast::MRMDiiaNode* MRMDiiaNode;
    mavka::ast::NumberNode* NumberNode;
    mavka::ast::ParamNode* ParamNode;
    mavka::ast::ReturnNode* ReturnNode;
    mavka::ast::StringNode* StringNode;
    mavka::ast::StructureNode* StructureNode;
    mavka::ast::TakeNode* TakeNode;
    mavka::ast::TernaryNode* TernaryNode;
    mavka::ast::TestNode* TestNode;
    mavka::ast::ThrowNode* ThrowNode;
    mavka::ast::TryNode* TryNode;
    mavka::ast::TypeNode* TypeNode;
    mavka::ast::UnaryNode* UnaryNode;
    mavka::ast::TypeUnionNode* TypeUnionNode;
    mavka::ast::WaitNode* WaitNode;
    mavka::ast::WhileNode* WhileNode;
  };

  struct ASTValue {
    ASTValueKind kind = KindNone;
    ASTValueData data = {.ref = nullptr};
    size_t start_line = 0;
    size_t start_column = 0;
    size_t end_line = 0;
    size_t end_column = 0;

    std::string to_string() const;
  };

  // перевіряє чи ноду можна використовувати вертати з дії
  bool is_ast_value_returnable(const ASTValue* ast_value);

  // перетворює ноду модуля в ноду виклику дії створення модуля
  ASTValue* module_ast_value_to_diia_call_ast_value(ASTValue* module_ast_value,
                                                    const std::string& path);

  struct ArgNode {
    size_t index;
    std::string name;
    ASTValue* value;

    inline std::string to_string() {
      if (this->name.empty()) {
        return this->value->to_string();
      }
      return this->name + " = " + this->value->to_string();
    }

    static ASTValue* ast_value(ArgNode* node) {
      const auto value = new ASTValue(KindArgNode);
      value->data.ArgNode = node;
      return value;
    }
  };

  struct ParamNode {
    bool ee = false;
    std::string name;
    ASTValue* type;
    ASTValue* value;
    bool variadic = false;

    inline std::string to_string() {
      if (this->value) {
        return this->name + " " + this->type->to_string() + " = " +
               this->value->to_string();
      }
      return this->name + " " + this->type->to_string();
    }

    static ASTValue* ast_value(ParamNode* node) {
      const auto value = new ASTValue(KindParamNode);
      value->data.ParamNode = node;
      return value;
    }
  };

  struct GenericNode {
    std::string name;

    inline std::string to_string() { return this->name; }

    static ASTValue* ast_value(GenericNode* node) {
      const auto value = new ASTValue(KindGenericNode);
      value->data.GenericNode = node;
      return value;
    }
  };

  struct DictionaryElementNode {
    ASTValue* key;
    ASTValue* value;

    inline std::string to_string() {
      return this->key->to_string() + "=" + this->value->to_string();
    }

    static ASTValue* ast_value(DictionaryElementNode* node) {
      const auto value = new ASTValue(KindDictionaryElementNode);
      value->data.DictionaryElementNode = node;
      return value;
    }
  };

  struct BinaryNode {
    BinaryOp op;
    ASTValue* left;
    ASTValue* right;

    inline std::string to_string() {
      return this->left->to_string() + " bin " + this->right->to_string();
    }

    static ASTValue* ast_value(BinaryNode* node) {
      const auto value = new ASTValue(KindBinaryNode);
      value->data.BinaryNode = node;
      return value;
    }
  };

  struct BlockNode {
    std::vector<ASTValue*> body;

    inline std::string to_string() {
      std::string result = "{";
      for (const auto& element : this->body) {
        result += element->to_string() + ";";
      }
      result += "}";
      return result;
    }

    static ASTValue* ast_value(BlockNode* node) {
      const auto value = new ASTValue(KindBlockNode);
      value->data.BlockNode = node;
      return value;
    }
  };

  struct ListNode {
    std::vector<ASTValue*> elements;

    inline std::string to_string() {
      std::string result = "[";
      for (const auto& element : this->elements) {
        result += element->to_string() + ",";
      }
      result += "]";
      return result;
    }

    static ASTValue* ast_value(ListNode* node) {
      const auto value = new ASTValue(KindListNode);
      value->data.ListNode = node;
      return value;
    }
  };

  struct PropertySetNode {
    ASTValue* left;
    std::string name;
    ASTValue* value;

    inline std::string to_string() {
      return this->left->to_string() + "." + this->name + " = " +
             this->value->to_string();
    }

    static ASTValue* ast_value(PropertySetNode* node) {
      const auto value = new ASTValue(KindPropertySetNode);
      value->data.PropertySetNode = node;
      return value;
    }
  };

  struct AssignNode {
    std::string name;
    ASTValue* types;
    ASTValue* value;
    bool parent;

    inline std::string to_string() {
      if (this->types) {
        return this->name + " " + this->types->to_string() + " = " +
               this->value->to_string();
      }
      return this->name + " = " + this->value->to_string();
    }

    static ASTValue* ast_value(AssignNode* node) {
      const auto value = new ASTValue(KindAssignNode);
      value->data.AssignNode = node;
      return value;
    }
  };

  struct BreakNode {
    size_t code_index;

    inline std::string to_string() { return "перервати"; }

    static ASTValue* ast_value(BreakNode* node) {
      const auto value = new ASTValue(KindBreakNode);
      value->data.BreakNode = node;
      return value;
    }
  };

  struct CallNode {
    ASTValue* value;
    std::vector<ASTValue*> generics;
    std::vector<ASTValue*> args;

    inline std::string to_string() {
      std::string result = "(" + this->value->to_string() + ")<";
      for (const auto& element : this->generics) {
        result += element->to_string() + ",";
      }
      result += ">(";
      for (const auto& element : this->args) {
        result += element->to_string() + ",";
      }
      result += ")";
      return result;
    }

    static ASTValue* ast_value(CallNode* node) {
      const auto value = new ASTValue(KindCallNode);
      value->data.CallNode = node;
      return value;
    }
  };

  struct PropertyGetNode {
    ASTValue* left;
    std::string name;

    inline std::string to_string() {
      return this->left->to_string() + "." + this->name;
    }

    static ASTValue* ast_value(PropertyGetNode* node) {
      const auto value = new ASTValue(KindPropertyGetNode);
      value->data.PropertyGetNode = node;
      return value;
    }
  };

  struct CompInstBlockProgramNode {
    std::string name;
    std::string value;
    std::vector<ASTValue*> body;

    inline std::string to_string() { return "XXX"; }

    static ASTValue* ast_value(CompInstBlockProgramNode* node) {
      const auto value = new ASTValue(KindCompInstBlockProgramNode);
      value->data.CompInstBlockProgramNode = node;
      return value;
    }
  };

  struct CompInstAssignNode {
    std::string name;
    std::string value;

    inline std::string to_string() { return "XXX"; }

    static ASTValue* ast_value(CompInstAssignNode* node) {
      const auto value = new ASTValue(KindCompInstAssignNode);
      value->data.CompInstAssignNode = node;
      return value;
    }
  };

  struct ContinueNode {
    size_t code_index;

    inline std::string to_string() { return "продовжити"; }

    static ASTValue* ast_value(ContinueNode* node) {
      const auto value = new ASTValue(KindContinueNode);
      value->data.ContinueNode = node;
      return value;
    }
  };

  struct DictionaryNode {
    std::vector<ASTValue*> elements;

    inline std::string to_string() {
      std::string result = "(";
      for (const auto& element : this->elements) {
        result += element->to_string() + ",";
      }
      result += ")";
      return result;
    }

    static ASTValue* ast_value(DictionaryNode* node) {
      const auto value = new ASTValue(KindDictionaryNode);
      value->data.DictionaryNode = node;
      return value;
    }
  };

  struct DiiaNode {
    bool ee = false;
    bool async = false;
    std::string structure;
    std::string name;
    std::vector<ASTValue*> generics;
    std::vector<ASTValue*> params;
    ASTValue* return_types;
    std::vector<ASTValue*> body;
    bool anonymous;

    inline std::string to_string() {
      std::string result = "дія " + this->name + "(";
      for (const auto& element : this->params) {
        result += element->to_string() + ",";
      }
      result += ")\n";
      for (const auto& element : this->body) {
        result += element->to_string() + "\n";
      }
      result += "кінець";
      return result;
    }

    static ASTValue* ast_value(DiiaNode* node) {
      const auto value = new ASTValue(KindDiiaNode);
      value->data.DiiaNode = node;
      return value;
    }
  };

  struct GiveElementNode {
    std::string name;
    std::string as;

    inline std::string to_string() {
      if (this->as.empty()) {
        return this->name;
      }
      return this->name + " як " + this->as;
    }

    static ASTValue* ast_value(GiveElementNode* node) {
      const auto value = new ASTValue(KindGiveElementNode);
      value->data.GiveElementNode = node;
      return value;
    }
  };

  struct GiveNode {
    std::vector<ASTValue*> elements;

    inline std::string to_string() {
      std::string result = "дати ";
      for (const auto& element : this->elements) {
        result += element->to_string() + ",";
      }
      return result;
    }

    static ASTValue* ast_value(GiveNode* node) {
      const auto value = new ASTValue(KindGiveNode);
      value->data.GiveNode = node;
      return value;
    }
  };

  struct GodNode {
    std::vector<ASTValue*> elements;

    inline std::string to_string() {
      std::string result = "";
      for (const auto& element : this->elements) {
        result += element->to_string() + " та ";
      }
      return result;
    }

    static ASTValue* ast_value(GodNode* node) {
      const auto value = new ASTValue(KindGodNode);
      value->data.GodNode = node;
      return value;
    }
  };

  struct IdentifierNode {
    std::string name;

    inline std::string to_string() { return this->name; }

    static ASTValue* ast_value(IdentifierNode* node) {
      const auto value = new ASTValue(KindIdentifierNode);
      value->data.IdentifierNode = node;
      return value;
    }
  };

  struct IfNode {
    ASTValue* condition;
    std::vector<ASTValue*> body;
    std::vector<ASTValue*> else_body;

    inline std::string to_string() {
      std::string result = "якщо " + this->condition->to_string() + "\n";
      for (const auto& element : this->body) {
        result += element->to_string() + "\n";
      }
      if (!this->else_body.empty()) {
        result += " інакше\n";
        for (const auto& element : this->else_body) {
          result += element->to_string() + "\n";
        }
      }
      result += "кінець";
      return result;
    }

    static ASTValue* ast_value(IfNode* node) {
      const auto value = new ASTValue(KindIfNode);
      value->data.IfNode = node;
      return value;
    }
  };

  struct MockupDiiaNode {
    bool ee = false;
    bool async = false;
    std::string structure;
    std::string name;
    std::vector<ASTValue*> generics;
    std::vector<ASTValue*> params;
    TypeUnionNode* return_types;

    inline std::string to_string() { return "XXX"; }
  };

  struct MockupModuleNode {
    std::string name;
    std::vector<ASTValue*> elements;

    inline std::string to_string() { return "XXX"; }
  };

  struct MockupStructureNode {
    std::string name;
    std::vector<ASTValue*> generics;
    ASTValue* parent;
    std::vector<ASTValue*> parent_generics;
    std::vector<ASTValue*> params;

    inline std::string to_string() { return "XXX"; }
  };

  struct MockupSubjectNode {
    std::string name;
    TypeUnionNode* types;

    inline std::string to_string() { return "XXX"; }
  };

  struct ModuleNode {
    std::string name;
    std::vector<ASTValue*> body;

    inline std::string to_string() {
      std::string result = "модуль " + this->name + "\n";
      for (const auto& element : this->body) {
        result += element->to_string() + "\n";
      }
      result += "кінець";
      return result;
    }
  };

  struct MRMDiiaNode {
    std::string body;

    inline std::string to_string() { return "XXX"; }

    static ASTValue* ast_value(MRMDiiaNode* node) {
      const auto value = new ASTValue(KindMRMDiiaNode);
      value->data.MRMDiiaNode = node;
      return value;
    }
  };

  struct NumberNode {
    std::string value;

    inline std::string to_string() { return this->value; }

    static ASTValue* ast_value(NumberNode* node) {
      const auto value = new ASTValue(KindNumberNode);
      value->data.NumberNode = node;
      return value;
    }
  };

  struct UnaryNode {
    UnaryOp op;
    ASTValue* value;

    inline std::string to_string() {
      std::string result = "";
      switch (this->op) {
        case UNARY_POSITIVE:
          result += "+";
          break;
        case UNARY_NEGATIVE:
          result += "-";
          break;
        case UNARY_NOT:
          result += "!";
          break;
        case UNARY_BITWISE_NOT:
          result += "~";
          break;
      }
      result += this->value->to_string();
      return result;
    }

    static ASTValue* ast_value(UnaryNode* node) {
      const auto value = new ASTValue(KindUnaryNode);
      value->data.UnaryNode = node;
      return value;
    }
  };

  struct ReturnNode {
    ASTValue* value;

    inline std::string to_string() {
      return "вернути " + this->value->to_string();
    }

    static ASTValue* ast_value(ReturnNode* node) {
      const auto value = new ASTValue(KindReturnNode);
      value->data.ReturnNode = node;
      return value;
    }
  };

  struct StringNode {
    std::string value;

    inline std::string to_string() { return "\"" + this->value + "\""; }

    static ASTValue* ast_value(StringNode* node) {
      const auto value = new ASTValue(KindStringNode);
      value->data.StringNode = node;
      return value;
    }
  };

  struct StructureNode {
    std::string name;
    std::vector<ASTValue*> generics;
    ASTValue* parent;
    std::vector<ASTValue*> parent_generics;
    std::vector<ASTValue*> params;

    inline std::string to_string() {
      std::string result = "структура " + this->name + "\n";
      for (const auto& element : this->params) {
        result += element->to_string() + "\n";
      }
      result += "кінець";
      return result;
    }

    static ASTValue* ast_value(StructureNode* node) {
      const auto value = new ASTValue(KindStructureNode);
      value->data.StructureNode = node;
      return value;
    }
  };

  struct TakeNode {
    std::string repo;
    bool relative;
    std::string name;
    std::string as;
    std::map<std::string, std::string> elements;

    inline std::string to_string() {
      std::string result = "взяти " + this->repo + " " + this->name;
      if (!this->as.empty()) {
        result += " як " + this->as;
      }
      return result;
    }

    static ASTValue* ast_value(TakeNode* node) {
      const auto value = new ASTValue(KindTakeNode);
      value->data.TakeNode = node;
      return value;
    }
  };

  struct TernaryNode {
    ASTValue* condition;
    ASTValue* body;
    ASTValue* else_body;

    inline std::string to_string() {
      return this->condition->to_string() + " ? " + this->body->to_string() +
             " : " + this->else_body->to_string();
    }

    static ASTValue* ast_value(TernaryNode* node) {
      const auto value = new ASTValue(KindTernaryNode);
      value->data.TernaryNode = node;
      return value;
    }
  };

  struct TestNode {
    ASTValue* left;
    ASTValue* right;
    TestOp op;

    inline std::string to_string() {
      std::string result = this->left->to_string();
      switch (this->op) {
        case TEST_AND:
          result += " і ";
          break;
        case TEST_OR:
          result += " або ";
          break;
      }
      result += this->right->to_string();
      return result;
    }

    static ASTValue* ast_value(TestNode* node) {
      const auto value = new ASTValue(KindTestNode);
      value->data.TestNode = node;
      return value;
    }
  };

  struct ThrowNode {
    ASTValue* value;

    inline std::string to_string() {
      return "впасти " + this->value->to_string();
    }

    static ASTValue* ast_value(ThrowNode* node) {
      const auto value = new ASTValue(KindThrowNode);
      value->data.ThrowNode = node;
      return value;
    }
  };

  struct TryNode {
    std::vector<ASTValue*> body;
    std::string name;
    std::vector<ASTValue*> catch_body;

    inline std::string to_string() {
      std::string result = "спробувати\n";
      for (const auto& element : this->body) {
        result += element->to_string() + "\n";
      }
      if (!this->catch_body.empty()) {
        result += "зловити\n";
        for (const auto& element : this->catch_body) {
          result += element->to_string() + "\n";
        }
      }
      result += "кінець";
      return result;
    }

    static ASTValue* ast_value(TryNode* node) {
      const auto value = new ASTValue(KindTryNode);
      value->data.TryNode = node;
      return value;
    }
  };

  struct TypeNode {
    ASTValue* value;
    std::vector<ASTValue*> generics;

    inline std::string to_string() {
      std::string result = this->value->to_string();
      if (!this->generics.empty()) {
        result += "<";
        for (const auto& element : this->generics) {
          result += element->to_string() + ",";
        }
        result += ">";
      }
      return result;
    }

    static ASTValue* ast_value(TypeNode* node) {
      const auto value = new ASTValue(KindTypeNode);
      value->data.TypeNode = node;
      return value;
    }
  };

  struct TypeUnionNode {
    std::vector<ASTValue*> types;

    inline std::string to_string() {
      std::string result = "";
      for (const auto& element : this->types) {
        result += element->to_string() + " або ";
      }
      return result;
    }

    static ASTValue* ast_value(TypeUnionNode* node) {
      const auto value = new ASTValue(KindTypeUnionNode);
      value->data.TypeUnionNode = node;
      return value;
    }
  };

  struct WaitNode {
    ASTValue* value;

    inline std::string to_string() {
      return "чекати " + this->value->to_string();
    }

    static ASTValue* ast_value(WaitNode* node) {
      const auto value = new ASTValue(KindWaitNode);
      value->data.WaitNode = node;
      return value;
    }
  };

  struct WhileNode {
    ASTValue* condition;
    std::vector<ASTValue*> body;

    inline std::string to_string() {
      std::string result = "поки " + this->condition->to_string() + "\n";
      for (const auto& element : this->body) {
        result += element->to_string() + "\n";
      }
      result += "кінець";
      return result;
    }

    static ASTValue* ast_value(WhileNode* node) {
      const auto value = new ASTValue(KindWhileNode);
      value->data.WhileNode = node;
      return value;
    }
  };
} // namespace mavka::ast
#endif // MAVKA_AST_H
