// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,47,416,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,1,0,1,0,1,0,5,0,83,8,0,10,
0,12,0,86,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,99,8,1,1,2,
1,2,1,3,5,3,104,8,3,10,3,12,3,107,9,3,1,4,1,4,1,4,3,4,112,8,4,1,4,1,4,1,
4,3,4,117,8,4,1,4,1,4,3,4,121,8,4,1,5,1,5,1,5,1,5,3,5,127,8,5,1,6,1,6,1,
7,1,7,1,7,5,7,134,8,7,10,7,12,7,137,9,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,145,
8,8,10,8,12,8,148,9,8,1,8,1,8,3,8,152,8,8,1,9,1,9,3,9,156,8,9,1,10,1,10,
1,10,1,10,1,10,3,10,163,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
3,11,174,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,183,8,12,1,12,1,12,
1,12,1,12,1,12,1,12,5,12,191,8,12,10,12,12,12,194,9,12,1,13,1,13,1,13,1,
13,1,13,3,13,201,8,13,1,13,1,13,1,13,1,14,1,14,1,14,5,14,209,8,14,10,14,
12,14,212,9,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,5,16,221,8,16,10,16,12,
16,224,9,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,1,19,
1,20,1,20,1,20,1,20,5,20,242,8,20,10,20,12,20,245,9,20,1,21,1,21,1,21,1,
21,1,21,1,21,1,21,3,21,254,8,21,1,22,1,22,1,22,1,23,1,23,3,23,261,8,23,1,
23,1,23,1,23,1,23,1,24,3,24,268,8,24,1,24,1,24,3,24,272,8,24,1,24,1,24,1,
24,1,24,3,24,278,8,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,287,8,24,1,
24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,5,25,297,8,25,10,25,12,25,300,9,25,
1,26,1,26,1,26,3,26,305,8,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,3,28,318,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,327,8,29,
1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,338,8,31,10,31,12,31,341,
9,31,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,33,3,33,351,8,33,1,33,1,33,1,33,
1,33,3,33,357,8,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,
369,8,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,380,8,35,1,35,
1,35,1,35,1,36,1,36,1,36,1,36,5,36,389,8,36,10,36,12,36,392,9,36,1,37,1,
37,1,37,1,37,3,37,398,8,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,
1,38,1,38,3,38,411,8,38,1,38,1,38,1,38,1,38,0,2,24,62,39,0,2,4,6,8,10,12,
14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,
62,64,66,68,70,72,74,76,0,4,1,0,38,39,1,0,36,37,2,0,6,9,20,20,1,0,23,24,
437,0,78,1,0,0,0,2,98,1,0,0,0,4,100,1,0,0,0,6,105,1,0,0,0,8,108,1,0,0,0,
10,122,1,0,0,0,12,128,1,0,0,0,14,130,1,0,0,0,16,151,1,0,0,0,18,155,1,0,0,
0,20,162,1,0,0,0,22,173,1,0,0,0,24,182,1,0,0,0,26,195,1,0,0,0,28,205,1,0,
0,0,30,213,1,0,0,0,32,217,1,0,0,0,34,225,1,0,0,0,36,231,1,0,0,0,38,235,1,
0,0,0,40,237,1,0,0,0,42,253,1,0,0,0,44,255,1,0,0,0,46,258,1,0,0,0,48,267,
1,0,0,0,50,290,1,0,0,0,52,301,1,0,0,0,54,306,1,0,0,0,56,317,1,0,0,0,58,326,
1,0,0,0,60,328,1,0,0,0,62,330,1,0,0,0,64,342,1,0,0,0,66,344,1,0,0,0,68,360,
1,0,0,0,70,372,1,0,0,0,72,384,1,0,0,0,74,393,1,0,0,0,76,401,1,0,0,0,78,84,
3,2,1,0,79,80,3,4,2,0,80,81,3,2,1,0,81,83,1,0,0,0,82,79,1,0,0,0,83,86,1,
0,0,0,84,82,1,0,0,0,84,85,1,0,0,0,85,87,1,0,0,0,86,84,1,0,0,0,87,88,5,0,
0,1,88,1,1,0,0,0,89,99,3,16,8,0,90,99,3,36,18,0,91,99,3,48,24,0,92,99,3,
66,33,0,93,99,3,68,34,0,94,99,3,6,3,0,95,99,3,70,35,0,96,99,3,8,4,0,97,99,
3,10,5,0,98,89,1,0,0,0,98,90,1,0,0,0,98,91,1,0,0,0,98,92,1,0,0,0,98,93,1,
0,0,0,98,94,1,0,0,0,98,95,1,0,0,0,98,96,1,0,0,0,98,97,1,0,0,0,99,3,1,0,0,
0,100,101,5,29,0,0,101,5,1,0,0,0,102,104,3,4,2,0,103,102,1,0,0,0,104,107,
1,0,0,0,105,103,1,0,0,0,105,106,1,0,0,0,106,7,1,0,0,0,107,105,1,0,0,0,108,
111,5,16,0,0,109,110,5,18,0,0,110,112,5,40,0,0,111,109,1,0,0,0,111,112,1,
0,0,0,112,113,1,0,0,0,113,116,3,12,6,0,114,115,5,41,0,0,115,117,3,14,7,0,
116,114,1,0,0,0,116,117,1,0,0,0,117,120,1,0,0,0,118,119,5,19,0,0,119,121,
3,12,6,0,120,118,1,0,0,0,120,121,1,0,0,0,121,9,1,0,0,0,122,123,5,17,0,0,
123,126,3,12,6,0,124,125,5,19,0,0,125,127,3,12,6,0,126,124,1,0,0,0,126,127,
1,0,0,0,127,11,1,0,0,0,128,129,5,43,0,0,129,13,1,0,0,0,130,135,3,12,6,0,
131,132,5,41,0,0,132,134,3,12,6,0,133,131,1,0,0,0,134,137,1,0,0,0,135,133,
1,0,0,0,135,136,1,0,0,0,136,15,1,0,0,0,137,135,1,0,0,0,138,146,3,18,9,0,
139,140,3,6,3,0,140,141,5,41,0,0,141,142,3,6,3,0,142,143,3,18,9,0,143,145,
1,0,0,0,144,139,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,
147,152,1,0,0,0,148,146,1,0,0,0,149,150,5,15,0,0,150,152,3,16,8,0,151,138,
1,0,0,0,151,149,1,0,0,0,152,17,1,0,0,0,153,156,3,12,6,0,154,156,3,26,13,
0,155,153,1,0,0,0,155,154,1,0,0,0,156,19,1,0,0,0,157,163,5,44,0,0,158,163,
5,47,0,0,159,163,5,10,0,0,160,163,5,11,0,0,161,163,5,12,0,0,162,157,1,0,
0,0,162,158,1,0,0,0,162,159,1,0,0,0,162,160,1,0,0,0,162,161,1,0,0,0,163,
21,1,0,0,0,164,174,3,20,10,0,165,174,3,16,8,0,166,174,3,24,12,0,167,174,
3,56,28,0,168,174,3,46,23,0,169,170,5,30,0,0,170,171,3,22,11,0,171,172,5,
31,0,0,172,174,1,0,0,0,173,164,1,0,0,0,173,165,1,0,0,0,173,166,1,0,0,0,173,
167,1,0,0,0,173,168,1,0,0,0,173,169,1,0,0,0,174,23,1,0,0,0,175,176,6,12,
-1,0,176,183,3,20,10,0,177,183,3,16,8,0,178,179,5,30,0,0,179,180,3,24,12,
0,180,181,5,31,0,0,181,183,1,0,0,0,182,175,1,0,0,0,182,177,1,0,0,0,182,178,
1,0,0,0,183,192,1,0,0,0,184,185,10,5,0,0,185,186,7,0,0,0,186,191,3,24,12,
6,187,188,10,4,0,0,188,189,7,1,0,0,189,191,3,24,12,5,190,184,1,0,0,0,190,
187,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,25,1,0,0,
0,194,192,1,0,0,0,195,196,3,12,6,0,196,197,5,30,0,0,197,200,3,6,3,0,198,
201,3,28,14,0,199,201,3,32,16,0,200,198,1,0,0,0,200,199,1,0,0,0,200,201,
1,0,0,0,201,202,1,0,0,0,202,203,3,6,3,0,203,204,5,31,0,0,204,27,1,0,0,0,
205,210,3,30,15,0,206,207,5,34,0,0,207,209,3,30,15,0,208,206,1,0,0,0,209,
212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,29,1,0,0,0,212,210,1,0,0,
0,213,214,3,6,3,0,214,215,3,22,11,0,215,216,3,6,3,0,216,31,1,0,0,0,217,222,
3,34,17,0,218,219,5,34,0,0,219,221,3,34,17,0,220,218,1,0,0,0,221,224,1,0,
0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,33,1,0,0,0,224,222,1,0,0,0,225,226,
3,6,3,0,226,227,3,12,6,0,227,228,5,35,0,0,228,229,3,22,11,0,229,230,3,6,
3,0,230,35,1,0,0,0,231,232,3,14,7,0,232,233,5,35,0,0,233,234,3,38,19,0,234,
37,1,0,0,0,235,236,3,22,11,0,236,39,1,0,0,0,237,243,3,42,21,0,238,239,3,
4,2,0,239,240,3,42,21,0,240,242,1,0,0,0,241,238,1,0,0,0,242,245,1,0,0,0,
243,241,1,0,0,0,243,244,1,0,0,0,244,41,1,0,0,0,245,243,1,0,0,0,246,254,3,
36,18,0,247,254,3,66,33,0,248,254,3,24,12,0,249,254,3,16,8,0,250,254,3,68,
34,0,251,254,3,6,3,0,252,254,3,44,22,0,253,246,1,0,0,0,253,247,1,0,0,0,253,
248,1,0,0,0,253,249,1,0,0,0,253,250,1,0,0,0,253,251,1,0,0,0,253,252,1,0,
0,0,254,43,1,0,0,0,255,256,5,21,0,0,256,257,3,42,21,0,257,45,1,0,0,0,258,
260,5,30,0,0,259,261,3,50,25,0,260,259,1,0,0,0,260,261,1,0,0,0,261,262,1,
0,0,0,262,263,5,31,0,0,263,264,5,40,0,0,264,265,3,22,11,0,265,47,1,0,0,0,
266,268,5,22,0,0,267,266,1,0,0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,271,
5,1,0,0,270,272,3,54,27,0,271,270,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,
0,273,274,3,12,6,0,274,275,5,30,0,0,275,277,3,6,3,0,276,278,3,50,25,0,277,
276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,280,3,6,3,0,280,281,1,0,
0,0,281,282,5,31,0,0,282,286,3,4,2,0,283,284,3,40,20,0,284,285,3,4,2,0,285,
287,1,0,0,0,286,283,1,0,0,0,286,287,1,0,0,0,287,288,1,0,0,0,288,289,5,2,
0,0,289,49,1,0,0,0,290,298,3,52,26,0,291,292,3,6,3,0,292,293,5,34,0,0,293,
294,3,6,3,0,294,295,3,52,26,0,295,297,1,0,0,0,296,291,1,0,0,0,297,300,1,
0,0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,51,1,0,0,0,300,298,1,0,0,0,301,
304,3,12,6,0,302,303,5,35,0,0,303,305,3,22,11,0,304,302,1,0,0,0,304,305,
1,0,0,0,305,53,1,0,0,0,306,307,3,12,6,0,307,308,5,41,0,0,308,55,1,0,0,0,
309,310,3,58,29,0,310,311,3,60,30,0,311,312,3,58,29,0,312,318,1,0,0,0,313,
314,5,30,0,0,314,315,3,62,31,0,315,316,5,31,0,0,316,318,1,0,0,0,317,309,
1,0,0,0,317,313,1,0,0,0,318,57,1,0,0,0,319,327,3,20,10,0,320,327,3,16,8,
0,321,327,3,24,12,0,322,323,5,30,0,0,323,324,3,58,29,0,324,325,5,31,0,0,
325,327,1,0,0,0,326,319,1,0,0,0,326,320,1,0,0,0,326,321,1,0,0,0,326,322,
1,0,0,0,327,59,1,0,0,0,328,329,7,2,0,0,329,61,1,0,0,0,330,331,6,31,-1,0,
331,332,3,56,28,0,332,339,1,0,0,0,333,334,10,2,0,0,334,335,3,64,32,0,335,
336,3,62,31,3,336,338,1,0,0,0,337,333,1,0,0,0,338,341,1,0,0,0,339,337,1,
0,0,0,339,340,1,0,0,0,340,63,1,0,0,0,341,339,1,0,0,0,342,343,7,3,0,0,343,
65,1,0,0,0,344,345,5,14,0,0,345,346,3,22,11,0,346,350,3,4,2,0,347,348,3,
40,20,0,348,349,3,4,2,0,349,351,1,0,0,0,350,347,1,0,0,0,350,351,1,0,0,0,
351,356,1,0,0,0,352,353,5,27,0,0,353,354,3,40,20,0,354,355,3,4,2,0,355,357,
1,0,0,0,356,352,1,0,0,0,356,357,1,0,0,0,357,358,1,0,0,0,358,359,5,2,0,0,
359,67,1,0,0,0,360,361,5,3,0,0,361,362,3,12,6,0,362,363,5,4,0,0,363,364,
3,22,11,0,364,368,3,4,2,0,365,366,3,40,20,0,366,367,3,4,2,0,367,369,1,0,
0,0,368,365,1,0,0,0,368,369,1,0,0,0,369,370,1,0,0,0,370,371,5,2,0,0,371,
69,1,0,0,0,372,373,5,5,0,0,373,374,3,12,6,0,374,375,3,4,2,0,375,379,3,6,
3,0,376,377,3,72,36,0,377,378,3,4,2,0,378,380,1,0,0,0,379,376,1,0,0,0,379,
380,1,0,0,0,380,381,1,0,0,0,381,382,3,6,3,0,382,383,5,2,0,0,383,71,1,0,0,
0,384,390,3,74,37,0,385,386,3,4,2,0,386,387,3,74,37,0,387,389,1,0,0,0,388,
385,1,0,0,0,389,392,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,0,391,73,1,0,0,
0,392,390,1,0,0,0,393,394,3,6,3,0,394,397,3,12,6,0,395,396,5,35,0,0,396,
398,3,22,11,0,397,395,1,0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,399,400,3,
6,3,0,400,75,1,0,0,0,401,402,5,25,0,0,402,403,3,4,2,0,403,404,3,40,20,0,
404,405,3,4,2,0,405,406,5,26,0,0,406,410,3,12,6,0,407,408,3,40,20,0,408,
409,3,4,2,0,409,411,1,0,0,0,410,407,1,0,0,0,410,411,1,0,0,0,411,412,1,0,
0,0,412,413,3,6,3,0,413,414,5,2,0,0,414,77,1,0,0,0,38,84,98,105,111,116,
120,126,135,146,151,155,162,173,182,190,192,200,210,222,243,253,260,267,
271,277,286,298,304,317,326,339,350,356,368,379,390,397,410];


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
                            "'\\u0456'", "'\\u0430\\u0431\\u043E'", "'\\u0441\\u043F\\u0440\\u043E\\u0431\\u0443\\u0432\\u0430\\u0442\\u0438'", 
                            "'\\u0437\\u043B\\u043E\\u0432\\u0438\\u0442\\u0438'", 
                            "'\\u0456\\u043D\\u0430\\u043A\\u0448\\u0435'", 
                            null, null, "'('", "')'", "'['", "']'", "','", 
                            "'='", "'+'", "'-'", "'*'", "'/'", "':'", "'.'", 
                            "'!'" ];
    static symbolicNames = [ null, "DEF", "END", "EACH", "TAKING", "STRUCTURE", 
                             "EQ", "NOT_EQ", "GREATER", "SMALLER", "YES", 
                             "NO", "NONE", "FOR", "IF", "WAIT", "TAKE", 
                             "GIVE", "PAK", "AS", "IS", "RETURN", "ASYNC", 
                             "AND", "OR", "TRY", "CATCH", "ELSE", "SKIP_SPACES", 
                             "NL", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_ARRAY", 
                             "CLOSE_ARRAY", "COMMA", "ASSIGN", "PLUS", "MINUS", 
                             "MUL", "DIV", "COLON", "DOT", "NOT", "ID", 
                             "NUMBER", "INTEGER", "FLOAT", "STRING" ];
    static ruleNames = [ "program", "program_line", "nl", "nls", "take", 
                         "give", "identifier", "identifiers_chain", "chain", 
                         "chain_element", "literal", "atom", "arithmetic", 
                         "call", "call_parameters", "call_parameter", "call_named_parameters", 
                         "call_named_parameter", "assign", "assign_value", 
                         "body", "body_line", "return_body_line", "lambda", 
                         "diia", "diia_parameters", "diia_parameter", "diia_structure", 
                         "test", "test_part", "test_op", "test_expr", "test_expr_op", 
                         "if", "each", "structure", "structure_parameters", 
                         "structure_parameter", "trycat" ];

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
    	case 31:
    	    		return this.test_expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    arithmetic_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    test_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
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
	        this.state = 78;
	        this.program_line();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 79;
	            this.nl();
	            this.state = 80;
	            this.program_line();
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87;
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
	        this.state = 98;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 89;
	            this.chain();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 90;
	            this.assign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 92;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 93;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 94;
	            this.nls();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 95;
	            this.structure();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 96;
	            this.take();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 97;
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
	        this.state = 100;
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
	        this.state = 105;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 102;
	                this.nl(); 
	            }
	            this.state = 107;
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
	        this.state = 108;
	        this.match(DiiaParser.TAKE);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 109;
	            localctx.t_pak = this.match(DiiaParser.PAK);
	            this.state = 110;
	            this.match(DiiaParser.COLON);
	        }

	        this.state = 113;
	        localctx.t_module = this.identifier();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 114;
	            this.match(DiiaParser.DOT);
	            this.state = 115;
	            localctx.t_elements_chain = this.identifiers_chain();
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 118;
	            this.match(DiiaParser.AS);
	            this.state = 119;
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
	        this.state = 122;
	        this.match(DiiaParser.GIVE);
	        this.state = 123;
	        localctx.g_name = this.identifier();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 124;
	            this.match(DiiaParser.AS);
	            this.state = 125;
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
	        this.state = 128;
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
	        this.state = 130;
	        this.identifier();
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===41) {
	            this.state = 131;
	            this.match(DiiaParser.DOT);
	            this.state = 132;
	            this.identifier();
	            this.state = 137;
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
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.chain_element();
	            this.state = 146;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 139;
	                    this.nls();
	                    this.state = 140;
	                    this.match(DiiaParser.DOT);
	                    this.state = 141;
	                    this.nls();
	                    this.state = 142;
	                    this.chain_element(); 
	                }
	                this.state = 148;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 149;
	            this.match(DiiaParser.WAIT);
	            this.state = 150;
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
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
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
	        this.state = 162;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            localctx.l_number = this.match(DiiaParser.NUMBER);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            localctx.l_string = this.match(DiiaParser.STRING);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 159;
	            localctx.l_yes = this.match(DiiaParser.YES);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 160;
	            localctx.l_no = this.match(DiiaParser.NO);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 161;
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
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 164;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 165;
	            this.chain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 166;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 167;
	            this.test();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 168;
	            this.lambda();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 169;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 170;
	            this.atom();
	            this.state = 171;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	        case 44:
	        case 47:
	            this.state = 176;
	            localctx.a_literal = this.literal();
	            break;
	        case 15:
	        case 43:
	            this.state = 177;
	            localctx.a_chain = this.chain();
	            break;
	        case 30:
	            this.state = 178;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 179;
	            localctx.a_nested = this.arithmetic(0);
	            this.state = 180;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 192;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 190;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ArithmeticContext(this, _parentctx, _parentState);
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_arithmetic);
	                    this.state = 184;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 185;
	                    localctx.a_op_muldiv = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===38 || _la===39)) {
	                        localctx.a_op_muldiv = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 186;
	                    localctx.a_right = this.arithmetic(6);
	                    break;

	                case 2:
	                    localctx = new ArithmeticContext(this, _parentctx, _parentState);
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_arithmetic);
	                    this.state = 187;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 188;
	                    localctx.a_op_addsub = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===36 || _la===37)) {
	                        localctx.a_op_addsub = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 189;
	                    localctx.a_right = this.arithmetic(5);
	                    break;

	                } 
	            }
	            this.state = 194;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DiiaParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        localctx.c_name = this.identifier();
	        this.state = 196;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 197;
	        this.nls();
	        this.state = 200;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 198;
	            localctx.c_parameters = this.call_parameters();

	        } else if(la_===2) {
	            this.state = 199;
	            localctx.c_named_parameters = this.call_named_parameters();

	        }
	        this.state = 202;
	        this.nls();
	        this.state = 203;
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
	    this.enterRule(localctx, 28, DiiaParser.RULE_call_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.call_parameter();
	        this.state = 210;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 206;
	            this.match(DiiaParser.COMMA);
	            this.state = 207;
	            this.call_parameter();
	            this.state = 212;
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
	    this.enterRule(localctx, 30, DiiaParser.RULE_call_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.nls();
	        this.state = 214;
	        localctx.cp_value = this.atom();
	        this.state = 215;
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
	    this.enterRule(localctx, 32, DiiaParser.RULE_call_named_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.call_named_parameter();
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 218;
	            this.match(DiiaParser.COMMA);
	            this.state = 219;
	            this.call_named_parameter();
	            this.state = 224;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_call_named_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.nls();
	        this.state = 226;
	        localctx.cnp_name = this.identifier();
	        this.state = 227;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 228;
	        localctx.cnp_value = this.atom();
	        this.state = 229;
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
	    this.enterRule(localctx, 36, DiiaParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        localctx.a_chain = this.identifiers_chain();
	        this.state = 232;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 233;
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
	    this.enterRule(localctx, 38, DiiaParser.RULE_assign_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
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
	    this.enterRule(localctx, 40, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.body_line();
	        this.state = 243;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 238;
	                this.nl();
	                this.state = 239;
	                this.body_line(); 
	            }
	            this.state = 245;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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
	    this.enterRule(localctx, 42, DiiaParser.RULE_body_line);
	    try {
	        this.state = 253;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            this.if_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 248;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 249;
	            this.chain();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 250;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 251;
	            this.nls();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 252;
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
	    this.enterRule(localctx, 44, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(DiiaParser.RETURN);
	        this.state = 256;
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
	    this.enterRule(localctx, 46, DiiaParser.RULE_lambda);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 259;
	            localctx.l_parameters = this.diia_parameters();
	        }

	        this.state = 262;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 263;
	        this.match(DiiaParser.COLON);
	        this.state = 264;
	        localctx.l_body = this.atom();
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
	    this.enterRule(localctx, 48, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 266;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 269;
	        this.match(DiiaParser.DEF);
	        this.state = 271;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        if(la_===1) {
	            this.state = 270;
	            localctx.d_structure = this.diia_structure();

	        }
	        this.state = 273;
	        localctx.d_name = this.identifier();
	        this.state = 274;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 275;
	        this.nls();
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 276;
	            localctx.d_parameters = this.diia_parameters();
	        }

	        this.state = 279;
	        this.nls();
	        this.state = 281;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 282;
	        this.nl();
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1612766216) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & 19) !== 0)) {
	            this.state = 283;
	            localctx.d_body = this.body();
	            this.state = 284;
	            this.nl();
	        }

	        this.state = 288;
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_diia_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.diia_parameter();
	        this.state = 298;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 291;
	                this.nls();
	                this.state = 292;
	                this.match(DiiaParser.COMMA);
	                this.state = 293;
	                this.nls();
	                this.state = 294;
	                this.diia_parameter(); 
	            }
	            this.state = 300;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
	    this.enterRule(localctx, 52, DiiaParser.RULE_diia_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        localctx.dp_name = this.identifier();
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 302;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 303;
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
	    this.enterRule(localctx, 54, DiiaParser.RULE_diia_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        localctx.ds_name = this.identifier();
	        this.state = 307;
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
	    this.enterRule(localctx, 56, DiiaParser.RULE_test);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 309;
	            localctx.t_left = this.test_part();
	            this.state = 310;
	            localctx.t_op = this.test_op();
	            this.state = 311;
	            localctx.t_right = this.test_part();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 313;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 314;
	            this.test_expr(0);
	            this.state = 315;
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
	    this.enterRule(localctx, 58, DiiaParser.RULE_test_part);
	    try {
	        this.state = 326;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 320;
	            this.chain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 321;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 322;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 323;
	            this.test_part();
	            this.state = 324;
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
	    this.enterRule(localctx, 60, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
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


	test_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Test_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 62;
	    this.enterRecursionRule(localctx, 62, DiiaParser.RULE_test_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        localctx.te_test = this.test();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 339;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Test_exprContext(this, _parentctx, _parentState);
	                localctx.te_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_test_expr);
	                this.state = 333;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 334;
	                localctx.te_op = this.test_expr_op();
	                this.state = 335;
	                localctx.te_right = this.test_expr(3); 
	            }
	            this.state = 341;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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



	test_expr_op() {
	    let localctx = new Test_expr_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, DiiaParser.RULE_test_expr_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
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
	    this.enterRule(localctx, 66, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(DiiaParser.IF);
	        this.state = 345;
	        localctx.i_expr = this.atom();
	        this.state = 346;
	        this.nl();
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1612766216) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & 19) !== 0)) {
	            this.state = 347;
	            localctx.i_body = this.body();
	            this.state = 348;
	            this.nl();
	        }

	        this.state = 356;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 352;
	            this.match(DiiaParser.ELSE);
	            this.state = 353;
	            localctx.ielse_body = this.body();
	            this.state = 354;
	            this.nl();
	        }

	        this.state = 358;
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



	each() {
	    let localctx = new EachContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(DiiaParser.EACH);
	        this.state = 361;
	        localctx.e_name = this.identifier();
	        this.state = 362;
	        this.match(DiiaParser.TAKING);
	        this.state = 363;
	        localctx.e_iterator = this.atom();
	        this.state = 364;
	        this.nl();
	        this.state = 368;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1612766216) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & 19) !== 0)) {
	            this.state = 365;
	            localctx.e_body = this.body();
	            this.state = 366;
	            this.nl();
	        }

	        this.state = 370;
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
	    this.enterRule(localctx, 70, DiiaParser.RULE_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 373;
	        localctx.s_name = this.identifier();
	        this.state = 374;
	        this.nl();
	        this.state = 375;
	        this.nls();
	        this.state = 379;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 376;
	            localctx.s_parameters = this.structure_parameters();
	            this.state = 377;
	            this.nl();

	        }
	        this.state = 381;
	        this.nls();
	        this.state = 382;
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
	    this.enterRule(localctx, 72, DiiaParser.RULE_structure_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.structure_parameter();
	        this.state = 390;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 385;
	                this.nl();
	                this.state = 386;
	                this.structure_parameter(); 
	            }
	            this.state = 392;
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
	    this.enterRule(localctx, 74, DiiaParser.RULE_structure_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.nls();
	        this.state = 394;
	        localctx.sp_name = this.identifier();
	        this.state = 397;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 395;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 396;
	            localctx.sp_value = this.atom();
	        }

	        this.state = 399;
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



	trycat() {
	    let localctx = new TrycatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, DiiaParser.RULE_trycat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.match(DiiaParser.TRY);
	        this.state = 402;
	        this.nl();
	        this.state = 403;
	        localctx.t_body = this.body();
	        this.state = 404;
	        this.nl();
	        this.state = 405;
	        this.match(DiiaParser.CATCH);
	        this.state = 406;
	        localctx.tc_name = this.identifier();
	        this.state = 410;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        if(la_===1) {
	            this.state = 407;
	            localctx.tc_body = this.body();
	            this.state = 408;
	            this.nl();

	        }
	        this.state = 412;
	        this.nls();
	        this.state = 413;
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
DiiaParser.TRY = 25;
DiiaParser.CATCH = 26;
DiiaParser.ELSE = 27;
DiiaParser.SKIP_SPACES = 28;
DiiaParser.NL = 29;
DiiaParser.OPEN_PAREN = 30;
DiiaParser.CLOSE_PAREN = 31;
DiiaParser.OPEN_ARRAY = 32;
DiiaParser.CLOSE_ARRAY = 33;
DiiaParser.COMMA = 34;
DiiaParser.ASSIGN = 35;
DiiaParser.PLUS = 36;
DiiaParser.MINUS = 37;
DiiaParser.MUL = 38;
DiiaParser.DIV = 39;
DiiaParser.COLON = 40;
DiiaParser.DOT = 41;
DiiaParser.NOT = 42;
DiiaParser.ID = 43;
DiiaParser.NUMBER = 44;
DiiaParser.INTEGER = 45;
DiiaParser.FLOAT = 46;
DiiaParser.STRING = 47;

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
DiiaParser.RULE_call = 13;
DiiaParser.RULE_call_parameters = 14;
DiiaParser.RULE_call_parameter = 15;
DiiaParser.RULE_call_named_parameters = 16;
DiiaParser.RULE_call_named_parameter = 17;
DiiaParser.RULE_assign = 18;
DiiaParser.RULE_assign_value = 19;
DiiaParser.RULE_body = 20;
DiiaParser.RULE_body_line = 21;
DiiaParser.RULE_return_body_line = 22;
DiiaParser.RULE_lambda = 23;
DiiaParser.RULE_diia = 24;
DiiaParser.RULE_diia_parameters = 25;
DiiaParser.RULE_diia_parameter = 26;
DiiaParser.RULE_diia_structure = 27;
DiiaParser.RULE_test = 28;
DiiaParser.RULE_test_part = 29;
DiiaParser.RULE_test_op = 30;
DiiaParser.RULE_test_expr = 31;
DiiaParser.RULE_test_expr_op = 32;
DiiaParser.RULE_if = 33;
DiiaParser.RULE_each = 34;
DiiaParser.RULE_structure = 35;
DiiaParser.RULE_structure_parameters = 36;
DiiaParser.RULE_structure_parameter = 37;
DiiaParser.RULE_trycat = 38;

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

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
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
        this.a_op_muldiv = null; // Token
        this.a_right = null; // ArithmeticContext
        this.a_op_addsub = null; // Token
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

	MUL() {
	    return this.getToken(DiiaParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(DiiaParser.DIV, 0);
	};

	PLUS() {
	    return this.getToken(DiiaParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(DiiaParser.MINUS, 0);
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

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
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
        this.l_body = null; // AtomContext
    }

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
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
        this.t_left = null; // Test_partContext
        this.t_op = null; // Test_opContext
        this.t_right = null; // Test_partContext
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
        this.te_left = null; // Test_exprContext
        this.te_test = null; // TestContext
        this.te_op = null; // Test_expr_opContext
        this.te_right = null; // Test_exprContext
    }

	test() {
	    return this.getTypedRuleContext(TestContext,0);
	};

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

	test_expr_op() {
	    return this.getTypedRuleContext(Test_expr_opContext,0);
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
        this.i_expr = null; // AtomContext
        this.i_body = null; // BodyContext
        this.ielse_body = null; // BodyContext
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

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	ELSE() {
	    return this.getToken(DiiaParser.ELSE, 0);
	};

	body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyContext);
	    } else {
	        return this.getTypedRuleContext(BodyContext,i);
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



class TrycatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_trycat;
        this.t_body = null; // BodyContext
        this.tc_name = null; // IdentifierContext
        this.tc_body = null; // BodyContext
    }

	TRY() {
	    return this.getToken(DiiaParser.TRY, 0);
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

	CATCH() {
	    return this.getToken(DiiaParser.CATCH, 0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BodyContext);
	    } else {
	        return this.getTypedRuleContext(BodyContext,i);
	    }
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTrycat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTrycat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTrycat(this);
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
DiiaParser.Test_partContext = Test_partContext; 
DiiaParser.Test_opContext = Test_opContext; 
DiiaParser.Test_exprContext = Test_exprContext; 
DiiaParser.Test_expr_opContext = Test_expr_opContext; 
DiiaParser.IfContext = IfContext; 
DiiaParser.EachContext = EachContext; 
DiiaParser.StructureContext = StructureContext; 
DiiaParser.Structure_parametersContext = Structure_parametersContext; 
DiiaParser.Structure_parameterContext = Structure_parameterContext; 
DiiaParser.TrycatContext = TrycatContext; 
