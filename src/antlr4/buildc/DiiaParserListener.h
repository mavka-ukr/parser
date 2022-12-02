
// Generated from DiiaParser.g4 by ANTLR 4.11.1

#pragma once


#include "antlr4-runtime.h"
#include "DiiaParser.h"


/**
 * This interface defines an abstract listener for a parse tree produced by DiiaParser.
 */
class  DiiaParserListener : public antlr4::tree::ParseTreeListener {
public:

  virtual void enterProgram(DiiaParser::ProgramContext *ctx) = 0;
  virtual void exitProgram(DiiaParser::ProgramContext *ctx) = 0;

  virtual void enterProgram_line(DiiaParser::Program_lineContext *ctx) = 0;
  virtual void exitProgram_line(DiiaParser::Program_lineContext *ctx) = 0;

  virtual void enterNl(DiiaParser::NlContext *ctx) = 0;
  virtual void exitNl(DiiaParser::NlContext *ctx) = 0;

  virtual void enterNls(DiiaParser::NlsContext *ctx) = 0;
  virtual void exitNls(DiiaParser::NlsContext *ctx) = 0;

  virtual void enterTake(DiiaParser::TakeContext *ctx) = 0;
  virtual void exitTake(DiiaParser::TakeContext *ctx) = 0;

  virtual void enterGive(DiiaParser::GiveContext *ctx) = 0;
  virtual void exitGive(DiiaParser::GiveContext *ctx) = 0;

  virtual void enterIdentifier(DiiaParser::IdentifierContext *ctx) = 0;
  virtual void exitIdentifier(DiiaParser::IdentifierContext *ctx) = 0;

  virtual void enterIdentifiers_chain(DiiaParser::Identifiers_chainContext *ctx) = 0;
  virtual void exitIdentifiers_chain(DiiaParser::Identifiers_chainContext *ctx) = 0;

  virtual void enterChain(DiiaParser::ChainContext *ctx) = 0;
  virtual void exitChain(DiiaParser::ChainContext *ctx) = 0;

  virtual void enterChain_element(DiiaParser::Chain_elementContext *ctx) = 0;
  virtual void exitChain_element(DiiaParser::Chain_elementContext *ctx) = 0;

  virtual void enterLiteral(DiiaParser::LiteralContext *ctx) = 0;
  virtual void exitLiteral(DiiaParser::LiteralContext *ctx) = 0;

  virtual void enterAtom(DiiaParser::AtomContext *ctx) = 0;
  virtual void exitAtom(DiiaParser::AtomContext *ctx) = 0;

  virtual void enterArithmetic(DiiaParser::ArithmeticContext *ctx) = 0;
  virtual void exitArithmetic(DiiaParser::ArithmeticContext *ctx) = 0;

  virtual void enterArithmetic_op(DiiaParser::Arithmetic_opContext *ctx) = 0;
  virtual void exitArithmetic_op(DiiaParser::Arithmetic_opContext *ctx) = 0;

  virtual void enterCall(DiiaParser::CallContext *ctx) = 0;
  virtual void exitCall(DiiaParser::CallContext *ctx) = 0;

  virtual void enterCall_parameters(DiiaParser::Call_parametersContext *ctx) = 0;
  virtual void exitCall_parameters(DiiaParser::Call_parametersContext *ctx) = 0;

  virtual void enterCall_parameter(DiiaParser::Call_parameterContext *ctx) = 0;
  virtual void exitCall_parameter(DiiaParser::Call_parameterContext *ctx) = 0;

  virtual void enterCall_named_parameters(DiiaParser::Call_named_parametersContext *ctx) = 0;
  virtual void exitCall_named_parameters(DiiaParser::Call_named_parametersContext *ctx) = 0;

  virtual void enterCall_named_parameter(DiiaParser::Call_named_parameterContext *ctx) = 0;
  virtual void exitCall_named_parameter(DiiaParser::Call_named_parameterContext *ctx) = 0;

  virtual void enterAssign(DiiaParser::AssignContext *ctx) = 0;
  virtual void exitAssign(DiiaParser::AssignContext *ctx) = 0;

  virtual void enterAssign_value(DiiaParser::Assign_valueContext *ctx) = 0;
  virtual void exitAssign_value(DiiaParser::Assign_valueContext *ctx) = 0;

  virtual void enterBody(DiiaParser::BodyContext *ctx) = 0;
  virtual void exitBody(DiiaParser::BodyContext *ctx) = 0;

  virtual void enterBody_line(DiiaParser::Body_lineContext *ctx) = 0;
  virtual void exitBody_line(DiiaParser::Body_lineContext *ctx) = 0;

  virtual void enterReturn_body_line(DiiaParser::Return_body_lineContext *ctx) = 0;
  virtual void exitReturn_body_line(DiiaParser::Return_body_lineContext *ctx) = 0;

  virtual void enterLambda(DiiaParser::LambdaContext *ctx) = 0;
  virtual void exitLambda(DiiaParser::LambdaContext *ctx) = 0;

  virtual void enterDiia(DiiaParser::DiiaContext *ctx) = 0;
  virtual void exitDiia(DiiaParser::DiiaContext *ctx) = 0;

  virtual void enterDiia_parameters(DiiaParser::Diia_parametersContext *ctx) = 0;
  virtual void exitDiia_parameters(DiiaParser::Diia_parametersContext *ctx) = 0;

  virtual void enterDiia_parameter(DiiaParser::Diia_parameterContext *ctx) = 0;
  virtual void exitDiia_parameter(DiiaParser::Diia_parameterContext *ctx) = 0;

  virtual void enterDiia_structure(DiiaParser::Diia_structureContext *ctx) = 0;
  virtual void exitDiia_structure(DiiaParser::Diia_structureContext *ctx) = 0;

  virtual void enterTest(DiiaParser::TestContext *ctx) = 0;
  virtual void exitTest(DiiaParser::TestContext *ctx) = 0;

  virtual void enterTest_expr(DiiaParser::Test_exprContext *ctx) = 0;
  virtual void exitTest_expr(DiiaParser::Test_exprContext *ctx) = 0;

  virtual void enterTest_part(DiiaParser::Test_partContext *ctx) = 0;
  virtual void exitTest_part(DiiaParser::Test_partContext *ctx) = 0;

  virtual void enterTest_op(DiiaParser::Test_opContext *ctx) = 0;
  virtual void exitTest_op(DiiaParser::Test_opContext *ctx) = 0;

  virtual void enterTest_expr_op(DiiaParser::Test_expr_opContext *ctx) = 0;
  virtual void exitTest_expr_op(DiiaParser::Test_expr_opContext *ctx) = 0;

  virtual void enterIf(DiiaParser::IfContext *ctx) = 0;
  virtual void exitIf(DiiaParser::IfContext *ctx) = 0;

  virtual void enterIf_start(DiiaParser::If_startContext *ctx) = 0;
  virtual void exitIf_start(DiiaParser::If_startContext *ctx) = 0;

  virtual void enterEach(DiiaParser::EachContext *ctx) = 0;
  virtual void exitEach(DiiaParser::EachContext *ctx) = 0;

  virtual void enterStructure(DiiaParser::StructureContext *ctx) = 0;
  virtual void exitStructure(DiiaParser::StructureContext *ctx) = 0;

  virtual void enterStructure_parameters(DiiaParser::Structure_parametersContext *ctx) = 0;
  virtual void exitStructure_parameters(DiiaParser::Structure_parametersContext *ctx) = 0;

  virtual void enterStructure_parameter(DiiaParser::Structure_parameterContext *ctx) = 0;
  virtual void exitStructure_parameter(DiiaParser::Structure_parameterContext *ctx) = 0;


};

