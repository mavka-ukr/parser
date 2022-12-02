
// Generated from DiiaParser.g4 by ANTLR 4.11.1

#pragma once


#include "antlr4-runtime.h"




class  DiiaParser : public antlr4::Parser {
public:
  enum {
    DEF = 1, END = 2, EACH = 3, TAKING = 4, STRUCTURE = 5, EQ = 6, NOT_EQ = 7, 
    GREATER = 8, SMALLER = 9, YES = 10, NO = 11, NONE = 12, FOR = 13, IF = 14, 
    WAIT = 15, TAKE = 16, GIVE = 17, PAK = 18, AS = 19, IS = 20, RETURN = 21, 
    ASYNC = 22, AND = 23, OR = 24, SKIP_SPACES = 25, NL = 26, OPEN_PAREN = 27, 
    CLOSE_PAREN = 28, OPEN_ARRAY = 29, CLOSE_ARRAY = 30, COMMA = 31, ASSIGN = 32, 
    PLUS = 33, MINUS = 34, MUL = 35, DIV = 36, COLON = 37, DOT = 38, NOT = 39, 
    ID = 40, NUMBER = 41, INTEGER = 42, FLOAT = 43, STRING = 44
  };

  enum {
    RuleProgram = 0, RuleProgram_line = 1, RuleNl = 2, RuleNls = 3, RuleTake = 4, 
    RuleGive = 5, RuleIdentifier = 6, RuleIdentifiers_chain = 7, RuleChain = 8, 
    RuleChain_element = 9, RuleLiteral = 10, RuleAtom = 11, RuleArithmetic = 12, 
    RuleArithmetic_op = 13, RuleCall = 14, RuleCall_parameters = 15, RuleCall_parameter = 16, 
    RuleCall_named_parameters = 17, RuleCall_named_parameter = 18, RuleAssign = 19, 
    RuleAssign_value = 20, RuleBody = 21, RuleBody_line = 22, RuleReturn_body_line = 23, 
    RuleLambda = 24, RuleDiia = 25, RuleDiia_parameters = 26, RuleDiia_parameter = 27, 
    RuleDiia_structure = 28, RuleTest = 29, RuleTest_expr = 30, RuleTest_part = 31, 
    RuleTest_op = 32, RuleTest_expr_op = 33, RuleIf = 34, RuleIf_start = 35, 
    RuleEach = 36, RuleStructure = 37, RuleStructure_parameters = 38, RuleStructure_parameter = 39
  };

  explicit DiiaParser(antlr4::TokenStream *input);

  DiiaParser(antlr4::TokenStream *input, const antlr4::atn::ParserATNSimulatorOptions &options);

  ~DiiaParser() override;

  std::string getGrammarFileName() const override;

  const antlr4::atn::ATN& getATN() const override;

  const std::vector<std::string>& getRuleNames() const override;

  const antlr4::dfa::Vocabulary& getVocabulary() const override;

  antlr4::atn::SerializedATNView getSerializedATN() const override;


  class ProgramContext;
  class Program_lineContext;
  class NlContext;
  class NlsContext;
  class TakeContext;
  class GiveContext;
  class IdentifierContext;
  class Identifiers_chainContext;
  class ChainContext;
  class Chain_elementContext;
  class LiteralContext;
  class AtomContext;
  class ArithmeticContext;
  class Arithmetic_opContext;
  class CallContext;
  class Call_parametersContext;
  class Call_parameterContext;
  class Call_named_parametersContext;
  class Call_named_parameterContext;
  class AssignContext;
  class Assign_valueContext;
  class BodyContext;
  class Body_lineContext;
  class Return_body_lineContext;
  class LambdaContext;
  class DiiaContext;
  class Diia_parametersContext;
  class Diia_parameterContext;
  class Diia_structureContext;
  class TestContext;
  class Test_exprContext;
  class Test_partContext;
  class Test_opContext;
  class Test_expr_opContext;
  class IfContext;
  class If_startContext;
  class EachContext;
  class StructureContext;
  class Structure_parametersContext;
  class Structure_parameterContext; 

  class  ProgramContext : public antlr4::ParserRuleContext {
  public:
    ProgramContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Program_lineContext *> program_line();
    Program_lineContext* program_line(size_t i);
    antlr4::tree::TerminalNode *EOF();
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  ProgramContext* program();

  class  Program_lineContext : public antlr4::ParserRuleContext {
  public:
    Program_lineContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    ChainContext *chain();
    AssignContext *assign();
    DiiaContext *diia();
    IfContext *if_();
    EachContext *each();
    NlsContext *nls();
    StructureContext *structure();
    TakeContext *take();
    GiveContext *give();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Program_lineContext* program_line();

  class  NlContext : public antlr4::ParserRuleContext {
  public:
    NlContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *NL();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  NlContext* nl();

  class  NlsContext : public antlr4::ParserRuleContext {
  public:
    NlsContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  NlsContext* nls();

  class  TakeContext : public antlr4::ParserRuleContext {
  public:
    antlr4::Token *t_pak = nullptr;
    DiiaParser::IdentifierContext *t_module = nullptr;
    DiiaParser::Identifiers_chainContext *t_elements_chain = nullptr;
    DiiaParser::IdentifierContext *t_as = nullptr;
    TakeContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *TAKE();
    std::vector<IdentifierContext *> identifier();
    IdentifierContext* identifier(size_t i);
    antlr4::tree::TerminalNode *COLON();
    antlr4::tree::TerminalNode *DOT();
    antlr4::tree::TerminalNode *AS();
    antlr4::tree::TerminalNode *PAK();
    Identifiers_chainContext *identifiers_chain();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  TakeContext* take();

  class  GiveContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *g_name = nullptr;
    DiiaParser::IdentifierContext *g_as = nullptr;
    GiveContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *GIVE();
    std::vector<IdentifierContext *> identifier();
    IdentifierContext* identifier(size_t i);
    antlr4::tree::TerminalNode *AS();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  GiveContext* give();

  class  IdentifierContext : public antlr4::ParserRuleContext {
  public:
    IdentifierContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *ID();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  IdentifierContext* identifier();

  class  Identifiers_chainContext : public antlr4::ParserRuleContext {
  public:
    Identifiers_chainContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<IdentifierContext *> identifier();
    IdentifierContext* identifier(size_t i);
    std::vector<antlr4::tree::TerminalNode *> DOT();
    antlr4::tree::TerminalNode* DOT(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Identifiers_chainContext* identifiers_chain();

  class  ChainContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::ChainContext *c_wait = nullptr;
    ChainContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Chain_elementContext *> chain_element();
    Chain_elementContext* chain_element(size_t i);
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    std::vector<antlr4::tree::TerminalNode *> DOT();
    antlr4::tree::TerminalNode* DOT(size_t i);
    antlr4::tree::TerminalNode *WAIT();
    ChainContext *chain();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  ChainContext* chain();

  class  Chain_elementContext : public antlr4::ParserRuleContext {
  public:
    Chain_elementContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    IdentifierContext *identifier();
    CallContext *call();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Chain_elementContext* chain_element();

  class  LiteralContext : public antlr4::ParserRuleContext {
  public:
    antlr4::Token *l_number = nullptr;
    antlr4::Token *l_string = nullptr;
    antlr4::Token *l_yes = nullptr;
    antlr4::Token *l_no = nullptr;
    antlr4::Token *l_none = nullptr;
    LiteralContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *NUMBER();
    antlr4::tree::TerminalNode *STRING();
    antlr4::tree::TerminalNode *YES();
    antlr4::tree::TerminalNode *NO();
    antlr4::tree::TerminalNode *NONE();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  LiteralContext* literal();

  class  AtomContext : public antlr4::ParserRuleContext {
  public:
    AtomContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    LiteralContext *literal();
    ChainContext *chain();
    ArithmeticContext *arithmetic();
    TestContext *test();
    LambdaContext *lambda();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  AtomContext* atom();

  class  ArithmeticContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::ArithmeticContext *a_left = nullptr;
    DiiaParser::LiteralContext *a_literal = nullptr;
    DiiaParser::ChainContext *a_chain = nullptr;
    DiiaParser::ArithmeticContext *a_nested = nullptr;
    DiiaParser::Arithmetic_opContext *a_op = nullptr;
    DiiaParser::ArithmeticContext *a_right = nullptr;
    ArithmeticContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    LiteralContext *literal();
    ChainContext *chain();
    antlr4::tree::TerminalNode *OPEN_PAREN();
    antlr4::tree::TerminalNode *CLOSE_PAREN();
    std::vector<ArithmeticContext *> arithmetic();
    ArithmeticContext* arithmetic(size_t i);
    Arithmetic_opContext *arithmetic_op();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  ArithmeticContext* arithmetic();
  ArithmeticContext* arithmetic(int precedence);
  class  Arithmetic_opContext : public antlr4::ParserRuleContext {
  public:
    Arithmetic_opContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *PLUS();
    antlr4::tree::TerminalNode *MINUS();
    antlr4::tree::TerminalNode *DIV();
    antlr4::tree::TerminalNode *MUL();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Arithmetic_opContext* arithmetic_op();

  class  CallContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *c_name = nullptr;
    DiiaParser::Call_parametersContext *c_parameters = nullptr;
    DiiaParser::Call_named_parametersContext *c_named_parameters = nullptr;
    CallContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *OPEN_PAREN();
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    antlr4::tree::TerminalNode *CLOSE_PAREN();
    IdentifierContext *identifier();
    Call_parametersContext *call_parameters();
    Call_named_parametersContext *call_named_parameters();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  CallContext* call();

  class  Call_parametersContext : public antlr4::ParserRuleContext {
  public:
    Call_parametersContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Call_parameterContext *> call_parameter();
    Call_parameterContext* call_parameter(size_t i);
    std::vector<antlr4::tree::TerminalNode *> COMMA();
    antlr4::tree::TerminalNode* COMMA(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Call_parametersContext* call_parameters();

  class  Call_parameterContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::AtomContext *cp_value = nullptr;
    Call_parameterContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    AtomContext *atom();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Call_parameterContext* call_parameter();

  class  Call_named_parametersContext : public antlr4::ParserRuleContext {
  public:
    Call_named_parametersContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Call_named_parameterContext *> call_named_parameter();
    Call_named_parameterContext* call_named_parameter(size_t i);
    std::vector<antlr4::tree::TerminalNode *> COMMA();
    antlr4::tree::TerminalNode* COMMA(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Call_named_parametersContext* call_named_parameters();

  class  Call_named_parameterContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *cnp_name = nullptr;
    DiiaParser::AtomContext *cnp_value = nullptr;
    Call_named_parameterContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    antlr4::tree::TerminalNode *COLON();
    IdentifierContext *identifier();
    AtomContext *atom();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Call_named_parameterContext* call_named_parameter();

  class  AssignContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::Identifiers_chainContext *a_chain = nullptr;
    DiiaParser::Assign_valueContext *a_value = nullptr;
    AssignContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *ASSIGN();
    Identifiers_chainContext *identifiers_chain();
    Assign_valueContext *assign_value();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  AssignContext* assign();

  class  Assign_valueContext : public antlr4::ParserRuleContext {
  public:
    Assign_valueContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    AtomContext *atom();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Assign_valueContext* assign_value();

  class  BodyContext : public antlr4::ParserRuleContext {
  public:
    BodyContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Body_lineContext *> body_line();
    Body_lineContext* body_line(size_t i);
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  BodyContext* body();

  class  Body_lineContext : public antlr4::ParserRuleContext {
  public:
    Body_lineContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    AssignContext *assign();
    IfContext *if_();
    ArithmeticContext *arithmetic();
    ChainContext *chain();
    EachContext *each();
    NlsContext *nls();
    Return_body_lineContext *return_body_line();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Body_lineContext* body_line();

  class  Return_body_lineContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::Body_lineContext *rbl = nullptr;
    Return_body_lineContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *RETURN();
    Body_lineContext *body_line();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Return_body_lineContext* return_body_line();

  class  LambdaContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::Diia_parametersContext *l_parameters = nullptr;
    LambdaContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *DEF();
    antlr4::tree::TerminalNode *COLON();
    AtomContext *atom();
    Diia_parametersContext *diia_parameters();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  LambdaContext* lambda();

  class  DiiaContext : public antlr4::ParserRuleContext {
  public:
    antlr4::Token *d_async = nullptr;
    DiiaParser::Diia_structureContext *d_structure = nullptr;
    DiiaParser::IdentifierContext *d_name = nullptr;
    DiiaParser::Diia_parametersContext *d_parameters = nullptr;
    DiiaParser::BodyContext *d_body = nullptr;
    DiiaContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *DEF();
    antlr4::tree::TerminalNode *OPEN_PAREN();
    antlr4::tree::TerminalNode *CLOSE_PAREN();
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);
    antlr4::tree::TerminalNode *END();
    IdentifierContext *identifier();
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    antlr4::tree::TerminalNode *ASYNC();
    Diia_structureContext *diia_structure();
    BodyContext *body();
    Diia_parametersContext *diia_parameters();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  DiiaContext* diia();

  class  Diia_parametersContext : public antlr4::ParserRuleContext {
  public:
    Diia_parametersContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Diia_parameterContext *> diia_parameter();
    Diia_parameterContext* diia_parameter(size_t i);
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    std::vector<antlr4::tree::TerminalNode *> COMMA();
    antlr4::tree::TerminalNode* COMMA(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Diia_parametersContext* diia_parameters();

  class  Diia_parameterContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *dp_name = nullptr;
    DiiaParser::AtomContext *dp_value = nullptr;
    Diia_parameterContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    IdentifierContext *identifier();
    antlr4::tree::TerminalNode *ASSIGN();
    AtomContext *atom();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Diia_parameterContext* diia_parameter();

  class  Diia_structureContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *ds_name = nullptr;
    Diia_structureContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *DOT();
    IdentifierContext *identifier();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Diia_structureContext* diia_structure();

  class  TestContext : public antlr4::ParserRuleContext {
  public:
    TestContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Test_exprContext *> test_expr();
    Test_exprContext* test_expr(size_t i);
    std::vector<Test_expr_opContext *> test_expr_op();
    Test_expr_opContext* test_expr_op(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  TestContext* test();

  class  Test_exprContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::Test_partContext *te_left = nullptr;
    DiiaParser::Test_opContext *te_op = nullptr;
    DiiaParser::Test_partContext *te_right = nullptr;
    Test_exprContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Test_partContext *> test_part();
    Test_partContext* test_part(size_t i);
    Test_opContext *test_op();
    antlr4::tree::TerminalNode *OPEN_PAREN();
    Test_exprContext *test_expr();
    antlr4::tree::TerminalNode *CLOSE_PAREN();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Test_exprContext* test_expr();

  class  Test_partContext : public antlr4::ParserRuleContext {
  public:
    Test_partContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    LiteralContext *literal();
    ChainContext *chain();
    ArithmeticContext *arithmetic();
    antlr4::tree::TerminalNode *OPEN_PAREN();
    Test_partContext *test_part();
    antlr4::tree::TerminalNode *CLOSE_PAREN();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Test_partContext* test_part();

  class  Test_opContext : public antlr4::ParserRuleContext {
  public:
    Test_opContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *EQ();
    antlr4::tree::TerminalNode *NOT_EQ();
    antlr4::tree::TerminalNode *GREATER();
    antlr4::tree::TerminalNode *SMALLER();
    antlr4::tree::TerminalNode *IS();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Test_opContext* test_op();

  class  Test_expr_opContext : public antlr4::ParserRuleContext {
  public:
    Test_expr_opContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *AND();
    antlr4::tree::TerminalNode *OR();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Test_expr_opContext* test_expr_op();

  class  IfContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::If_startContext *i_start = nullptr;
    IfContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *END();
    std::vector<If_startContext *> if_start();
    If_startContext* if_start(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  IfContext* if_();

  class  If_startContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::AtomContext *is_expr = nullptr;
    DiiaParser::BodyContext *is_body = nullptr;
    If_startContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *IF();
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);
    AtomContext *atom();
    BodyContext *body();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  If_startContext* if_start();

  class  EachContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *e_name = nullptr;
    DiiaParser::AtomContext *e_iterator = nullptr;
    DiiaParser::BodyContext *e_body = nullptr;
    EachContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *EACH();
    antlr4::tree::TerminalNode *TAKING();
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);
    antlr4::tree::TerminalNode *END();
    IdentifierContext *identifier();
    AtomContext *atom();
    BodyContext *body();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  EachContext* each();

  class  StructureContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *s_name = nullptr;
    DiiaParser::Structure_parametersContext *s_parameters = nullptr;
    StructureContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    antlr4::tree::TerminalNode *STRUCTURE();
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    antlr4::tree::TerminalNode *END();
    IdentifierContext *identifier();
    Structure_parametersContext *structure_parameters();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  StructureContext* structure();

  class  Structure_parametersContext : public antlr4::ParserRuleContext {
  public:
    Structure_parametersContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<Structure_parameterContext *> structure_parameter();
    Structure_parameterContext* structure_parameter(size_t i);
    std::vector<NlContext *> nl();
    NlContext* nl(size_t i);

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Structure_parametersContext* structure_parameters();

  class  Structure_parameterContext : public antlr4::ParserRuleContext {
  public:
    DiiaParser::IdentifierContext *sp_name = nullptr;
    DiiaParser::AtomContext *sp_value = nullptr;
    Structure_parameterContext(antlr4::ParserRuleContext *parent, size_t invokingState);
    virtual size_t getRuleIndex() const override;
    std::vector<NlsContext *> nls();
    NlsContext* nls(size_t i);
    IdentifierContext *identifier();
    antlr4::tree::TerminalNode *ASSIGN();
    AtomContext *atom();

    virtual void enterRule(antlr4::tree::ParseTreeListener *listener) override;
    virtual void exitRule(antlr4::tree::ParseTreeListener *listener) override;

    virtual std::any accept(antlr4::tree::ParseTreeVisitor *visitor) override;
   
  };

  Structure_parameterContext* structure_parameter();


  bool sempred(antlr4::RuleContext *_localctx, size_t ruleIndex, size_t predicateIndex) override;

  bool arithmeticSempred(ArithmeticContext *_localctx, size_t predicateIndex);

  // By default the static state used to implement the parser is lazily initialized during the first
  // call to the constructor. You can call this function if you wish to initialize the static state
  // ahead of time.
  static void initialize();

private:
};

