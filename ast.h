#pragma once

#ifndef MAVKA_AST_H
#define MAVKA_AST_H

#include <map>
#include <string>
#include <vector>

namespace mavka::ast {
  struct ASTValue;
  struct ArgNode;
  struct AssignByIdentifierNode;
  struct AssignNode;
  struct BinaryNode;
  struct BreakNode;
  struct CallNode;
  struct ChainNode;
  struct ComparisonNode;
  struct CompInstBlockProgramNode;
  struct CompInstAssignNode;
  struct ContinueNode;
  struct DictionaryNode;
  struct DictionaryElementNode;
  struct DiiaNode;
  struct EachNode;
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
  struct TakePakNode;
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
    KindBinaryNode,
    KindAssignByIdentifierNode,
    KindAssignNode,
    KindBreakNode,
    KindCallNode,
    KindChainNode,
    KindCompInstBlockProgramNode,
    KindCompInstAssignNode,
    KindContinueNode,
    KindDictionaryNode,
    KindDictionaryElementNode,
    KindDiiaNode,
    KindEachNode,
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
    mavka::ast::AssignByIdentifierNode* AssignByIdentifierNode;
    mavka::ast::AssignNode* AssignNode;
    mavka::ast::BinaryNode* BinaryNode;
    mavka::ast::BreakNode* BreakNode;
    mavka::ast::CallNode* CallNode;
    mavka::ast::ChainNode* ChainNode;
    mavka::ast::ComparisonNode* ComparisonNode;
    mavka::ast::CompInstBlockProgramNode* CompInstBlockProgramNode;
    mavka::ast::CompInstAssignNode* CompInstAssignNode;
    mavka::ast::ContinueNode* ContinueNode;
    mavka::ast::DictionaryElementNode* DictionaryElementNode;
    mavka::ast::DictionaryNode* DictionaryNode;
    mavka::ast::DiiaNode* DiiaNode;
    mavka::ast::EachNode* EachNode;
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
  };

  struct ArgNode {
    size_t index;
    std::string name;
    ASTValue* value;

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

    static ASTValue* ast_value(ParamNode* node) {
      const auto value = new ASTValue(KindParamNode);
      value->data.ParamNode = node;
      return value;
    }
  };

  struct GenericNode {
    std::string name;

    static ASTValue* ast_value(GenericNode* node) {
      const auto value = new ASTValue(KindGenericNode);
      value->data.GenericNode = node;
      return value;
    }
  };

  struct DictionaryElementNode {
    ASTValue* key;
    ASTValue* value;

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

    static ASTValue* ast_value(BinaryNode* node) {
      const auto value = new ASTValue(KindBinaryNode);
      value->data.BinaryNode = node;
      return value;
    }
  };

  struct ListNode {
    std::vector<ASTValue*> elements;

    static ASTValue* ast_value(ListNode* node) {
      const auto value = new ASTValue(KindListNode);
      value->data.ListNode = node;
      return value;
    }
  };

  struct AssignByIdentifierNode {
    ASTValue* left;
    std::string identifier;
    ASTValue* value;

    static ASTValue* ast_value(AssignByIdentifierNode* node) {
      const auto value = new ASTValue(KindAssignByIdentifierNode);
      value->data.AssignByIdentifierNode = node;
      return value;
    }
  };

  struct AssignNode {
    std::string name;
    ASTValue* types;
    ASTValue* value;
    bool parent;

    static ASTValue* ast_value(AssignNode* node) {
      const auto value = new ASTValue(KindAssignNode);
      value->data.AssignNode = node;
      return value;
    }
  };

  struct BreakNode {
    size_t code_index;

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

    static ASTValue* ast_value(CallNode* node) {
      const auto value = new ASTValue(KindCallNode);
      value->data.CallNode = node;
      return value;
    }
  };

  struct ChainNode {
    ASTValue* left;
    std::string right;

    static ASTValue* ast_value(ChainNode* node) {
      const auto value = new ASTValue(KindChainNode);
      value->data.ChainNode = node;
      return value;
    }
  };

  struct CompInstBlockProgramNode {
    std::string name;
    std::string value;
    std::vector<ASTValue*> body;

    static ASTValue* ast_value(CompInstBlockProgramNode* node) {
      const auto value = new ASTValue(KindCompInstBlockProgramNode);
      value->data.CompInstBlockProgramNode = node;
      return value;
    }
  };

  struct CompInstAssignNode {
    std::string name;
    std::string value;

    static ASTValue* ast_value(CompInstAssignNode* node) {
      const auto value = new ASTValue(KindCompInstAssignNode);
      value->data.CompInstAssignNode = node;
      return value;
    }
  };

  struct ContinueNode {
    size_t code_index;

    static ASTValue* ast_value(ContinueNode* node) {
      const auto value = new ASTValue(KindContinueNode);
      value->data.ContinueNode = node;
      return value;
    }
  };

  struct DictionaryNode {
    std::vector<ASTValue*> elements;

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

    static ASTValue* ast_value(DiiaNode* node) {
      const auto value = new ASTValue(KindDiiaNode);
      value->data.DiiaNode = node;
      return value;
    }
  };

  struct EachNode {
    ASTValue* value;
    std::string keyName;
    std::string name;
    std::vector<ASTValue*> body;

    static ASTValue* ast_value(EachNode* node) {
      const auto value = new ASTValue(KindEachNode);
      value->data.EachNode = node;
      return value;
    }
  };

  struct GiveElementNode {
    std::string name;
    std::string as;

    static ASTValue* ast_value(GiveElementNode* node) {
      const auto value = new ASTValue(KindGiveElementNode);
      value->data.GiveElementNode = node;
      return value;
    }
  };

  struct GiveNode {
    std::vector<ASTValue*> elements;

    static ASTValue* ast_value(GiveNode* node) {
      const auto value = new ASTValue(KindGiveNode);
      value->data.GiveNode = node;
      return value;
    }
  };

  struct GodNode {
    std::vector<ASTValue*> elements;

    static ASTValue* ast_value(GodNode* node) {
      const auto value = new ASTValue(KindGodNode);
      value->data.GodNode = node;
      return value;
    }
  };

  struct IdentifierNode {
    std::string name;

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
  };

  struct MockupModuleNode {
    std::string name;
    std::vector<ASTValue*> elements;
  };

  struct MockupStructureNode {
    std::string name;
    std::vector<ASTValue*> generics;
    ASTValue* parent;
    std::vector<ASTValue*> parent_generics;
    std::vector<ASTValue*> params;
  };

  struct MockupSubjectNode {
    std::string name;
    TypeUnionNode* types;
  };

  struct ModuleNode {
    std::string name;
    std::vector<ASTValue*> body;
  };

  struct MRMDiiaNode {
    std::string body;

    static ASTValue* ast_value(MRMDiiaNode* node) {
      const auto value = new ASTValue(KindMRMDiiaNode);
      value->data.MRMDiiaNode = node;
      return value;
    }
  };

  struct NumberNode {
    std::string value;

    static ASTValue* ast_value(NumberNode* node) {
      const auto value = new ASTValue(KindNumberNode);
      value->data.NumberNode = node;
      return value;
    }
  };

  struct UnaryNode {
    UnaryOp op;
    ASTValue* value;

    static ASTValue* ast_value(UnaryNode* node) {
      const auto value = new ASTValue(KindUnaryNode);
      value->data.UnaryNode = node;
      return value;
    }
  };

  struct ReturnNode {
    ASTValue* value;

    static ASTValue* ast_value(ReturnNode* node) {
      const auto value = new ASTValue(KindReturnNode);
      value->data.ReturnNode = node;
      return value;
    }
  };

  struct StringNode {
    std::string value;

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

    static ASTValue* ast_value(StructureNode* node) {
      const auto value = new ASTValue(KindStructureNode);
      value->data.StructureNode = node;
      return value;
    }
  };

  struct TakeNode {
    std::string loader;
    bool relative;
    std::string name;
    std::string as;
    std::map<std::string, std::string> elements;

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

    static ASTValue* ast_value(TestNode* node) {
      const auto value = new ASTValue(KindTestNode);
      value->data.TestNode = node;
      return value;
    }
  };

  struct ThrowNode {
    ASTValue* value;

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

    static ASTValue* ast_value(TryNode* node) {
      const auto value = new ASTValue(KindTryNode);
      value->data.TryNode = node;
      return value;
    }
  };

  struct TypeNode {
    ASTValue* value;
    std::vector<ASTValue*> generics;

    static ASTValue* ast_value(TypeNode* node) {
      const auto value = new ASTValue(KindTypeNode);
      value->data.TypeNode = node;
      return value;
    }
  };

  struct TypeUnionNode {
    std::vector<ASTValue*> types;

    static ASTValue* ast_value(TypeUnionNode* node) {
      const auto value = new ASTValue(KindTypeUnionNode);
      value->data.TypeUnionNode = node;
      return value;
    }
  };

  struct WaitNode {
    ASTValue* value;

    static ASTValue* ast_value(WaitNode* node) {
      const auto value = new ASTValue(KindWaitNode);
      value->data.WaitNode = node;
      return value;
    }
  };

  struct WhileNode {
    ASTValue* condition;
    std::vector<ASTValue*> body;

    static ASTValue* ast_value(WhileNode* node) {
      const auto value = new ASTValue(KindWhileNode);
      value->data.WhileNode = node;
      return value;
    }
  };
} // namespace mavka::ast
#endif // MAVKA_AST_H
