
// Generated from DiiaParser.g4 by ANTLR 4.11.1

#pragma once


#include "antlr4-runtime.h"
#include "DiiaParser.h"



/**
 * This class defines an abstract visitor for a parse tree
 * produced by DiiaParser.
 */
class  DiiaParserVisitor : public antlr4::tree::AbstractParseTreeVisitor {
public:

  /**
   * Visit parse trees produced by DiiaParser.
   */
    virtual std::any visitProgram(DiiaParser::ProgramContext *context) = 0;

    virtual std::any visitProgram_line(DiiaParser::Program_lineContext *context) = 0;

    virtual std::any visitNl(DiiaParser::NlContext *context) = 0;

    virtual std::any visitNls(DiiaParser::NlsContext *context) = 0;

    virtual std::any visitTake(DiiaParser::TakeContext *context) = 0;

    virtual std::any visitGive(DiiaParser::GiveContext *context) = 0;

    virtual std::any visitIdentifier(DiiaParser::IdentifierContext *context) = 0;

    virtual std::any visitIdentifiers_chain(DiiaParser::Identifiers_chainContext *context) = 0;

    virtual std::any visitChain(DiiaParser::ChainContext *context) = 0;

    virtual std::any visitChain_element(DiiaParser::Chain_elementContext *context) = 0;

    virtual std::any visitLiteral(DiiaParser::LiteralContext *context) = 0;

    virtual std::any visitAtom(DiiaParser::AtomContext *context) = 0;

    virtual std::any visitArithmetic(DiiaParser::ArithmeticContext *context) = 0;

    virtual std::any visitArithmetic_op(DiiaParser::Arithmetic_opContext *context) = 0;

    virtual std::any visitCall(DiiaParser::CallContext *context) = 0;

    virtual std::any visitCall_parameters(DiiaParser::Call_parametersContext *context) = 0;

    virtual std::any visitCall_parameter(DiiaParser::Call_parameterContext *context) = 0;

    virtual std::any visitCall_named_parameters(DiiaParser::Call_named_parametersContext *context) = 0;

    virtual std::any visitCall_named_parameter(DiiaParser::Call_named_parameterContext *context) = 0;

    virtual std::any visitAssign(DiiaParser::AssignContext *context) = 0;

    virtual std::any visitAssign_value(DiiaParser::Assign_valueContext *context) = 0;

    virtual std::any visitBody(DiiaParser::BodyContext *context) = 0;

    virtual std::any visitBody_line(DiiaParser::Body_lineContext *context) = 0;

    virtual std::any visitReturn_body_line(DiiaParser::Return_body_lineContext *context) = 0;

    virtual std::any visitLambda(DiiaParser::LambdaContext *context) = 0;

    virtual std::any visitDiia(DiiaParser::DiiaContext *context) = 0;

    virtual std::any visitDiia_parameters(DiiaParser::Diia_parametersContext *context) = 0;

    virtual std::any visitDiia_parameter(DiiaParser::Diia_parameterContext *context) = 0;

    virtual std::any visitDiia_structure(DiiaParser::Diia_structureContext *context) = 0;

    virtual std::any visitTest(DiiaParser::TestContext *context) = 0;

    virtual std::any visitTest_expr(DiiaParser::Test_exprContext *context) = 0;

    virtual std::any visitTest_part(DiiaParser::Test_partContext *context) = 0;

    virtual std::any visitTest_op(DiiaParser::Test_opContext *context) = 0;

    virtual std::any visitTest_expr_op(DiiaParser::Test_expr_opContext *context) = 0;

    virtual std::any visitIf(DiiaParser::IfContext *context) = 0;

    virtual std::any visitIf_start(DiiaParser::If_startContext *context) = 0;

    virtual std::any visitEach(DiiaParser::EachContext *context) = 0;

    virtual std::any visitStructure(DiiaParser::StructureContext *context) = 0;

    virtual std::any visitStructure_parameters(DiiaParser::Structure_parametersContext *context) = 0;

    virtual std::any visitStructure_parameter(DiiaParser::Structure_parameterContext *context) = 0;


};

