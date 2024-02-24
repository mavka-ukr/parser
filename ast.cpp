#include "ast.h"

namespace mavka::ast {
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
} // namespace mavka::ast