// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,44,397,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,1,0,1,0,1,0,5,0,
85,8,0,10,0,12,0,88,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
101,8,1,1,2,1,2,1,3,5,3,106,8,3,10,3,12,3,109,9,3,1,4,1,4,1,4,3,4,114,8,
4,1,4,1,4,1,4,3,4,119,8,4,1,4,1,4,3,4,123,8,4,1,5,1,5,1,5,1,5,3,5,129,8,
5,1,6,1,6,1,7,1,7,1,7,5,7,136,8,7,10,7,12,7,139,9,7,1,8,1,8,1,8,1,8,1,8,
1,8,5,8,147,8,8,10,8,12,8,150,9,8,1,8,1,8,3,8,154,8,8,1,9,1,9,3,9,158,8,
9,1,10,1,10,1,10,1,10,1,10,3,10,165,8,10,1,11,1,11,1,11,1,11,1,11,3,11,172,
8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,181,8,12,1,12,1,12,1,12,1,12,
5,12,187,8,12,10,12,12,12,190,9,12,1,13,1,13,1,14,1,14,1,14,1,14,1,14,3,
14,199,8,14,1,14,1,14,1,14,1,15,1,15,1,15,5,15,207,8,15,10,15,12,15,210,
9,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,5,17,219,8,17,10,17,12,17,222,9,
17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,21,1,21,
1,21,1,21,5,21,240,8,21,10,21,12,21,243,9,21,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,3,22,252,8,22,1,23,1,23,1,23,1,24,1,24,3,24,259,8,24,1,24,1,24,1,
24,1,25,3,25,265,8,25,1,25,1,25,3,25,269,8,25,1,25,1,25,1,25,1,25,3,25,275,
8,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,284,8,25,1,25,1,25,1,26,1,26,
1,26,1,26,1,26,1,26,5,26,294,8,26,10,26,12,26,297,9,26,1,27,1,27,1,27,3,
27,302,8,27,1,28,1,28,1,28,1,29,1,29,1,29,1,29,5,29,311,8,29,10,29,12,29,
314,9,29,1,30,1,30,1,30,1,30,3,30,320,8,30,1,30,1,30,1,30,1,30,3,30,326,
8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,335,8,31,1,32,1,32,1,33,1,33,
1,34,4,34,342,8,34,11,34,12,34,343,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,
35,3,35,354,8,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,364,8,36,1,
36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,375,8,37,1,37,1,37,1,37,
1,38,1,38,1,38,1,38,5,38,384,8,38,10,38,12,38,387,9,38,1,39,1,39,1,39,1,
39,3,39,393,8,39,1,39,1,39,1,39,0,1,24,40,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,0,3,1,0,33,36,2,0,6,9,20,20,1,0,23,24,415,0,80,1,0,0,0,2,100,
1,0,0,0,4,102,1,0,0,0,6,107,1,0,0,0,8,110,1,0,0,0,10,124,1,0,0,0,12,130,
1,0,0,0,14,132,1,0,0,0,16,153,1,0,0,0,18,157,1,0,0,0,20,164,1,0,0,0,22,171,
1,0,0,0,24,180,1,0,0,0,26,191,1,0,0,0,28,193,1,0,0,0,30,203,1,0,0,0,32,211,
1,0,0,0,34,215,1,0,0,0,36,223,1,0,0,0,38,229,1,0,0,0,40,233,1,0,0,0,42,235,
1,0,0,0,44,251,1,0,0,0,46,253,1,0,0,0,48,256,1,0,0,0,50,264,1,0,0,0,52,287,
1,0,0,0,54,298,1,0,0,0,56,303,1,0,0,0,58,306,1,0,0,0,60,325,1,0,0,0,62,334,
1,0,0,0,64,336,1,0,0,0,66,338,1,0,0,0,68,341,1,0,0,0,70,347,1,0,0,0,72,355,
1,0,0,0,74,367,1,0,0,0,76,379,1,0,0,0,78,388,1,0,0,0,80,86,3,2,1,0,81,82,
3,4,2,0,82,83,3,2,1,0,83,85,1,0,0,0,84,81,1,0,0,0,85,88,1,0,0,0,86,84,1,
0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,86,1,0,0,0,89,90,5,0,0,1,90,1,1,0,0,
0,91,101,3,16,8,0,92,101,3,38,19,0,93,101,3,50,25,0,94,101,3,68,34,0,95,
101,3,72,36,0,96,101,3,6,3,0,97,101,3,74,37,0,98,101,3,8,4,0,99,101,3,10,
5,0,100,91,1,0,0,0,100,92,1,0,0,0,100,93,1,0,0,0,100,94,1,0,0,0,100,95,1,
0,0,0,100,96,1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,0,101,3,
1,0,0,0,102,103,5,26,0,0,103,5,1,0,0,0,104,106,3,4,2,0,105,104,1,0,0,0,106,
109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,7,1,0,0,0,109,107,1,0,0,
0,110,113,5,16,0,0,111,112,5,18,0,0,112,114,5,37,0,0,113,111,1,0,0,0,113,
114,1,0,0,0,114,115,1,0,0,0,115,118,3,12,6,0,116,117,5,38,0,0,117,119,3,
14,7,0,118,116,1,0,0,0,118,119,1,0,0,0,119,122,1,0,0,0,120,121,5,19,0,0,
121,123,3,12,6,0,122,120,1,0,0,0,122,123,1,0,0,0,123,9,1,0,0,0,124,125,5,
17,0,0,125,128,3,12,6,0,126,127,5,19,0,0,127,129,3,12,6,0,128,126,1,0,0,
0,128,129,1,0,0,0,129,11,1,0,0,0,130,131,5,40,0,0,131,13,1,0,0,0,132,137,
3,12,6,0,133,134,5,38,0,0,134,136,3,12,6,0,135,133,1,0,0,0,136,139,1,0,0,
0,137,135,1,0,0,0,137,138,1,0,0,0,138,15,1,0,0,0,139,137,1,0,0,0,140,148,
3,18,9,0,141,142,3,6,3,0,142,143,5,38,0,0,143,144,3,6,3,0,144,145,3,18,9,
0,145,147,1,0,0,0,146,141,1,0,0,0,147,150,1,0,0,0,148,146,1,0,0,0,148,149,
1,0,0,0,149,154,1,0,0,0,150,148,1,0,0,0,151,152,5,15,0,0,152,154,3,16,8,
0,153,140,1,0,0,0,153,151,1,0,0,0,154,17,1,0,0,0,155,158,3,12,6,0,156,158,
3,28,14,0,157,155,1,0,0,0,157,156,1,0,0,0,158,19,1,0,0,0,159,165,5,41,0,
0,160,165,5,44,0,0,161,165,5,10,0,0,162,165,5,11,0,0,163,165,5,12,0,0,164,
159,1,0,0,0,164,160,1,0,0,0,164,161,1,0,0,0,164,162,1,0,0,0,164,163,1,0,
0,0,165,21,1,0,0,0,166,172,3,20,10,0,167,172,3,16,8,0,168,172,3,24,12,0,
169,172,3,58,29,0,170,172,3,48,24,0,171,166,1,0,0,0,171,167,1,0,0,0,171,
168,1,0,0,0,171,169,1,0,0,0,171,170,1,0,0,0,172,23,1,0,0,0,173,174,6,12,
-1,0,174,181,3,20,10,0,175,181,3,16,8,0,176,177,5,27,0,0,177,178,3,24,12,
0,178,179,5,28,0,0,179,181,1,0,0,0,180,173,1,0,0,0,180,175,1,0,0,0,180,176,
1,0,0,0,181,188,1,0,0,0,182,183,10,4,0,0,183,184,3,26,13,0,184,185,3,24,
12,5,185,187,1,0,0,0,186,182,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,
189,1,0,0,0,189,25,1,0,0,0,190,188,1,0,0,0,191,192,7,0,0,0,192,27,1,0,0,
0,193,194,3,12,6,0,194,195,5,27,0,0,195,198,3,6,3,0,196,199,3,30,15,0,197,
199,3,34,17,0,198,196,1,0,0,0,198,197,1,0,0,0,198,199,1,0,0,0,199,200,1,
0,0,0,200,201,3,6,3,0,201,202,5,28,0,0,202,29,1,0,0,0,203,208,3,32,16,0,
204,205,5,31,0,0,205,207,3,32,16,0,206,204,1,0,0,0,207,210,1,0,0,0,208,206,
1,0,0,0,208,209,1,0,0,0,209,31,1,0,0,0,210,208,1,0,0,0,211,212,3,6,3,0,212,
213,3,22,11,0,213,214,3,6,3,0,214,33,1,0,0,0,215,220,3,36,18,0,216,217,5,
31,0,0,217,219,3,36,18,0,218,216,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,
220,221,1,0,0,0,221,35,1,0,0,0,222,220,1,0,0,0,223,224,3,6,3,0,224,225,3,
12,6,0,225,226,5,37,0,0,226,227,3,22,11,0,227,228,3,6,3,0,228,37,1,0,0,0,
229,230,3,14,7,0,230,231,5,32,0,0,231,232,3,40,20,0,232,39,1,0,0,0,233,234,
3,22,11,0,234,41,1,0,0,0,235,241,3,44,22,0,236,237,3,4,2,0,237,238,3,44,
22,0,238,240,1,0,0,0,239,236,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,241,
242,1,0,0,0,242,43,1,0,0,0,243,241,1,0,0,0,244,252,3,38,19,0,245,252,3,68,
34,0,246,252,3,24,12,0,247,252,3,16,8,0,248,252,3,72,36,0,249,252,3,6,3,
0,250,252,3,46,23,0,251,244,1,0,0,0,251,245,1,0,0,0,251,246,1,0,0,0,251,
247,1,0,0,0,251,248,1,0,0,0,251,249,1,0,0,0,251,250,1,0,0,0,252,45,1,0,0,
0,253,254,5,21,0,0,254,255,3,44,22,0,255,47,1,0,0,0,256,258,5,1,0,0,257,
259,3,52,26,0,258,257,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,261,5,
37,0,0,261,262,3,22,11,0,262,49,1,0,0,0,263,265,5,22,0,0,264,263,1,0,0,0,
264,265,1,0,0,0,265,266,1,0,0,0,266,268,5,1,0,0,267,269,3,56,28,0,268,267,
1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,271,3,12,6,0,271,272,5,27,0,
0,272,274,3,6,3,0,273,275,3,52,26,0,274,273,1,0,0,0,274,275,1,0,0,0,275,
276,1,0,0,0,276,277,3,6,3,0,277,278,1,0,0,0,278,279,5,28,0,0,279,283,3,4,
2,0,280,281,3,42,21,0,281,282,3,4,2,0,282,284,1,0,0,0,283,280,1,0,0,0,283,
284,1,0,0,0,284,285,1,0,0,0,285,286,5,2,0,0,286,51,1,0,0,0,287,295,3,54,
27,0,288,289,3,6,3,0,289,290,5,31,0,0,290,291,3,6,3,0,291,292,3,54,27,0,
292,294,1,0,0,0,293,288,1,0,0,0,294,297,1,0,0,0,295,293,1,0,0,0,295,296,
1,0,0,0,296,53,1,0,0,0,297,295,1,0,0,0,298,301,3,12,6,0,299,300,5,32,0,0,
300,302,3,22,11,0,301,299,1,0,0,0,301,302,1,0,0,0,302,55,1,0,0,0,303,304,
3,12,6,0,304,305,5,38,0,0,305,57,1,0,0,0,306,312,3,60,30,0,307,308,3,66,
33,0,308,309,3,60,30,0,309,311,1,0,0,0,310,307,1,0,0,0,311,314,1,0,0,0,312,
310,1,0,0,0,312,313,1,0,0,0,313,59,1,0,0,0,314,312,1,0,0,0,315,319,3,62,
31,0,316,317,3,64,32,0,317,318,3,62,31,0,318,320,1,0,0,0,319,316,1,0,0,0,
319,320,1,0,0,0,320,326,1,0,0,0,321,322,5,27,0,0,322,323,3,60,30,0,323,324,
5,28,0,0,324,326,1,0,0,0,325,315,1,0,0,0,325,321,1,0,0,0,326,61,1,0,0,0,
327,335,3,20,10,0,328,335,3,16,8,0,329,335,3,24,12,0,330,331,5,27,0,0,331,
332,3,62,31,0,332,333,5,28,0,0,333,335,1,0,0,0,334,327,1,0,0,0,334,328,1,
0,0,0,334,329,1,0,0,0,334,330,1,0,0,0,335,63,1,0,0,0,336,337,7,1,0,0,337,
65,1,0,0,0,338,339,7,2,0,0,339,67,1,0,0,0,340,342,3,70,35,0,341,340,1,0,
0,0,342,343,1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,345,1,0,0,0,345,
346,5,2,0,0,346,69,1,0,0,0,347,348,5,14,0,0,348,349,3,22,11,0,349,353,3,
4,2,0,350,351,3,42,21,0,351,352,3,4,2,0,352,354,1,0,0,0,353,350,1,0,0,0,
353,354,1,0,0,0,354,71,1,0,0,0,355,356,5,3,0,0,356,357,3,12,6,0,357,358,
5,4,0,0,358,359,3,22,11,0,359,363,3,4,2,0,360,361,3,42,21,0,361,362,3,4,
2,0,362,364,1,0,0,0,363,360,1,0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,
366,5,2,0,0,366,73,1,0,0,0,367,368,5,5,0,0,368,369,3,12,6,0,369,370,3,4,
2,0,370,374,3,6,3,0,371,372,3,76,38,0,372,373,3,4,2,0,373,375,1,0,0,0,374,
371,1,0,0,0,374,375,1,0,0,0,375,376,1,0,0,0,376,377,3,6,3,0,377,378,5,2,
0,0,378,75,1,0,0,0,379,385,3,78,39,0,380,381,3,4,2,0,381,382,3,78,39,0,382,
384,1,0,0,0,383,380,1,0,0,0,384,387,1,0,0,0,385,383,1,0,0,0,385,386,1,0,
0,0,386,77,1,0,0,0,387,385,1,0,0,0,388,389,3,6,3,0,389,392,3,12,6,0,390,
391,5,32,0,0,391,393,3,22,11,0,392,390,1,0,0,0,392,393,1,0,0,0,393,394,1,
0,0,0,394,395,3,6,3,0,395,79,1,0,0,0,37,86,100,107,113,118,122,128,137,148,
153,157,164,171,180,188,198,208,220,241,251,258,264,268,274,283,295,301,
312,319,325,334,343,353,363,374,385,392];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DiiaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'\\u0434\\u0456\\u044F'", "'\\u043A\\u0456\\u043D\\u0435\\u0446\\u044C'", 
                            "'\\u043A\\u043E\\u0436\\u043D\\u0456\\u0439'", 
                            "'\\u0431\\u0435\\u0440\\u0443\\u0447\\u0438'", 
                            "'\\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430'", 
                            "'=='", "'!='", "'>='", "'<='", "'\\u0442\\u0430\\u043A'", 
                            "'\\u043D\\u0456'", "'\\u043F\\u0443\\u0441\\u0442\\u043E'", 
                            "'\\u0434\\u043B\\u044F'", "'\\u044F\\u043A\\u0449\\u043E'", 
                            "'\\u0447\\u0435\\u043A\\u0430\\u0442\\u0438'", 
                            "'\\u0432\\u0437\\u044F\\u0442\\u0438'", "'\\u0434\\u0430\\u0442\\u0438'", 
                            "'\\u043F\\u0430\\u043A'", "'\\u044F\\u043A'", 
                            "'\\u0454'", "'\\u0432\\u0435\\u0440\\u043D\\u0443\\u0442\\u0438'", 
                            "'\\u0442\\u0440\\u0438\\u0432\\u0430\\u043B\\u0430'", 
                            "'\\u0456'", "'\\u0430\\u0431\\u043E'", null, 
                            null, "'('", "')'", "'['", "']'", "','", "'='", 
                            "'+'", "'-'", "'*'", "'/'", "':'", "'.'", "'!'" ];
    static symbolicNames = [ null, "DEF", "END", "EACH", "TAKING", "STRUCTURE", 
                             "EQ", "NOT_EQ", "GREATER", "SMALLER", "YES", 
                             "NO", "NONE", "FOR", "IF", "WAIT", "TAKE", 
                             "GIVE", "PAK", "AS", "IS", "RETURN", "ASYNC", 
                             "AND", "OR", "SKIP_SPACES", "NL", "OPEN_PAREN", 
                             "CLOSE_PAREN", "OPEN_ARRAY", "CLOSE_ARRAY", 
                             "COMMA", "ASSIGN", "PLUS", "MINUS", "MUL", 
                             "DIV", "COLON", "DOT", "NOT", "ID", "NUMBER", 
                             "INTEGER", "FLOAT", "STRING" ];
    static ruleNames = [ "program", "program_line", "nl", "nls", "take", 
                         "give", "identifier", "identifiers_chain", "chain", 
                         "chain_element", "literal", "atom", "arithmetic", 
                         "arithmetic_op", "call", "call_parameters", "call_parameter", 
                         "call_named_parameters", "call_named_parameter", 
                         "assign", "assign_value", "body", "body_line", 
                         "return_body_line", "lambda", "diia", "diia_parameters", 
                         "diia_parameter", "diia_structure", "test", "test_expr", 
                         "test_part", "test_op", "test_expr_op", "if", "if_start", 
                         "each", "structure", "structure_parameters", "structure_parameter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DiiaParser.ruleNames;
        this.literalNames = DiiaParser.literalNames;
        this.symbolicNames = DiiaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.arithmetic_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    arithmetic_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DiiaParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.program_line();
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 81;
	            this.nl();
	            this.state = 82;
	            this.program_line();
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 89;
	        this.match(DiiaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	program_line() {
	    let localctx = new Program_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DiiaParser.RULE_program_line);
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 91;
	            this.chain();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 92;
	            this.assign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 93;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 94;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 95;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 96;
	            this.nls();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 97;
	            this.structure();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 98;
	            this.take();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 99;
	            this.give();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nl() {
	    let localctx = new NlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.match(DiiaParser.NL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nls() {
	    let localctx = new NlsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 104;
	                this.nl(); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	take() {
	    let localctx = new TakeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DiiaParser.RULE_take);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(DiiaParser.TAKE);
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 111;
	            localctx.t_pak = this.match(DiiaParser.PAK);
	            this.state = 112;
	            this.match(DiiaParser.COLON);
	        }

	        this.state = 115;
	        localctx.t_module = this.identifier();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 116;
	            this.match(DiiaParser.DOT);
	            this.state = 117;
	            localctx.t_elements_chain = this.identifiers_chain();
	        }

	        this.state = 122;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 120;
	            this.match(DiiaParser.AS);
	            this.state = 121;
	            localctx.t_as = this.identifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	give() {
	    let localctx = new GiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DiiaParser.RULE_give);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(DiiaParser.GIVE);
	        this.state = 125;
	        localctx.g_name = this.identifier();
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 126;
	            this.match(DiiaParser.AS);
	            this.state = 127;
	            localctx.g_as = this.identifier();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(DiiaParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifiers_chain() {
	    let localctx = new Identifiers_chainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DiiaParser.RULE_identifiers_chain);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.identifier();
	        this.state = 137;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 133;
	            this.match(DiiaParser.DOT);
	            this.state = 134;
	            this.identifier();
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chain() {
	    let localctx = new ChainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DiiaParser.RULE_chain);
	    try {
	        this.state = 153;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.chain_element();
	            this.state = 148;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 141;
	                    this.nls();
	                    this.state = 142;
	                    this.match(DiiaParser.DOT);
	                    this.state = 143;
	                    this.nls();
	                    this.state = 144;
	                    this.chain_element(); 
	                }
	                this.state = 150;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 151;
	            this.match(DiiaParser.WAIT);
	            this.state = 152;
	            localctx.c_wait = this.chain();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chain_element() {
	    let localctx = new Chain_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DiiaParser.RULE_chain_element);
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.call();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DiiaParser.RULE_literal);
	    try {
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 41:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            localctx.l_number = this.match(DiiaParser.NUMBER);
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 160;
	            localctx.l_string = this.match(DiiaParser.STRING);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 161;
	            localctx.l_yes = this.match(DiiaParser.YES);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 162;
	            localctx.l_no = this.match(DiiaParser.NO);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 163;
	            localctx.l_none = this.match(DiiaParser.NONE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DiiaParser.RULE_atom);
	    try {
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 166;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 167;
	            this.chain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 168;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 169;
	            this.test();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 170;
	            this.lambda();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	arithmetic(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ArithmeticContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, DiiaParser.RULE_arithmetic, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	        case 41:
	        case 44:
	            this.state = 174;
	            localctx.a_literal = this.literal();
	            break;
	        case 15:
	        case 40:
	            this.state = 175;
	            localctx.a_chain = this.chain();
	            break;
	        case 27:
	            this.state = 176;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 177;
	            localctx.a_nested = this.arithmetic(0);
	            this.state = 178;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 188;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ArithmeticContext(this, _parentctx, _parentState);
	                localctx.a_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_arithmetic);
	                this.state = 182;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 183;
	                localctx.a_op = this.arithmetic_op();
	                this.state = 184;
	                localctx.a_right = this.arithmetic(5); 
	            }
	            this.state = 190;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	arithmetic_op() {
	    let localctx = new Arithmetic_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DiiaParser.RULE_arithmetic_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & 15) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DiiaParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        localctx.c_name = this.identifier();
	        this.state = 194;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 195;
	        this.nls();
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 196;
	            localctx.c_parameters = this.call_parameters();

	        } else if(la_===2) {
	            this.state = 197;
	            localctx.c_named_parameters = this.call_named_parameters();

	        }
	        this.state = 200;
	        this.nls();
	        this.state = 201;
	        this.match(DiiaParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call_parameters() {
	    let localctx = new Call_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DiiaParser.RULE_call_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.call_parameter();
	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 204;
	            this.match(DiiaParser.COMMA);
	            this.state = 205;
	            this.call_parameter();
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call_parameter() {
	    let localctx = new Call_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DiiaParser.RULE_call_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.nls();
	        this.state = 212;
	        localctx.cp_value = this.atom();
	        this.state = 213;
	        this.nls();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call_named_parameters() {
	    let localctx = new Call_named_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DiiaParser.RULE_call_named_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.call_named_parameter();
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 216;
	            this.match(DiiaParser.COMMA);
	            this.state = 217;
	            this.call_named_parameter();
	            this.state = 222;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call_named_parameter() {
	    let localctx = new Call_named_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DiiaParser.RULE_call_named_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.nls();
	        this.state = 224;
	        localctx.cnp_name = this.identifier();
	        this.state = 225;
	        this.match(DiiaParser.COLON);
	        this.state = 226;
	        localctx.cnp_value = this.atom();
	        this.state = 227;
	        this.nls();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DiiaParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        localctx.a_chain = this.identifiers_chain();
	        this.state = 230;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 231;
	        localctx.a_value = this.assign_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign_value() {
	    let localctx = new Assign_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DiiaParser.RULE_assign_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.atom();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.body_line();
	        this.state = 241;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 236;
	                this.nl();
	                this.state = 237;
	                this.body_line(); 
	            }
	            this.state = 243;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	body_line() {
	    let localctx = new Body_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DiiaParser.RULE_body_line);
	    try {
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 244;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 245;
	            this.if_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 246;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 247;
	            this.chain();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 248;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 249;
	            this.nls();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 250;
	            this.return_body_line();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_body_line() {
	    let localctx = new Return_body_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(DiiaParser.RETURN);
	        this.state = 254;
	        localctx.rbl = this.body_line();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lambda() {
	    let localctx = new LambdaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, DiiaParser.RULE_lambda);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.match(DiiaParser.DEF);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 257;
	            localctx.l_parameters = this.diia_parameters();
	        }

	        this.state = 260;
	        this.match(DiiaParser.COLON);
	        this.state = 261;
	        this.atom();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	diia() {
	    let localctx = new DiiaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 263;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 266;
	        this.match(DiiaParser.DEF);
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 267;
	            localctx.d_structure = this.diia_structure();

	        }
	        this.state = 270;
	        localctx.d_name = this.identifier();
	        this.state = 271;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 272;
	        this.nls();
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 273;
	            localctx.d_parameters = this.diia_parameters();
	        }

	        this.state = 276;
	        this.nls();
	        this.state = 278;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 279;
	        this.nl();
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 203480072) !== 0) || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & 19) !== 0)) {
	            this.state = 280;
	            localctx.d_body = this.body();
	            this.state = 281;
	            this.nl();
	        }

	        this.state = 285;
	        this.match(DiiaParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	diia_parameters() {
	    let localctx = new Diia_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, DiiaParser.RULE_diia_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.diia_parameter();
	        this.state = 295;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 288;
	                this.nls();
	                this.state = 289;
	                this.match(DiiaParser.COMMA);
	                this.state = 290;
	                this.nls();
	                this.state = 291;
	                this.diia_parameter(); 
	            }
	            this.state = 297;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	diia_parameter() {
	    let localctx = new Diia_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, DiiaParser.RULE_diia_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        localctx.dp_name = this.identifier();
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 299;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 300;
	            localctx.dp_value = this.atom();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	diia_structure() {
	    let localctx = new Diia_structureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, DiiaParser.RULE_diia_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        localctx.ds_name = this.identifier();
	        this.state = 304;
	        this.match(DiiaParser.DOT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	test() {
	    let localctx = new TestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, DiiaParser.RULE_test);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.test_expr();
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===24) {
	            this.state = 307;
	            this.test_expr_op();
	            this.state = 308;
	            this.test_expr();
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	test_expr() {
	    let localctx = new Test_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, DiiaParser.RULE_test_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 325;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 315;
	            localctx.te_left = this.test_part();
	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1049536) !== 0)) {
	                this.state = 316;
	                localctx.te_op = this.test_op();
	                this.state = 317;
	                localctx.te_right = this.test_part();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 321;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 322;
	            this.test_expr();
	            this.state = 323;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	test_part() {
	    let localctx = new Test_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, DiiaParser.RULE_test_part);
	    try {
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.chain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 329;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 330;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 331;
	            this.test_part();
	            this.state = 332;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	test_op() {
	    let localctx = new Test_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 1049536) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	test_expr_op() {
	    let localctx = new Test_expr_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, DiiaParser.RULE_test_expr_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        _la = this._input.LA(1);
	        if(!(_la===23 || _la===24)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 340;
	            localctx.i_start = this.if_start();
	            this.state = 343; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===14);
	        this.state = 345;
	        this.match(DiiaParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_start() {
	    let localctx = new If_startContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, DiiaParser.RULE_if_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.match(DiiaParser.IF);
	        this.state = 348;
	        localctx.is_expr = this.atom();
	        this.state = 349;
	        this.nl();
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 350;
	            localctx.is_body = this.body();
	            this.state = 351;
	            this.nl();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	each() {
	    let localctx = new EachContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(DiiaParser.EACH);
	        this.state = 356;
	        localctx.e_name = this.identifier();
	        this.state = 357;
	        this.match(DiiaParser.TAKING);
	        this.state = 358;
	        localctx.e_iterator = this.atom();
	        this.state = 359;
	        this.nl();
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 203480072) !== 0) || ((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & 19) !== 0)) {
	            this.state = 360;
	            localctx.e_body = this.body();
	            this.state = 361;
	            this.nl();
	        }

	        this.state = 365;
	        this.match(DiiaParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structure() {
	    let localctx = new StructureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, DiiaParser.RULE_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 368;
	        localctx.s_name = this.identifier();
	        this.state = 369;
	        this.nl();
	        this.state = 370;
	        this.nls();
	        this.state = 374;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 371;
	            localctx.s_parameters = this.structure_parameters();
	            this.state = 372;
	            this.nl();

	        }
	        this.state = 376;
	        this.nls();
	        this.state = 377;
	        this.match(DiiaParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structure_parameters() {
	    let localctx = new Structure_parametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, DiiaParser.RULE_structure_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.structure_parameter();
	        this.state = 385;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 380;
	                this.nl();
	                this.state = 381;
	                this.structure_parameter(); 
	            }
	            this.state = 387;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structure_parameter() {
	    let localctx = new Structure_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, DiiaParser.RULE_structure_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        this.nls();
	        this.state = 389;
	        localctx.sp_name = this.identifier();
	        this.state = 392;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 390;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 391;
	            localctx.sp_value = this.atom();
	        }

	        this.state = 394;
	        this.nls();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DiiaParser.EOF = antlr4.Token.EOF;
DiiaParser.DEF = 1;
DiiaParser.END = 2;
DiiaParser.EACH = 3;
DiiaParser.TAKING = 4;
DiiaParser.STRUCTURE = 5;
DiiaParser.EQ = 6;
DiiaParser.NOT_EQ = 7;
DiiaParser.GREATER = 8;
DiiaParser.SMALLER = 9;
DiiaParser.YES = 10;
DiiaParser.NO = 11;
DiiaParser.NONE = 12;
DiiaParser.FOR = 13;
DiiaParser.IF = 14;
DiiaParser.WAIT = 15;
DiiaParser.TAKE = 16;
DiiaParser.GIVE = 17;
DiiaParser.PAK = 18;
DiiaParser.AS = 19;
DiiaParser.IS = 20;
DiiaParser.RETURN = 21;
DiiaParser.ASYNC = 22;
DiiaParser.AND = 23;
DiiaParser.OR = 24;
DiiaParser.SKIP_SPACES = 25;
DiiaParser.NL = 26;
DiiaParser.OPEN_PAREN = 27;
DiiaParser.CLOSE_PAREN = 28;
DiiaParser.OPEN_ARRAY = 29;
DiiaParser.CLOSE_ARRAY = 30;
DiiaParser.COMMA = 31;
DiiaParser.ASSIGN = 32;
DiiaParser.PLUS = 33;
DiiaParser.MINUS = 34;
DiiaParser.MUL = 35;
DiiaParser.DIV = 36;
DiiaParser.COLON = 37;
DiiaParser.DOT = 38;
DiiaParser.NOT = 39;
DiiaParser.ID = 40;
DiiaParser.NUMBER = 41;
DiiaParser.INTEGER = 42;
DiiaParser.FLOAT = 43;
DiiaParser.STRING = 44;

DiiaParser.RULE_program = 0;
DiiaParser.RULE_program_line = 1;
DiiaParser.RULE_nl = 2;
DiiaParser.RULE_nls = 3;
DiiaParser.RULE_take = 4;
DiiaParser.RULE_give = 5;
DiiaParser.RULE_identifier = 6;
DiiaParser.RULE_identifiers_chain = 7;
DiiaParser.RULE_chain = 8;
DiiaParser.RULE_chain_element = 9;
DiiaParser.RULE_literal = 10;
DiiaParser.RULE_atom = 11;
DiiaParser.RULE_arithmetic = 12;
DiiaParser.RULE_arithmetic_op = 13;
DiiaParser.RULE_call = 14;
DiiaParser.RULE_call_parameters = 15;
DiiaParser.RULE_call_parameter = 16;
DiiaParser.RULE_call_named_parameters = 17;
DiiaParser.RULE_call_named_parameter = 18;
DiiaParser.RULE_assign = 19;
DiiaParser.RULE_assign_value = 20;
DiiaParser.RULE_body = 21;
DiiaParser.RULE_body_line = 22;
DiiaParser.RULE_return_body_line = 23;
DiiaParser.RULE_lambda = 24;
DiiaParser.RULE_diia = 25;
DiiaParser.RULE_diia_parameters = 26;
DiiaParser.RULE_diia_parameter = 27;
DiiaParser.RULE_diia_structure = 28;
DiiaParser.RULE_test = 29;
DiiaParser.RULE_test_expr = 30;
DiiaParser.RULE_test_part = 31;
DiiaParser.RULE_test_op = 32;
DiiaParser.RULE_test_expr_op = 33;
DiiaParser.RULE_if = 34;
DiiaParser.RULE_if_start = 35;
DiiaParser.RULE_each = 36;
DiiaParser.RULE_structure = 37;
DiiaParser.RULE_structure_parameters = 38;
DiiaParser.RULE_structure_parameter = 39;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_program;
    }

	program_line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Program_lineContext);
	    } else {
	        return this.getTypedRuleContext(Program_lineContext,i);
	    }
	};

	EOF() {
	    return this.getToken(DiiaParser.EOF, 0);
	};

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Program_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_program_line;
    }

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	diia() {
	    return this.getTypedRuleContext(DiiaContext,0);
	};

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	each() {
	    return this.getTypedRuleContext(EachContext,0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	structure() {
	    return this.getTypedRuleContext(StructureContext,0);
	};

	take() {
	    return this.getTypedRuleContext(TakeContext,0);
	};

	give() {
	    return this.getTypedRuleContext(GiveContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterProgram_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitProgram_line(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitProgram_line(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_nl;
    }

	NL() {
	    return this.getToken(DiiaParser.NL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterNl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NlsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_nls;
    }

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterNls(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNls(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNls(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TakeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_take;
        this.t_pak = null; // Token
        this.t_module = null; // IdentifierContext
        this.t_elements_chain = null; // Identifiers_chainContext
        this.t_as = null; // IdentifierContext
    }

	TAKE() {
	    return this.getToken(DiiaParser.TAKE, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	COLON() {
	    return this.getToken(DiiaParser.COLON, 0);
	};

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
	};

	PAK() {
	    return this.getToken(DiiaParser.PAK, 0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTake(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTake(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTake(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_give;
        this.g_name = null; // IdentifierContext
        this.g_as = null; // IdentifierContext
    }

	GIVE() {
	    return this.getToken(DiiaParser.GIVE, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterGive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitGive(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitGive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_identifier;
    }

	ID() {
	    return this.getToken(DiiaParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Identifiers_chainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_identifiers_chain;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.DOT);
	    } else {
	        return this.getToken(DiiaParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterIdentifiers_chain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitIdentifiers_chain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitIdentifiers_chain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ChainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_chain;
        this.c_wait = null; // ChainContext
    }

	chain_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Chain_elementContext);
	    } else {
	        return this.getTypedRuleContext(Chain_elementContext,i);
	    }
	};

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.DOT);
	    } else {
	        return this.getToken(DiiaParser.DOT, i);
	    }
	};


	WAIT() {
	    return this.getToken(DiiaParser.WAIT, 0);
	};

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterChain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitChain(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitChain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Chain_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_chain_element;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterChain_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitChain_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitChain_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_literal;
        this.l_number = null; // Token
        this.l_string = null; // Token
        this.l_yes = null; // Token
        this.l_no = null; // Token
        this.l_none = null; // Token
    }

	NUMBER() {
	    return this.getToken(DiiaParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	YES() {
	    return this.getToken(DiiaParser.YES, 0);
	};

	NO() {
	    return this.getToken(DiiaParser.NO, 0);
	};

	NONE() {
	    return this.getToken(DiiaParser.NONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_atom;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	arithmetic() {
	    return this.getTypedRuleContext(ArithmeticContext,0);
	};

	test() {
	    return this.getTypedRuleContext(TestContext,0);
	};

	lambda() {
	    return this.getTypedRuleContext(LambdaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArithmeticContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_arithmetic;
        this.a_left = null; // ArithmeticContext
        this.a_literal = null; // LiteralContext
        this.a_chain = null; // ChainContext
        this.a_nested = null; // ArithmeticContext
        this.a_op = null; // Arithmetic_opContext
        this.a_right = null; // ArithmeticContext
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	arithmetic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArithmeticContext);
	    } else {
	        return this.getTypedRuleContext(ArithmeticContext,i);
	    }
	};

	arithmetic_op() {
	    return this.getTypedRuleContext(Arithmetic_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArithmetic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Arithmetic_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_arithmetic_op;
    }

	PLUS() {
	    return this.getToken(DiiaParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(DiiaParser.MINUS, 0);
	};

	DIV() {
	    return this.getToken(DiiaParser.DIV, 0);
	};

	MUL() {
	    return this.getToken(DiiaParser.MUL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArithmetic_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic_op(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_call;
        this.c_name = null; // IdentifierContext
        this.c_parameters = null; // Call_parametersContext
        this.c_named_parameters = null; // Call_named_parametersContext
    }

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	call_parameters() {
	    return this.getTypedRuleContext(Call_parametersContext,0);
	};

	call_named_parameters() {
	    return this.getTypedRuleContext(Call_named_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Call_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_call_parameters;
    }

	call_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Call_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Call_parameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.COMMA);
	    } else {
	        return this.getToken(DiiaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterCall_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall_parameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Call_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_call_parameter;
        this.cp_value = null; // AtomContext
    }

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterCall_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall_parameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall_parameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Call_named_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_call_named_parameters;
    }

	call_named_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Call_named_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Call_named_parameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.COMMA);
	    } else {
	        return this.getToken(DiiaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterCall_named_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall_named_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall_named_parameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Call_named_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_call_named_parameter;
        this.cnp_name = null; // IdentifierContext
        this.cnp_value = null; // AtomContext
    }

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	COLON() {
	    return this.getToken(DiiaParser.COLON, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterCall_named_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall_named_parameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall_named_parameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_assign;
        this.a_chain = null; // Identifiers_chainContext
        this.a_value = null; // Assign_valueContext
    }

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	assign_value() {
	    return this.getTypedRuleContext(Assign_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Assign_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_assign_value;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterAssign_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitAssign_value(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitAssign_value(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_body;
    }

	body_line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Body_lineContext);
	    } else {
	        return this.getTypedRuleContext(Body_lineContext,i);
	    }
	};

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Body_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_body_line;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	arithmetic() {
	    return this.getTypedRuleContext(ArithmeticContext,0);
	};

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	each() {
	    return this.getTypedRuleContext(EachContext,0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	return_body_line() {
	    return this.getTypedRuleContext(Return_body_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterBody_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitBody_line(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitBody_line(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Return_body_lineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_return_body_line;
        this.rbl = null; // Body_lineContext
    }

	RETURN() {
	    return this.getToken(DiiaParser.RETURN, 0);
	};

	body_line() {
	    return this.getTypedRuleContext(Body_lineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterReturn_body_line(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitReturn_body_line(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitReturn_body_line(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LambdaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_lambda;
        this.l_parameters = null; // Diia_parametersContext
    }

	DEF() {
	    return this.getToken(DiiaParser.DEF, 0);
	};

	COLON() {
	    return this.getToken(DiiaParser.COLON, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	diia_parameters() {
	    return this.getTypedRuleContext(Diia_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterLambda(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitLambda(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitLambda(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DiiaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_diia;
        this.d_async = null; // Token
        this.d_structure = null; // Diia_structureContext
        this.d_name = null; // IdentifierContext
        this.d_parameters = null; // Diia_parametersContext
        this.d_body = null; // BodyContext
    }

	DEF() {
	    return this.getToken(DiiaParser.DEF, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	ASYNC() {
	    return this.getToken(DiiaParser.ASYNC, 0);
	};

	diia_structure() {
	    return this.getTypedRuleContext(Diia_structureContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	diia_parameters() {
	    return this.getTypedRuleContext(Diia_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterDiia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDiia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDiia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Diia_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_diia_parameters;
    }

	diia_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Diia_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Diia_parameterContext,i);
	    }
	};

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.COMMA);
	    } else {
	        return this.getToken(DiiaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterDiia_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDiia_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDiia_parameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Diia_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_diia_parameter;
        this.dp_name = null; // IdentifierContext
        this.dp_value = null; // AtomContext
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterDiia_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDiia_parameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDiia_parameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Diia_structureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_diia_structure;
        this.ds_name = null; // IdentifierContext
    }

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterDiia_structure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDiia_structure(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDiia_structure(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_test;
    }

	test_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Test_exprContext);
	    } else {
	        return this.getTypedRuleContext(Test_exprContext,i);
	    }
	};

	test_expr_op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Test_expr_opContext);
	    } else {
	        return this.getTypedRuleContext(Test_expr_opContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTest(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Test_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_test_expr;
        this.te_left = null; // Test_partContext
        this.te_op = null; // Test_opContext
        this.te_right = null; // Test_partContext
    }

	test_part = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Test_partContext);
	    } else {
	        return this.getTypedRuleContext(Test_partContext,i);
	    }
	};

	test_op() {
	    return this.getTypedRuleContext(Test_opContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	test_expr() {
	    return this.getTypedRuleContext(Test_exprContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTest_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTest_expr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTest_expr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Test_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_test_part;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	arithmetic() {
	    return this.getTypedRuleContext(ArithmeticContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	test_part() {
	    return this.getTypedRuleContext(Test_partContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTest_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTest_part(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTest_part(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Test_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_test_op;
    }

	EQ() {
	    return this.getToken(DiiaParser.EQ, 0);
	};

	NOT_EQ() {
	    return this.getToken(DiiaParser.NOT_EQ, 0);
	};

	GREATER() {
	    return this.getToken(DiiaParser.GREATER, 0);
	};

	SMALLER() {
	    return this.getToken(DiiaParser.SMALLER, 0);
	};

	IS() {
	    return this.getToken(DiiaParser.IS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTest_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTest_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTest_op(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Test_expr_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_test_expr_op;
    }

	AND() {
	    return this.getToken(DiiaParser.AND, 0);
	};

	OR() {
	    return this.getToken(DiiaParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTest_expr_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTest_expr_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTest_expr_op(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_if;
        this.i_start = null; // If_startContext
    }

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	if_start = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(If_startContext);
	    } else {
	        return this.getTypedRuleContext(If_startContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitIf(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class If_startContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_if_start;
        this.is_expr = null; // AtomContext
        this.is_body = null; // BodyContext
    }

	IF() {
	    return this.getToken(DiiaParser.IF, 0);
	};

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterIf_start(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitIf_start(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitIf_start(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EachContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_each;
        this.e_name = null; // IdentifierContext
        this.e_iterator = null; // AtomContext
        this.e_body = null; // BodyContext
    }

	EACH() {
	    return this.getToken(DiiaParser.EACH, 0);
	};

	TAKING() {
	    return this.getToken(DiiaParser.TAKING, 0);
	};

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterEach(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitEach(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitEach(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_structure;
        this.s_name = null; // IdentifierContext
        this.s_parameters = null; // Structure_parametersContext
    }

	STRUCTURE() {
	    return this.getToken(DiiaParser.STRUCTURE, 0);
	};

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	structure_parameters() {
	    return this.getTypedRuleContext(Structure_parametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterStructure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitStructure(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitStructure(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Structure_parametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_structure_parameters;
    }

	structure_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Structure_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Structure_parameterContext,i);
	    }
	};

	nl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlContext);
	    } else {
	        return this.getTypedRuleContext(NlContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterStructure_parameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitStructure_parameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitStructure_parameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Structure_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_structure_parameter;
        this.sp_name = null; // IdentifierContext
        this.sp_value = null; // AtomContext
    }

	nls = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NlsContext);
	    } else {
	        return this.getTypedRuleContext(NlsContext,i);
	    }
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterStructure_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitStructure_parameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitStructure_parameter(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DiiaParser.ProgramContext = ProgramContext; 
DiiaParser.Program_lineContext = Program_lineContext; 
DiiaParser.NlContext = NlContext; 
DiiaParser.NlsContext = NlsContext; 
DiiaParser.TakeContext = TakeContext; 
DiiaParser.GiveContext = GiveContext; 
DiiaParser.IdentifierContext = IdentifierContext; 
DiiaParser.Identifiers_chainContext = Identifiers_chainContext; 
DiiaParser.ChainContext = ChainContext; 
DiiaParser.Chain_elementContext = Chain_elementContext; 
DiiaParser.LiteralContext = LiteralContext; 
DiiaParser.AtomContext = AtomContext; 
DiiaParser.ArithmeticContext = ArithmeticContext; 
DiiaParser.Arithmetic_opContext = Arithmetic_opContext; 
DiiaParser.CallContext = CallContext; 
DiiaParser.Call_parametersContext = Call_parametersContext; 
DiiaParser.Call_parameterContext = Call_parameterContext; 
DiiaParser.Call_named_parametersContext = Call_named_parametersContext; 
DiiaParser.Call_named_parameterContext = Call_named_parameterContext; 
DiiaParser.AssignContext = AssignContext; 
DiiaParser.Assign_valueContext = Assign_valueContext; 
DiiaParser.BodyContext = BodyContext; 
DiiaParser.Body_lineContext = Body_lineContext; 
DiiaParser.Return_body_lineContext = Return_body_lineContext; 
DiiaParser.LambdaContext = LambdaContext; 
DiiaParser.DiiaContext = DiiaContext; 
DiiaParser.Diia_parametersContext = Diia_parametersContext; 
DiiaParser.Diia_parameterContext = Diia_parameterContext; 
DiiaParser.Diia_structureContext = Diia_structureContext; 
DiiaParser.TestContext = TestContext; 
DiiaParser.Test_exprContext = Test_exprContext; 
DiiaParser.Test_partContext = Test_partContext; 
DiiaParser.Test_opContext = Test_opContext; 
DiiaParser.Test_expr_opContext = Test_expr_opContext; 
DiiaParser.IfContext = IfContext; 
DiiaParser.If_startContext = If_startContext; 
DiiaParser.EachContext = EachContext; 
DiiaParser.StructureContext = StructureContext; 
DiiaParser.Structure_parametersContext = Structure_parametersContext; 
DiiaParser.Structure_parameterContext = Structure_parameterContext; 
