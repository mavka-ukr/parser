// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,55,460,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,1,0,1,0,1,1,1,1,1,1,5,1,
71,8,1,10,1,12,1,74,9,1,1,1,1,1,1,1,1,1,5,1,80,8,1,10,1,12,1,83,9,1,1,1,
1,1,1,1,5,1,88,8,1,10,1,12,1,91,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
3,2,102,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,110,8,3,1,3,1,3,1,3,1,4,1,4,1,4,
1,4,3,4,119,8,4,1,4,1,4,1,4,1,4,1,4,3,4,126,8,4,1,4,1,4,1,5,1,5,1,5,1,5,
5,5,134,8,5,10,5,12,5,137,9,5,1,6,3,6,140,8,6,1,6,1,6,1,6,1,6,3,6,146,8,
6,1,6,1,6,1,6,1,6,3,6,152,8,6,1,6,1,6,1,6,1,6,1,6,3,6,159,8,6,1,6,1,6,1,
6,1,6,3,6,165,8,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,176,8,7,1,7,1,
7,1,7,1,7,3,7,182,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,194,8,
8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,204,8,9,1,9,1,9,1,10,1,10,1,10,1,10,
1,10,1,10,3,10,214,8,10,1,10,1,10,1,10,3,10,219,8,10,1,10,1,10,1,11,1,11,
1,11,1,11,3,11,227,8,11,1,12,1,12,1,12,1,12,3,12,233,8,12,1,13,1,13,1,13,
1,13,3,13,239,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,248,8,13,1,13,
5,13,251,8,13,10,13,12,13,254,9,13,1,14,1,14,1,14,1,14,3,14,260,8,14,1,14,
1,14,3,14,264,8,14,1,14,1,14,1,14,3,14,269,8,14,1,14,1,14,1,14,1,14,3,14,
275,8,14,1,14,1,14,1,14,1,14,1,14,3,14,282,8,14,1,14,1,14,1,14,1,14,3,14,
288,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,298,8,14,1,14,1,14,
1,14,3,14,303,8,14,3,14,305,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,318,8,14,1,14,1,14,1,14,1,14,3,14,324,8,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,352,8,14,10,14,12,14,
355,9,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,365,8,16,10,16,12,
16,368,9,16,1,17,1,17,1,17,5,17,373,8,17,10,17,12,17,376,9,17,1,17,3,17,
379,8,17,1,18,1,18,1,18,1,18,1,19,1,19,1,19,5,19,388,8,19,10,19,12,19,391,
9,19,1,19,3,19,394,8,19,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,
1,21,1,21,5,21,408,8,21,10,21,12,21,411,9,21,1,22,1,22,3,22,415,8,22,1,22,
1,22,3,22,419,8,22,1,23,1,23,1,23,1,23,5,23,425,8,23,10,23,12,23,428,9,23,
1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,439,8,24,1,25,1,25,1,25,
1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,5,31,455,8,31,10,
31,12,31,458,9,31,1,31,0,3,26,28,32,32,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,0,4,1,0,46,47,1,
0,44,45,1,0,19,20,3,0,5,8,16,16,28,35,502,0,64,1,0,0,0,2,72,1,0,0,0,4,101,
1,0,0,0,6,103,1,0,0,0,8,114,1,0,0,0,10,129,1,0,0,0,12,139,1,0,0,0,14,169,
1,0,0,0,16,185,1,0,0,0,18,197,1,0,0,0,20,207,1,0,0,0,22,222,1,0,0,0,24,228,
1,0,0,0,26,238,1,0,0,0,28,323,1,0,0,0,30,356,1,0,0,0,32,358,1,0,0,0,34,369,
1,0,0,0,36,380,1,0,0,0,38,384,1,0,0,0,40,395,1,0,0,0,42,401,1,0,0,0,44,412,
1,0,0,0,46,420,1,0,0,0,48,438,1,0,0,0,50,440,1,0,0,0,52,443,1,0,0,0,54,445,
1,0,0,0,56,447,1,0,0,0,58,449,1,0,0,0,60,451,1,0,0,0,62,456,1,0,0,0,64,65,
3,2,1,0,65,66,5,0,0,1,66,1,1,0,0,0,67,68,3,22,11,0,68,69,3,60,30,0,69,71,
1,0,0,0,70,67,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,75,1,
0,0,0,74,72,1,0,0,0,75,81,3,4,2,0,76,77,3,60,30,0,77,78,3,4,2,0,78,80,1,
0,0,0,79,76,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,89,1,0,
0,0,83,81,1,0,0,0,84,85,3,60,30,0,85,86,3,24,12,0,86,88,1,0,0,0,87,84,1,
0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,3,1,0,0,0,91,89,1,0,0,
0,92,102,3,6,3,0,93,102,3,8,4,0,94,102,3,12,6,0,95,102,3,14,7,0,96,102,3,
16,8,0,97,102,3,18,9,0,98,102,3,20,10,0,99,102,3,28,14,0,100,102,3,62,31,
0,101,92,1,0,0,0,101,93,1,0,0,0,101,94,1,0,0,0,101,95,1,0,0,0,101,96,1,0,
0,0,101,97,1,0,0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,5,1,
0,0,0,103,104,5,26,0,0,104,105,3,30,15,0,105,109,3,60,30,0,106,107,3,2,1,
0,107,108,3,60,30,0,108,110,1,0,0,0,109,106,1,0,0,0,109,110,1,0,0,0,110,
111,1,0,0,0,111,112,3,62,31,0,112,113,5,1,0,0,113,7,1,0,0,0,114,115,5,3,
0,0,115,118,3,30,15,0,116,117,5,16,0,0,117,119,3,32,16,0,118,116,1,0,0,0,
118,119,1,0,0,0,119,120,1,0,0,0,120,121,3,60,30,0,121,125,3,62,31,0,122,
123,3,10,5,0,123,124,3,60,30,0,124,126,1,0,0,0,125,122,1,0,0,0,125,126,1,
0,0,0,126,127,1,0,0,0,127,128,5,1,0,0,128,9,1,0,0,0,129,135,3,44,22,0,130,
131,3,60,30,0,131,132,3,44,22,0,132,134,1,0,0,0,133,130,1,0,0,0,134,137,
1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,136,11,1,0,0,0,137,135,1,0,0,0,138,
140,5,18,0,0,139,138,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,141,145,5,2,
0,0,142,143,3,30,15,0,143,144,5,49,0,0,144,146,1,0,0,0,145,142,1,0,0,0,145,
146,1,0,0,0,146,147,1,0,0,0,147,148,3,30,15,0,148,149,5,38,0,0,149,151,3,
62,31,0,150,152,3,42,21,0,151,150,1,0,0,0,151,152,1,0,0,0,152,153,1,0,0,
0,153,154,3,62,31,0,154,155,1,0,0,0,155,156,5,39,0,0,156,158,3,62,31,0,157,
159,3,30,15,0,158,157,1,0,0,0,158,159,1,0,0,0,159,160,1,0,0,0,160,164,3,
60,30,0,161,162,3,46,23,0,162,163,3,60,30,0,163,165,1,0,0,0,164,161,1,0,
0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,167,3,62,31,0,167,168,5,1,0,0,168,
13,1,0,0,0,169,170,5,10,0,0,170,171,3,28,14,0,171,175,3,60,30,0,172,173,
3,46,23,0,173,174,3,60,30,0,174,176,1,0,0,0,175,172,1,0,0,0,175,176,1,0,
0,0,176,181,1,0,0,0,177,178,5,23,0,0,178,179,3,46,23,0,179,180,3,60,30,0,
180,182,1,0,0,0,181,177,1,0,0,0,181,182,1,0,0,0,182,183,1,0,0,0,183,184,
5,1,0,0,184,15,1,0,0,0,185,186,5,4,0,0,186,187,3,28,14,0,187,188,5,15,0,
0,188,189,3,30,15,0,189,193,3,60,30,0,190,191,3,46,23,0,191,192,3,60,30,
0,192,194,1,0,0,0,193,190,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,196,
5,1,0,0,196,17,1,0,0,0,197,198,5,25,0,0,198,199,3,28,14,0,199,203,3,60,30,
0,200,201,3,46,23,0,201,202,3,60,30,0,202,204,1,0,0,0,203,200,1,0,0,0,203,
204,1,0,0,0,204,205,1,0,0,0,205,206,5,1,0,0,206,19,1,0,0,0,207,208,5,21,
0,0,208,209,3,60,30,0,209,210,3,46,23,0,210,211,3,60,30,0,211,213,5,22,0,
0,212,214,3,30,15,0,213,212,1,0,0,0,213,214,1,0,0,0,214,218,1,0,0,0,215,
216,3,46,23,0,216,217,3,60,30,0,217,219,1,0,0,0,218,215,1,0,0,0,218,219,
1,0,0,0,219,220,1,0,0,0,220,221,5,1,0,0,221,21,1,0,0,0,222,223,5,12,0,0,
223,226,3,32,16,0,224,225,5,15,0,0,225,227,3,30,15,0,226,224,1,0,0,0,226,
227,1,0,0,0,227,23,1,0,0,0,228,229,5,13,0,0,229,232,3,30,15,0,230,231,5,
15,0,0,231,233,3,30,15,0,232,230,1,0,0,0,232,233,1,0,0,0,233,25,1,0,0,0,
234,235,6,13,-1,0,235,239,5,52,0,0,236,239,5,55,0,0,237,239,3,30,15,0,238,
234,1,0,0,0,238,236,1,0,0,0,238,237,1,0,0,0,239,252,1,0,0,0,240,241,10,2,
0,0,241,242,5,49,0,0,242,251,3,26,13,3,243,244,10,1,0,0,244,247,5,38,0,0,
245,248,3,34,17,0,246,248,3,38,19,0,247,245,1,0,0,0,247,246,1,0,0,0,247,
248,1,0,0,0,248,249,1,0,0,0,249,251,5,39,0,0,250,240,1,0,0,0,250,243,1,0,
0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,27,1,0,0,0,254,252,
1,0,0,0,255,256,6,14,-1,0,256,324,3,26,13,0,257,259,5,38,0,0,258,260,3,42,
21,0,259,258,1,0,0,0,259,260,1,0,0,0,260,261,1,0,0,0,261,263,5,39,0,0,262,
264,3,30,15,0,263,262,1,0,0,0,263,264,1,0,0,0,264,265,1,0,0,0,265,266,5,
48,0,0,266,324,3,28,14,12,267,269,5,18,0,0,268,267,1,0,0,0,268,269,1,0,0,
0,269,270,1,0,0,0,270,271,5,2,0,0,271,272,5,38,0,0,272,274,3,62,31,0,273,
275,3,42,21,0,274,273,1,0,0,0,274,275,1,0,0,0,275,276,1,0,0,0,276,277,3,
62,31,0,277,278,1,0,0,0,278,279,5,39,0,0,279,281,3,62,31,0,280,282,3,30,
15,0,281,280,1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,287,3,60,30,0,284,
285,3,46,23,0,285,286,3,60,30,0,286,288,1,0,0,0,287,284,1,0,0,0,287,288,
1,0,0,0,288,289,1,0,0,0,289,290,3,62,31,0,290,291,5,1,0,0,291,324,1,0,0,
0,292,293,5,38,0,0,293,294,3,28,14,0,294,295,5,39,0,0,295,324,1,0,0,0,296,
298,5,11,0,0,297,296,1,0,0,0,297,298,1,0,0,0,298,304,1,0,0,0,299,305,3,32,
16,0,300,302,3,30,15,0,301,303,3,30,15,0,302,301,1,0,0,0,302,303,1,0,0,0,
303,305,1,0,0,0,304,299,1,0,0,0,304,300,1,0,0,0,305,306,1,0,0,0,306,307,
5,43,0,0,307,308,3,28,14,4,308,324,1,0,0,0,309,310,5,24,0,0,310,324,3,28,
14,3,311,312,5,38,0,0,312,313,3,28,14,0,313,314,5,39,0,0,314,317,5,38,0,
0,315,318,3,34,17,0,316,318,3,38,19,0,317,315,1,0,0,0,317,316,1,0,0,0,317,
318,1,0,0,0,318,319,1,0,0,0,319,320,5,39,0,0,320,324,1,0,0,0,321,322,5,11,
0,0,322,324,3,28,14,1,323,255,1,0,0,0,323,257,1,0,0,0,323,268,1,0,0,0,323,
292,1,0,0,0,323,297,1,0,0,0,323,309,1,0,0,0,323,311,1,0,0,0,323,321,1,0,
0,0,324,353,1,0,0,0,325,326,10,11,0,0,326,327,3,52,26,0,327,328,3,28,14,
12,328,352,1,0,0,0,329,330,10,10,0,0,330,331,3,54,27,0,331,332,3,28,14,11,
332,352,1,0,0,0,333,334,10,9,0,0,334,335,3,62,31,0,335,336,5,27,0,0,336,
337,3,62,31,0,337,338,3,28,14,0,338,339,3,62,31,0,339,340,5,48,0,0,340,341,
3,62,31,0,341,342,3,28,14,10,342,352,1,0,0,0,343,344,10,8,0,0,344,345,3,
56,28,0,345,346,3,28,14,8,346,352,1,0,0,0,347,348,10,7,0,0,348,349,3,58,
29,0,349,350,3,28,14,8,350,352,1,0,0,0,351,325,1,0,0,0,351,329,1,0,0,0,351,
333,1,0,0,0,351,343,1,0,0,0,351,347,1,0,0,0,352,355,1,0,0,0,353,351,1,0,
0,0,353,354,1,0,0,0,354,29,1,0,0,0,355,353,1,0,0,0,356,357,5,51,0,0,357,
31,1,0,0,0,358,359,6,16,-1,0,359,360,3,30,15,0,360,366,1,0,0,0,361,362,10,
1,0,0,362,363,5,49,0,0,363,365,3,32,16,2,364,361,1,0,0,0,365,368,1,0,0,0,
366,364,1,0,0,0,366,367,1,0,0,0,367,33,1,0,0,0,368,366,1,0,0,0,369,374,3,
36,18,0,370,371,5,42,0,0,371,373,3,36,18,0,372,370,1,0,0,0,373,376,1,0,0,
0,374,372,1,0,0,0,374,375,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,0,377,379,
5,42,0,0,378,377,1,0,0,0,378,379,1,0,0,0,379,35,1,0,0,0,380,381,3,62,31,
0,381,382,3,28,14,0,382,383,3,62,31,0,383,37,1,0,0,0,384,389,3,40,20,0,385,
386,5,42,0,0,386,388,3,40,20,0,387,385,1,0,0,0,388,391,1,0,0,0,389,387,1,
0,0,0,389,390,1,0,0,0,390,393,1,0,0,0,391,389,1,0,0,0,392,394,5,42,0,0,393,
392,1,0,0,0,393,394,1,0,0,0,394,39,1,0,0,0,395,396,3,62,31,0,396,397,3,30,
15,0,397,398,5,43,0,0,398,399,3,28,14,0,399,400,3,62,31,0,400,41,1,0,0,0,
401,409,3,44,22,0,402,403,3,62,31,0,403,404,5,42,0,0,404,405,3,62,31,0,405,
406,3,44,22,0,406,408,1,0,0,0,407,402,1,0,0,0,408,411,1,0,0,0,409,407,1,
0,0,0,409,410,1,0,0,0,410,43,1,0,0,0,411,409,1,0,0,0,412,414,3,30,15,0,413,
415,3,30,15,0,414,413,1,0,0,0,414,415,1,0,0,0,415,418,1,0,0,0,416,417,5,
43,0,0,417,419,3,28,14,0,418,416,1,0,0,0,418,419,1,0,0,0,419,45,1,0,0,0,
420,426,3,48,24,0,421,422,3,60,30,0,422,423,3,48,24,0,423,425,1,0,0,0,424,
421,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,47,1,0,0,
0,428,426,1,0,0,0,429,439,3,8,4,0,430,439,3,12,6,0,431,439,3,14,7,0,432,
439,3,16,8,0,433,439,3,18,9,0,434,439,3,20,10,0,435,439,3,28,14,0,436,439,
3,50,25,0,437,439,3,62,31,0,438,429,1,0,0,0,438,430,1,0,0,0,438,431,1,0,
0,0,438,432,1,0,0,0,438,433,1,0,0,0,438,434,1,0,0,0,438,435,1,0,0,0,438,
436,1,0,0,0,438,437,1,0,0,0,439,49,1,0,0,0,440,441,5,17,0,0,441,442,3,48,
24,0,442,51,1,0,0,0,443,444,7,0,0,0,444,53,1,0,0,0,445,446,7,1,0,0,446,55,
1,0,0,0,447,448,7,2,0,0,448,57,1,0,0,0,449,450,7,3,0,0,450,59,1,0,0,0,451,
452,5,37,0,0,452,61,1,0,0,0,453,455,3,60,30,0,454,453,1,0,0,0,455,458,1,
0,0,0,456,454,1,0,0,0,456,457,1,0,0,0,457,63,1,0,0,0,458,456,1,0,0,0,49,
72,81,89,101,109,118,125,135,139,145,151,158,164,175,181,193,203,213,218,
226,232,238,247,250,252,259,263,268,274,281,287,297,302,304,317,323,351,
353,366,374,378,389,393,409,414,418,426,438,456];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DiiaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'\\u043A\\u0456\\u043D\\u0435\\u0446\\u044C'", 
                            "'\\u0434\\u0456\\u044F'", "'\\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430'", 
                            "'\\u043F\\u0435\\u0440\\u0435\\u0431\\u0440\\u0430\\u0442\\u0438'", 
                            "'=='", "'!='", "'>='", "'<='", "'\\u0434\\u043B\\u044F'", 
                            "'\\u044F\\u043A\\u0449\\u043E'", "'\\u0447\\u0435\\u043A\\u0430\\u0442\\u0438'", 
                            "'\\u0432\\u0437\\u044F\\u0442\\u0438'", "'\\u0434\\u0430\\u0442\\u0438'", 
                            "'\\u043F\\u0430\\u043A'", "'\\u044F\\u043A'", 
                            "'\\u0454'", "'\\u0432\\u0435\\u0440\\u043D\\u0443\\u0442\\u0438'", 
                            "'\\u0442\\u0440\\u0438\\u0432\\u0430\\u043B\\u0430'", 
                            "'\\u0456'", "'\\u0430\\u0431\\u043E'", "'\\u0441\\u043F\\u0440\\u043E\\u0431\\u0443\\u0432\\u0430\\u0442\\u0438'", 
                            "'\\u0437\\u043B\\u043E\\u0432\\u0438\\u0442\\u0438'", 
                            "'\\u0456\\u043D\\u0430\\u043A\\u0448\\u0435'", 
                            "'\\u0432\\u043F\\u0430\\u0441\\u0442\\u0438'", 
                            "'\\u043F\\u043E\\u043A\\u0438'", "'\\u043C\\u043E\\u0434\\u0443\\u043B\\u044C'", 
                            "'?'", "'\\u0440\\u0456\\u0432\\u043D\\u043E'", 
                            "'\\u0431\\u0456\\u043B\\u044C\\u0448\\u0435'", 
                            "'\\u043C\\u0435\\u043D\\u0448\\u0435'", "'\\u043D\\u0435 \\u0431\\u0456\\u043B\\u044C\\u0448\\u0435'", 
                            "'\\u043D\\u0435 \\u043C\\u0435\\u043D\\u0448\\u0435'", 
                            "'\\u043D\\u0435 \\u0440\\u0456\\u0432\\u043D\\u043E'", 
                            "'\\u043D\\u0435 \\u0454'", "'\\u043D\\u0435'", 
                            null, null, "'('", "')'", "'['", "']'", "','", 
                            "'='", "'+'", "'-'", "'*'", "'/'", "':'", "'.'", 
                            "'!'" ];
    static symbolicNames = [ null, "END", "DEF", "STRUCTURE", "TAKING", 
                             "EQ", "NOT_EQ", "GREATER", "SMALLER", "FOR", 
                             "IF", "WAIT", "TAKE", "GIVE", "PAK", "AS", 
                             "IS", "RETURN", "ASYNC", "AND", "OR", "TRY", 
                             "CATCH", "ELSE", "THROW", "WHILE", "MODULE", 
                             "TERNARY", "EQ_WORD", "GR_WORD", "SM_WORD", 
                             "NOT_GR_WORD", "NOT_SM_WORD", "NOT_EQ_WORD", 
                             "NOT_IS_WORD", "NOT_WORD", "SKIP_SPACES", "NL", 
                             "OPEN_PAREN", "CLOSE_PAREN", "OPEN_ARRAY", 
                             "CLOSE_ARRAY", "COMMA", "ASSIGN", "PLUS", "MINUS", 
                             "MUL", "DIV", "COLON", "DOT", "NOT", "ID", 
                             "NUMBER", "INTEGER", "FLOAT", "STRING" ];
    static ruleNames = [ "file", "program", "program_element", "module", 
                         "structure", "structure_params", "diia", "if", 
                         "each", "while", "try", "take", "give", "value", 
                         "expr", "identifier", "identifiers_chain", "args", 
                         "arg", "named_args", "named_arg", "params", "param", 
                         "body", "body_element", "return_body_line", "arithmetic_op_mul", 
                         "arithmetic_op_add", "test_op", "comparison_op", 
                         "nl", "nls" ];

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
    	case 13:
    	    		return this.value_sempred(localctx, predIndex);
    	case 14:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 16:
    	    		return this.identifiers_chain_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 11);
    		case 3:
    			return this.precpred(this._ctx, 10);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		case 5:
    			return this.precpred(this._ctx, 8);
    		case 6:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    identifiers_chain_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 7:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	file() {
	    let localctx = new FileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DiiaParser.RULE_file);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        localctx.f_program = this.program();
	        this.state = 65;
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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DiiaParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12) {
	            this.state = 67;
	            this.take();
	            this.state = 68;
	            this.nl();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75;
	        this.program_element();
	        this.state = 81;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 76;
	                this.nl();
	                this.state = 77;
	                this.program_element(); 
	            }
	            this.state = 83;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
	        }

	        this.state = 89;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 84;
	                this.nl();
	                this.state = 85;
	                this.give(); 
	            }
	            this.state = 91;
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



	program_element() {
	    let localctx = new Program_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DiiaParser.RULE_program_element);
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.module();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.structure();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 94;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 95;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 96;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 97;
	            this.while_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 98;
	            this.try_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 99;
	            this.expr(0);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 100;
	            this.nls();
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



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DiiaParser.RULE_module);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(DiiaParser.MODULE);
	        this.state = 104;
	        localctx.m_name = this.identifier();
	        this.state = 105;
	        this.nl();
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 106;
	            localctx.m_program = this.program();
	            this.state = 107;
	            this.nl();

	        }
	        this.state = 111;
	        this.nls();
	        this.state = 112;
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
	    this.enterRule(localctx, 8, DiiaParser.RULE_structure);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 115;
	        localctx.s_name = this.identifier();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 116;
	            this.match(DiiaParser.IS);
	            this.state = 117;
	            localctx.s_parent = this.identifiers_chain(0);
	        }

	        this.state = 120;
	        this.nl();
	        this.state = 121;
	        this.nls();
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===51) {
	            this.state = 122;
	            localctx.s_params = this.structure_params();
	            this.state = 123;
	            this.nl();
	        }

	        this.state = 127;
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



	structure_params() {
	    let localctx = new Structure_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DiiaParser.RULE_structure_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.param();
	        this.state = 135;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 130;
	                this.nl();
	                this.state = 131;
	                this.param(); 
	            }
	            this.state = 137;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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



	diia() {
	    let localctx = new DiiaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 138;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 141;
	        this.match(DiiaParser.DEF);
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 142;
	            localctx.d_structure = this.identifier();
	            this.state = 143;
	            this.match(DiiaParser.DOT);

	        }
	        this.state = 147;
	        localctx.d_name = this.identifier();
	        this.state = 148;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 149;
	        this.nls();
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===51) {
	            this.state = 150;
	            localctx.d_params = this.params();
	        }

	        this.state = 153;
	        this.nls();
	        this.state = 155;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 156;
	        this.nls();
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===51) {
	            this.state = 157;
	            localctx.d_type = this.identifier();
	        }

	        this.state = 160;
	        this.nl();
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 161;
	            localctx.d_body = this.body();
	            this.state = 162;
	            this.nl();

	        }
	        this.state = 166;
	        this.nls();
	        this.state = 167;
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



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(DiiaParser.IF);
	        this.state = 170;
	        localctx.i_value = this.expr(0);
	        this.state = 171;
	        this.nl();
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 311299) !== 0)) {
	            this.state = 172;
	            localctx.i_body = this.body();
	            this.state = 173;
	            this.nl();
	        }

	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 177;
	            this.match(DiiaParser.ELSE);
	            this.state = 178;
	            localctx.i_else_body = this.body();
	            this.state = 179;
	            this.nl();
	        }

	        this.state = 183;
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
	    this.enterRule(localctx, 16, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(DiiaParser.TAKING);
	        this.state = 186;
	        localctx.e_iterator = this.expr(0);
	        this.state = 187;
	        this.match(DiiaParser.AS);
	        this.state = 188;
	        localctx.e_name = this.identifier();
	        this.state = 189;
	        this.nl();
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 311299) !== 0)) {
	            this.state = 190;
	            localctx.e_body = this.body();
	            this.state = 191;
	            this.nl();
	        }

	        this.state = 195;
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



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DiiaParser.RULE_while);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(DiiaParser.WHILE);
	        this.state = 198;
	        localctx.w_value = this.expr(0);
	        this.state = 199;
	        this.nl();
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 311299) !== 0)) {
	            this.state = 200;
	            localctx.w_body = this.body();
	            this.state = 201;
	            this.nl();
	        }

	        this.state = 205;
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



	try_() {
	    let localctx = new TryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DiiaParser.RULE_try);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(DiiaParser.TRY);
	        this.state = 208;
	        this.nl();
	        this.state = 209;
	        localctx.t_body = this.body();
	        this.state = 210;
	        this.nl();
	        this.state = 211;
	        this.match(DiiaParser.CATCH);
	        this.state = 213;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 212;
	            localctx.tc_name = this.identifier();

	        }
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 311299) !== 0)) {
	            this.state = 215;
	            localctx.tc_body = this.body();
	            this.state = 216;
	            this.nl();
	        }

	        this.state = 220;
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



	take() {
	    let localctx = new TakeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DiiaParser.RULE_take);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(DiiaParser.TAKE);
	        this.state = 223;
	        localctx.t_elements_chain = this.identifiers_chain(0);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 224;
	            this.match(DiiaParser.AS);
	            this.state = 225;
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
	    this.enterRule(localctx, 24, DiiaParser.RULE_give);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.match(DiiaParser.GIVE);
	        this.state = 229;
	        localctx.g_name = this.identifier();
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 230;
	            this.match(DiiaParser.AS);
	            this.state = 231;
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


	value(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValueContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, DiiaParser.RULE_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 52:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 235;
	            this.match(DiiaParser.NUMBER);
	            break;
	        case 55:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 236;
	            this.match(DiiaParser.STRING);
	            break;
	        case 51:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 237;
	            this.identifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 252;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 250;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ChainContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 240;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 241;
	                    this.match(DiiaParser.DOT);
	                    this.state = 242;
	                    localctx.c_right = this.value(3);
	                    break;

	                case 2:
	                    localctx = new CallContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 243;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 244;
	                    this.match(DiiaParser.OPEN_PAREN);
	                    this.state = 247;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                    if(la_===1) {
	                        this.state = 245;
	                        localctx.c_args = this.args();

	                    } else if(la_===2) {
	                        this.state = 246;
	                        localctx.c_named_args = this.named_args();

	                    }
	                    this.state = 249;
	                    this.match(DiiaParser.CLOSE_PAREN);
	                    break;

	                } 
	            }
	            this.state = 254;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, DiiaParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 256;
	            this.value(0);
	            break;

	        case 2:
	            localctx = new FunctionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 257;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 259;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 258;
	                localctx.f_params = this.params();
	            }

	            this.state = 261;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 262;
	                localctx.f_type = this.identifier();
	            }

	            this.state = 265;
	            this.match(DiiaParser.COLON);
	            this.state = 266;
	            localctx.f_body = this.expr(12);
	            break;

	        case 3:
	            localctx = new Anonymous_diiaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 267;
	                localctx.d_async = this.match(DiiaParser.ASYNC);
	            }

	            this.state = 270;
	            this.match(DiiaParser.DEF);
	            this.state = 271;
	            this.match(DiiaParser.OPEN_PAREN);

	            this.state = 272;
	            this.nls();
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 273;
	                localctx.d_params = this.params();
	            }

	            this.state = 276;
	            this.nls();
	            this.state = 278;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 279;
	            this.nls();
	            this.state = 281;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 280;
	                localctx.d_type = this.identifier();
	            }

	            this.state = 283;
	            this.nl();
	            this.state = 287;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 284;
	                localctx.d_body = this.body();
	                this.state = 285;
	                this.nl();

	            }
	            this.state = 289;
	            this.nls();
	            this.state = 290;
	            this.match(DiiaParser.END);
	            break;

	        case 4:
	            localctx = new NestedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 292;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 293;
	            localctx.n_value = this.expr(0);
	            this.state = 294;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 297;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11) {
	                this.state = 296;
	                localctx.a_wait = this.match(DiiaParser.WAIT);
	            }

	            this.state = 304;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 299;
	                localctx.a_identifiers_chain = this.identifiers_chain(0);
	                break;

	            case 2:
	                this.state = 300;
	                localctx.a_identifier = this.identifier();
	                this.state = 302;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===51) {
	                    this.state = 301;
	                    localctx.a_type = this.identifier();
	                }

	                break;

	            }
	            this.state = 306;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 307;
	            localctx.a_value = this.expr(4);
	            break;

	        case 6:
	            localctx = new ThrowContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 309;
	            this.match(DiiaParser.THROW);
	            this.state = 310;
	            localctx.t_value = this.expr(3);
	            break;

	        case 7:
	            localctx = new Call_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 311;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 312;
	            localctx.c_value = this.expr(0);
	            this.state = 313;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 314;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 317;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	            if(la_===1) {
	                this.state = 315;
	                localctx.c_args = this.args();

	            } else if(la_===2) {
	                this.state = 316;
	                localctx.c_named_args = this.named_args();

	            }
	            this.state = 319;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 8:
	            localctx = new WaitContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 321;
	            this.match(DiiaParser.WAIT);
	            this.state = 322;
	            localctx.w_value = this.expr(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 351;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Arithmetic_mulContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 325;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 326;
	                    localctx.a_operation = this.arithmetic_op_mul();
	                    this.state = 327;
	                    localctx.a_right = this.expr(12);
	                    break;

	                case 2:
	                    localctx = new Arithmetic_addContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 329;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 330;
	                    localctx.a_operation = this.arithmetic_op_add();
	                    this.state = 331;
	                    localctx.a_right = this.expr(11);
	                    break;

	                case 3:
	                    localctx = new TernaryContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.t_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 333;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 334;
	                    this.nls();
	                    this.state = 335;
	                    this.match(DiiaParser.TERNARY);
	                    this.state = 336;
	                    this.nls();
	                    this.state = 337;
	                    localctx.t_positive = this.expr(0);
	                    this.state = 338;
	                    this.nls();
	                    this.state = 339;
	                    this.match(DiiaParser.COLON);
	                    this.state = 340;
	                    this.nls();
	                    this.state = 341;
	                    localctx.t_negative = this.expr(10);
	                    break;

	                case 4:
	                    localctx = new TestContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.t_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 343;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 344;
	                    localctx.t_operation = this.test_op();
	                    this.state = 345;
	                    localctx.t_right = this.expr(8);
	                    break;

	                case 5:
	                    localctx = new ComparisonContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 347;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 348;
	                    localctx.c_operation = this.comparison_op();
	                    this.state = 349;
	                    localctx.c_right = this.expr(8);
	                    break;

	                } 
	            }
	            this.state = 355;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
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


	identifiers_chain(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Identifiers_chainContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 32;
	    this.enterRecursionRule(localctx, 32, DiiaParser.RULE_identifiers_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
	        localctx.ic_identifier = this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 366;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifiers_chainContext(this, _parentctx, _parentState);
	                localctx.ic_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_identifiers_chain);
	                this.state = 361;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 362;
	                this.match(DiiaParser.DOT);
	                this.state = 363;
	                localctx.ic_right = this.identifiers_chain(2); 
	            }
	            this.state = 368;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DiiaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.arg();
	        this.state = 374;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 370;
	                this.match(DiiaParser.COMMA);
	                this.state = 371;
	                this.arg(); 
	            }
	            this.state = 376;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
	        }

	        this.state = 378;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 377;
	            this.match(DiiaParser.COMMA);
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DiiaParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.nls();
	        this.state = 381;
	        localctx.a_value = this.expr(0);
	        this.state = 382;
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



	named_args() {
	    let localctx = new Named_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DiiaParser.RULE_named_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.named_arg();
	        this.state = 389;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 385;
	                this.match(DiiaParser.COMMA);
	                this.state = 386;
	                this.named_arg(); 
	            }
	            this.state = 391;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	        }

	        this.state = 393;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 392;
	            this.match(DiiaParser.COMMA);
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



	named_arg() {
	    let localctx = new Named_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DiiaParser.RULE_named_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.nls();
	        this.state = 396;
	        localctx.na_name = this.identifier();
	        this.state = 397;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 398;
	        localctx.na_value = this.expr(0);
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



	params() {
	    let localctx = new ParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DiiaParser.RULE_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.param();
	        this.state = 409;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 402;
	                this.nls();
	                this.state = 403;
	                this.match(DiiaParser.COMMA);
	                this.state = 404;
	                this.nls();
	                this.state = 405;
	                this.param(); 
	            }
	            this.state = 411;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DiiaParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        localctx.p_name = this.identifier();
	        this.state = 414;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===51) {
	            this.state = 413;
	            localctx.p_type = this.identifier();
	        }

	        this.state = 418;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 416;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 417;
	            localctx.p_value = this.expr(0);
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 420;
	        this.body_element();
	        this.state = 426;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 421;
	                this.nl();
	                this.state = 422;
	                this.body_element(); 
	            }
	            this.state = 428;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
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



	body_element() {
	    let localctx = new Body_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, DiiaParser.RULE_body_element);
	    try {
	        this.state = 438;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 429;
	            this.structure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 430;
	            this.diia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 431;
	            this.if_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 432;
	            this.each();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 433;
	            this.while_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 434;
	            this.try_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 435;
	            this.expr(0);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 436;
	            this.return_body_line();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 437;
	            this.nls();
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(DiiaParser.RETURN);
	        this.state = 441;
	        localctx.rbl = this.body_element();
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



	arithmetic_op_mul() {
	    let localctx = new Arithmetic_op_mulContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, DiiaParser.RULE_arithmetic_op_mul);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
	        _la = this._input.LA(1);
	        if(!(_la===46 || _la===47)) {
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



	arithmetic_op_add() {
	    let localctx = new Arithmetic_op_addContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, DiiaParser.RULE_arithmetic_op_add);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        _la = this._input.LA(1);
	        if(!(_la===44 || _la===45)) {
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



	test_op() {
	    let localctx = new Test_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
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



	comparison_op() {
	    let localctx = new Comparison_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, DiiaParser.RULE_comparison_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 449;
	        _la = this._input.LA(1);
	        if(!(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & 2139097103) !== 0))) {
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



	nl() {
	    let localctx = new NlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
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
	    this.enterRule(localctx, 62, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 453;
	                this.nl(); 
	            }
	            this.state = 458;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
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


}

DiiaParser.EOF = antlr4.Token.EOF;
DiiaParser.END = 1;
DiiaParser.DEF = 2;
DiiaParser.STRUCTURE = 3;
DiiaParser.TAKING = 4;
DiiaParser.EQ = 5;
DiiaParser.NOT_EQ = 6;
DiiaParser.GREATER = 7;
DiiaParser.SMALLER = 8;
DiiaParser.FOR = 9;
DiiaParser.IF = 10;
DiiaParser.WAIT = 11;
DiiaParser.TAKE = 12;
DiiaParser.GIVE = 13;
DiiaParser.PAK = 14;
DiiaParser.AS = 15;
DiiaParser.IS = 16;
DiiaParser.RETURN = 17;
DiiaParser.ASYNC = 18;
DiiaParser.AND = 19;
DiiaParser.OR = 20;
DiiaParser.TRY = 21;
DiiaParser.CATCH = 22;
DiiaParser.ELSE = 23;
DiiaParser.THROW = 24;
DiiaParser.WHILE = 25;
DiiaParser.MODULE = 26;
DiiaParser.TERNARY = 27;
DiiaParser.EQ_WORD = 28;
DiiaParser.GR_WORD = 29;
DiiaParser.SM_WORD = 30;
DiiaParser.NOT_GR_WORD = 31;
DiiaParser.NOT_SM_WORD = 32;
DiiaParser.NOT_EQ_WORD = 33;
DiiaParser.NOT_IS_WORD = 34;
DiiaParser.NOT_WORD = 35;
DiiaParser.SKIP_SPACES = 36;
DiiaParser.NL = 37;
DiiaParser.OPEN_PAREN = 38;
DiiaParser.CLOSE_PAREN = 39;
DiiaParser.OPEN_ARRAY = 40;
DiiaParser.CLOSE_ARRAY = 41;
DiiaParser.COMMA = 42;
DiiaParser.ASSIGN = 43;
DiiaParser.PLUS = 44;
DiiaParser.MINUS = 45;
DiiaParser.MUL = 46;
DiiaParser.DIV = 47;
DiiaParser.COLON = 48;
DiiaParser.DOT = 49;
DiiaParser.NOT = 50;
DiiaParser.ID = 51;
DiiaParser.NUMBER = 52;
DiiaParser.INTEGER = 53;
DiiaParser.FLOAT = 54;
DiiaParser.STRING = 55;

DiiaParser.RULE_file = 0;
DiiaParser.RULE_program = 1;
DiiaParser.RULE_program_element = 2;
DiiaParser.RULE_module = 3;
DiiaParser.RULE_structure = 4;
DiiaParser.RULE_structure_params = 5;
DiiaParser.RULE_diia = 6;
DiiaParser.RULE_if = 7;
DiiaParser.RULE_each = 8;
DiiaParser.RULE_while = 9;
DiiaParser.RULE_try = 10;
DiiaParser.RULE_take = 11;
DiiaParser.RULE_give = 12;
DiiaParser.RULE_value = 13;
DiiaParser.RULE_expr = 14;
DiiaParser.RULE_identifier = 15;
DiiaParser.RULE_identifiers_chain = 16;
DiiaParser.RULE_args = 17;
DiiaParser.RULE_arg = 18;
DiiaParser.RULE_named_args = 19;
DiiaParser.RULE_named_arg = 20;
DiiaParser.RULE_params = 21;
DiiaParser.RULE_param = 22;
DiiaParser.RULE_body = 23;
DiiaParser.RULE_body_element = 24;
DiiaParser.RULE_return_body_line = 25;
DiiaParser.RULE_arithmetic_op_mul = 26;
DiiaParser.RULE_arithmetic_op_add = 27;
DiiaParser.RULE_test_op = 28;
DiiaParser.RULE_comparison_op = 29;
DiiaParser.RULE_nl = 30;
DiiaParser.RULE_nls = 31;

class FileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_file;
        this.f_program = null; // ProgramContext
    }

	EOF() {
	    return this.getToken(DiiaParser.EOF, 0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitFile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitFile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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

	program_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Program_elementContext);
	    } else {
	        return this.getTypedRuleContext(Program_elementContext,i);
	    }
	};

	take = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TakeContext);
	    } else {
	        return this.getTypedRuleContext(TakeContext,i);
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

	give = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GiveContext);
	    } else {
	        return this.getTypedRuleContext(GiveContext,i);
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



class Program_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_program_element;
    }

	module() {
	    return this.getTypedRuleContext(ModuleContext,0);
	};

	structure() {
	    return this.getTypedRuleContext(StructureContext,0);
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

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	try_() {
	    return this.getTypedRuleContext(TryContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterProgram_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitProgram_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitProgram_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_module;
        this.m_name = null; // IdentifierContext
        this.m_program = null; // ProgramContext
    }

	MODULE() {
	    return this.getToken(DiiaParser.MODULE, 0);
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

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitModule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitModule(this);
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
        this.s_parent = null; // Identifiers_chainContext
        this.s_params = null; // Structure_paramsContext
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

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IS() {
	    return this.getToken(DiiaParser.IS, 0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	structure_params() {
	    return this.getTypedRuleContext(Structure_paramsContext,0);
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



class Structure_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_structure_params;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
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
	        listener.enterStructure_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitStructure_params(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitStructure_params(this);
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
        this.d_structure = null; // IdentifierContext
        this.d_name = null; // IdentifierContext
        this.d_params = null; // ParamsContext
        this.d_type = null; // IdentifierContext
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

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	ASYNC() {
	    return this.getToken(DiiaParser.ASYNC, 0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
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
        this.i_value = null; // ExprContext
        this.i_body = null; // BodyContext
        this.i_else_body = null; // BodyContext
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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
        this.e_iterator = null; // ExprContext
        this.e_name = null; // IdentifierContext
        this.e_body = null; // BodyContext
    }

	TAKING() {
	    return this.getToken(DiiaParser.TAKING, 0);
	};

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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



class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_while;
        this.w_value = null; // ExprContext
        this.w_body = null; // BodyContext
    }

	WHILE() {
	    return this.getToken(DiiaParser.WHILE, 0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterWhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitWhile(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_try;
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
	        listener.enterTry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTry(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTry(this);
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
        this.t_elements_chain = null; // Identifiers_chainContext
        this.t_as = null; // IdentifierContext
    }

	TAKE() {
	    return this.getToken(DiiaParser.TAKE, 0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CallContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.c_value = null; // ValueContext;
        this.c_args = null; // ArgsContext;
        this.c_named_args = null; // Named_argsContext;
        super.copyFrom(ctx);
    }

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	named_args() {
	    return this.getTypedRuleContext(Named_argsContext,0);
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

DiiaParser.CallContext = CallContext;

class NumberContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(DiiaParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNumber(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNumber(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.NumberContext = NumberContext;

class ChainContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.c_left = null; // ValueContext;
        this.c_right = null; // ValueContext;
        super.copyFrom(ctx);
    }

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
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

DiiaParser.ChainContext = ChainContext;

class StringContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.StringContext = StringContext;

class IdContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.IdContext = IdContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Arithmetic_mulContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_left = null; // ExprContext;
        this.a_operation = null; // Arithmetic_op_mulContext;
        this.a_right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	arithmetic_op_mul() {
	    return this.getTypedRuleContext(Arithmetic_op_mulContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArithmetic_mul(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic_mul(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic_mul(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Arithmetic_mulContext = Arithmetic_mulContext;

class WaitContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.w_value = null; // ExprContext;
        super.copyFrom(ctx);
    }

	WAIT() {
	    return this.getToken(DiiaParser.WAIT, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterWait(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitWait(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitWait(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.WaitContext = WaitContext;

class Arithmetic_addContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_left = null; // ExprContext;
        this.a_operation = null; // Arithmetic_op_addContext;
        this.a_right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	arithmetic_op_add() {
	    return this.getTypedRuleContext(Arithmetic_op_addContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArithmetic_add(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic_add(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic_add(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Arithmetic_addContext = Arithmetic_addContext;

class ComparisonContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.c_left = null; // ExprContext;
        this.c_operation = null; // Comparison_opContext;
        this.c_right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	comparison_op() {
	    return this.getTypedRuleContext(Comparison_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitComparison(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitComparison(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.ComparisonContext = ComparisonContext;

class TestContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.t_left = null; // ExprContext;
        this.t_operation = null; // Test_opContext;
        this.t_right = null; // ExprContext;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	test_op() {
	    return this.getTypedRuleContext(Test_opContext,0);
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

DiiaParser.TestContext = TestContext;

class Call_exprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.c_value = null; // ExprContext;
        this.c_args = null; // ArgsContext;
        this.c_named_args = null; // Named_argsContext;
        super.copyFrom(ctx);
    }

	OPEN_PAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.OPEN_PAREN);
	    } else {
	        return this.getToken(DiiaParser.OPEN_PAREN, i);
	    }
	};


	CLOSE_PAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.CLOSE_PAREN);
	    } else {
	        return this.getToken(DiiaParser.CLOSE_PAREN, i);
	    }
	};


	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	named_args() {
	    return this.getTypedRuleContext(Named_argsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterCall_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall_expr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall_expr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Call_exprContext = Call_exprContext;

class SimpleContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterSimple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitSimple(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitSimple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.SimpleContext = SimpleContext;

class NestedContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.n_value = null; // ExprContext;
        super.copyFrom(ctx);
    }

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterNested(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNested(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNested(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.NestedContext = NestedContext;

class Anonymous_diiaContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.d_async = null; // Token;
        this.d_params = null; // ParamsContext;
        this.d_type = null; // IdentifierContext;
        this.d_body = null; // BodyContext;
        super.copyFrom(ctx);
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

	ASYNC() {
	    return this.getToken(DiiaParser.ASYNC, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterAnonymous_diia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitAnonymous_diia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitAnonymous_diia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Anonymous_diiaContext = Anonymous_diiaContext;

class ThrowContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.t_value = null; // ExprContext;
        super.copyFrom(ctx);
    }

	THROW() {
	    return this.getToken(DiiaParser.THROW, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterThrow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitThrow(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitThrow(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.ThrowContext = ThrowContext;

class FunctionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.f_params = null; // ParamsContext;
        this.f_type = null; // IdentifierContext;
        this.f_body = null; // ExprContext;
        super.copyFrom(ctx);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.FunctionContext = FunctionContext;

class TernaryContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.t_value = null; // ExprContext;
        this.t_positive = null; // ExprContext;
        this.t_negative = null; // ExprContext;
        super.copyFrom(ctx);
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

	TERNARY() {
	    return this.getToken(DiiaParser.TERNARY, 0);
	};

	COLON() {
	    return this.getToken(DiiaParser.COLON, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTernary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTernary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTernary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.TernaryContext = TernaryContext;

class AssignContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_wait = null; // Token;
        this.a_identifiers_chain = null; // Identifiers_chainContext;
        this.a_identifier = null; // IdentifierContext;
        this.a_type = null; // IdentifierContext;
        this.a_value = null; // ExprContext;
        super.copyFrom(ctx);
    }

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
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

	WAIT() {
	    return this.getToken(DiiaParser.WAIT, 0);
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

DiiaParser.AssignContext = AssignContext;

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
        this.ic_left = null; // Identifiers_chainContext
        this.ic_identifier = null; // IdentifierContext
        this.ic_right = null; // Identifiers_chainContext
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	identifiers_chain = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Identifiers_chainContext);
	    } else {
	        return this.getTypedRuleContext(Identifiers_chainContext,i);
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



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_args;
    }

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
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
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArgs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArgs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_arg;
        this.a_value = null; // ExprContext
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Named_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_named_args;
    }

	named_arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Named_argContext);
	    } else {
	        return this.getTypedRuleContext(Named_argContext,i);
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
	        listener.enterNamed_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNamed_args(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNamed_args(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Named_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_named_arg;
        this.na_name = null; // IdentifierContext
        this.na_value = null; // ExprContext
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterNamed_arg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNamed_arg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNamed_arg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_params;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
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
	        listener.enterParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitParams(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitParams(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_param;
        this.p_name = null; // IdentifierContext
        this.p_type = null; // IdentifierContext
        this.p_value = null; // ExprContext
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

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitParam(this);
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

	body_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Body_elementContext);
	    } else {
	        return this.getTypedRuleContext(Body_elementContext,i);
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



class Body_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_body_element;
    }

	structure() {
	    return this.getTypedRuleContext(StructureContext,0);
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

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	try_() {
	    return this.getTypedRuleContext(TryContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	return_body_line() {
	    return this.getTypedRuleContext(Return_body_lineContext,0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterBody_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitBody_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitBody_element(this);
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
        this.rbl = null; // Body_elementContext
    }

	RETURN() {
	    return this.getToken(DiiaParser.RETURN, 0);
	};

	body_element() {
	    return this.getTypedRuleContext(Body_elementContext,0);
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



class Arithmetic_op_mulContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_arithmetic_op_mul;
    }

	MUL() {
	    return this.getToken(DiiaParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(DiiaParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArithmetic_op_mul(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic_op_mul(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic_op_mul(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Arithmetic_op_addContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_arithmetic_op_add;
    }

	PLUS() {
	    return this.getToken(DiiaParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(DiiaParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArithmetic_op_add(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic_op_add(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic_op_add(this);
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

	AND() {
	    return this.getToken(DiiaParser.AND, 0);
	};

	OR() {
	    return this.getToken(DiiaParser.OR, 0);
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



class Comparison_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_comparison_op;
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

	EQ_WORD() {
	    return this.getToken(DiiaParser.EQ_WORD, 0);
	};

	GR_WORD() {
	    return this.getToken(DiiaParser.GR_WORD, 0);
	};

	SM_WORD() {
	    return this.getToken(DiiaParser.SM_WORD, 0);
	};

	NOT_GR_WORD() {
	    return this.getToken(DiiaParser.NOT_GR_WORD, 0);
	};

	NOT_SM_WORD() {
	    return this.getToken(DiiaParser.NOT_SM_WORD, 0);
	};

	NOT_EQ_WORD() {
	    return this.getToken(DiiaParser.NOT_EQ_WORD, 0);
	};

	NOT_IS_WORD() {
	    return this.getToken(DiiaParser.NOT_IS_WORD, 0);
	};

	NOT_WORD() {
	    return this.getToken(DiiaParser.NOT_WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterComparison_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitComparison_op(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitComparison_op(this);
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




DiiaParser.FileContext = FileContext; 
DiiaParser.ProgramContext = ProgramContext; 
DiiaParser.Program_elementContext = Program_elementContext; 
DiiaParser.ModuleContext = ModuleContext; 
DiiaParser.StructureContext = StructureContext; 
DiiaParser.Structure_paramsContext = Structure_paramsContext; 
DiiaParser.DiiaContext = DiiaContext; 
DiiaParser.IfContext = IfContext; 
DiiaParser.EachContext = EachContext; 
DiiaParser.WhileContext = WhileContext; 
DiiaParser.TryContext = TryContext; 
DiiaParser.TakeContext = TakeContext; 
DiiaParser.GiveContext = GiveContext; 
DiiaParser.ValueContext = ValueContext; 
DiiaParser.ExprContext = ExprContext; 
DiiaParser.IdentifierContext = IdentifierContext; 
DiiaParser.Identifiers_chainContext = Identifiers_chainContext; 
DiiaParser.ArgsContext = ArgsContext; 
DiiaParser.ArgContext = ArgContext; 
DiiaParser.Named_argsContext = Named_argsContext; 
DiiaParser.Named_argContext = Named_argContext; 
DiiaParser.ParamsContext = ParamsContext; 
DiiaParser.ParamContext = ParamContext; 
DiiaParser.BodyContext = BodyContext; 
DiiaParser.Body_elementContext = Body_elementContext; 
DiiaParser.Return_body_lineContext = Return_body_lineContext; 
DiiaParser.Arithmetic_op_mulContext = Arithmetic_op_mulContext; 
DiiaParser.Arithmetic_op_addContext = Arithmetic_op_addContext; 
DiiaParser.Test_opContext = Test_opContext; 
DiiaParser.Comparison_opContext = Comparison_opContext; 
DiiaParser.NlContext = NlContext; 
DiiaParser.NlsContext = NlsContext; 
