
// Generated from DiiaLexer.g4 by ANTLR 4.11.1

#pragma once


#include "antlr4-runtime.h"




class  DiiaLexer : public antlr4::Lexer {
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

  explicit DiiaLexer(antlr4::CharStream *input);

  ~DiiaLexer() override;


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

