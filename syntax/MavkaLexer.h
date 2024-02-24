
// Generated from MavkaLexer.g4 by ANTLR 4.13.0

#pragma once


#include "antlr4-runtime.h"




class  MavkaLexer : public antlr4::Lexer {
public:
  enum {
    KW_END = 1, KW_DIIA = 2, KW_STRUCTURE = 3, KW_FOR = 4, KW_IF = 5, KW_WAIT = 6, 
    KW_TAKE = 7, KW_GIVE = 8, KW_AS = 9, KW_TA = 10, KW_IS = 11, KW_SPEC = 12, 
    KW_RETURN = 13, KW_ASYNC = 14, KW_SUBJECT = 15, KW_AND = 16, KW_OR = 17, 
    KW_TRY = 18, KW_CATCH = 19, KW_ELSE = 20, KW_THROW = 21, KW_WHILE = 22, 
    KW_MODULE = 23, KW_EQ_WORD = 24, KW_GR_WORD = 25, KW_SM_WORD = 26, KW_HAS_IS_WORD = 27, 
    KW_MOCKUP = 28, KW_NOT = 29, KW_PARENT = 30, KW_TSE = 31, EQUAL = 32, 
    GREATER = 33, LESSER = 34, DOT = 35, PLUS = 36, MINUS = 37, MULTIPLY = 38, 
    DIVIDE = 39, MOD = 40, POWER = 41, AND = 42, OR = 43, PAREN_OPEN = 44, 
    PAREN_CLOSE = 45, BRACKET_OPEN = 46, BRACKET_CLOSE = 47, QUESTION = 48, 
    COLON = 49, TILDA = 50, QUOTE = 51, DOUBLE_QUOTE = 52, EXCLAMATION = 53, 
    COMA = 54, INTEGER = 55, FLOAT = 56, HEX = 57, BIN = 58, NUMBER = 59, 
    ID = 60, KWID = 61, STRING_MULTILINE = 62, STRING = 63, COMP_INST_START = 64, 
    COMP_INST_END = 65, COMP_INST_ASSIGN = 66, COMMENT = 67, LINE_COMMENT = 68, 
    MRM_DIIA = 69, NL = 70, WS = 71
  };

  explicit MavkaLexer(antlr4::CharStream *input);

  ~MavkaLexer() override;


  std::string getGrammarFileName() const override;

  const std::vector<std::string>& getRuleNames() const override;

  const std::vector<std::string>& getChannelNames() const override;

  const std::vector<std::string>& getModeNames() const override;

  const antlr4::dfa::Vocabulary& getVocabulary() const override;

  antlr4::atn::SerializedATNView getSerializedATN() const override;

  const antlr4::atn::ATN& getATN() const override;

  // By default the static state used to implement the lexer is lazily initialized during the first
  // call to the constructor. You can call this function if you wish to initialize the static state
  // ahead of time.
  static void initialize();

private:

  // Individual action functions triggered by action() above.

  // Individual semantic predicate functions triggered by sempred() above.

};

