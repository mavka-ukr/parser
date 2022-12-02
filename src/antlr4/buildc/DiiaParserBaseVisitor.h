
// Generated from DiiaParser.g4 by ANTLR 4.11.1

#pragma once


#include "antlr4-runtime.h"
#include "DiiaParserVisitor.h"


/**
 * This class provides an empty implementation of DiiaParserVisitor, which can be
 * extended to create a visitor which only needs to handle a subset of the available methods.
 */
class  DiiaParserBaseVisitor : public DiiaParserVisitor {
public:

  virtual std::any visitProgram(DiiaParser::ProgramContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitProgram_line(DiiaParser::Program_lineContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitNl(DiiaParser::NlContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitNls(DiiaParser::NlsContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTake(DiiaParser::TakeContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitGive(DiiaParser::GiveContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitIdentifier(DiiaParser::IdentifierContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitIdentifiers_chain(DiiaParser::Identifiers_chainContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitChain(DiiaParser::ChainContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitChain_element(DiiaParser::Chain_elementContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitLiteral(DiiaParser::LiteralContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAtom(DiiaParser::AtomContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitArithmetic(DiiaParser::ArithmeticContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitArithmetic_op(DiiaParser::Arithmetic_opContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitCall(DiiaParser::CallContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitCall_parameters(DiiaParser::Call_parametersContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitCall_parameter(DiiaParser::Call_parameterContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitCall_named_parameters(DiiaParser::Call_named_parametersContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitCall_named_parameter(DiiaParser::Call_named_parameterContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAssign(DiiaParser::AssignContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitAssign_value(DiiaParser::Assign_valueContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBody(DiiaParser::BodyContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitBody_line(DiiaParser::Body_lineContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitReturn_body_line(DiiaParser::Return_body_lineContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitLambda(DiiaParser::LambdaContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitDiia(DiiaParser::DiiaContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitDiia_parameters(DiiaParser::Diia_parametersContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitDiia_parameter(DiiaParser::Diia_parameterContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitDiia_structure(DiiaParser::Diia_structureContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTest(DiiaParser::TestContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTest_expr(DiiaParser::Test_exprContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTest_part(DiiaParser::Test_partContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTest_op(DiiaParser::Test_opContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitTest_expr_op(DiiaParser::Test_expr_opContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitIf(DiiaParser::IfContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitIf_start(DiiaParser::If_startContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitEach(DiiaParser::EachContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitStructure(DiiaParser::StructureContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitStructure_parameters(DiiaParser::Structure_parametersContext *ctx) override {
    return visitChildren(ctx);
  }

  virtual std::any visitStructure_parameter(DiiaParser::Structure_parameterContext *ctx) override {
    return visitChildren(ctx);
  }


};

