// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,47,477,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,1,
0,1,0,5,0,87,8,0,10,0,12,0,90,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,3,1,104,8,1,1,2,1,2,1,3,5,3,109,8,3,10,3,12,3,112,9,3,1,4,1,4,
1,4,3,4,117,8,4,1,4,1,4,1,4,3,4,122,8,4,1,4,1,4,3,4,126,8,4,1,5,1,5,1,5,
1,5,3,5,132,8,5,1,6,1,6,1,7,1,7,1,7,5,7,139,8,7,10,7,12,7,142,9,7,1,8,1,
8,1,8,1,8,1,8,1,8,5,8,150,8,8,10,8,12,8,153,9,8,1,8,1,8,1,8,1,8,1,8,1,8,
5,8,161,8,8,10,8,12,8,164,9,8,1,8,1,8,3,8,168,8,8,1,9,1,9,3,9,172,8,9,1,
10,1,10,3,10,176,8,10,1,11,1,11,1,11,1,11,1,11,3,11,183,8,11,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,195,8,12,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,3,13,204,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,212,8,13,
10,13,12,13,215,9,13,1,14,1,14,1,14,1,14,1,14,3,14,222,8,14,1,14,1,14,1,
14,1,15,1,15,1,15,5,15,230,8,15,10,15,12,15,233,9,15,1,15,3,15,236,8,15,
1,16,1,16,1,16,1,16,1,17,1,17,1,17,5,17,245,8,17,10,17,12,17,248,9,17,1,
17,3,17,251,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,3,19,260,8,19,1,19,1,
19,1,19,1,19,3,19,266,8,19,1,19,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,21,
5,21,277,8,21,10,21,12,21,280,9,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,
22,289,8,22,1,23,1,23,1,23,1,24,1,24,3,24,296,8,24,1,24,1,24,1,24,1,24,1,
25,3,25,303,8,25,1,25,1,25,3,25,307,8,25,1,25,1,25,1,25,1,25,3,25,313,8,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,322,8,25,1,25,1,25,1,26,1,26,
1,26,1,26,1,26,1,26,5,26,332,8,26,10,26,12,26,335,9,26,1,27,1,27,3,27,339,
8,27,1,27,1,27,3,27,343,8,27,1,28,1,28,1,28,1,29,3,29,349,8,29,1,29,1,29,
1,29,1,29,3,29,355,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,364,8,29,
1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,376,8,30,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,3,31,385,8,31,1,32,1,32,1,33,1,33,1,33,1,33,1,33,
1,33,1,33,5,33,396,8,33,10,33,12,33,399,9,33,1,34,1,34,1,35,1,35,1,35,1,
35,1,35,1,35,3,35,409,8,35,1,35,1,35,1,35,1,35,3,35,415,8,35,1,35,1,35,1,
36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,427,8,36,1,36,1,36,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,3,37,438,8,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,
5,38,447,8,38,10,38,12,38,450,9,38,1,39,1,39,1,39,3,39,455,8,39,1,39,1,39,
3,39,459,8,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,1,40,3,40,
472,8,40,1,40,1,40,1,40,1,40,0,2,26,66,41,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,80,0,4,1,0,38,39,1,0,36,37,2,0,6,9,20,20,1,0,23,24,510,0,82,
1,0,0,0,2,103,1,0,0,0,4,105,1,0,0,0,6,110,1,0,0,0,8,113,1,0,0,0,10,127,1,
0,0,0,12,133,1,0,0,0,14,135,1,0,0,0,16,167,1,0,0,0,18,171,1,0,0,0,20,175,
1,0,0,0,22,182,1,0,0,0,24,194,1,0,0,0,26,203,1,0,0,0,28,216,1,0,0,0,30,226,
1,0,0,0,32,237,1,0,0,0,34,241,1,0,0,0,36,252,1,0,0,0,38,259,1,0,0,0,40,270,
1,0,0,0,42,272,1,0,0,0,44,288,1,0,0,0,46,290,1,0,0,0,48,293,1,0,0,0,50,302,
1,0,0,0,52,325,1,0,0,0,54,336,1,0,0,0,56,344,1,0,0,0,58,348,1,0,0,0,60,375,
1,0,0,0,62,384,1,0,0,0,64,386,1,0,0,0,66,388,1,0,0,0,68,400,1,0,0,0,70,402,
1,0,0,0,72,418,1,0,0,0,74,430,1,0,0,0,76,442,1,0,0,0,78,451,1,0,0,0,80,462,
1,0,0,0,82,88,3,2,1,0,83,84,3,4,2,0,84,85,3,2,1,0,85,87,1,0,0,0,86,83,1,
0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,91,1,0,0,0,90,88,1,0,
0,0,91,92,5,0,0,1,92,1,1,0,0,0,93,104,3,16,8,0,94,104,3,38,19,0,95,104,3,
50,25,0,96,104,3,70,35,0,97,104,3,72,36,0,98,104,3,6,3,0,99,104,3,74,37,
0,100,104,3,8,4,0,101,104,3,10,5,0,102,104,3,24,12,0,103,93,1,0,0,0,103,
94,1,0,0,0,103,95,1,0,0,0,103,96,1,0,0,0,103,97,1,0,0,0,103,98,1,0,0,0,103,
99,1,0,0,0,103,100,1,0,0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,3,1,0,0,0,
105,106,5,29,0,0,106,5,1,0,0,0,107,109,3,4,2,0,108,107,1,0,0,0,109,112,1,
0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,7,1,0,0,0,112,110,1,0,0,0,113,
116,5,16,0,0,114,115,5,18,0,0,115,117,5,40,0,0,116,114,1,0,0,0,116,117,1,
0,0,0,117,118,1,0,0,0,118,121,3,12,6,0,119,120,5,41,0,0,120,122,3,14,7,0,
121,119,1,0,0,0,121,122,1,0,0,0,122,125,1,0,0,0,123,124,5,19,0,0,124,126,
3,12,6,0,125,123,1,0,0,0,125,126,1,0,0,0,126,9,1,0,0,0,127,128,5,17,0,0,
128,131,3,12,6,0,129,130,5,19,0,0,130,132,3,12,6,0,131,129,1,0,0,0,131,132,
1,0,0,0,132,11,1,0,0,0,133,134,5,43,0,0,134,13,1,0,0,0,135,140,3,12,6,0,
136,137,5,41,0,0,137,139,3,12,6,0,138,136,1,0,0,0,139,142,1,0,0,0,140,138,
1,0,0,0,140,141,1,0,0,0,141,15,1,0,0,0,142,140,1,0,0,0,143,151,3,18,9,0,
144,145,3,6,3,0,145,146,5,41,0,0,146,147,3,6,3,0,147,148,3,18,9,0,148,150,
1,0,0,0,149,144,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,152,1,0,0,0,
152,168,1,0,0,0,153,151,1,0,0,0,154,162,3,20,10,0,155,156,3,6,3,0,156,157,
5,41,0,0,157,158,3,6,3,0,158,159,3,18,9,0,159,161,1,0,0,0,160,155,1,0,0,
0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,168,1,0,0,0,164,162,
1,0,0,0,165,166,5,15,0,0,166,168,3,16,8,0,167,143,1,0,0,0,167,154,1,0,0,
0,167,165,1,0,0,0,168,17,1,0,0,0,169,172,3,12,6,0,170,172,3,28,14,0,171,
169,1,0,0,0,171,170,1,0,0,0,172,19,1,0,0,0,173,176,5,44,0,0,174,176,5,47,
0,0,175,173,1,0,0,0,175,174,1,0,0,0,176,21,1,0,0,0,177,183,5,44,0,0,178,
183,5,47,0,0,179,183,5,10,0,0,180,183,5,11,0,0,181,183,5,12,0,0,182,177,
1,0,0,0,182,178,1,0,0,0,182,179,1,0,0,0,182,180,1,0,0,0,182,181,1,0,0,0,
183,23,1,0,0,0,184,195,3,22,11,0,185,195,3,16,8,0,186,195,3,26,13,0,187,
195,3,60,30,0,188,195,3,48,24,0,189,195,3,58,29,0,190,191,5,30,0,0,191,192,
3,24,12,0,192,193,5,31,0,0,193,195,1,0,0,0,194,184,1,0,0,0,194,185,1,0,0,
0,194,186,1,0,0,0,194,187,1,0,0,0,194,188,1,0,0,0,194,189,1,0,0,0,194,190,
1,0,0,0,195,25,1,0,0,0,196,197,6,13,-1,0,197,204,3,22,11,0,198,204,3,16,
8,0,199,200,5,30,0,0,200,201,3,26,13,0,201,202,5,31,0,0,202,204,1,0,0,0,
203,196,1,0,0,0,203,198,1,0,0,0,203,199,1,0,0,0,204,213,1,0,0,0,205,206,
10,5,0,0,206,207,7,0,0,0,207,212,3,26,13,6,208,209,10,4,0,0,209,210,7,1,
0,0,210,212,3,26,13,5,211,205,1,0,0,0,211,208,1,0,0,0,212,215,1,0,0,0,213,
211,1,0,0,0,213,214,1,0,0,0,214,27,1,0,0,0,215,213,1,0,0,0,216,217,3,12,
6,0,217,218,5,30,0,0,218,221,3,6,3,0,219,222,3,30,15,0,220,222,3,34,17,0,
221,219,1,0,0,0,221,220,1,0,0,0,221,222,1,0,0,0,222,223,1,0,0,0,223,224,
3,6,3,0,224,225,5,31,0,0,225,29,1,0,0,0,226,231,3,32,16,0,227,228,5,34,0,
0,228,230,3,32,16,0,229,227,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,
232,1,0,0,0,232,235,1,0,0,0,233,231,1,0,0,0,234,236,5,34,0,0,235,234,1,0,
0,0,235,236,1,0,0,0,236,31,1,0,0,0,237,238,3,6,3,0,238,239,3,24,12,0,239,
240,3,6,3,0,240,33,1,0,0,0,241,246,3,36,18,0,242,243,5,34,0,0,243,245,3,
36,18,0,244,242,1,0,0,0,245,248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,
247,250,1,0,0,0,248,246,1,0,0,0,249,251,5,34,0,0,250,249,1,0,0,0,250,251,
1,0,0,0,251,35,1,0,0,0,252,253,3,6,3,0,253,254,3,12,6,0,254,255,5,35,0,0,
255,256,3,24,12,0,256,257,3,6,3,0,257,37,1,0,0,0,258,260,5,15,0,0,259,258,
1,0,0,0,259,260,1,0,0,0,260,265,1,0,0,0,261,266,3,14,7,0,262,263,3,12,6,
0,263,264,3,12,6,0,264,266,1,0,0,0,265,261,1,0,0,0,265,262,1,0,0,0,266,267,
1,0,0,0,267,268,5,35,0,0,268,269,3,40,20,0,269,39,1,0,0,0,270,271,3,24,12,
0,271,41,1,0,0,0,272,278,3,44,22,0,273,274,3,4,2,0,274,275,3,44,22,0,275,
277,1,0,0,0,276,273,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,278,279,1,0,
0,0,279,43,1,0,0,0,280,278,1,0,0,0,281,289,3,38,19,0,282,289,3,70,35,0,283,
289,3,26,13,0,284,289,3,16,8,0,285,289,3,72,36,0,286,289,3,6,3,0,287,289,
3,46,23,0,288,281,1,0,0,0,288,282,1,0,0,0,288,283,1,0,0,0,288,284,1,0,0,
0,288,285,1,0,0,0,288,286,1,0,0,0,288,287,1,0,0,0,289,45,1,0,0,0,290,291,
5,21,0,0,291,292,3,44,22,0,292,47,1,0,0,0,293,295,5,30,0,0,294,296,3,52,
26,0,295,294,1,0,0,0,295,296,1,0,0,0,296,297,1,0,0,0,297,298,5,31,0,0,298,
299,5,40,0,0,299,300,3,24,12,0,300,49,1,0,0,0,301,303,5,22,0,0,302,301,1,
0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,306,5,1,0,0,305,307,3,56,28,0,
306,305,1,0,0,0,306,307,1,0,0,0,307,308,1,0,0,0,308,309,3,12,6,0,309,310,
5,30,0,0,310,312,3,6,3,0,311,313,3,52,26,0,312,311,1,0,0,0,312,313,1,0,0,
0,313,314,1,0,0,0,314,315,3,6,3,0,315,316,1,0,0,0,316,317,5,31,0,0,317,321,
3,4,2,0,318,319,3,42,21,0,319,320,3,4,2,0,320,322,1,0,0,0,321,318,1,0,0,
0,321,322,1,0,0,0,322,323,1,0,0,0,323,324,5,2,0,0,324,51,1,0,0,0,325,333,
3,54,27,0,326,327,3,6,3,0,327,328,5,34,0,0,328,329,3,6,3,0,329,330,3,54,
27,0,330,332,1,0,0,0,331,326,1,0,0,0,332,335,1,0,0,0,333,331,1,0,0,0,333,
334,1,0,0,0,334,53,1,0,0,0,335,333,1,0,0,0,336,338,3,12,6,0,337,339,3,12,
6,0,338,337,1,0,0,0,338,339,1,0,0,0,339,342,1,0,0,0,340,341,5,35,0,0,341,
343,3,24,12,0,342,340,1,0,0,0,342,343,1,0,0,0,343,55,1,0,0,0,344,345,3,12,
6,0,345,346,5,41,0,0,346,57,1,0,0,0,347,349,5,22,0,0,348,347,1,0,0,0,348,
349,1,0,0,0,349,350,1,0,0,0,350,351,5,1,0,0,351,352,5,30,0,0,352,354,3,6,
3,0,353,355,3,52,26,0,354,353,1,0,0,0,354,355,1,0,0,0,355,356,1,0,0,0,356,
357,3,6,3,0,357,358,1,0,0,0,358,359,5,31,0,0,359,363,3,4,2,0,360,361,3,42,
21,0,361,362,3,4,2,0,362,364,1,0,0,0,363,360,1,0,0,0,363,364,1,0,0,0,364,
365,1,0,0,0,365,366,5,2,0,0,366,59,1,0,0,0,367,368,3,62,31,0,368,369,3,64,
32,0,369,370,3,62,31,0,370,376,1,0,0,0,371,372,5,30,0,0,372,373,3,66,33,
0,373,374,5,31,0,0,374,376,1,0,0,0,375,367,1,0,0,0,375,371,1,0,0,0,376,61,
1,0,0,0,377,385,3,22,11,0,378,385,3,16,8,0,379,385,3,26,13,0,380,381,5,30,
0,0,381,382,3,62,31,0,382,383,5,31,0,0,383,385,1,0,0,0,384,377,1,0,0,0,384,
378,1,0,0,0,384,379,1,0,0,0,384,380,1,0,0,0,385,63,1,0,0,0,386,387,7,2,0,
0,387,65,1,0,0,0,388,389,6,33,-1,0,389,390,3,60,30,0,390,397,1,0,0,0,391,
392,10,2,0,0,392,393,3,68,34,0,393,394,3,66,33,3,394,396,1,0,0,0,395,391,
1,0,0,0,396,399,1,0,0,0,397,395,1,0,0,0,397,398,1,0,0,0,398,67,1,0,0,0,399,
397,1,0,0,0,400,401,7,3,0,0,401,69,1,0,0,0,402,403,5,14,0,0,403,404,3,24,
12,0,404,408,3,4,2,0,405,406,3,42,21,0,406,407,3,4,2,0,407,409,1,0,0,0,408,
405,1,0,0,0,408,409,1,0,0,0,409,414,1,0,0,0,410,411,5,27,0,0,411,412,3,42,
21,0,412,413,3,4,2,0,413,415,1,0,0,0,414,410,1,0,0,0,414,415,1,0,0,0,415,
416,1,0,0,0,416,417,5,2,0,0,417,71,1,0,0,0,418,419,5,3,0,0,419,420,3,12,
6,0,420,421,5,4,0,0,421,422,3,24,12,0,422,426,3,4,2,0,423,424,3,42,21,0,
424,425,3,4,2,0,425,427,1,0,0,0,426,423,1,0,0,0,426,427,1,0,0,0,427,428,
1,0,0,0,428,429,5,2,0,0,429,73,1,0,0,0,430,431,5,5,0,0,431,432,3,12,6,0,
432,433,3,4,2,0,433,437,3,6,3,0,434,435,3,76,38,0,435,436,3,4,2,0,436,438,
1,0,0,0,437,434,1,0,0,0,437,438,1,0,0,0,438,439,1,0,0,0,439,440,3,6,3,0,
440,441,5,2,0,0,441,75,1,0,0,0,442,448,3,78,39,0,443,444,3,4,2,0,444,445,
3,78,39,0,445,447,1,0,0,0,446,443,1,0,0,0,447,450,1,0,0,0,448,446,1,0,0,
0,448,449,1,0,0,0,449,77,1,0,0,0,450,448,1,0,0,0,451,452,3,6,3,0,452,454,
3,12,6,0,453,455,3,12,6,0,454,453,1,0,0,0,454,455,1,0,0,0,455,458,1,0,0,
0,456,457,5,35,0,0,457,459,3,24,12,0,458,456,1,0,0,0,458,459,1,0,0,0,459,
460,1,0,0,0,460,461,3,6,3,0,461,79,1,0,0,0,462,463,5,25,0,0,463,464,3,4,
2,0,464,465,3,42,21,0,465,466,3,4,2,0,466,467,5,26,0,0,467,471,3,12,6,0,
468,469,3,42,21,0,469,470,3,4,2,0,470,472,1,0,0,0,471,468,1,0,0,0,471,472,
1,0,0,0,472,473,1,0,0,0,473,474,3,6,3,0,474,475,5,2,0,0,475,81,1,0,0,0,49,
88,103,110,116,121,125,131,140,151,162,167,171,175,182,194,203,211,213,221,
231,235,246,250,259,265,278,288,295,302,306,312,321,333,338,342,348,354,
363,375,384,397,408,414,426,437,448,454,458,471];


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
                         "chain_element", "chain_element_literal", "literal", 
                         "atom", "arithmetic", "call", "call_parameters", 
                         "call_parameter", "call_named_parameters", "call_named_parameter", 
                         "assign", "assign_value", "body", "body_line", 
                         "return_body_line", "lambda", "diia", "diia_parameters", 
                         "diia_parameter", "diia_structure", "anonymous_diia", 
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
    	case 13:
    	    		return this.arithmetic_sempred(localctx, predIndex);
    	case 33:
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
	        this.state = 82;
	        this.program_line();
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 83;
	            this.nl();
	            this.state = 84;
	            this.program_line();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
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
	        this.state = 103;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 93;
	            this.chain();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 94;
	            this.assign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 95;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 96;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 97;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 98;
	            this.nls();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 99;
	            this.structure();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 100;
	            this.take();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 101;
	            this.give();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 102;
	            this.atom();
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
	        this.state = 105;
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
	        this.state = 110;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 107;
	                this.nl(); 
	            }
	            this.state = 112;
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
	        this.state = 113;
	        this.match(DiiaParser.TAKE);
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 114;
	            localctx.t_pak = this.match(DiiaParser.PAK);
	            this.state = 115;
	            this.match(DiiaParser.COLON);
	        }

	        this.state = 118;
	        localctx.t_module = this.identifier();
	        this.state = 121;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===41) {
	            this.state = 119;
	            this.match(DiiaParser.DOT);
	            this.state = 120;
	            localctx.t_elements_chain = this.identifiers_chain();
	        }

	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 123;
	            this.match(DiiaParser.AS);
	            this.state = 124;
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
	        this.state = 127;
	        this.match(DiiaParser.GIVE);
	        this.state = 128;
	        localctx.g_name = this.identifier();
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 129;
	            this.match(DiiaParser.AS);
	            this.state = 130;
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
	        this.state = 133;
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
	        this.state = 135;
	        this.identifier();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===41) {
	            this.state = 136;
	            this.match(DiiaParser.DOT);
	            this.state = 137;
	            this.identifier();
	            this.state = 142;
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
	        this.state = 167;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.chain_element();
	            this.state = 151;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 144;
	                    this.nls();
	                    this.state = 145;
	                    this.match(DiiaParser.DOT);
	                    this.state = 146;
	                    this.nls();
	                    this.state = 147;
	                    this.chain_element(); 
	                }
	                this.state = 153;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            break;
	        case 44:
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.chain_element_literal();
	            this.state = 162;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 155;
	                    this.nls();
	                    this.state = 156;
	                    this.match(DiiaParser.DOT);
	                    this.state = 157;
	                    this.nls();
	                    this.state = 158;
	                    this.chain_element(); 
	                }
	                this.state = 164;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 165;
	            this.match(DiiaParser.WAIT);
	            this.state = 166;
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
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 169;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 170;
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



	chain_element_literal() {
	    let localctx = new Chain_element_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DiiaParser.RULE_chain_element_literal);
	    try {
	        this.state = 175;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            localctx.l_number = this.match(DiiaParser.NUMBER);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 174;
	            localctx.l_string = this.match(DiiaParser.STRING);
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DiiaParser.RULE_literal);
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            localctx.l_number = this.match(DiiaParser.NUMBER);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            localctx.l_string = this.match(DiiaParser.STRING);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 179;
	            localctx.l_yes = this.match(DiiaParser.YES);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 180;
	            localctx.l_no = this.match(DiiaParser.NO);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 181;
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
	    this.enterRule(localctx, 24, DiiaParser.RULE_atom);
	    try {
	        this.state = 194;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.chain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 186;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 187;
	            this.test();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 188;
	            this.lambda();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 189;
	            this.anonymous_diia();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 190;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 191;
	            this.atom();
	            this.state = 192;
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, DiiaParser.RULE_arithmetic, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 197;
	            localctx.a_literal = this.literal();
	            break;

	        case 2:
	            this.state = 198;
	            localctx.a_chain = this.chain();
	            break;

	        case 3:
	            this.state = 199;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 200;
	            localctx.a_nested = this.arithmetic(0);
	            this.state = 201;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 213;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 211;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ArithmeticContext(this, _parentctx, _parentState);
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_arithmetic);
	                    this.state = 205;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 206;
	                    localctx.a_op_muldiv = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===38 || _la===39)) {
	                        localctx.a_op_muldiv = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 207;
	                    localctx.a_right = this.arithmetic(6);
	                    break;

	                case 2:
	                    localctx = new ArithmeticContext(this, _parentctx, _parentState);
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_arithmetic);
	                    this.state = 208;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 209;
	                    localctx.a_op_addsub = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===36 || _la===37)) {
	                        localctx.a_op_addsub = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 210;
	                    localctx.a_right = this.arithmetic(5);
	                    break;

	                } 
	            }
	            this.state = 215;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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
	    this.enterRule(localctx, 28, DiiaParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        localctx.c_name = this.identifier();
	        this.state = 217;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 218;
	        this.nls();
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 219;
	            localctx.c_parameters = this.call_parameters();

	        } else if(la_===2) {
	            this.state = 220;
	            localctx.c_named_parameters = this.call_named_parameters();

	        }
	        this.state = 223;
	        this.nls();
	        this.state = 224;
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
	        this.state = 226;
	        this.call_parameter();
	        this.state = 231;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 227;
	                this.match(DiiaParser.COMMA);
	                this.state = 228;
	                this.call_parameter(); 
	            }
	            this.state = 233;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 234;
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



	call_parameter() {
	    let localctx = new Call_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DiiaParser.RULE_call_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.nls();
	        this.state = 238;
	        localctx.cp_value = this.atom();
	        this.state = 239;
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
	        this.state = 241;
	        this.call_named_parameter();
	        this.state = 246;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 242;
	                this.match(DiiaParser.COMMA);
	                this.state = 243;
	                this.call_named_parameter(); 
	            }
	            this.state = 248;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	        }

	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 249;
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



	call_named_parameter() {
	    let localctx = new Call_named_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DiiaParser.RULE_call_named_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.nls();
	        this.state = 253;
	        localctx.cnp_name = this.identifier();
	        this.state = 254;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 255;
	        localctx.cnp_value = this.atom();
	        this.state = 256;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 258;
	            localctx.a_wait = this.match(DiiaParser.WAIT);
	        }

	        this.state = 265;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 261;
	            localctx.a_chain = this.identifiers_chain();
	            break;

	        case 2:
	            this.state = 262;
	            localctx.a_identifier = this.identifier();
	            this.state = 263;
	            localctx.a_type = this.identifier();
	            break;

	        }
	        this.state = 267;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 268;
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
	        this.state = 270;
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
	        this.state = 272;
	        this.body_line();
	        this.state = 278;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 273;
	                this.nl();
	                this.state = 274;
	                this.body_line(); 
	            }
	            this.state = 280;
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



	body_line() {
	    let localctx = new Body_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DiiaParser.RULE_body_line);
	    try {
	        this.state = 288;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 281;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 282;
	            this.if_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 283;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 284;
	            this.chain();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 285;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 286;
	            this.nls();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 287;
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
	        this.state = 290;
	        this.match(DiiaParser.RETURN);
	        this.state = 291;
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
	        this.state = 293;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 295;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 294;
	            localctx.l_parameters = this.diia_parameters();
	        }

	        this.state = 297;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 298;
	        this.match(DiiaParser.COLON);
	        this.state = 299;
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 301;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 304;
	        this.match(DiiaParser.DEF);
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        if(la_===1) {
	            this.state = 305;
	            localctx.d_structure = this.diia_structure();

	        }
	        this.state = 308;
	        localctx.d_name = this.identifier();
	        this.state = 309;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 310;
	        this.nls();
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 311;
	            localctx.d_parameters = this.diia_parameters();
	        }

	        this.state = 314;
	        this.nls();
	        this.state = 316;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 317;
	        this.nl();
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1612766216) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & 19) !== 0)) {
	            this.state = 318;
	            localctx.d_body = this.body();
	            this.state = 319;
	            this.nl();
	        }

	        this.state = 323;
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
	        this.state = 325;
	        this.diia_parameter();
	        this.state = 333;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 326;
	                this.nls();
	                this.state = 327;
	                this.match(DiiaParser.COMMA);
	                this.state = 328;
	                this.nls();
	                this.state = 329;
	                this.diia_parameter(); 
	            }
	            this.state = 335;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
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
	        this.state = 336;
	        localctx.dp_name = this.identifier();
	        this.state = 338;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 337;
	            localctx.dp_type = this.identifier();
	        }

	        this.state = 342;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 340;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 341;
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
	        this.state = 344;
	        localctx.ds_name = this.identifier();
	        this.state = 345;
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



	anonymous_diia() {
	    let localctx = new Anonymous_diiaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, DiiaParser.RULE_anonymous_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 347;
	            localctx.ad_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 350;
	        this.match(DiiaParser.DEF);
	        this.state = 351;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 352;
	        this.nls();
	        this.state = 354;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 353;
	            localctx.ad_parameters = this.diia_parameters();
	        }

	        this.state = 356;
	        this.nls();
	        this.state = 358;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 359;
	        this.nl();
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1612766216) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & 19) !== 0)) {
	            this.state = 360;
	            localctx.ad_body = this.body();
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



	test() {
	    let localctx = new TestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, DiiaParser.RULE_test);
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 367;
	            localctx.t_left = this.test_part();
	            this.state = 368;
	            localctx.t_op = this.test_op();
	            this.state = 369;
	            localctx.t_right = this.test_part();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 371;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 372;
	            this.test_expr(0);
	            this.state = 373;
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
	        this.state = 384;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 377;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 378;
	            this.chain();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 379;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 380;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 381;
	            this.test_part();
	            this.state = 382;
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
	        this.state = 386;
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
	    const _startState = 66;
	    this.enterRecursionRule(localctx, 66, DiiaParser.RULE_test_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        localctx.te_test = this.test();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 397;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Test_exprContext(this, _parentctx, _parentState);
	                localctx.te_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_test_expr);
	                this.state = 391;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 392;
	                localctx.te_op = this.test_expr_op();
	                this.state = 393;
	                localctx.te_right = this.test_expr(3); 
	            }
	            this.state = 399;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
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
	    this.enterRule(localctx, 68, DiiaParser.RULE_test_expr_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
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
	    this.enterRule(localctx, 70, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(DiiaParser.IF);
	        this.state = 403;
	        localctx.i_expr = this.atom();
	        this.state = 404;
	        this.nl();
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1612766216) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & 19) !== 0)) {
	            this.state = 405;
	            localctx.i_body = this.body();
	            this.state = 406;
	            this.nl();
	        }

	        this.state = 414;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 410;
	            this.match(DiiaParser.ELSE);
	            this.state = 411;
	            localctx.ielse_body = this.body();
	            this.state = 412;
	            this.nl();
	        }

	        this.state = 416;
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
	    this.enterRule(localctx, 72, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(DiiaParser.EACH);
	        this.state = 419;
	        localctx.e_name = this.identifier();
	        this.state = 420;
	        this.match(DiiaParser.TAKING);
	        this.state = 421;
	        localctx.e_iterator = this.atom();
	        this.state = 422;
	        this.nl();
	        this.state = 426;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1612766216) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & 19) !== 0)) {
	            this.state = 423;
	            localctx.e_body = this.body();
	            this.state = 424;
	            this.nl();
	        }

	        this.state = 428;
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
	        this.state = 430;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 431;
	        localctx.s_name = this.identifier();
	        this.state = 432;
	        this.nl();
	        this.state = 433;
	        this.nls();
	        this.state = 437;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        if(la_===1) {
	            this.state = 434;
	            localctx.s_parameters = this.structure_parameters();
	            this.state = 435;
	            this.nl();

	        }
	        this.state = 439;
	        this.nls();
	        this.state = 440;
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
	        this.state = 442;
	        this.structure_parameter();
	        this.state = 448;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 443;
	                this.nl();
	                this.state = 444;
	                this.structure_parameter(); 
	            }
	            this.state = 450;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
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
	        this.state = 451;
	        this.nls();
	        this.state = 452;
	        localctx.sp_name = this.identifier();
	        this.state = 454;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 453;
	            localctx.sp_type = this.identifier();
	        }

	        this.state = 458;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 456;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 457;
	            localctx.sp_value = this.atom();
	        }

	        this.state = 460;
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
	    this.enterRule(localctx, 80, DiiaParser.RULE_trycat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 462;
	        this.match(DiiaParser.TRY);
	        this.state = 463;
	        this.nl();
	        this.state = 464;
	        localctx.t_body = this.body();
	        this.state = 465;
	        this.nl();
	        this.state = 466;
	        this.match(DiiaParser.CATCH);
	        this.state = 467;
	        localctx.tc_name = this.identifier();
	        this.state = 471;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        if(la_===1) {
	            this.state = 468;
	            localctx.tc_body = this.body();
	            this.state = 469;
	            this.nl();

	        }
	        this.state = 473;
	        this.nls();
	        this.state = 474;
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
DiiaParser.RULE_chain_element_literal = 10;
DiiaParser.RULE_literal = 11;
DiiaParser.RULE_atom = 12;
DiiaParser.RULE_arithmetic = 13;
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
DiiaParser.RULE_anonymous_diia = 29;
DiiaParser.RULE_test = 30;
DiiaParser.RULE_test_part = 31;
DiiaParser.RULE_test_op = 32;
DiiaParser.RULE_test_expr = 33;
DiiaParser.RULE_test_expr_op = 34;
DiiaParser.RULE_if = 35;
DiiaParser.RULE_each = 36;
DiiaParser.RULE_structure = 37;
DiiaParser.RULE_structure_parameters = 38;
DiiaParser.RULE_structure_parameter = 39;
DiiaParser.RULE_trycat = 40;

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

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
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


	chain_element_literal() {
	    return this.getTypedRuleContext(Chain_element_literalContext,0);
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



class Chain_element_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_chain_element_literal;
        this.l_number = null; // Token
        this.l_string = null; // Token
    }

	NUMBER() {
	    return this.getToken(DiiaParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterChain_element_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitChain_element_literal(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitChain_element_literal(this);
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

	anonymous_diia() {
	    return this.getTypedRuleContext(Anonymous_diiaContext,0);
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
        this.a_wait = null; // Token
        this.a_chain = null; // Identifiers_chainContext
        this.a_identifier = null; // IdentifierContext
        this.a_type = null; // IdentifierContext
        this.a_value = null; // Assign_valueContext
    }

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	assign_value() {
	    return this.getTypedRuleContext(Assign_valueContext,0);
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
        this.dp_type = null; // IdentifierContext
        this.dp_value = null; // AtomContext
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



class Anonymous_diiaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_anonymous_diia;
        this.ad_async = null; // Token
        this.ad_parameters = null; // Diia_parametersContext
        this.ad_body = null; // BodyContext
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

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	diia_parameters() {
	    return this.getTypedRuleContext(Diia_parametersContext,0);
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
        this.sp_type = null; // IdentifierContext
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
DiiaParser.Chain_element_literalContext = Chain_element_literalContext; 
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
DiiaParser.Anonymous_diiaContext = Anonymous_diiaContext; 
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
