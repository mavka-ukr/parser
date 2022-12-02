
// Generated from DiiaParser.g4 by ANTLR 4.11.1

#pragma once


#include "antlr4-runtime.h"
#include "DiiaParserListener.h"


/**
 * This class provides an empty implementation of DiiaParserListener,
 * which can be extended to create a listener which only needs to handle a subset
 * of the available methods.
 */
class  DiiaParserBaseListener : public DiiaParserListener {
public:

  virtual void enterProgram(DiiaParser::ProgramContext * /*ctx*/) override { }
  virtual void exitProgram(DiiaParser::ProgramContext * /*ctx*/) override { }

  virtual void enterProgram_line(DiiaParser::Program_lineContext * /*ctx*/) override { }
  virtual void exitProgram_line(DiiaParser::Program_lineContext * /*ctx*/) override { }

  virtual void enterNl(DiiaParser::NlContext * /*ctx*/) override { }
  virtual void exitNl(DiiaParser::NlContext * /*ctx*/) override { }

  virtual void enterNls(DiiaParser::NlsContext * /*ctx*/) override { }
  virtual void exitNls(DiiaParser::NlsContext * /*ctx*/) override { }

  virtual void enterTake(DiiaParser::TakeContext * /*ctx*/) override { }
  virtual void exitTake(DiiaParser::TakeContext * /*ctx*/) override { }

  virtual void enterGive(DiiaParser::GiveContext * /*ctx*/) override { }
  virtual void exitGive(DiiaParser::GiveContext * /*ctx*/) override { }

  virtual void enterIdentifier(DiiaParser::IdentifierContext * /*ctx*/) override { }
  virtual void exitIdentifier(DiiaParser::IdentifierContext * /*ctx*/) override { }

  virtual void enterIdentifiers_chain(DiiaParser::Identifiers_chainContext * /*ctx*/) override { }
  virtual void exitIdentifiers_chain(DiiaParser::Identifiers_chainContext * /*ctx*/) override { }

  virtual void enterChain(DiiaParser::ChainContext * /*ctx*/) override { }
  virtual void exitChain(DiiaParser::ChainContext * /*ctx*/) override { }

  virtual void enterChain_element(DiiaParser::Chain_elementContext * /*ctx*/) override { }
  virtual void exitChain_element(DiiaParser::Chain_elementContext * /*ctx*/) override { }

  virtual void enterLiteral(DiiaParser::LiteralContext * /*ctx*/) override { }
  virtual void exitLiteral(DiiaParser::LiteralContext * /*ctx*/) override { }

  virtual void enterAtom(DiiaParser::AtomContext * /*ctx*/) override { }
  virtual void exitAtom(DiiaParser::AtomContext * /*ctx*/) override { }

  virtual void enterArithmetic(DiiaParser::ArithmeticContext * /*ctx*/) override { }
  virtual void exitArithmetic(DiiaParser::ArithmeticContext * /*ctx*/) override { }

  virtual void enterArithmetic_op(DiiaParser::Arithmetic_opContext * /*ctx*/) override { }
  virtual void exitArithmetic_op(DiiaParser::Arithmetic_opContext * /*ctx*/) override { }

  virtual void enterCall(DiiaParser::CallContext * /*ctx*/) override { }
  virtual void exitCall(DiiaParser::CallContext * /*ctx*/) override { }

  virtual void enterCall_parameters(DiiaParser::Call_parametersContext * /*ctx*/) override { }
  virtual void exitCall_parameters(DiiaParser::Call_parametersContext * /*ctx*/) override { }

  virtual void enterCall_parameter(DiiaParser::Call_parameterContext * /*ctx*/) override { }
  virtual void exitCall_parameter(DiiaParser::Call_parameterContext * /*ctx*/) override { }

  virtual void enterCall_named_parameters(DiiaParser::Call_named_parametersContext * /*ctx*/) override { }
  virtual void exitCall_named_parameters(DiiaParser::Call_named_parametersContext * /*ctx*/) override { }

  virtual void enterCall_named_parameter(DiiaParser::Call_named_parameterContext * /*ctx*/) override { }
  virtual void exitCall_named_parameter(DiiaParser::Call_named_parameterContext * /*ctx*/) override { }

  virtual void enterAssign(DiiaParser::AssignContext * /*ctx*/) override { }
  virtual void exitAssign(DiiaParser::AssignContext * /*ctx*/) override { }

  virtual void enterAssign_value(DiiaParser::Assign_valueContext * /*ctx*/) override { }
  virtual void exitAssign_value(DiiaParser::Assign_valueContext * /*ctx*/) override { }

  virtual void enterBody(DiiaParser::BodyContext * /*ctx*/) override { }
  virtual void exitBody(DiiaParser::BodyContext * /*ctx*/) override { }

  virtual void enterBody_line(DiiaParser::Body_lineContext * /*ctx*/) override { }
  virtual void exitBody_line(DiiaParser::Body_lineContext * /*ctx*/) override { }

  virtual void enterReturn_body_line(DiiaParser::Return_body_lineContext * /*ctx*/) override { }
  virtual void exitReturn_body_line(DiiaParser::Return_body_lineContext * /*ctx*/) override { }

  virtual void enterLambda(DiiaParser::LambdaContext * /*ctx*/) override { }
  virtual void exitLambda(DiiaParser::LambdaContext * /*ctx*/) override { }

  virtual void enterDiia(DiiaParser::DiiaContext * /*ctx*/) override { }
  virtual void exitDiia(DiiaParser::DiiaContext * /*ctx*/) override { }

  virtual void enterDiia_parameters(DiiaParser::Diia_parametersContext * /*ctx*/) override { }
  virtual void exitDiia_parameters(DiiaParser::Diia_parametersContext * /*ctx*/) override { }

  virtual void enterDiia_parameter(DiiaParser::Diia_parameterContext * /*ctx*/) override { }
  virtual void exitDiia_parameter(DiiaParser::Diia_parameterContext * /*ctx*/) override { }

  virtual void enterDiia_structure(DiiaParser::Diia_structureContext * /*ctx*/) override { }
  virtual void exitDiia_structure(DiiaParser::Diia_structureContext * /*ctx*/) override { }

  virtual void enterTest(DiiaParser::TestContext * /*ctx*/) override { }
  virtual void exitTest(DiiaParser::TestContext * /*ctx*/) override { }

  virtual void enterTest_expr(DiiaParser::Test_exprContext * /*ctx*/) override { }
  virtual void exitTest_expr(DiiaParser::Test_exprContext * /*ctx*/) override { }

  virtual void enterTest_part(DiiaParser::Test_partContext * /*ctx*/) override { }
  virtual void exitTest_part(DiiaParser::Test_partContext * /*ctx*/) override { }

  virtual void enterTest_op(DiiaParser::Test_opContext * /*ctx*/) override { }
  virtual void exitTest_op(DiiaParser::Test_opContext * /*ctx*/) override { }

  virtual void enterTest_expr_op(DiiaParser::Test_expr_opContext * /*ctx*/) override { }
  virtual void exitTest_expr_op(DiiaParser::Test_expr_opContext * /*ctx*/) override { }

  virtual void enterIf(DiiaParser::IfContext * /*ctx*/) override { }
  virtual void exitIf(DiiaParser::IfContext * /*ctx*/) override { }

  virtual void enterIf_start(DiiaParser::If_startContext * /*ctx*/) override { }
  virtual void exitIf_start(DiiaParser::If_startContext * /*ctx*/) override { }

  virtual void enterEach(DiiaParser::EachContext * /*ctx*/) override { }
  virtual void exitEach(DiiaParser::EachContext * /*ctx*/) override { }

  virtual void enterStructure(DiiaParser::StructureContext * /*ctx*/) override { }
  virtual void exitStructure(DiiaParser::StructureContext * /*ctx*/) override { }

  virtual void enterStructure_parameters(DiiaParser::Structure_parametersContext * /*ctx*/) override { }
  virtual void exitStructure_parameters(DiiaParser::Structure_parametersContext * /*ctx*/) override { }

  virtual void enterStructure_parameter(DiiaParser::Structure_parameterContext * /*ctx*/) override { }
  virtual void exitStructure_parameter(DiiaParser::Structure_parameterContext * /*ctx*/) override { }


  virtual void enterEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void exitEveryRule(antlr4::ParserRuleContext * /*ctx*/) override { }
  virtual void visitTerminal(antlr4::tree::TerminalNode * /*node*/) override { }
  virtual void visitErrorNode(antlr4::tree::ErrorNode * /*node*/) override { }

};

