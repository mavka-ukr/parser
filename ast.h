#pragma once

#ifndef MAVKA_AST_H
#define MAVKA_AST_H

#include <map>
#include <string>
#include <vector>

namespace mavka::ast {
  struct Arg;
  struct Param;
  struct Generic;
  struct DictionaryElement;
  struct ASTValue;
  struct BinaryNode;
  struct AsNode;
  struct AssignByIdentifierNode;
  struct AssignNode;
  struct BreakNode;
  struct CallNode;
  struct ChainNode;
  struct ComparisonNode;
  struct CompInstBlockProgramNode;
  struct CompInstAssignNode;
  struct ContinueNode;
  struct DictionaryNode;
  struct DiiaNode;
  struct EachNode;
  struct GetElementNode;
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
  struct NegativeNode;
  struct NotNode;
  struct NumberNode;
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

  struct Arg {
    size_t index;
    std::string name;
    ASTValue* value;
  };

  struct Param {
    bool ee = false;
    std::string name;
    TypeUnionNode* type;
    ASTValue* value;
    bool variadic = false;
  };

  struct Generic {
    std::string name;
  };

  struct DictionaryElement {
    ASTValue* key;
    ASTValue* value;
  };

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
    KindBinaryNode,
    KindListNode,
    KindAssignByIdentifierNode,
    KindAssignNode,
    KindBreakNode,
    KindCallNode,
    KindChainNode,
    KindCompInstBlockProgramNode,
    KindCompInstAssignNode,
    KindContinueNode,
    KindDictionaryNode,
    KindDiiaNode,
    KindEachNode,
    KindGiveElementNode,
    KindGiveNode,
    KindGodNode,
    KindIdentifierNode,
    KindIfNode,
    KindMockupDiiaNode,
    KindMockupModuleNode,
    KindMockupStructureNode,
    KindMockupSubjectNode,
    KindModuleNode,
    KindMRMDiiaNode,
    KindNumberNode,
    KindUnaryNode,
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
    mavka::ast::BinaryNode* BinaryNode;
    mavka::ast::AsNode* AsNode;
    mavka::ast::AssignByIdentifierNode* AssignByIdentifierNode;
    mavka::ast::AssignNode* AssignNode;
    mavka::ast::BreakNode* BreakNode;
    mavka::ast::CallNode* CallNode;
    mavka::ast::ChainNode* ChainNode;
    mavka::ast::ComparisonNode* ComparisonNode;
    mavka::ast::CompInstBlockProgramNode* CompInstBlockProgramNode;
    mavka::ast::CompInstAssignNode* CompInstAssignNode;
    mavka::ast::ContinueNode* ContinueNode;
    mavka::ast::DictionaryElement* DictionaryElementNode;
    mavka::ast::DictionaryNode* DictionaryNode;
    mavka::ast::DiiaNode* DiiaNode;
    mavka::ast::EachNode* EachNode;
    mavka::ast::GetElementNode* GetElementNode;
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
    mavka::ast::NegativeNode* NegativeNode;
    mavka::ast::NotNode* NotNode;
    mavka::ast::NumberNode* NumberNode;
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
  };

  struct AsNode {
    ASTValue* left;
    ASTValue* right;
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
    std::vector<TypeNode*> types;
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
  };

  struct CallNode {
    ASTValue* value;
    std::vector<TypeUnionNode*> generics;
    std::vector<Arg*> args;

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
  };

  struct DictionaryNode {
    std::vector<DictionaryElement*> elements;
  };

  struct DiiaNode {
    bool ee = false;
    bool async = false;
    std::string structure;
    std::string name;
    std::vector<Generic*> generics;
    std::vector<Param*> params;
    TypeUnionNode* return_types;
    std::vector<ASTValue*> body;
  };

  struct EachNode {
    ASTValue* value;
    std::string keyName;
    std::string name;
    std::vector<ASTValue*> body;
  };

  struct GetElementNode {
    ASTValue* value;
    ASTValue* index;
  };

  struct GiveElementNode {
    std::string name;
    std::string as;
  };

  struct GiveNode {
    std::vector<GiveElementNode*> elements;
  };

  struct GodNode {
    std::vector<ASTValue*> elements;
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
  };

  struct MockupDiiaNode {
    bool ee = false;
    bool async = false;
    std::string structure;
    std::string name;
    std::vector<Generic*> generics;
    std::vector<Param*> params;
    TypeUnionNode* return_types;
  };

  struct MockupModuleNode {
    std::string name;
    std::vector<ASTValue*> elements;
  };

  struct MockupStructureNode {
    std::string name;
    std::vector<Generic*> generics;
    ASTValue* parent;
    std::vector<TypeUnionNode*> parent_generics;
    std::vector<Param*> params;
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
  };

  struct NegativeNode {
    ASTValue* value;
  };

  struct NotNode {
    ASTValue* value;
  };

  struct NumberNode {
    std::string value;
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
  };

  struct StringNode {
    std::string value;
  };

  struct StructureNode {
    std::string name;
    std::vector<Generic*> generics;
    ASTValue* parent;
    std::vector<TypeUnionNode*> parent_generics;
    std::vector<Param*> params;
  };

  struct TakeNode {
    std::string loader;
    bool relative;
    std::string name;
    std::string as;
    std::map<std::string, std::string> elements;
  };

  struct TernaryNode {
    ASTValue* condition;
    ASTValue* body;
    ASTValue* else_body;
  };

  struct TestNode {
    ASTValue* left;
    ASTValue* right;
    TestOp op;
  };

  struct ThrowNode {
    ASTValue* value;
  };

  struct TryNode {
    std::vector<ASTValue*> body;
    std::string name;
    std::vector<ASTValue*> catch_body;
  };

  struct TypeNode {
    ASTValue* value;
    std::vector<TypeUnionNode*> generics;
  };

  struct TypeUnionNode {
    std::vector<TypeNode*> types;
  };

  struct WaitNode {
    ASTValue* value;
  };

  struct WhileNode {
    ASTValue* condition;
    std::vector<ASTValue*> body;
  };
} // namespace mavka::ast
#endif // MAVKA_AST_H
