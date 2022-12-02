
// Generated from DiiaParser.g4 by ANTLR 4.11.1


#include "DiiaParserListener.h"
#include "DiiaParserVisitor.h"

#include "DiiaParser.h"


using namespace antlrcpp;

using namespace antlr4;

namespace {

struct DiiaParserStaticData final {
  DiiaParserStaticData(std::vector<std::string> ruleNames,
                        std::vector<std::string> literalNames,
                        std::vector<std::string> symbolicNames)
      : ruleNames(std::move(ruleNames)), literalNames(std::move(literalNames)),
        symbolicNames(std::move(symbolicNames)),
        vocabulary(this->literalNames, this->symbolicNames) {}

  DiiaParserStaticData(const DiiaParserStaticData&) = delete;
  DiiaParserStaticData(DiiaParserStaticData&&) = delete;
  DiiaParserStaticData& operator=(const DiiaParserStaticData&) = delete;
  DiiaParserStaticData& operator=(DiiaParserStaticData&&) = delete;

  std::vector<antlr4::dfa::DFA> decisionToDFA;
  antlr4::atn::PredictionContextCache sharedContextCache;
  const std::vector<std::string> ruleNames;
  const std::vector<std::string> literalNames;
  const std::vector<std::string> symbolicNames;
  const antlr4::dfa::Vocabulary vocabulary;
  antlr4::atn::SerializedATNView serializedATN;
  std::unique_ptr<antlr4::atn::ATN> atn;
};

::antlr4::internal::OnceFlag diiaparserParserOnceFlag;
DiiaParserStaticData *diiaparserParserStaticData = nullptr;

void diiaparserParserInitialize() {
  assert(diiaparserParserStaticData == nullptr);
  auto staticData = std::make_unique<DiiaParserStaticData>(
    std::vector<std::string>{
      "program", "program_line", "nl", "nls", "take", "give", "identifier", 
      "identifiers_chain", "chain", "chain_element", "literal", "atom", 
      "arithmetic", "arithmetic_op", "call", "call_parameters", "call_parameter", 
      "call_named_parameters", "call_named_parameter", "assign", "assign_value", 
      "body", "body_line", "return_body_line", "lambda", "diia", "diia_parameters", 
      "diia_parameter", "diia_structure", "test", "test_expr", "test_part", 
      "test_op", "test_expr_op", "if", "if_start", "each", "structure", 
      "structure_parameters", "structure_parameter"
    },
    std::vector<std::string>{
      "", "'\\u0434\\u0456\\u044F'", "'\\u043A\\u0456\\u043D\\u0435\\u0446\\u044C'", 
      "'\\u043A\\u043E\\u0436\\u043D\\u0456\\u0439'", "'\\u0431\\u0435\\u0440\\u0443\\u0447\\u0438'", 
      "'\\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430'", 
      "'=='", "'!='", "'>='", "'<='", "'\\u0442\\u0430\\u043A'", "'\\u043D\\u0456'", 
      "'\\u043F\\u0443\\u0441\\u0442\\u043E'", "'\\u0434\\u043B\\u044F'", 
      "'\\u044F\\u043A\\u0449\\u043E'", "'\\u0447\\u0435\\u043A\\u0430\\u0442\\u0438'", 
      "'\\u0432\\u0437\\u044F\\u0442\\u0438'", "'\\u0434\\u0430\\u0442\\u0438'", 
      "'\\u043F\\u0430\\u043A'", "'\\u044F\\u043A'", "'\\u0454'", "'\\u0432\\u0435\\u0440\\u043D\\u0443\\u0442\\u0438'", 
      "'\\u0442\\u0440\\u0438\\u0432\\u0430\\u043B\\u0430'", "'\\u0456'", 
      "'\\u0430\\u0431\\u043E'", "", "", "'('", "')'", "'['", "']'", "','", 
      "'='", "'+'", "'-'", "'*'", "'/'", "':'", "'.'", "'!'"
    },
    std::vector<std::string>{
      "", "DEF", "END", "EACH", "TAKING", "STRUCTURE", "EQ", "NOT_EQ", "GREATER", 
      "SMALLER", "YES", "NO", "NONE", "FOR", "IF", "WAIT", "TAKE", "GIVE", 
      "PAK", "AS", "IS", "RETURN", "ASYNC", "AND", "OR", "SKIP_SPACES", 
      "NL", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_ARRAY", "CLOSE_ARRAY", "COMMA", 
      "ASSIGN", "PLUS", "MINUS", "MUL", "DIV", "COLON", "DOT", "NOT", "ID", 
      "NUMBER", "INTEGER", "FLOAT", "STRING"
    }
  );
  static const int32_t serializedATNSegment[] = {
  	4,1,44,397,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,
  	7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,
  	14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,
  	21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,
  	28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,
  	35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,1,0,1,0,1,0,5,0,85,8,0,
  	10,0,12,0,88,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,101,
  	8,1,1,2,1,2,1,3,5,3,106,8,3,10,3,12,3,109,9,3,1,4,1,4,1,4,3,4,114,8,4,
  	1,4,1,4,1,4,3,4,119,8,4,1,4,1,4,3,4,123,8,4,1,5,1,5,1,5,1,5,3,5,129,8,
  	5,1,6,1,6,1,7,1,7,1,7,5,7,136,8,7,10,7,12,7,139,9,7,1,8,1,8,1,8,1,8,1,
  	8,1,8,5,8,147,8,8,10,8,12,8,150,9,8,1,8,1,8,3,8,154,8,8,1,9,1,9,3,9,158,
  	8,9,1,10,1,10,1,10,1,10,1,10,3,10,165,8,10,1,11,1,11,1,11,1,11,1,11,3,
  	11,172,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,181,8,12,1,12,1,12,
  	1,12,1,12,5,12,187,8,12,10,12,12,12,190,9,12,1,13,1,13,1,14,1,14,1,14,
  	1,14,1,14,3,14,199,8,14,1,14,1,14,1,14,1,15,1,15,1,15,5,15,207,8,15,10,
  	15,12,15,210,9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,5,17,219,8,17,10,
  	17,12,17,222,9,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,
  	20,1,20,1,21,1,21,1,21,1,21,5,21,240,8,21,10,21,12,21,243,9,21,1,22,1,
  	22,1,22,1,22,1,22,1,22,1,22,3,22,252,8,22,1,23,1,23,1,23,1,24,1,24,3,
  	24,259,8,24,1,24,1,24,1,24,1,25,3,25,265,8,25,1,25,1,25,3,25,269,8,25,
  	1,25,1,25,1,25,1,25,3,25,275,8,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
  	3,25,284,8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,5,26,294,8,26,10,
  	26,12,26,297,9,26,1,27,1,27,1,27,3,27,302,8,27,1,28,1,28,1,28,1,29,1,
  	29,1,29,1,29,5,29,311,8,29,10,29,12,29,314,9,29,1,30,1,30,1,30,1,30,3,
  	30,320,8,30,1,30,1,30,1,30,1,30,3,30,326,8,30,1,31,1,31,1,31,1,31,1,31,
  	1,31,1,31,3,31,335,8,31,1,32,1,32,1,33,1,33,1,34,4,34,342,8,34,11,34,
  	12,34,343,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,3,35,354,8,35,1,36,
  	1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,364,8,36,1,36,1,36,1,37,1,37,
  	1,37,1,37,1,37,1,37,1,37,3,37,375,8,37,1,37,1,37,1,37,1,38,1,38,1,38,
  	1,38,5,38,384,8,38,10,38,12,38,387,9,38,1,39,1,39,1,39,1,39,3,39,393,
  	8,39,1,39,1,39,1,39,0,1,24,40,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
  	30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
  	76,78,0,3,1,0,33,36,2,0,6,9,20,20,1,0,23,24,415,0,80,1,0,0,0,2,100,1,
  	0,0,0,4,102,1,0,0,0,6,107,1,0,0,0,8,110,1,0,0,0,10,124,1,0,0,0,12,130,
  	1,0,0,0,14,132,1,0,0,0,16,153,1,0,0,0,18,157,1,0,0,0,20,164,1,0,0,0,22,
  	171,1,0,0,0,24,180,1,0,0,0,26,191,1,0,0,0,28,193,1,0,0,0,30,203,1,0,0,
  	0,32,211,1,0,0,0,34,215,1,0,0,0,36,223,1,0,0,0,38,229,1,0,0,0,40,233,
  	1,0,0,0,42,235,1,0,0,0,44,251,1,0,0,0,46,253,1,0,0,0,48,256,1,0,0,0,50,
  	264,1,0,0,0,52,287,1,0,0,0,54,298,1,0,0,0,56,303,1,0,0,0,58,306,1,0,0,
  	0,60,325,1,0,0,0,62,334,1,0,0,0,64,336,1,0,0,0,66,338,1,0,0,0,68,341,
  	1,0,0,0,70,347,1,0,0,0,72,355,1,0,0,0,74,367,1,0,0,0,76,379,1,0,0,0,78,
  	388,1,0,0,0,80,86,3,2,1,0,81,82,3,4,2,0,82,83,3,2,1,0,83,85,1,0,0,0,84,
  	81,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,
  	86,1,0,0,0,89,90,5,0,0,1,90,1,1,0,0,0,91,101,3,16,8,0,92,101,3,38,19,
  	0,93,101,3,50,25,0,94,101,3,68,34,0,95,101,3,72,36,0,96,101,3,6,3,0,97,
  	101,3,74,37,0,98,101,3,8,4,0,99,101,3,10,5,0,100,91,1,0,0,0,100,92,1,
  	0,0,0,100,93,1,0,0,0,100,94,1,0,0,0,100,95,1,0,0,0,100,96,1,0,0,0,100,
  	97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,3,1,0,0,0,102,103,5,26,0,
  	0,103,5,1,0,0,0,104,106,3,4,2,0,105,104,1,0,0,0,106,109,1,0,0,0,107,105,
  	1,0,0,0,107,108,1,0,0,0,108,7,1,0,0,0,109,107,1,0,0,0,110,113,5,16,0,
  	0,111,112,5,18,0,0,112,114,5,37,0,0,113,111,1,0,0,0,113,114,1,0,0,0,114,
  	115,1,0,0,0,115,118,3,12,6,0,116,117,5,38,0,0,117,119,3,14,7,0,118,116,
  	1,0,0,0,118,119,1,0,0,0,119,122,1,0,0,0,120,121,5,19,0,0,121,123,3,12,
  	6,0,122,120,1,0,0,0,122,123,1,0,0,0,123,9,1,0,0,0,124,125,5,17,0,0,125,
  	128,3,12,6,0,126,127,5,19,0,0,127,129,3,12,6,0,128,126,1,0,0,0,128,129,
  	1,0,0,0,129,11,1,0,0,0,130,131,5,40,0,0,131,13,1,0,0,0,132,137,3,12,6,
  	0,133,134,5,38,0,0,134,136,3,12,6,0,135,133,1,0,0,0,136,139,1,0,0,0,137,
  	135,1,0,0,0,137,138,1,0,0,0,138,15,1,0,0,0,139,137,1,0,0,0,140,148,3,
  	18,9,0,141,142,3,6,3,0,142,143,5,38,0,0,143,144,3,6,3,0,144,145,3,18,
  	9,0,145,147,1,0,0,0,146,141,1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,148,
  	149,1,0,0,0,149,154,1,0,0,0,150,148,1,0,0,0,151,152,5,15,0,0,152,154,
  	3,16,8,0,153,140,1,0,0,0,153,151,1,0,0,0,154,17,1,0,0,0,155,158,3,12,
  	6,0,156,158,3,28,14,0,157,155,1,0,0,0,157,156,1,0,0,0,158,19,1,0,0,0,
  	159,165,5,41,0,0,160,165,5,44,0,0,161,165,5,10,0,0,162,165,5,11,0,0,163,
  	165,5,12,0,0,164,159,1,0,0,0,164,160,1,0,0,0,164,161,1,0,0,0,164,162,
  	1,0,0,0,164,163,1,0,0,0,165,21,1,0,0,0,166,172,3,20,10,0,167,172,3,16,
  	8,0,168,172,3,24,12,0,169,172,3,58,29,0,170,172,3,48,24,0,171,166,1,0,
  	0,0,171,167,1,0,0,0,171,168,1,0,0,0,171,169,1,0,0,0,171,170,1,0,0,0,172,
  	23,1,0,0,0,173,174,6,12,-1,0,174,181,3,20,10,0,175,181,3,16,8,0,176,177,
  	5,27,0,0,177,178,3,24,12,0,178,179,5,28,0,0,179,181,1,0,0,0,180,173,1,
  	0,0,0,180,175,1,0,0,0,180,176,1,0,0,0,181,188,1,0,0,0,182,183,10,4,0,
  	0,183,184,3,26,13,0,184,185,3,24,12,5,185,187,1,0,0,0,186,182,1,0,0,0,
  	187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,25,1,0,0,0,190,188,
  	1,0,0,0,191,192,7,0,0,0,192,27,1,0,0,0,193,194,3,12,6,0,194,195,5,27,
  	0,0,195,198,3,6,3,0,196,199,3,30,15,0,197,199,3,34,17,0,198,196,1,0,0,
  	0,198,197,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,201,3,6,3,0,201,
  	202,5,28,0,0,202,29,1,0,0,0,203,208,3,32,16,0,204,205,5,31,0,0,205,207,
  	3,32,16,0,206,204,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,
  	0,0,209,31,1,0,0,0,210,208,1,0,0,0,211,212,3,6,3,0,212,213,3,22,11,0,
  	213,214,3,6,3,0,214,33,1,0,0,0,215,220,3,36,18,0,216,217,5,31,0,0,217,
  	219,3,36,18,0,218,216,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,221,
  	1,0,0,0,221,35,1,0,0,0,222,220,1,0,0,0,223,224,3,6,3,0,224,225,3,12,6,
  	0,225,226,5,37,0,0,226,227,3,22,11,0,227,228,3,6,3,0,228,37,1,0,0,0,229,
  	230,3,14,7,0,230,231,5,32,0,0,231,232,3,40,20,0,232,39,1,0,0,0,233,234,
  	3,22,11,0,234,41,1,0,0,0,235,241,3,44,22,0,236,237,3,4,2,0,237,238,3,
  	44,22,0,238,240,1,0,0,0,239,236,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,
  	0,241,242,1,0,0,0,242,43,1,0,0,0,243,241,1,0,0,0,244,252,3,38,19,0,245,
  	252,3,68,34,0,246,252,3,24,12,0,247,252,3,16,8,0,248,252,3,72,36,0,249,
  	252,3,6,3,0,250,252,3,46,23,0,251,244,1,0,0,0,251,245,1,0,0,0,251,246,
  	1,0,0,0,251,247,1,0,0,0,251,248,1,0,0,0,251,249,1,0,0,0,251,250,1,0,0,
  	0,252,45,1,0,0,0,253,254,5,21,0,0,254,255,3,44,22,0,255,47,1,0,0,0,256,
  	258,5,1,0,0,257,259,3,52,26,0,258,257,1,0,0,0,258,259,1,0,0,0,259,260,
  	1,0,0,0,260,261,5,37,0,0,261,262,3,22,11,0,262,49,1,0,0,0,263,265,5,22,
  	0,0,264,263,1,0,0,0,264,265,1,0,0,0,265,266,1,0,0,0,266,268,5,1,0,0,267,
  	269,3,56,28,0,268,267,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,271,
  	3,12,6,0,271,272,5,27,0,0,272,274,3,6,3,0,273,275,3,52,26,0,274,273,1,
  	0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,3,6,3,0,277,278,1,0,0,0,
  	278,279,5,28,0,0,279,283,3,4,2,0,280,281,3,42,21,0,281,282,3,4,2,0,282,
  	284,1,0,0,0,283,280,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,286,5,
  	2,0,0,286,51,1,0,0,0,287,295,3,54,27,0,288,289,3,6,3,0,289,290,5,31,0,
  	0,290,291,3,6,3,0,291,292,3,54,27,0,292,294,1,0,0,0,293,288,1,0,0,0,294,
  	297,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,53,1,0,0,0,297,295,1,
  	0,0,0,298,301,3,12,6,0,299,300,5,32,0,0,300,302,3,22,11,0,301,299,1,0,
  	0,0,301,302,1,0,0,0,302,55,1,0,0,0,303,304,3,12,6,0,304,305,5,38,0,0,
  	305,57,1,0,0,0,306,312,3,60,30,0,307,308,3,66,33,0,308,309,3,60,30,0,
  	309,311,1,0,0,0,310,307,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,
  	1,0,0,0,313,59,1,0,0,0,314,312,1,0,0,0,315,319,3,62,31,0,316,317,3,64,
  	32,0,317,318,3,62,31,0,318,320,1,0,0,0,319,316,1,0,0,0,319,320,1,0,0,
  	0,320,326,1,0,0,0,321,322,5,27,0,0,322,323,3,60,30,0,323,324,5,28,0,0,
  	324,326,1,0,0,0,325,315,1,0,0,0,325,321,1,0,0,0,326,61,1,0,0,0,327,335,
  	3,20,10,0,328,335,3,16,8,0,329,335,3,24,12,0,330,331,5,27,0,0,331,332,
  	3,62,31,0,332,333,5,28,0,0,333,335,1,0,0,0,334,327,1,0,0,0,334,328,1,
  	0,0,0,334,329,1,0,0,0,334,330,1,0,0,0,335,63,1,0,0,0,336,337,7,1,0,0,
  	337,65,1,0,0,0,338,339,7,2,0,0,339,67,1,0,0,0,340,342,3,70,35,0,341,340,
  	1,0,0,0,342,343,1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,345,1,0,0,
  	0,345,346,5,2,0,0,346,69,1,0,0,0,347,348,5,14,0,0,348,349,3,22,11,0,349,
  	353,3,4,2,0,350,351,3,42,21,0,351,352,3,4,2,0,352,354,1,0,0,0,353,350,
  	1,0,0,0,353,354,1,0,0,0,354,71,1,0,0,0,355,356,5,3,0,0,356,357,3,12,6,
  	0,357,358,5,4,0,0,358,359,3,22,11,0,359,363,3,4,2,0,360,361,3,42,21,0,
  	361,362,3,4,2,0,362,364,1,0,0,0,363,360,1,0,0,0,363,364,1,0,0,0,364,365,
  	1,0,0,0,365,366,5,2,0,0,366,73,1,0,0,0,367,368,5,5,0,0,368,369,3,12,6,
  	0,369,370,3,4,2,0,370,374,3,6,3,0,371,372,3,76,38,0,372,373,3,4,2,0,373,
  	375,1,0,0,0,374,371,1,0,0,0,374,375,1,0,0,0,375,376,1,0,0,0,376,377,3,
  	6,3,0,377,378,5,2,0,0,378,75,1,0,0,0,379,385,3,78,39,0,380,381,3,4,2,
  	0,381,382,3,78,39,0,382,384,1,0,0,0,383,380,1,0,0,0,384,387,1,0,0,0,385,
  	383,1,0,0,0,385,386,1,0,0,0,386,77,1,0,0,0,387,385,1,0,0,0,388,389,3,
  	6,3,0,389,392,3,12,6,0,390,391,5,32,0,0,391,393,3,22,11,0,392,390,1,0,
  	0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,395,3,6,3,0,395,79,1,0,0,0,37,
  	86,100,107,113,118,122,128,137,148,153,157,164,171,180,188,198,208,220,
  	241,251,258,264,268,274,283,295,301,312,319,325,334,343,353,363,374,385,
  	392
  };
  staticData->serializedATN = antlr4::atn::SerializedATNView(serializedATNSegment, sizeof(serializedATNSegment) / sizeof(serializedATNSegment[0]));

  antlr4::atn::ATNDeserializer deserializer;
  staticData->atn = deserializer.deserialize(staticData->serializedATN);

  const size_t count = staticData->atn->getNumberOfDecisions();
  staticData->decisionToDFA.reserve(count);
  for (size_t i = 0; i < count; i++) { 
    staticData->decisionToDFA.emplace_back(staticData->atn->getDecisionState(i), i);
  }
  diiaparserParserStaticData = staticData.release();
}

}

DiiaParser::DiiaParser(TokenStream *input) : DiiaParser(input, antlr4::atn::ParserATNSimulatorOptions()) {}

DiiaParser::DiiaParser(TokenStream *input, const antlr4::atn::ParserATNSimulatorOptions &options) : Parser(input) {
  DiiaParser::initialize();
  _interpreter = new atn::ParserATNSimulator(this, *diiaparserParserStaticData->atn, diiaparserParserStaticData->decisionToDFA, diiaparserParserStaticData->sharedContextCache, options);
}

DiiaParser::~DiiaParser() {
  delete _interpreter;
}

const atn::ATN& DiiaParser::getATN() const {
  return *diiaparserParserStaticData->atn;
}

std::string DiiaParser::getGrammarFileName() const {
  return "DiiaParser.g4";
}

const std::vector<std::string>& DiiaParser::getRuleNames() const {
  return diiaparserParserStaticData->ruleNames;
}

const dfa::Vocabulary& DiiaParser::getVocabulary() const {
  return diiaparserParserStaticData->vocabulary;
}

antlr4::atn::SerializedATNView DiiaParser::getSerializedATN() const {
  return diiaparserParserStaticData->serializedATN;
}


//----------------- ProgramContext ------------------------------------------------------------------

DiiaParser::ProgramContext::ProgramContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Program_lineContext *> DiiaParser::ProgramContext::program_line() {
  return getRuleContexts<DiiaParser::Program_lineContext>();
}

DiiaParser::Program_lineContext* DiiaParser::ProgramContext::program_line(size_t i) {
  return getRuleContext<DiiaParser::Program_lineContext>(i);
}

tree::TerminalNode* DiiaParser::ProgramContext::EOF() {
  return getToken(DiiaParser::EOF, 0);
}

std::vector<DiiaParser::NlContext *> DiiaParser::ProgramContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::ProgramContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}


size_t DiiaParser::ProgramContext::getRuleIndex() const {
  return DiiaParser::RuleProgram;
}

void DiiaParser::ProgramContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterProgram(this);
}

void DiiaParser::ProgramContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitProgram(this);
}


std::any DiiaParser::ProgramContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitProgram(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::ProgramContext* DiiaParser::program() {
  ProgramContext *_localctx = _tracker.createInstance<ProgramContext>(_ctx, getState());
  enterRule(_localctx, 0, DiiaParser::RuleProgram);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(80);
    program_line();
    setState(86);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while (_la == DiiaParser::NL) {
      setState(81);
      nl();
      setState(82);
      program_line();
      setState(88);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
    setState(89);
    match(DiiaParser::EOF);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Program_lineContext ------------------------------------------------------------------

DiiaParser::Program_lineContext::Program_lineContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::ChainContext* DiiaParser::Program_lineContext::chain() {
  return getRuleContext<DiiaParser::ChainContext>(0);
}

DiiaParser::AssignContext* DiiaParser::Program_lineContext::assign() {
  return getRuleContext<DiiaParser::AssignContext>(0);
}

DiiaParser::DiiaContext* DiiaParser::Program_lineContext::diia() {
  return getRuleContext<DiiaParser::DiiaContext>(0);
}

DiiaParser::IfContext* DiiaParser::Program_lineContext::if_() {
  return getRuleContext<DiiaParser::IfContext>(0);
}

DiiaParser::EachContext* DiiaParser::Program_lineContext::each() {
  return getRuleContext<DiiaParser::EachContext>(0);
}

DiiaParser::NlsContext* DiiaParser::Program_lineContext::nls() {
  return getRuleContext<DiiaParser::NlsContext>(0);
}

DiiaParser::StructureContext* DiiaParser::Program_lineContext::structure() {
  return getRuleContext<DiiaParser::StructureContext>(0);
}

DiiaParser::TakeContext* DiiaParser::Program_lineContext::take() {
  return getRuleContext<DiiaParser::TakeContext>(0);
}

DiiaParser::GiveContext* DiiaParser::Program_lineContext::give() {
  return getRuleContext<DiiaParser::GiveContext>(0);
}


size_t DiiaParser::Program_lineContext::getRuleIndex() const {
  return DiiaParser::RuleProgram_line;
}

void DiiaParser::Program_lineContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterProgram_line(this);
}

void DiiaParser::Program_lineContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitProgram_line(this);
}


std::any DiiaParser::Program_lineContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitProgram_line(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Program_lineContext* DiiaParser::program_line() {
  Program_lineContext *_localctx = _tracker.createInstance<Program_lineContext>(_ctx, getState());
  enterRule(_localctx, 2, DiiaParser::RuleProgram_line);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    setState(100);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 1, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(91);
      chain();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(92);
      assign();
      break;
    }

    case 3: {
      enterOuterAlt(_localctx, 3);
      setState(93);
      diia();
      break;
    }

    case 4: {
      enterOuterAlt(_localctx, 4);
      setState(94);
      if_();
      break;
    }

    case 5: {
      enterOuterAlt(_localctx, 5);
      setState(95);
      each();
      break;
    }

    case 6: {
      enterOuterAlt(_localctx, 6);
      setState(96);
      nls();
      break;
    }

    case 7: {
      enterOuterAlt(_localctx, 7);
      setState(97);
      structure();
      break;
    }

    case 8: {
      enterOuterAlt(_localctx, 8);
      setState(98);
      take();
      break;
    }

    case 9: {
      enterOuterAlt(_localctx, 9);
      setState(99);
      give();
      break;
    }

    default:
      break;
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- NlContext ------------------------------------------------------------------

DiiaParser::NlContext::NlContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::NlContext::NL() {
  return getToken(DiiaParser::NL, 0);
}


size_t DiiaParser::NlContext::getRuleIndex() const {
  return DiiaParser::RuleNl;
}

void DiiaParser::NlContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterNl(this);
}

void DiiaParser::NlContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitNl(this);
}


std::any DiiaParser::NlContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitNl(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::NlContext* DiiaParser::nl() {
  NlContext *_localctx = _tracker.createInstance<NlContext>(_ctx, getState());
  enterRule(_localctx, 4, DiiaParser::RuleNl);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(102);
    match(DiiaParser::NL);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- NlsContext ------------------------------------------------------------------

DiiaParser::NlsContext::NlsContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::NlContext *> DiiaParser::NlsContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::NlsContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}


size_t DiiaParser::NlsContext::getRuleIndex() const {
  return DiiaParser::RuleNls;
}

void DiiaParser::NlsContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterNls(this);
}

void DiiaParser::NlsContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitNls(this);
}


std::any DiiaParser::NlsContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitNls(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::NlsContext* DiiaParser::nls() {
  NlsContext *_localctx = _tracker.createInstance<NlsContext>(_ctx, getState());
  enterRule(_localctx, 6, DiiaParser::RuleNls);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    size_t alt;
    enterOuterAlt(_localctx, 1);
    setState(107);
    _errHandler->sync(this);
    alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 2, _ctx);
    while (alt != 2 && alt != atn::ATN::INVALID_ALT_NUMBER) {
      if (alt == 1) {
        setState(104);
        nl(); 
      }
      setState(109);
      _errHandler->sync(this);
      alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 2, _ctx);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- TakeContext ------------------------------------------------------------------

DiiaParser::TakeContext::TakeContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::TakeContext::TAKE() {
  return getToken(DiiaParser::TAKE, 0);
}

std::vector<DiiaParser::IdentifierContext *> DiiaParser::TakeContext::identifier() {
  return getRuleContexts<DiiaParser::IdentifierContext>();
}

DiiaParser::IdentifierContext* DiiaParser::TakeContext::identifier(size_t i) {
  return getRuleContext<DiiaParser::IdentifierContext>(i);
}

tree::TerminalNode* DiiaParser::TakeContext::COLON() {
  return getToken(DiiaParser::COLON, 0);
}

tree::TerminalNode* DiiaParser::TakeContext::DOT() {
  return getToken(DiiaParser::DOT, 0);
}

tree::TerminalNode* DiiaParser::TakeContext::AS() {
  return getToken(DiiaParser::AS, 0);
}

tree::TerminalNode* DiiaParser::TakeContext::PAK() {
  return getToken(DiiaParser::PAK, 0);
}

DiiaParser::Identifiers_chainContext* DiiaParser::TakeContext::identifiers_chain() {
  return getRuleContext<DiiaParser::Identifiers_chainContext>(0);
}


size_t DiiaParser::TakeContext::getRuleIndex() const {
  return DiiaParser::RuleTake;
}

void DiiaParser::TakeContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterTake(this);
}

void DiiaParser::TakeContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitTake(this);
}


std::any DiiaParser::TakeContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitTake(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::TakeContext* DiiaParser::take() {
  TakeContext *_localctx = _tracker.createInstance<TakeContext>(_ctx, getState());
  enterRule(_localctx, 8, DiiaParser::RuleTake);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(110);
    match(DiiaParser::TAKE);
    setState(113);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::PAK) {
      setState(111);
      antlrcpp::downCast<TakeContext *>(_localctx)->t_pak = match(DiiaParser::PAK);
      setState(112);
      match(DiiaParser::COLON);
    }
    setState(115);
    antlrcpp::downCast<TakeContext *>(_localctx)->t_module = identifier();
    setState(118);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::DOT) {
      setState(116);
      match(DiiaParser::DOT);
      setState(117);
      antlrcpp::downCast<TakeContext *>(_localctx)->t_elements_chain = identifiers_chain();
    }
    setState(122);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::AS) {
      setState(120);
      match(DiiaParser::AS);
      setState(121);
      antlrcpp::downCast<TakeContext *>(_localctx)->t_as = identifier();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- GiveContext ------------------------------------------------------------------

DiiaParser::GiveContext::GiveContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::GiveContext::GIVE() {
  return getToken(DiiaParser::GIVE, 0);
}

std::vector<DiiaParser::IdentifierContext *> DiiaParser::GiveContext::identifier() {
  return getRuleContexts<DiiaParser::IdentifierContext>();
}

DiiaParser::IdentifierContext* DiiaParser::GiveContext::identifier(size_t i) {
  return getRuleContext<DiiaParser::IdentifierContext>(i);
}

tree::TerminalNode* DiiaParser::GiveContext::AS() {
  return getToken(DiiaParser::AS, 0);
}


size_t DiiaParser::GiveContext::getRuleIndex() const {
  return DiiaParser::RuleGive;
}

void DiiaParser::GiveContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterGive(this);
}

void DiiaParser::GiveContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitGive(this);
}


std::any DiiaParser::GiveContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitGive(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::GiveContext* DiiaParser::give() {
  GiveContext *_localctx = _tracker.createInstance<GiveContext>(_ctx, getState());
  enterRule(_localctx, 10, DiiaParser::RuleGive);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(124);
    match(DiiaParser::GIVE);
    setState(125);
    antlrcpp::downCast<GiveContext *>(_localctx)->g_name = identifier();
    setState(128);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::AS) {
      setState(126);
      match(DiiaParser::AS);
      setState(127);
      antlrcpp::downCast<GiveContext *>(_localctx)->g_as = identifier();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- IdentifierContext ------------------------------------------------------------------

DiiaParser::IdentifierContext::IdentifierContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::IdentifierContext::ID() {
  return getToken(DiiaParser::ID, 0);
}


size_t DiiaParser::IdentifierContext::getRuleIndex() const {
  return DiiaParser::RuleIdentifier;
}

void DiiaParser::IdentifierContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterIdentifier(this);
}

void DiiaParser::IdentifierContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitIdentifier(this);
}


std::any DiiaParser::IdentifierContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitIdentifier(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::IdentifierContext* DiiaParser::identifier() {
  IdentifierContext *_localctx = _tracker.createInstance<IdentifierContext>(_ctx, getState());
  enterRule(_localctx, 12, DiiaParser::RuleIdentifier);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(130);
    match(DiiaParser::ID);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Identifiers_chainContext ------------------------------------------------------------------

DiiaParser::Identifiers_chainContext::Identifiers_chainContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::IdentifierContext *> DiiaParser::Identifiers_chainContext::identifier() {
  return getRuleContexts<DiiaParser::IdentifierContext>();
}

DiiaParser::IdentifierContext* DiiaParser::Identifiers_chainContext::identifier(size_t i) {
  return getRuleContext<DiiaParser::IdentifierContext>(i);
}

std::vector<tree::TerminalNode *> DiiaParser::Identifiers_chainContext::DOT() {
  return getTokens(DiiaParser::DOT);
}

tree::TerminalNode* DiiaParser::Identifiers_chainContext::DOT(size_t i) {
  return getToken(DiiaParser::DOT, i);
}


size_t DiiaParser::Identifiers_chainContext::getRuleIndex() const {
  return DiiaParser::RuleIdentifiers_chain;
}

void DiiaParser::Identifiers_chainContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterIdentifiers_chain(this);
}

void DiiaParser::Identifiers_chainContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitIdentifiers_chain(this);
}


std::any DiiaParser::Identifiers_chainContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitIdentifiers_chain(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Identifiers_chainContext* DiiaParser::identifiers_chain() {
  Identifiers_chainContext *_localctx = _tracker.createInstance<Identifiers_chainContext>(_ctx, getState());
  enterRule(_localctx, 14, DiiaParser::RuleIdentifiers_chain);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(132);
    identifier();
    setState(137);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while (_la == DiiaParser::DOT) {
      setState(133);
      match(DiiaParser::DOT);
      setState(134);
      identifier();
      setState(139);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- ChainContext ------------------------------------------------------------------

DiiaParser::ChainContext::ChainContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Chain_elementContext *> DiiaParser::ChainContext::chain_element() {
  return getRuleContexts<DiiaParser::Chain_elementContext>();
}

DiiaParser::Chain_elementContext* DiiaParser::ChainContext::chain_element(size_t i) {
  return getRuleContext<DiiaParser::Chain_elementContext>(i);
}

std::vector<DiiaParser::NlsContext *> DiiaParser::ChainContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::ChainContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

std::vector<tree::TerminalNode *> DiiaParser::ChainContext::DOT() {
  return getTokens(DiiaParser::DOT);
}

tree::TerminalNode* DiiaParser::ChainContext::DOT(size_t i) {
  return getToken(DiiaParser::DOT, i);
}

tree::TerminalNode* DiiaParser::ChainContext::WAIT() {
  return getToken(DiiaParser::WAIT, 0);
}

DiiaParser::ChainContext* DiiaParser::ChainContext::chain() {
  return getRuleContext<DiiaParser::ChainContext>(0);
}


size_t DiiaParser::ChainContext::getRuleIndex() const {
  return DiiaParser::RuleChain;
}

void DiiaParser::ChainContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterChain(this);
}

void DiiaParser::ChainContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitChain(this);
}


std::any DiiaParser::ChainContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitChain(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::ChainContext* DiiaParser::chain() {
  ChainContext *_localctx = _tracker.createInstance<ChainContext>(_ctx, getState());
  enterRule(_localctx, 16, DiiaParser::RuleChain);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    size_t alt;
    setState(153);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case DiiaParser::ID: {
        enterOuterAlt(_localctx, 1);
        setState(140);
        chain_element();
        setState(148);
        _errHandler->sync(this);
        alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 8, _ctx);
        while (alt != 2 && alt != atn::ATN::INVALID_ALT_NUMBER) {
          if (alt == 1) {
            setState(141);
            nls();
            setState(142);
            match(DiiaParser::DOT);
            setState(143);
            nls();
            setState(144);
            chain_element(); 
          }
          setState(150);
          _errHandler->sync(this);
          alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 8, _ctx);
        }
        break;
      }

      case DiiaParser::WAIT: {
        enterOuterAlt(_localctx, 2);
        setState(151);
        match(DiiaParser::WAIT);
        setState(152);
        antlrcpp::downCast<ChainContext *>(_localctx)->c_wait = chain();
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Chain_elementContext ------------------------------------------------------------------

DiiaParser::Chain_elementContext::Chain_elementContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::IdentifierContext* DiiaParser::Chain_elementContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

DiiaParser::CallContext* DiiaParser::Chain_elementContext::call() {
  return getRuleContext<DiiaParser::CallContext>(0);
}


size_t DiiaParser::Chain_elementContext::getRuleIndex() const {
  return DiiaParser::RuleChain_element;
}

void DiiaParser::Chain_elementContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterChain_element(this);
}

void DiiaParser::Chain_elementContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitChain_element(this);
}


std::any DiiaParser::Chain_elementContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitChain_element(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Chain_elementContext* DiiaParser::chain_element() {
  Chain_elementContext *_localctx = _tracker.createInstance<Chain_elementContext>(_ctx, getState());
  enterRule(_localctx, 18, DiiaParser::RuleChain_element);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    setState(157);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 10, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(155);
      identifier();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(156);
      call();
      break;
    }

    default:
      break;
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- LiteralContext ------------------------------------------------------------------

DiiaParser::LiteralContext::LiteralContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::LiteralContext::NUMBER() {
  return getToken(DiiaParser::NUMBER, 0);
}

tree::TerminalNode* DiiaParser::LiteralContext::STRING() {
  return getToken(DiiaParser::STRING, 0);
}

tree::TerminalNode* DiiaParser::LiteralContext::YES() {
  return getToken(DiiaParser::YES, 0);
}

tree::TerminalNode* DiiaParser::LiteralContext::NO() {
  return getToken(DiiaParser::NO, 0);
}

tree::TerminalNode* DiiaParser::LiteralContext::NONE() {
  return getToken(DiiaParser::NONE, 0);
}


size_t DiiaParser::LiteralContext::getRuleIndex() const {
  return DiiaParser::RuleLiteral;
}

void DiiaParser::LiteralContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterLiteral(this);
}

void DiiaParser::LiteralContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitLiteral(this);
}


std::any DiiaParser::LiteralContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitLiteral(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::LiteralContext* DiiaParser::literal() {
  LiteralContext *_localctx = _tracker.createInstance<LiteralContext>(_ctx, getState());
  enterRule(_localctx, 20, DiiaParser::RuleLiteral);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    setState(164);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case DiiaParser::NUMBER: {
        enterOuterAlt(_localctx, 1);
        setState(159);
        antlrcpp::downCast<LiteralContext *>(_localctx)->l_number = match(DiiaParser::NUMBER);
        break;
      }

      case DiiaParser::STRING: {
        enterOuterAlt(_localctx, 2);
        setState(160);
        antlrcpp::downCast<LiteralContext *>(_localctx)->l_string = match(DiiaParser::STRING);
        break;
      }

      case DiiaParser::YES: {
        enterOuterAlt(_localctx, 3);
        setState(161);
        antlrcpp::downCast<LiteralContext *>(_localctx)->l_yes = match(DiiaParser::YES);
        break;
      }

      case DiiaParser::NO: {
        enterOuterAlt(_localctx, 4);
        setState(162);
        antlrcpp::downCast<LiteralContext *>(_localctx)->l_no = match(DiiaParser::NO);
        break;
      }

      case DiiaParser::NONE: {
        enterOuterAlt(_localctx, 5);
        setState(163);
        antlrcpp::downCast<LiteralContext *>(_localctx)->l_none = match(DiiaParser::NONE);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- AtomContext ------------------------------------------------------------------

DiiaParser::AtomContext::AtomContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::LiteralContext* DiiaParser::AtomContext::literal() {
  return getRuleContext<DiiaParser::LiteralContext>(0);
}

DiiaParser::ChainContext* DiiaParser::AtomContext::chain() {
  return getRuleContext<DiiaParser::ChainContext>(0);
}

DiiaParser::ArithmeticContext* DiiaParser::AtomContext::arithmetic() {
  return getRuleContext<DiiaParser::ArithmeticContext>(0);
}

DiiaParser::TestContext* DiiaParser::AtomContext::test() {
  return getRuleContext<DiiaParser::TestContext>(0);
}

DiiaParser::LambdaContext* DiiaParser::AtomContext::lambda() {
  return getRuleContext<DiiaParser::LambdaContext>(0);
}


size_t DiiaParser::AtomContext::getRuleIndex() const {
  return DiiaParser::RuleAtom;
}

void DiiaParser::AtomContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterAtom(this);
}

void DiiaParser::AtomContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitAtom(this);
}


std::any DiiaParser::AtomContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitAtom(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::AtomContext* DiiaParser::atom() {
  AtomContext *_localctx = _tracker.createInstance<AtomContext>(_ctx, getState());
  enterRule(_localctx, 22, DiiaParser::RuleAtom);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    setState(171);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 12, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(166);
      literal();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(167);
      chain();
      break;
    }

    case 3: {
      enterOuterAlt(_localctx, 3);
      setState(168);
      arithmetic(0);
      break;
    }

    case 4: {
      enterOuterAlt(_localctx, 4);
      setState(169);
      test();
      break;
    }

    case 5: {
      enterOuterAlt(_localctx, 5);
      setState(170);
      lambda();
      break;
    }

    default:
      break;
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- ArithmeticContext ------------------------------------------------------------------

DiiaParser::ArithmeticContext::ArithmeticContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::LiteralContext* DiiaParser::ArithmeticContext::literal() {
  return getRuleContext<DiiaParser::LiteralContext>(0);
}

DiiaParser::ChainContext* DiiaParser::ArithmeticContext::chain() {
  return getRuleContext<DiiaParser::ChainContext>(0);
}

tree::TerminalNode* DiiaParser::ArithmeticContext::OPEN_PAREN() {
  return getToken(DiiaParser::OPEN_PAREN, 0);
}

tree::TerminalNode* DiiaParser::ArithmeticContext::CLOSE_PAREN() {
  return getToken(DiiaParser::CLOSE_PAREN, 0);
}

std::vector<DiiaParser::ArithmeticContext *> DiiaParser::ArithmeticContext::arithmetic() {
  return getRuleContexts<DiiaParser::ArithmeticContext>();
}

DiiaParser::ArithmeticContext* DiiaParser::ArithmeticContext::arithmetic(size_t i) {
  return getRuleContext<DiiaParser::ArithmeticContext>(i);
}

DiiaParser::Arithmetic_opContext* DiiaParser::ArithmeticContext::arithmetic_op() {
  return getRuleContext<DiiaParser::Arithmetic_opContext>(0);
}


size_t DiiaParser::ArithmeticContext::getRuleIndex() const {
  return DiiaParser::RuleArithmetic;
}

void DiiaParser::ArithmeticContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArithmetic(this);
}

void DiiaParser::ArithmeticContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArithmetic(this);
}


std::any DiiaParser::ArithmeticContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitArithmetic(this);
  else
    return visitor->visitChildren(this);
}


DiiaParser::ArithmeticContext* DiiaParser::arithmetic() {
   return arithmetic(0);
}

DiiaParser::ArithmeticContext* DiiaParser::arithmetic(int precedence) {
  ParserRuleContext *parentContext = _ctx;
  size_t parentState = getState();
  DiiaParser::ArithmeticContext *_localctx = _tracker.createInstance<ArithmeticContext>(_ctx, parentState);
  DiiaParser::ArithmeticContext *previousContext = _localctx;
  (void)previousContext; // Silence compiler, in case the context is not used by generated code.
  size_t startState = 24;
  enterRecursionRule(_localctx, 24, DiiaParser::RuleArithmetic, precedence);

    

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    unrollRecursionContexts(parentContext);
  });
  try {
    size_t alt;
    enterOuterAlt(_localctx, 1);
    setState(180);
    _errHandler->sync(this);
    switch (_input->LA(1)) {
      case DiiaParser::YES:
      case DiiaParser::NO:
      case DiiaParser::NONE:
      case DiiaParser::NUMBER:
      case DiiaParser::STRING: {
        setState(174);
        antlrcpp::downCast<ArithmeticContext *>(_localctx)->a_literal = literal();
        break;
      }

      case DiiaParser::WAIT:
      case DiiaParser::ID: {
        setState(175);
        antlrcpp::downCast<ArithmeticContext *>(_localctx)->a_chain = chain();
        break;
      }

      case DiiaParser::OPEN_PAREN: {
        setState(176);
        match(DiiaParser::OPEN_PAREN);
        setState(177);
        antlrcpp::downCast<ArithmeticContext *>(_localctx)->a_nested = arithmetic(0);
        setState(178);
        match(DiiaParser::CLOSE_PAREN);
        break;
      }

    default:
      throw NoViableAltException(this);
    }
    _ctx->stop = _input->LT(-1);
    setState(188);
    _errHandler->sync(this);
    alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 14, _ctx);
    while (alt != 2 && alt != atn::ATN::INVALID_ALT_NUMBER) {
      if (alt == 1) {
        if (!_parseListeners.empty())
          triggerExitRuleEvent();
        previousContext = _localctx;
        _localctx = _tracker.createInstance<ArithmeticContext>(parentContext, parentState);
        _localctx->a_left = previousContext;
        pushNewRecursionContext(_localctx, startState, RuleArithmetic);
        setState(182);

        if (!(precpred(_ctx, 4))) throw FailedPredicateException(this, "precpred(_ctx, 4)");
        setState(183);
        antlrcpp::downCast<ArithmeticContext *>(_localctx)->a_op = arithmetic_op();
        setState(184);
        antlrcpp::downCast<ArithmeticContext *>(_localctx)->a_right = arithmetic(5); 
      }
      setState(190);
      _errHandler->sync(this);
      alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 14, _ctx);
    }
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }
  return _localctx;
}

//----------------- Arithmetic_opContext ------------------------------------------------------------------

DiiaParser::Arithmetic_opContext::Arithmetic_opContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::Arithmetic_opContext::PLUS() {
  return getToken(DiiaParser::PLUS, 0);
}

tree::TerminalNode* DiiaParser::Arithmetic_opContext::MINUS() {
  return getToken(DiiaParser::MINUS, 0);
}

tree::TerminalNode* DiiaParser::Arithmetic_opContext::DIV() {
  return getToken(DiiaParser::DIV, 0);
}

tree::TerminalNode* DiiaParser::Arithmetic_opContext::MUL() {
  return getToken(DiiaParser::MUL, 0);
}


size_t DiiaParser::Arithmetic_opContext::getRuleIndex() const {
  return DiiaParser::RuleArithmetic_op;
}

void DiiaParser::Arithmetic_opContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterArithmetic_op(this);
}

void DiiaParser::Arithmetic_opContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitArithmetic_op(this);
}


std::any DiiaParser::Arithmetic_opContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitArithmetic_op(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Arithmetic_opContext* DiiaParser::arithmetic_op() {
  Arithmetic_opContext *_localctx = _tracker.createInstance<Arithmetic_opContext>(_ctx, getState());
  enterRule(_localctx, 26, DiiaParser::RuleArithmetic_op);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(191);
    _la = _input->LA(1);
    if (!(((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & 128849018880) != 0)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- CallContext ------------------------------------------------------------------

DiiaParser::CallContext::CallContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::CallContext::OPEN_PAREN() {
  return getToken(DiiaParser::OPEN_PAREN, 0);
}

std::vector<DiiaParser::NlsContext *> DiiaParser::CallContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::CallContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

tree::TerminalNode* DiiaParser::CallContext::CLOSE_PAREN() {
  return getToken(DiiaParser::CLOSE_PAREN, 0);
}

DiiaParser::IdentifierContext* DiiaParser::CallContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

DiiaParser::Call_parametersContext* DiiaParser::CallContext::call_parameters() {
  return getRuleContext<DiiaParser::Call_parametersContext>(0);
}

DiiaParser::Call_named_parametersContext* DiiaParser::CallContext::call_named_parameters() {
  return getRuleContext<DiiaParser::Call_named_parametersContext>(0);
}


size_t DiiaParser::CallContext::getRuleIndex() const {
  return DiiaParser::RuleCall;
}

void DiiaParser::CallContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterCall(this);
}

void DiiaParser::CallContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitCall(this);
}


std::any DiiaParser::CallContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitCall(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::CallContext* DiiaParser::call() {
  CallContext *_localctx = _tracker.createInstance<CallContext>(_ctx, getState());
  enterRule(_localctx, 28, DiiaParser::RuleCall);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(193);
    antlrcpp::downCast<CallContext *>(_localctx)->c_name = identifier();
    setState(194);
    match(DiiaParser::OPEN_PAREN);
    setState(195);
    nls();
    setState(198);
    _errHandler->sync(this);

    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 15, _ctx)) {
    case 1: {
      setState(196);
      antlrcpp::downCast<CallContext *>(_localctx)->c_parameters = call_parameters();
      break;
    }

    case 2: {
      setState(197);
      antlrcpp::downCast<CallContext *>(_localctx)->c_named_parameters = call_named_parameters();
      break;
    }

    default:
      break;
    }
    setState(200);
    nls();
    setState(201);
    match(DiiaParser::CLOSE_PAREN);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Call_parametersContext ------------------------------------------------------------------

DiiaParser::Call_parametersContext::Call_parametersContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Call_parameterContext *> DiiaParser::Call_parametersContext::call_parameter() {
  return getRuleContexts<DiiaParser::Call_parameterContext>();
}

DiiaParser::Call_parameterContext* DiiaParser::Call_parametersContext::call_parameter(size_t i) {
  return getRuleContext<DiiaParser::Call_parameterContext>(i);
}

std::vector<tree::TerminalNode *> DiiaParser::Call_parametersContext::COMMA() {
  return getTokens(DiiaParser::COMMA);
}

tree::TerminalNode* DiiaParser::Call_parametersContext::COMMA(size_t i) {
  return getToken(DiiaParser::COMMA, i);
}


size_t DiiaParser::Call_parametersContext::getRuleIndex() const {
  return DiiaParser::RuleCall_parameters;
}

void DiiaParser::Call_parametersContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterCall_parameters(this);
}

void DiiaParser::Call_parametersContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitCall_parameters(this);
}


std::any DiiaParser::Call_parametersContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitCall_parameters(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Call_parametersContext* DiiaParser::call_parameters() {
  Call_parametersContext *_localctx = _tracker.createInstance<Call_parametersContext>(_ctx, getState());
  enterRule(_localctx, 30, DiiaParser::RuleCall_parameters);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(203);
    call_parameter();
    setState(208);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while (_la == DiiaParser::COMMA) {
      setState(204);
      match(DiiaParser::COMMA);
      setState(205);
      call_parameter();
      setState(210);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Call_parameterContext ------------------------------------------------------------------

DiiaParser::Call_parameterContext::Call_parameterContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::NlsContext *> DiiaParser::Call_parameterContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::Call_parameterContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

DiiaParser::AtomContext* DiiaParser::Call_parameterContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}


size_t DiiaParser::Call_parameterContext::getRuleIndex() const {
  return DiiaParser::RuleCall_parameter;
}

void DiiaParser::Call_parameterContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterCall_parameter(this);
}

void DiiaParser::Call_parameterContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitCall_parameter(this);
}


std::any DiiaParser::Call_parameterContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitCall_parameter(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Call_parameterContext* DiiaParser::call_parameter() {
  Call_parameterContext *_localctx = _tracker.createInstance<Call_parameterContext>(_ctx, getState());
  enterRule(_localctx, 32, DiiaParser::RuleCall_parameter);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(211);
    nls();
    setState(212);
    antlrcpp::downCast<Call_parameterContext *>(_localctx)->cp_value = atom();
    setState(213);
    nls();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Call_named_parametersContext ------------------------------------------------------------------

DiiaParser::Call_named_parametersContext::Call_named_parametersContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Call_named_parameterContext *> DiiaParser::Call_named_parametersContext::call_named_parameter() {
  return getRuleContexts<DiiaParser::Call_named_parameterContext>();
}

DiiaParser::Call_named_parameterContext* DiiaParser::Call_named_parametersContext::call_named_parameter(size_t i) {
  return getRuleContext<DiiaParser::Call_named_parameterContext>(i);
}

std::vector<tree::TerminalNode *> DiiaParser::Call_named_parametersContext::COMMA() {
  return getTokens(DiiaParser::COMMA);
}

tree::TerminalNode* DiiaParser::Call_named_parametersContext::COMMA(size_t i) {
  return getToken(DiiaParser::COMMA, i);
}


size_t DiiaParser::Call_named_parametersContext::getRuleIndex() const {
  return DiiaParser::RuleCall_named_parameters;
}

void DiiaParser::Call_named_parametersContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterCall_named_parameters(this);
}

void DiiaParser::Call_named_parametersContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitCall_named_parameters(this);
}


std::any DiiaParser::Call_named_parametersContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitCall_named_parameters(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Call_named_parametersContext* DiiaParser::call_named_parameters() {
  Call_named_parametersContext *_localctx = _tracker.createInstance<Call_named_parametersContext>(_ctx, getState());
  enterRule(_localctx, 34, DiiaParser::RuleCall_named_parameters);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(215);
    call_named_parameter();
    setState(220);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while (_la == DiiaParser::COMMA) {
      setState(216);
      match(DiiaParser::COMMA);
      setState(217);
      call_named_parameter();
      setState(222);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Call_named_parameterContext ------------------------------------------------------------------

DiiaParser::Call_named_parameterContext::Call_named_parameterContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::NlsContext *> DiiaParser::Call_named_parameterContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::Call_named_parameterContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

tree::TerminalNode* DiiaParser::Call_named_parameterContext::COLON() {
  return getToken(DiiaParser::COLON, 0);
}

DiiaParser::IdentifierContext* DiiaParser::Call_named_parameterContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

DiiaParser::AtomContext* DiiaParser::Call_named_parameterContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}


size_t DiiaParser::Call_named_parameterContext::getRuleIndex() const {
  return DiiaParser::RuleCall_named_parameter;
}

void DiiaParser::Call_named_parameterContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterCall_named_parameter(this);
}

void DiiaParser::Call_named_parameterContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitCall_named_parameter(this);
}


std::any DiiaParser::Call_named_parameterContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitCall_named_parameter(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Call_named_parameterContext* DiiaParser::call_named_parameter() {
  Call_named_parameterContext *_localctx = _tracker.createInstance<Call_named_parameterContext>(_ctx, getState());
  enterRule(_localctx, 36, DiiaParser::RuleCall_named_parameter);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(223);
    nls();
    setState(224);
    antlrcpp::downCast<Call_named_parameterContext *>(_localctx)->cnp_name = identifier();
    setState(225);
    match(DiiaParser::COLON);
    setState(226);
    antlrcpp::downCast<Call_named_parameterContext *>(_localctx)->cnp_value = atom();
    setState(227);
    nls();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- AssignContext ------------------------------------------------------------------

DiiaParser::AssignContext::AssignContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::AssignContext::ASSIGN() {
  return getToken(DiiaParser::ASSIGN, 0);
}

DiiaParser::Identifiers_chainContext* DiiaParser::AssignContext::identifiers_chain() {
  return getRuleContext<DiiaParser::Identifiers_chainContext>(0);
}

DiiaParser::Assign_valueContext* DiiaParser::AssignContext::assign_value() {
  return getRuleContext<DiiaParser::Assign_valueContext>(0);
}


size_t DiiaParser::AssignContext::getRuleIndex() const {
  return DiiaParser::RuleAssign;
}

void DiiaParser::AssignContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterAssign(this);
}

void DiiaParser::AssignContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitAssign(this);
}


std::any DiiaParser::AssignContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitAssign(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::AssignContext* DiiaParser::assign() {
  AssignContext *_localctx = _tracker.createInstance<AssignContext>(_ctx, getState());
  enterRule(_localctx, 38, DiiaParser::RuleAssign);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(229);
    antlrcpp::downCast<AssignContext *>(_localctx)->a_chain = identifiers_chain();
    setState(230);
    match(DiiaParser::ASSIGN);
    setState(231);
    antlrcpp::downCast<AssignContext *>(_localctx)->a_value = assign_value();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Assign_valueContext ------------------------------------------------------------------

DiiaParser::Assign_valueContext::Assign_valueContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::AtomContext* DiiaParser::Assign_valueContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}


size_t DiiaParser::Assign_valueContext::getRuleIndex() const {
  return DiiaParser::RuleAssign_value;
}

void DiiaParser::Assign_valueContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterAssign_value(this);
}

void DiiaParser::Assign_valueContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitAssign_value(this);
}


std::any DiiaParser::Assign_valueContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitAssign_value(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Assign_valueContext* DiiaParser::assign_value() {
  Assign_valueContext *_localctx = _tracker.createInstance<Assign_valueContext>(_ctx, getState());
  enterRule(_localctx, 40, DiiaParser::RuleAssign_value);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(233);
    atom();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- BodyContext ------------------------------------------------------------------

DiiaParser::BodyContext::BodyContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Body_lineContext *> DiiaParser::BodyContext::body_line() {
  return getRuleContexts<DiiaParser::Body_lineContext>();
}

DiiaParser::Body_lineContext* DiiaParser::BodyContext::body_line(size_t i) {
  return getRuleContext<DiiaParser::Body_lineContext>(i);
}

std::vector<DiiaParser::NlContext *> DiiaParser::BodyContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::BodyContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}


size_t DiiaParser::BodyContext::getRuleIndex() const {
  return DiiaParser::RuleBody;
}

void DiiaParser::BodyContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterBody(this);
}

void DiiaParser::BodyContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitBody(this);
}


std::any DiiaParser::BodyContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitBody(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::BodyContext* DiiaParser::body() {
  BodyContext *_localctx = _tracker.createInstance<BodyContext>(_ctx, getState());
  enterRule(_localctx, 42, DiiaParser::RuleBody);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    size_t alt;
    enterOuterAlt(_localctx, 1);
    setState(235);
    body_line();
    setState(241);
    _errHandler->sync(this);
    alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 18, _ctx);
    while (alt != 2 && alt != atn::ATN::INVALID_ALT_NUMBER) {
      if (alt == 1) {
        setState(236);
        nl();
        setState(237);
        body_line(); 
      }
      setState(243);
      _errHandler->sync(this);
      alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 18, _ctx);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Body_lineContext ------------------------------------------------------------------

DiiaParser::Body_lineContext::Body_lineContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::AssignContext* DiiaParser::Body_lineContext::assign() {
  return getRuleContext<DiiaParser::AssignContext>(0);
}

DiiaParser::IfContext* DiiaParser::Body_lineContext::if_() {
  return getRuleContext<DiiaParser::IfContext>(0);
}

DiiaParser::ArithmeticContext* DiiaParser::Body_lineContext::arithmetic() {
  return getRuleContext<DiiaParser::ArithmeticContext>(0);
}

DiiaParser::ChainContext* DiiaParser::Body_lineContext::chain() {
  return getRuleContext<DiiaParser::ChainContext>(0);
}

DiiaParser::EachContext* DiiaParser::Body_lineContext::each() {
  return getRuleContext<DiiaParser::EachContext>(0);
}

DiiaParser::NlsContext* DiiaParser::Body_lineContext::nls() {
  return getRuleContext<DiiaParser::NlsContext>(0);
}

DiiaParser::Return_body_lineContext* DiiaParser::Body_lineContext::return_body_line() {
  return getRuleContext<DiiaParser::Return_body_lineContext>(0);
}


size_t DiiaParser::Body_lineContext::getRuleIndex() const {
  return DiiaParser::RuleBody_line;
}

void DiiaParser::Body_lineContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterBody_line(this);
}

void DiiaParser::Body_lineContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitBody_line(this);
}


std::any DiiaParser::Body_lineContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitBody_line(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Body_lineContext* DiiaParser::body_line() {
  Body_lineContext *_localctx = _tracker.createInstance<Body_lineContext>(_ctx, getState());
  enterRule(_localctx, 44, DiiaParser::RuleBody_line);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    setState(251);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 19, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(244);
      assign();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(245);
      if_();
      break;
    }

    case 3: {
      enterOuterAlt(_localctx, 3);
      setState(246);
      arithmetic(0);
      break;
    }

    case 4: {
      enterOuterAlt(_localctx, 4);
      setState(247);
      chain();
      break;
    }

    case 5: {
      enterOuterAlt(_localctx, 5);
      setState(248);
      each();
      break;
    }

    case 6: {
      enterOuterAlt(_localctx, 6);
      setState(249);
      nls();
      break;
    }

    case 7: {
      enterOuterAlt(_localctx, 7);
      setState(250);
      return_body_line();
      break;
    }

    default:
      break;
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Return_body_lineContext ------------------------------------------------------------------

DiiaParser::Return_body_lineContext::Return_body_lineContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::Return_body_lineContext::RETURN() {
  return getToken(DiiaParser::RETURN, 0);
}

DiiaParser::Body_lineContext* DiiaParser::Return_body_lineContext::body_line() {
  return getRuleContext<DiiaParser::Body_lineContext>(0);
}


size_t DiiaParser::Return_body_lineContext::getRuleIndex() const {
  return DiiaParser::RuleReturn_body_line;
}

void DiiaParser::Return_body_lineContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterReturn_body_line(this);
}

void DiiaParser::Return_body_lineContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitReturn_body_line(this);
}


std::any DiiaParser::Return_body_lineContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitReturn_body_line(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Return_body_lineContext* DiiaParser::return_body_line() {
  Return_body_lineContext *_localctx = _tracker.createInstance<Return_body_lineContext>(_ctx, getState());
  enterRule(_localctx, 46, DiiaParser::RuleReturn_body_line);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(253);
    match(DiiaParser::RETURN);
    setState(254);
    antlrcpp::downCast<Return_body_lineContext *>(_localctx)->rbl = body_line();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- LambdaContext ------------------------------------------------------------------

DiiaParser::LambdaContext::LambdaContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::LambdaContext::DEF() {
  return getToken(DiiaParser::DEF, 0);
}

tree::TerminalNode* DiiaParser::LambdaContext::COLON() {
  return getToken(DiiaParser::COLON, 0);
}

DiiaParser::AtomContext* DiiaParser::LambdaContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}

DiiaParser::Diia_parametersContext* DiiaParser::LambdaContext::diia_parameters() {
  return getRuleContext<DiiaParser::Diia_parametersContext>(0);
}


size_t DiiaParser::LambdaContext::getRuleIndex() const {
  return DiiaParser::RuleLambda;
}

void DiiaParser::LambdaContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterLambda(this);
}

void DiiaParser::LambdaContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitLambda(this);
}


std::any DiiaParser::LambdaContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitLambda(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::LambdaContext* DiiaParser::lambda() {
  LambdaContext *_localctx = _tracker.createInstance<LambdaContext>(_ctx, getState());
  enterRule(_localctx, 48, DiiaParser::RuleLambda);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(256);
    match(DiiaParser::DEF);
    setState(258);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::ID) {
      setState(257);
      antlrcpp::downCast<LambdaContext *>(_localctx)->l_parameters = diia_parameters();
    }
    setState(260);
    match(DiiaParser::COLON);
    setState(261);
    atom();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- DiiaContext ------------------------------------------------------------------

DiiaParser::DiiaContext::DiiaContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::DiiaContext::DEF() {
  return getToken(DiiaParser::DEF, 0);
}

tree::TerminalNode* DiiaParser::DiiaContext::OPEN_PAREN() {
  return getToken(DiiaParser::OPEN_PAREN, 0);
}

tree::TerminalNode* DiiaParser::DiiaContext::CLOSE_PAREN() {
  return getToken(DiiaParser::CLOSE_PAREN, 0);
}

std::vector<DiiaParser::NlContext *> DiiaParser::DiiaContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::DiiaContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}

tree::TerminalNode* DiiaParser::DiiaContext::END() {
  return getToken(DiiaParser::END, 0);
}

DiiaParser::IdentifierContext* DiiaParser::DiiaContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

std::vector<DiiaParser::NlsContext *> DiiaParser::DiiaContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::DiiaContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

tree::TerminalNode* DiiaParser::DiiaContext::ASYNC() {
  return getToken(DiiaParser::ASYNC, 0);
}

DiiaParser::Diia_structureContext* DiiaParser::DiiaContext::diia_structure() {
  return getRuleContext<DiiaParser::Diia_structureContext>(0);
}

DiiaParser::BodyContext* DiiaParser::DiiaContext::body() {
  return getRuleContext<DiiaParser::BodyContext>(0);
}

DiiaParser::Diia_parametersContext* DiiaParser::DiiaContext::diia_parameters() {
  return getRuleContext<DiiaParser::Diia_parametersContext>(0);
}


size_t DiiaParser::DiiaContext::getRuleIndex() const {
  return DiiaParser::RuleDiia;
}

void DiiaParser::DiiaContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterDiia(this);
}

void DiiaParser::DiiaContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitDiia(this);
}


std::any DiiaParser::DiiaContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitDiia(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::DiiaContext* DiiaParser::diia() {
  DiiaContext *_localctx = _tracker.createInstance<DiiaContext>(_ctx, getState());
  enterRule(_localctx, 50, DiiaParser::RuleDiia);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(264);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::ASYNC) {
      setState(263);
      antlrcpp::downCast<DiiaContext *>(_localctx)->d_async = match(DiiaParser::ASYNC);
    }
    setState(266);
    match(DiiaParser::DEF);
    setState(268);
    _errHandler->sync(this);

    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 22, _ctx)) {
    case 1: {
      setState(267);
      antlrcpp::downCast<DiiaContext *>(_localctx)->d_structure = diia_structure();
      break;
    }

    default:
      break;
    }
    setState(270);
    antlrcpp::downCast<DiiaContext *>(_localctx)->d_name = identifier();
    setState(271);
    match(DiiaParser::OPEN_PAREN);

    setState(272);
    nls();
    setState(274);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::ID) {
      setState(273);
      antlrcpp::downCast<DiiaContext *>(_localctx)->d_parameters = diia_parameters();
    }
    setState(276);
    nls();
    setState(278);
    match(DiiaParser::CLOSE_PAREN);
    setState(279);
    nl();
    setState(283);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & 20890924407816) != 0) {
      setState(280);
      antlrcpp::downCast<DiiaContext *>(_localctx)->d_body = body();
      setState(281);
      nl();
    }
    setState(285);
    match(DiiaParser::END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Diia_parametersContext ------------------------------------------------------------------

DiiaParser::Diia_parametersContext::Diia_parametersContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Diia_parameterContext *> DiiaParser::Diia_parametersContext::diia_parameter() {
  return getRuleContexts<DiiaParser::Diia_parameterContext>();
}

DiiaParser::Diia_parameterContext* DiiaParser::Diia_parametersContext::diia_parameter(size_t i) {
  return getRuleContext<DiiaParser::Diia_parameterContext>(i);
}

std::vector<DiiaParser::NlsContext *> DiiaParser::Diia_parametersContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::Diia_parametersContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

std::vector<tree::TerminalNode *> DiiaParser::Diia_parametersContext::COMMA() {
  return getTokens(DiiaParser::COMMA);
}

tree::TerminalNode* DiiaParser::Diia_parametersContext::COMMA(size_t i) {
  return getToken(DiiaParser::COMMA, i);
}


size_t DiiaParser::Diia_parametersContext::getRuleIndex() const {
  return DiiaParser::RuleDiia_parameters;
}

void DiiaParser::Diia_parametersContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterDiia_parameters(this);
}

void DiiaParser::Diia_parametersContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitDiia_parameters(this);
}


std::any DiiaParser::Diia_parametersContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitDiia_parameters(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Diia_parametersContext* DiiaParser::diia_parameters() {
  Diia_parametersContext *_localctx = _tracker.createInstance<Diia_parametersContext>(_ctx, getState());
  enterRule(_localctx, 52, DiiaParser::RuleDiia_parameters);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    size_t alt;
    enterOuterAlt(_localctx, 1);
    setState(287);
    diia_parameter();
    setState(295);
    _errHandler->sync(this);
    alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 25, _ctx);
    while (alt != 2 && alt != atn::ATN::INVALID_ALT_NUMBER) {
      if (alt == 1) {
        setState(288);
        nls();
        setState(289);
        match(DiiaParser::COMMA);
        setState(290);
        nls();
        setState(291);
        diia_parameter(); 
      }
      setState(297);
      _errHandler->sync(this);
      alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 25, _ctx);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Diia_parameterContext ------------------------------------------------------------------

DiiaParser::Diia_parameterContext::Diia_parameterContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::IdentifierContext* DiiaParser::Diia_parameterContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

tree::TerminalNode* DiiaParser::Diia_parameterContext::ASSIGN() {
  return getToken(DiiaParser::ASSIGN, 0);
}

DiiaParser::AtomContext* DiiaParser::Diia_parameterContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}


size_t DiiaParser::Diia_parameterContext::getRuleIndex() const {
  return DiiaParser::RuleDiia_parameter;
}

void DiiaParser::Diia_parameterContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterDiia_parameter(this);
}

void DiiaParser::Diia_parameterContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitDiia_parameter(this);
}


std::any DiiaParser::Diia_parameterContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitDiia_parameter(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Diia_parameterContext* DiiaParser::diia_parameter() {
  Diia_parameterContext *_localctx = _tracker.createInstance<Diia_parameterContext>(_ctx, getState());
  enterRule(_localctx, 54, DiiaParser::RuleDiia_parameter);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(298);
    antlrcpp::downCast<Diia_parameterContext *>(_localctx)->dp_name = identifier();
    setState(301);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::ASSIGN) {
      setState(299);
      match(DiiaParser::ASSIGN);
      setState(300);
      antlrcpp::downCast<Diia_parameterContext *>(_localctx)->dp_value = atom();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Diia_structureContext ------------------------------------------------------------------

DiiaParser::Diia_structureContext::Diia_structureContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::Diia_structureContext::DOT() {
  return getToken(DiiaParser::DOT, 0);
}

DiiaParser::IdentifierContext* DiiaParser::Diia_structureContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}


size_t DiiaParser::Diia_structureContext::getRuleIndex() const {
  return DiiaParser::RuleDiia_structure;
}

void DiiaParser::Diia_structureContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterDiia_structure(this);
}

void DiiaParser::Diia_structureContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitDiia_structure(this);
}


std::any DiiaParser::Diia_structureContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitDiia_structure(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Diia_structureContext* DiiaParser::diia_structure() {
  Diia_structureContext *_localctx = _tracker.createInstance<Diia_structureContext>(_ctx, getState());
  enterRule(_localctx, 56, DiiaParser::RuleDiia_structure);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(303);
    antlrcpp::downCast<Diia_structureContext *>(_localctx)->ds_name = identifier();
    setState(304);
    match(DiiaParser::DOT);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- TestContext ------------------------------------------------------------------

DiiaParser::TestContext::TestContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Test_exprContext *> DiiaParser::TestContext::test_expr() {
  return getRuleContexts<DiiaParser::Test_exprContext>();
}

DiiaParser::Test_exprContext* DiiaParser::TestContext::test_expr(size_t i) {
  return getRuleContext<DiiaParser::Test_exprContext>(i);
}

std::vector<DiiaParser::Test_expr_opContext *> DiiaParser::TestContext::test_expr_op() {
  return getRuleContexts<DiiaParser::Test_expr_opContext>();
}

DiiaParser::Test_expr_opContext* DiiaParser::TestContext::test_expr_op(size_t i) {
  return getRuleContext<DiiaParser::Test_expr_opContext>(i);
}


size_t DiiaParser::TestContext::getRuleIndex() const {
  return DiiaParser::RuleTest;
}

void DiiaParser::TestContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterTest(this);
}

void DiiaParser::TestContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitTest(this);
}


std::any DiiaParser::TestContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitTest(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::TestContext* DiiaParser::test() {
  TestContext *_localctx = _tracker.createInstance<TestContext>(_ctx, getState());
  enterRule(_localctx, 58, DiiaParser::RuleTest);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(306);
    test_expr();
    setState(312);
    _errHandler->sync(this);
    _la = _input->LA(1);
    while (_la == DiiaParser::AND

    || _la == DiiaParser::OR) {
      setState(307);
      test_expr_op();
      setState(308);
      test_expr();
      setState(314);
      _errHandler->sync(this);
      _la = _input->LA(1);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Test_exprContext ------------------------------------------------------------------

DiiaParser::Test_exprContext::Test_exprContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Test_partContext *> DiiaParser::Test_exprContext::test_part() {
  return getRuleContexts<DiiaParser::Test_partContext>();
}

DiiaParser::Test_partContext* DiiaParser::Test_exprContext::test_part(size_t i) {
  return getRuleContext<DiiaParser::Test_partContext>(i);
}

DiiaParser::Test_opContext* DiiaParser::Test_exprContext::test_op() {
  return getRuleContext<DiiaParser::Test_opContext>(0);
}

tree::TerminalNode* DiiaParser::Test_exprContext::OPEN_PAREN() {
  return getToken(DiiaParser::OPEN_PAREN, 0);
}

DiiaParser::Test_exprContext* DiiaParser::Test_exprContext::test_expr() {
  return getRuleContext<DiiaParser::Test_exprContext>(0);
}

tree::TerminalNode* DiiaParser::Test_exprContext::CLOSE_PAREN() {
  return getToken(DiiaParser::CLOSE_PAREN, 0);
}


size_t DiiaParser::Test_exprContext::getRuleIndex() const {
  return DiiaParser::RuleTest_expr;
}

void DiiaParser::Test_exprContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterTest_expr(this);
}

void DiiaParser::Test_exprContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitTest_expr(this);
}


std::any DiiaParser::Test_exprContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitTest_expr(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Test_exprContext* DiiaParser::test_expr() {
  Test_exprContext *_localctx = _tracker.createInstance<Test_exprContext>(_ctx, getState());
  enterRule(_localctx, 60, DiiaParser::RuleTest_expr);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    setState(325);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 29, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(315);
      antlrcpp::downCast<Test_exprContext *>(_localctx)->te_left = test_part();
      setState(319);
      _errHandler->sync(this);

      _la = _input->LA(1);
      if (((_la & ~ 0x3fULL) == 0) &&
        ((1ULL << _la) & 1049536) != 0) {
        setState(316);
        antlrcpp::downCast<Test_exprContext *>(_localctx)->te_op = test_op();
        setState(317);
        antlrcpp::downCast<Test_exprContext *>(_localctx)->te_right = test_part();
      }
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(321);
      match(DiiaParser::OPEN_PAREN);
      setState(322);
      test_expr();
      setState(323);
      match(DiiaParser::CLOSE_PAREN);
      break;
    }

    default:
      break;
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Test_partContext ------------------------------------------------------------------

DiiaParser::Test_partContext::Test_partContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

DiiaParser::LiteralContext* DiiaParser::Test_partContext::literal() {
  return getRuleContext<DiiaParser::LiteralContext>(0);
}

DiiaParser::ChainContext* DiiaParser::Test_partContext::chain() {
  return getRuleContext<DiiaParser::ChainContext>(0);
}

DiiaParser::ArithmeticContext* DiiaParser::Test_partContext::arithmetic() {
  return getRuleContext<DiiaParser::ArithmeticContext>(0);
}

tree::TerminalNode* DiiaParser::Test_partContext::OPEN_PAREN() {
  return getToken(DiiaParser::OPEN_PAREN, 0);
}

DiiaParser::Test_partContext* DiiaParser::Test_partContext::test_part() {
  return getRuleContext<DiiaParser::Test_partContext>(0);
}

tree::TerminalNode* DiiaParser::Test_partContext::CLOSE_PAREN() {
  return getToken(DiiaParser::CLOSE_PAREN, 0);
}


size_t DiiaParser::Test_partContext::getRuleIndex() const {
  return DiiaParser::RuleTest_part;
}

void DiiaParser::Test_partContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterTest_part(this);
}

void DiiaParser::Test_partContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitTest_part(this);
}


std::any DiiaParser::Test_partContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitTest_part(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Test_partContext* DiiaParser::test_part() {
  Test_partContext *_localctx = _tracker.createInstance<Test_partContext>(_ctx, getState());
  enterRule(_localctx, 62, DiiaParser::RuleTest_part);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    setState(334);
    _errHandler->sync(this);
    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 30, _ctx)) {
    case 1: {
      enterOuterAlt(_localctx, 1);
      setState(327);
      literal();
      break;
    }

    case 2: {
      enterOuterAlt(_localctx, 2);
      setState(328);
      chain();
      break;
    }

    case 3: {
      enterOuterAlt(_localctx, 3);
      setState(329);
      arithmetic(0);
      break;
    }

    case 4: {
      enterOuterAlt(_localctx, 4);
      setState(330);
      match(DiiaParser::OPEN_PAREN);
      setState(331);
      test_part();
      setState(332);
      match(DiiaParser::CLOSE_PAREN);
      break;
    }

    default:
      break;
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Test_opContext ------------------------------------------------------------------

DiiaParser::Test_opContext::Test_opContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::Test_opContext::EQ() {
  return getToken(DiiaParser::EQ, 0);
}

tree::TerminalNode* DiiaParser::Test_opContext::NOT_EQ() {
  return getToken(DiiaParser::NOT_EQ, 0);
}

tree::TerminalNode* DiiaParser::Test_opContext::GREATER() {
  return getToken(DiiaParser::GREATER, 0);
}

tree::TerminalNode* DiiaParser::Test_opContext::SMALLER() {
  return getToken(DiiaParser::SMALLER, 0);
}

tree::TerminalNode* DiiaParser::Test_opContext::IS() {
  return getToken(DiiaParser::IS, 0);
}


size_t DiiaParser::Test_opContext::getRuleIndex() const {
  return DiiaParser::RuleTest_op;
}

void DiiaParser::Test_opContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterTest_op(this);
}

void DiiaParser::Test_opContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitTest_op(this);
}


std::any DiiaParser::Test_opContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitTest_op(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Test_opContext* DiiaParser::test_op() {
  Test_opContext *_localctx = _tracker.createInstance<Test_opContext>(_ctx, getState());
  enterRule(_localctx, 64, DiiaParser::RuleTest_op);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(336);
    _la = _input->LA(1);
    if (!(((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & 1049536) != 0)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Test_expr_opContext ------------------------------------------------------------------

DiiaParser::Test_expr_opContext::Test_expr_opContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::Test_expr_opContext::AND() {
  return getToken(DiiaParser::AND, 0);
}

tree::TerminalNode* DiiaParser::Test_expr_opContext::OR() {
  return getToken(DiiaParser::OR, 0);
}


size_t DiiaParser::Test_expr_opContext::getRuleIndex() const {
  return DiiaParser::RuleTest_expr_op;
}

void DiiaParser::Test_expr_opContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterTest_expr_op(this);
}

void DiiaParser::Test_expr_opContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitTest_expr_op(this);
}


std::any DiiaParser::Test_expr_opContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitTest_expr_op(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Test_expr_opContext* DiiaParser::test_expr_op() {
  Test_expr_opContext *_localctx = _tracker.createInstance<Test_expr_opContext>(_ctx, getState());
  enterRule(_localctx, 66, DiiaParser::RuleTest_expr_op);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(338);
    _la = _input->LA(1);
    if (!(_la == DiiaParser::AND

    || _la == DiiaParser::OR)) {
    _errHandler->recoverInline(this);
    }
    else {
      _errHandler->reportMatch(this);
      consume();
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- IfContext ------------------------------------------------------------------

DiiaParser::IfContext::IfContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::IfContext::END() {
  return getToken(DiiaParser::END, 0);
}

std::vector<DiiaParser::If_startContext *> DiiaParser::IfContext::if_start() {
  return getRuleContexts<DiiaParser::If_startContext>();
}

DiiaParser::If_startContext* DiiaParser::IfContext::if_start(size_t i) {
  return getRuleContext<DiiaParser::If_startContext>(i);
}


size_t DiiaParser::IfContext::getRuleIndex() const {
  return DiiaParser::RuleIf;
}

void DiiaParser::IfContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterIf(this);
}

void DiiaParser::IfContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitIf(this);
}


std::any DiiaParser::IfContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitIf(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::IfContext* DiiaParser::if_() {
  IfContext *_localctx = _tracker.createInstance<IfContext>(_ctx, getState());
  enterRule(_localctx, 68, DiiaParser::RuleIf);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(341); 
    _errHandler->sync(this);
    _la = _input->LA(1);
    do {
      setState(340);
      antlrcpp::downCast<IfContext *>(_localctx)->i_start = if_start();
      setState(343); 
      _errHandler->sync(this);
      _la = _input->LA(1);
    } while (_la == DiiaParser::IF);
    setState(345);
    match(DiiaParser::END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- If_startContext ------------------------------------------------------------------

DiiaParser::If_startContext::If_startContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::If_startContext::IF() {
  return getToken(DiiaParser::IF, 0);
}

std::vector<DiiaParser::NlContext *> DiiaParser::If_startContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::If_startContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}

DiiaParser::AtomContext* DiiaParser::If_startContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}

DiiaParser::BodyContext* DiiaParser::If_startContext::body() {
  return getRuleContext<DiiaParser::BodyContext>(0);
}


size_t DiiaParser::If_startContext::getRuleIndex() const {
  return DiiaParser::RuleIf_start;
}

void DiiaParser::If_startContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterIf_start(this);
}

void DiiaParser::If_startContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitIf_start(this);
}


std::any DiiaParser::If_startContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitIf_start(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::If_startContext* DiiaParser::if_start() {
  If_startContext *_localctx = _tracker.createInstance<If_startContext>(_ctx, getState());
  enterRule(_localctx, 70, DiiaParser::RuleIf_start);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(347);
    match(DiiaParser::IF);
    setState(348);
    antlrcpp::downCast<If_startContext *>(_localctx)->is_expr = atom();
    setState(349);
    nl();
    setState(353);
    _errHandler->sync(this);

    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 32, _ctx)) {
    case 1: {
      setState(350);
      antlrcpp::downCast<If_startContext *>(_localctx)->is_body = body();
      setState(351);
      nl();
      break;
    }

    default:
      break;
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- EachContext ------------------------------------------------------------------

DiiaParser::EachContext::EachContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::EachContext::EACH() {
  return getToken(DiiaParser::EACH, 0);
}

tree::TerminalNode* DiiaParser::EachContext::TAKING() {
  return getToken(DiiaParser::TAKING, 0);
}

std::vector<DiiaParser::NlContext *> DiiaParser::EachContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::EachContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}

tree::TerminalNode* DiiaParser::EachContext::END() {
  return getToken(DiiaParser::END, 0);
}

DiiaParser::IdentifierContext* DiiaParser::EachContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

DiiaParser::AtomContext* DiiaParser::EachContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}

DiiaParser::BodyContext* DiiaParser::EachContext::body() {
  return getRuleContext<DiiaParser::BodyContext>(0);
}


size_t DiiaParser::EachContext::getRuleIndex() const {
  return DiiaParser::RuleEach;
}

void DiiaParser::EachContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterEach(this);
}

void DiiaParser::EachContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitEach(this);
}


std::any DiiaParser::EachContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitEach(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::EachContext* DiiaParser::each() {
  EachContext *_localctx = _tracker.createInstance<EachContext>(_ctx, getState());
  enterRule(_localctx, 72, DiiaParser::RuleEach);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(355);
    match(DiiaParser::EACH);
    setState(356);
    antlrcpp::downCast<EachContext *>(_localctx)->e_name = identifier();
    setState(357);
    match(DiiaParser::TAKING);
    setState(358);
    antlrcpp::downCast<EachContext *>(_localctx)->e_iterator = atom();
    setState(359);
    nl();
    setState(363);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (((_la & ~ 0x3fULL) == 0) &&
      ((1ULL << _la) & 20890924407816) != 0) {
      setState(360);
      antlrcpp::downCast<EachContext *>(_localctx)->e_body = body();
      setState(361);
      nl();
    }
    setState(365);
    match(DiiaParser::END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- StructureContext ------------------------------------------------------------------

DiiaParser::StructureContext::StructureContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

tree::TerminalNode* DiiaParser::StructureContext::STRUCTURE() {
  return getToken(DiiaParser::STRUCTURE, 0);
}

std::vector<DiiaParser::NlContext *> DiiaParser::StructureContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::StructureContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}

std::vector<DiiaParser::NlsContext *> DiiaParser::StructureContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::StructureContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

tree::TerminalNode* DiiaParser::StructureContext::END() {
  return getToken(DiiaParser::END, 0);
}

DiiaParser::IdentifierContext* DiiaParser::StructureContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

DiiaParser::Structure_parametersContext* DiiaParser::StructureContext::structure_parameters() {
  return getRuleContext<DiiaParser::Structure_parametersContext>(0);
}


size_t DiiaParser::StructureContext::getRuleIndex() const {
  return DiiaParser::RuleStructure;
}

void DiiaParser::StructureContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterStructure(this);
}

void DiiaParser::StructureContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitStructure(this);
}


std::any DiiaParser::StructureContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitStructure(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::StructureContext* DiiaParser::structure() {
  StructureContext *_localctx = _tracker.createInstance<StructureContext>(_ctx, getState());
  enterRule(_localctx, 74, DiiaParser::RuleStructure);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(367);
    match(DiiaParser::STRUCTURE);
    setState(368);
    antlrcpp::downCast<StructureContext *>(_localctx)->s_name = identifier();
    setState(369);
    nl();
    setState(370);
    nls();
    setState(374);
    _errHandler->sync(this);

    switch (getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 34, _ctx)) {
    case 1: {
      setState(371);
      antlrcpp::downCast<StructureContext *>(_localctx)->s_parameters = structure_parameters();
      setState(372);
      nl();
      break;
    }

    default:
      break;
    }
    setState(376);
    nls();
    setState(377);
    match(DiiaParser::END);
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Structure_parametersContext ------------------------------------------------------------------

DiiaParser::Structure_parametersContext::Structure_parametersContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::Structure_parameterContext *> DiiaParser::Structure_parametersContext::structure_parameter() {
  return getRuleContexts<DiiaParser::Structure_parameterContext>();
}

DiiaParser::Structure_parameterContext* DiiaParser::Structure_parametersContext::structure_parameter(size_t i) {
  return getRuleContext<DiiaParser::Structure_parameterContext>(i);
}

std::vector<DiiaParser::NlContext *> DiiaParser::Structure_parametersContext::nl() {
  return getRuleContexts<DiiaParser::NlContext>();
}

DiiaParser::NlContext* DiiaParser::Structure_parametersContext::nl(size_t i) {
  return getRuleContext<DiiaParser::NlContext>(i);
}


size_t DiiaParser::Structure_parametersContext::getRuleIndex() const {
  return DiiaParser::RuleStructure_parameters;
}

void DiiaParser::Structure_parametersContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterStructure_parameters(this);
}

void DiiaParser::Structure_parametersContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitStructure_parameters(this);
}


std::any DiiaParser::Structure_parametersContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitStructure_parameters(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Structure_parametersContext* DiiaParser::structure_parameters() {
  Structure_parametersContext *_localctx = _tracker.createInstance<Structure_parametersContext>(_ctx, getState());
  enterRule(_localctx, 76, DiiaParser::RuleStructure_parameters);

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    size_t alt;
    enterOuterAlt(_localctx, 1);
    setState(379);
    structure_parameter();
    setState(385);
    _errHandler->sync(this);
    alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 35, _ctx);
    while (alt != 2 && alt != atn::ATN::INVALID_ALT_NUMBER) {
      if (alt == 1) {
        setState(380);
        nl();
        setState(381);
        structure_parameter(); 
      }
      setState(387);
      _errHandler->sync(this);
      alt = getInterpreter<atn::ParserATNSimulator>()->adaptivePredict(_input, 35, _ctx);
    }
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

//----------------- Structure_parameterContext ------------------------------------------------------------------

DiiaParser::Structure_parameterContext::Structure_parameterContext(ParserRuleContext *parent, size_t invokingState)
  : ParserRuleContext(parent, invokingState) {
}

std::vector<DiiaParser::NlsContext *> DiiaParser::Structure_parameterContext::nls() {
  return getRuleContexts<DiiaParser::NlsContext>();
}

DiiaParser::NlsContext* DiiaParser::Structure_parameterContext::nls(size_t i) {
  return getRuleContext<DiiaParser::NlsContext>(i);
}

DiiaParser::IdentifierContext* DiiaParser::Structure_parameterContext::identifier() {
  return getRuleContext<DiiaParser::IdentifierContext>(0);
}

tree::TerminalNode* DiiaParser::Structure_parameterContext::ASSIGN() {
  return getToken(DiiaParser::ASSIGN, 0);
}

DiiaParser::AtomContext* DiiaParser::Structure_parameterContext::atom() {
  return getRuleContext<DiiaParser::AtomContext>(0);
}


size_t DiiaParser::Structure_parameterContext::getRuleIndex() const {
  return DiiaParser::RuleStructure_parameter;
}

void DiiaParser::Structure_parameterContext::enterRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->enterStructure_parameter(this);
}

void DiiaParser::Structure_parameterContext::exitRule(tree::ParseTreeListener *listener) {
  auto parserListener = dynamic_cast<DiiaParserListener *>(listener);
  if (parserListener != nullptr)
    parserListener->exitStructure_parameter(this);
}


std::any DiiaParser::Structure_parameterContext::accept(tree::ParseTreeVisitor *visitor) {
  if (auto parserVisitor = dynamic_cast<DiiaParserVisitor*>(visitor))
    return parserVisitor->visitStructure_parameter(this);
  else
    return visitor->visitChildren(this);
}

DiiaParser::Structure_parameterContext* DiiaParser::structure_parameter() {
  Structure_parameterContext *_localctx = _tracker.createInstance<Structure_parameterContext>(_ctx, getState());
  enterRule(_localctx, 78, DiiaParser::RuleStructure_parameter);
  size_t _la = 0;

#if __cplusplus > 201703L
  auto onExit = finally([=, this] {
#else
  auto onExit = finally([=] {
#endif
    exitRule();
  });
  try {
    enterOuterAlt(_localctx, 1);
    setState(388);
    nls();
    setState(389);
    antlrcpp::downCast<Structure_parameterContext *>(_localctx)->sp_name = identifier();
    setState(392);
    _errHandler->sync(this);

    _la = _input->LA(1);
    if (_la == DiiaParser::ASSIGN) {
      setState(390);
      match(DiiaParser::ASSIGN);
      setState(391);
      antlrcpp::downCast<Structure_parameterContext *>(_localctx)->sp_value = atom();
    }
    setState(394);
    nls();
   
  }
  catch (RecognitionException &e) {
    _errHandler->reportError(this, e);
    _localctx->exception = std::current_exception();
    _errHandler->recover(this, _localctx->exception);
  }

  return _localctx;
}

bool DiiaParser::sempred(RuleContext *context, size_t ruleIndex, size_t predicateIndex) {
  switch (ruleIndex) {
    case 12: return arithmeticSempred(antlrcpp::downCast<ArithmeticContext *>(context), predicateIndex);

  default:
    break;
  }
  return true;
}

bool DiiaParser::arithmeticSempred(ArithmeticContext *_localctx, size_t predicateIndex) {
  switch (predicateIndex) {
    case 0: return precpred(_ctx, 4);

  default:
    break;
  }
  return true;
}

void DiiaParser::initialize() {
  ::antlr4::internal::call_once(diiaparserParserOnceFlag, diiaparserParserInitialize);
}
