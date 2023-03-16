// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,58,494,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,84,8,1,
10,1,12,1,87,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
3,2,103,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,111,8,3,1,3,1,3,1,3,1,4,1,4,1,4,
1,4,3,4,120,8,4,1,4,1,4,1,4,1,4,1,4,3,4,127,8,4,1,4,1,4,1,5,1,5,1,5,1,5,
5,5,135,8,5,10,5,12,5,138,9,5,1,6,3,6,141,8,6,1,6,1,6,1,6,1,6,3,6,147,8,
6,1,6,1,6,1,6,1,6,3,6,153,8,6,1,6,1,6,1,6,1,6,3,6,159,8,6,1,6,1,6,1,6,1,
6,3,6,165,8,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,3,7,176,8,7,1,7,1,7,1,
7,1,7,3,7,182,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,194,8,8,1,
8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,204,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,
10,1,10,3,10,214,8,10,1,10,1,10,1,10,3,10,219,8,10,1,10,1,10,1,11,1,11,1,
11,3,11,226,8,11,1,11,1,11,3,11,230,8,11,1,11,3,11,233,8,11,1,11,1,11,3,
11,237,8,11,1,12,1,12,1,12,1,12,3,12,243,8,12,1,13,1,13,1,13,1,13,3,13,249,
8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,258,8,13,1,13,5,13,261,8,13,
10,13,12,13,264,9,13,1,14,1,14,1,14,1,14,3,14,270,8,14,1,14,1,14,3,14,274,
8,14,1,14,1,14,1,14,3,14,279,8,14,1,14,1,14,1,14,1,14,3,14,285,8,14,1,14,
1,14,1,14,1,14,3,14,291,8,14,1,14,1,14,1,14,1,14,3,14,297,8,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,312,8,14,1,14,
1,14,1,14,1,14,3,14,318,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,5,14,346,8,14,10,14,12,14,349,9,14,1,15,1,15,1,15,1,16,1,16,
1,16,3,16,357,8,16,3,16,359,8,16,1,16,1,16,1,16,1,17,1,17,3,17,366,8,17,
1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,5,20,379,8,20,10,
20,12,20,382,9,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,391,8,21,10,21,
12,21,394,9,21,1,22,1,22,1,22,5,22,399,8,22,10,22,12,22,402,9,22,1,22,3,
22,405,8,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,5,24,414,8,24,10,24,12,24,
417,9,24,1,24,3,24,420,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,
1,26,1,26,1,26,5,26,434,8,26,10,26,12,26,437,9,26,1,27,1,27,3,27,441,8,27,
1,27,1,27,3,27,445,8,27,1,28,1,28,1,28,3,28,450,8,28,1,29,1,29,1,29,1,29,
5,29,456,8,29,10,29,12,29,459,9,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,3,30,473,8,30,1,31,1,31,1,31,1,32,1,32,1,33,1,33,
1,34,1,34,1,35,1,35,1,36,1,36,1,37,5,37,489,8,37,10,37,12,37,492,9,37,1,
37,0,4,26,28,40,42,38,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,0,4,1,0,47,48,1,
0,45,46,1,0,19,20,3,0,5,8,16,16,28,35,541,0,76,1,0,0,0,2,79,1,0,0,0,4,102,
1,0,0,0,6,104,1,0,0,0,8,115,1,0,0,0,10,130,1,0,0,0,12,140,1,0,0,0,14,169,
1,0,0,0,16,185,1,0,0,0,18,197,1,0,0,0,20,207,1,0,0,0,22,222,1,0,0,0,24,238,
1,0,0,0,26,248,1,0,0,0,28,317,1,0,0,0,30,350,1,0,0,0,32,358,1,0,0,0,34,365,
1,0,0,0,36,367,1,0,0,0,38,370,1,0,0,0,40,372,1,0,0,0,42,383,1,0,0,0,44,395,
1,0,0,0,46,406,1,0,0,0,48,410,1,0,0,0,50,421,1,0,0,0,52,427,1,0,0,0,54,438,
1,0,0,0,56,449,1,0,0,0,58,451,1,0,0,0,60,472,1,0,0,0,62,474,1,0,0,0,64,477,
1,0,0,0,66,479,1,0,0,0,68,481,1,0,0,0,70,483,1,0,0,0,72,485,1,0,0,0,74,490,
1,0,0,0,76,77,3,2,1,0,77,78,5,0,0,1,78,1,1,0,0,0,79,85,3,4,2,0,80,81,3,72,
36,0,81,82,3,4,2,0,82,84,1,0,0,0,83,80,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,
0,85,86,1,0,0,0,86,3,1,0,0,0,87,85,1,0,0,0,88,103,3,6,3,0,89,103,3,8,4,0,
90,103,3,12,6,0,91,103,3,14,7,0,92,103,3,16,8,0,93,103,3,18,9,0,94,103,3,
20,10,0,95,103,3,28,14,0,96,103,3,30,15,0,97,103,3,36,18,0,98,103,3,32,16,
0,99,103,3,74,37,0,100,103,3,22,11,0,101,103,3,24,12,0,102,88,1,0,0,0,102,
89,1,0,0,0,102,90,1,0,0,0,102,91,1,0,0,0,102,92,1,0,0,0,102,93,1,0,0,0,102,
94,1,0,0,0,102,95,1,0,0,0,102,96,1,0,0,0,102,97,1,0,0,0,102,98,1,0,0,0,102,
99,1,0,0,0,102,100,1,0,0,0,102,101,1,0,0,0,103,5,1,0,0,0,104,105,5,26,0,
0,105,106,3,38,19,0,106,110,3,72,36,0,107,108,3,2,1,0,108,109,3,72,36,0,
109,111,1,0,0,0,110,107,1,0,0,0,110,111,1,0,0,0,111,112,1,0,0,0,112,113,
3,74,37,0,113,114,5,1,0,0,114,7,1,0,0,0,115,116,5,3,0,0,116,119,3,38,19,
0,117,118,5,16,0,0,118,120,3,40,20,0,119,117,1,0,0,0,119,120,1,0,0,0,120,
121,1,0,0,0,121,122,3,72,36,0,122,126,3,74,37,0,123,124,3,10,5,0,124,125,
3,72,36,0,125,127,1,0,0,0,126,123,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,
0,128,129,5,1,0,0,129,9,1,0,0,0,130,136,3,54,27,0,131,132,3,72,36,0,132,
133,3,54,27,0,133,135,1,0,0,0,134,131,1,0,0,0,135,138,1,0,0,0,136,134,1,
0,0,0,136,137,1,0,0,0,137,11,1,0,0,0,138,136,1,0,0,0,139,141,5,18,0,0,140,
139,1,0,0,0,140,141,1,0,0,0,141,142,1,0,0,0,142,146,5,2,0,0,143,144,3,38,
19,0,144,145,5,50,0,0,145,147,1,0,0,0,146,143,1,0,0,0,146,147,1,0,0,0,147,
148,1,0,0,0,148,149,3,38,19,0,149,150,5,39,0,0,150,152,3,74,37,0,151,153,
3,52,26,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,155,3,74,37,
0,155,156,1,0,0,0,156,158,5,40,0,0,157,159,3,42,21,0,158,157,1,0,0,0,158,
159,1,0,0,0,159,160,1,0,0,0,160,164,3,72,36,0,161,162,3,58,29,0,162,163,
3,72,36,0,163,165,1,0,0,0,164,161,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,
0,166,167,3,74,37,0,167,168,5,1,0,0,168,13,1,0,0,0,169,170,5,10,0,0,170,
171,3,28,14,0,171,175,3,72,36,0,172,173,3,58,29,0,173,174,3,72,36,0,174,
176,1,0,0,0,175,172,1,0,0,0,175,176,1,0,0,0,176,181,1,0,0,0,177,178,5,23,
0,0,178,179,3,58,29,0,179,180,3,72,36,0,180,182,1,0,0,0,181,177,1,0,0,0,
181,182,1,0,0,0,182,183,1,0,0,0,183,184,5,1,0,0,184,15,1,0,0,0,185,186,5,
4,0,0,186,187,3,28,14,0,187,188,5,15,0,0,188,189,3,38,19,0,189,193,3,72,
36,0,190,191,3,58,29,0,191,192,3,72,36,0,192,194,1,0,0,0,193,190,1,0,0,0,
193,194,1,0,0,0,194,195,1,0,0,0,195,196,5,1,0,0,196,17,1,0,0,0,197,198,5,
25,0,0,198,199,3,28,14,0,199,203,3,72,36,0,200,201,3,58,29,0,201,202,3,72,
36,0,202,204,1,0,0,0,203,200,1,0,0,0,203,204,1,0,0,0,204,205,1,0,0,0,205,
206,5,1,0,0,206,19,1,0,0,0,207,208,5,21,0,0,208,209,3,72,36,0,209,210,3,
58,29,0,210,211,3,72,36,0,211,213,5,22,0,0,212,214,3,38,19,0,213,212,1,0,
0,0,213,214,1,0,0,0,214,218,1,0,0,0,215,216,3,58,29,0,216,217,3,72,36,0,
217,219,1,0,0,0,218,215,1,0,0,0,218,219,1,0,0,0,219,220,1,0,0,0,220,221,
5,1,0,0,221,21,1,0,0,0,222,232,5,12,0,0,223,226,5,14,0,0,224,226,5,50,0,
0,225,223,1,0,0,0,225,224,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,229,
3,40,20,0,228,230,5,36,0,0,229,228,1,0,0,0,229,230,1,0,0,0,230,233,1,0,0,
0,231,233,5,56,0,0,232,225,1,0,0,0,232,231,1,0,0,0,233,236,1,0,0,0,234,235,
5,15,0,0,235,237,3,38,19,0,236,234,1,0,0,0,236,237,1,0,0,0,237,23,1,0,0,
0,238,239,5,13,0,0,239,242,3,38,19,0,240,241,5,15,0,0,241,243,3,38,19,0,
242,240,1,0,0,0,242,243,1,0,0,0,243,25,1,0,0,0,244,245,6,13,-1,0,245,249,
5,53,0,0,246,249,5,56,0,0,247,249,3,38,19,0,248,244,1,0,0,0,248,246,1,0,
0,0,248,247,1,0,0,0,249,262,1,0,0,0,250,251,10,2,0,0,251,252,5,50,0,0,252,
261,3,26,13,3,253,254,10,1,0,0,254,257,5,39,0,0,255,258,3,44,22,0,256,258,
3,48,24,0,257,255,1,0,0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,
0,259,261,5,40,0,0,260,250,1,0,0,0,260,253,1,0,0,0,261,264,1,0,0,0,262,260,
1,0,0,0,262,263,1,0,0,0,263,27,1,0,0,0,264,262,1,0,0,0,265,266,6,14,-1,0,
266,318,3,26,13,0,267,269,5,39,0,0,268,270,3,52,26,0,269,268,1,0,0,0,269,
270,1,0,0,0,270,271,1,0,0,0,271,273,5,40,0,0,272,274,3,42,21,0,273,272,1,
0,0,0,273,274,1,0,0,0,274,275,1,0,0,0,275,276,5,49,0,0,276,318,3,28,14,5,
277,279,5,18,0,0,278,277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,281,
5,2,0,0,281,282,5,39,0,0,282,284,3,74,37,0,283,285,3,52,26,0,284,283,1,0,
0,0,284,285,1,0,0,0,285,286,1,0,0,0,286,287,3,74,37,0,287,288,1,0,0,0,288,
290,5,40,0,0,289,291,3,42,21,0,290,289,1,0,0,0,290,291,1,0,0,0,291,292,1,
0,0,0,292,296,3,72,36,0,293,294,3,58,29,0,294,295,3,72,36,0,295,297,1,0,
0,0,296,293,1,0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,299,3,74,37,0,299,
300,5,1,0,0,300,318,1,0,0,0,301,302,5,39,0,0,302,303,3,28,14,0,303,304,5,
40,0,0,304,318,1,0,0,0,305,306,5,39,0,0,306,307,3,28,14,0,307,308,5,40,0,
0,308,311,5,39,0,0,309,312,3,44,22,0,310,312,3,48,24,0,311,309,1,0,0,0,311,
310,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,314,5,40,0,0,314,318,1,0,
0,0,315,316,5,11,0,0,316,318,3,28,14,1,317,265,1,0,0,0,317,267,1,0,0,0,317,
278,1,0,0,0,317,301,1,0,0,0,317,305,1,0,0,0,317,315,1,0,0,0,318,347,1,0,
0,0,319,320,10,10,0,0,320,321,3,64,32,0,321,322,3,28,14,11,322,346,1,0,0,
0,323,324,10,9,0,0,324,325,3,66,33,0,325,326,3,28,14,10,326,346,1,0,0,0,
327,328,10,8,0,0,328,329,3,74,37,0,329,330,5,27,0,0,330,331,3,74,37,0,331,
332,3,28,14,0,332,333,3,74,37,0,333,334,5,49,0,0,334,335,3,74,37,0,335,336,
3,28,14,9,336,346,1,0,0,0,337,338,10,7,0,0,338,339,3,70,35,0,339,340,3,28,
14,8,340,346,1,0,0,0,341,342,10,6,0,0,342,343,3,68,34,0,343,344,3,28,14,
7,344,346,1,0,0,0,345,319,1,0,0,0,345,323,1,0,0,0,345,327,1,0,0,0,345,337,
1,0,0,0,345,341,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,
348,29,1,0,0,0,349,347,1,0,0,0,350,351,5,24,0,0,351,352,3,28,14,0,352,31,
1,0,0,0,353,359,3,40,20,0,354,356,3,38,19,0,355,357,3,42,21,0,356,355,1,
0,0,0,356,357,1,0,0,0,357,359,1,0,0,0,358,353,1,0,0,0,358,354,1,0,0,0,359,
360,1,0,0,0,360,361,5,44,0,0,361,362,3,34,17,0,362,33,1,0,0,0,363,366,3,
28,14,0,364,366,3,32,16,0,365,363,1,0,0,0,365,364,1,0,0,0,366,35,1,0,0,0,
367,368,5,11,0,0,368,369,3,32,16,0,369,37,1,0,0,0,370,371,5,52,0,0,371,39,
1,0,0,0,372,373,6,20,-1,0,373,374,3,38,19,0,374,380,1,0,0,0,375,376,10,1,
0,0,376,377,5,50,0,0,377,379,3,40,20,2,378,375,1,0,0,0,379,382,1,0,0,0,380,
378,1,0,0,0,380,381,1,0,0,0,381,41,1,0,0,0,382,380,1,0,0,0,383,384,6,21,
-1,0,384,385,3,40,20,0,385,392,1,0,0,0,386,387,10,1,0,0,387,388,3,68,34,
0,388,389,3,42,21,2,389,391,1,0,0,0,390,386,1,0,0,0,391,394,1,0,0,0,392,
390,1,0,0,0,392,393,1,0,0,0,393,43,1,0,0,0,394,392,1,0,0,0,395,400,3,46,
23,0,396,397,5,43,0,0,397,399,3,46,23,0,398,396,1,0,0,0,399,402,1,0,0,0,
400,398,1,0,0,0,400,401,1,0,0,0,401,404,1,0,0,0,402,400,1,0,0,0,403,405,
5,43,0,0,404,403,1,0,0,0,404,405,1,0,0,0,405,45,1,0,0,0,406,407,3,74,37,
0,407,408,3,28,14,0,408,409,3,74,37,0,409,47,1,0,0,0,410,415,3,50,25,0,411,
412,5,43,0,0,412,414,3,50,25,0,413,411,1,0,0,0,414,417,1,0,0,0,415,413,1,
0,0,0,415,416,1,0,0,0,416,419,1,0,0,0,417,415,1,0,0,0,418,420,5,43,0,0,419,
418,1,0,0,0,419,420,1,0,0,0,420,49,1,0,0,0,421,422,3,74,37,0,422,423,3,38,
19,0,423,424,5,44,0,0,424,425,3,28,14,0,425,426,3,74,37,0,426,51,1,0,0,0,
427,435,3,54,27,0,428,429,3,74,37,0,429,430,5,43,0,0,430,431,3,74,37,0,431,
432,3,54,27,0,432,434,1,0,0,0,433,428,1,0,0,0,434,437,1,0,0,0,435,433,1,
0,0,0,435,436,1,0,0,0,436,53,1,0,0,0,437,435,1,0,0,0,438,440,3,38,19,0,439,
441,3,42,21,0,440,439,1,0,0,0,440,441,1,0,0,0,441,444,1,0,0,0,442,443,5,
44,0,0,443,445,3,56,28,0,444,442,1,0,0,0,444,445,1,0,0,0,445,55,1,0,0,0,
446,450,5,53,0,0,447,450,5,56,0,0,448,450,3,38,19,0,449,446,1,0,0,0,449,
447,1,0,0,0,449,448,1,0,0,0,450,57,1,0,0,0,451,457,3,60,30,0,452,453,3,72,
36,0,453,454,3,60,30,0,454,456,1,0,0,0,455,452,1,0,0,0,456,459,1,0,0,0,457,
455,1,0,0,0,457,458,1,0,0,0,458,59,1,0,0,0,459,457,1,0,0,0,460,473,3,8,4,
0,461,473,3,12,6,0,462,473,3,14,7,0,463,473,3,16,8,0,464,473,3,18,9,0,465,
473,3,20,10,0,466,473,3,28,14,0,467,473,3,30,15,0,468,473,3,36,18,0,469,
473,3,32,16,0,470,473,3,62,31,0,471,473,3,74,37,0,472,460,1,0,0,0,472,461,
1,0,0,0,472,462,1,0,0,0,472,463,1,0,0,0,472,464,1,0,0,0,472,465,1,0,0,0,
472,466,1,0,0,0,472,467,1,0,0,0,472,468,1,0,0,0,472,469,1,0,0,0,472,470,
1,0,0,0,472,471,1,0,0,0,473,61,1,0,0,0,474,475,5,17,0,0,475,476,3,60,30,
0,476,63,1,0,0,0,477,478,7,0,0,0,478,65,1,0,0,0,479,480,7,1,0,0,480,67,1,
0,0,0,481,482,7,2,0,0,482,69,1,0,0,0,483,484,7,3,0,0,484,71,1,0,0,0,485,
486,5,38,0,0,486,73,1,0,0,0,487,489,3,72,36,0,488,487,1,0,0,0,489,492,1,
0,0,0,490,488,1,0,0,0,490,491,1,0,0,0,491,75,1,0,0,0,492,490,1,0,0,0,52,
85,102,110,119,126,136,140,146,152,158,164,175,181,193,203,213,218,225,229,
232,236,242,248,257,260,262,269,273,278,284,290,296,311,317,345,347,356,
358,365,380,392,400,404,415,419,435,440,444,449,457,472,490];


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
                            "'.*'", null, null, "'('", "')'", "'['", "']'", 
                            "','", "'='", "'+'", "'-'", "'*'", "'/'", "':'", 
                            "'.'", "'!'" ];
    static symbolicNames = [ null, "END", "DEF", "STRUCTURE", "TAKING", 
                             "EQ", "NOT_EQ", "GREATER", "SMALLER", "FOR", 
                             "IF", "WAIT", "TAKE", "GIVE", "PAK", "AS", 
                             "IS", "RETURN", "ASYNC", "AND", "OR", "TRY", 
                             "CATCH", "ELSE", "THROW", "WHILE", "MODULE", 
                             "TERNARY", "EQ_WORD", "GR_WORD", "SM_WORD", 
                             "NOT_GR_WORD", "NOT_SM_WORD", "NOT_EQ_WORD", 
                             "NOT_IS_WORD", "NOT_WORD", "STAR", "SKIP_SPACES", 
                             "NL", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_ARRAY", 
                             "CLOSE_ARRAY", "COMMA", "ASSIGN", "PLUS", "MINUS", 
                             "MUL", "DIV", "COLON", "DOT", "NOT", "ID", 
                             "NUMBER", "INTEGER", "FLOAT", "STRING", "LINE_COMMENT", 
                             "COMMENT" ];
    static ruleNames = [ "file", "program", "program_element", "module", 
                         "structure", "structure_params", "diia", "if", 
                         "each", "while", "try", "take", "give", "value", 
                         "expr", "throw", "assign", "assign_value", "wait_assign", 
                         "identifier", "identifiers_chain", "type_value", 
                         "args", "arg", "named_args", "named_arg", "params", 
                         "param", "param_value", "body", "body_element", 
                         "return_body_line", "arithmetic_op_mul", "arithmetic_op_add", 
                         "test_op", "comparison_op", "nl", "nls" ];

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
    	case 20:
    	    		return this.identifiers_chain_sempred(localctx, predIndex);
    	case 21:
    	    		return this.type_value_sempred(localctx, predIndex);
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
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 8);
    		case 5:
    			return this.precpred(this._ctx, 7);
    		case 6:
    			return this.precpred(this._ctx, 6);
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

    type_value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
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
	        this.state = 76;
	        localctx.f_program = this.program();
	        this.state = 77;
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.program_element();
	        this.state = 85;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 80;
	                this.nl();
	                this.state = 81;
	                this.program_element(); 
	            }
	            this.state = 87;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
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
	        this.state = 102;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.module();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 89;
	            this.structure();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 90;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 91;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 92;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 93;
	            this.while_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 94;
	            this.try_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 95;
	            this.expr(0);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 96;
	            this.throw_();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 97;
	            this.wait_assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 98;
	            this.assign();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 99;
	            this.nls();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 100;
	            this.take();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 101;
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



	module() {
	    let localctx = new ModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DiiaParser.RULE_module);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(DiiaParser.MODULE);
	        this.state = 105;
	        localctx.m_name = this.identifier();
	        this.state = 106;
	        this.nl();
	        this.state = 110;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 107;
	            localctx.m_program = this.program();
	            this.state = 108;
	            this.nl();

	        }
	        this.state = 112;
	        this.nls();
	        this.state = 113;
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
	        this.state = 115;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 116;
	        localctx.s_name = this.identifier();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 117;
	            this.match(DiiaParser.IS);
	            this.state = 118;
	            localctx.s_parent = this.identifiers_chain(0);
	        }

	        this.state = 121;
	        this.nl();
	        this.state = 122;
	        this.nls();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 123;
	            localctx.s_params = this.structure_params();
	            this.state = 124;
	            this.nl();
	        }

	        this.state = 128;
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
	        this.state = 130;
	        this.param();
	        this.state = 136;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 131;
	                this.nl();
	                this.state = 132;
	                this.param(); 
	            }
	            this.state = 138;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 139;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 142;
	        this.match(DiiaParser.DEF);
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 143;
	            localctx.d_structure = this.identifier();
	            this.state = 144;
	            this.match(DiiaParser.DOT);

	        }
	        this.state = 148;
	        localctx.d_name = this.identifier();
	        this.state = 149;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 150;
	        this.nls();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 151;
	            localctx.d_params = this.params();
	        }

	        this.state = 154;
	        this.nls();
	        this.state = 156;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 157;
	            localctx.d_type = this.type_value(0);
	        }

	        this.state = 160;
	        this.nl();
	        this.state = 164;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
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
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & 311299) !== 0)) {
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
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & 311299) !== 0)) {
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
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & 311299) !== 0)) {
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
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 212;
	            localctx.tc_name = this.identifier();

	        }
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 52825116) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & 311299) !== 0)) {
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
	        this.state = 232;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	        case 50:
	        case 52:
	            this.state = 225;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 14:
	            	this.state = 223;
	            	localctx.t_pak = this.match(DiiaParser.PAK);
	            	break;
	            case 50:
	            	this.state = 224;
	            	localctx.t_relative = this.match(DiiaParser.DOT);
	            	break;
	            case 52:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 227;
	            localctx.t_elements_chain = this.identifiers_chain(0);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===36) {
	                this.state = 228;
	                localctx.t_star = this.match(DiiaParser.STAR);
	            }

	            break;
	        case 56:
	            this.state = 231;
	            localctx.t_remote = this.match(DiiaParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 234;
	            this.match(DiiaParser.AS);
	            this.state = 235;
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
	        this.state = 238;
	        this.match(DiiaParser.GIVE);
	        this.state = 239;
	        localctx.g_name = this.identifier();
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 240;
	            this.match(DiiaParser.AS);
	            this.state = 241;
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
	        this.state = 248;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 245;
	            this.match(DiiaParser.NUMBER);
	            break;
	        case 56:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 246;
	            this.match(DiiaParser.STRING);
	            break;
	        case 52:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 247;
	            this.identifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 262;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 260;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ChainContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 250;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 251;
	                    this.match(DiiaParser.DOT);
	                    this.state = 252;
	                    localctx.c_right = this.value(3);
	                    break;

	                case 2:
	                    localctx = new CallContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 253;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 254;
	                    this.match(DiiaParser.OPEN_PAREN);
	                    this.state = 257;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	                    if(la_===1) {
	                        this.state = 255;
	                        localctx.c_args = this.args();

	                    } else if(la_===2) {
	                        this.state = 256;
	                        localctx.c_named_args = this.named_args();

	                    }
	                    this.state = 259;
	                    this.match(DiiaParser.CLOSE_PAREN);
	                    break;

	                } 
	            }
	            this.state = 264;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 266;
	            this.value(0);
	            break;

	        case 2:
	            localctx = new FunctionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 267;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 268;
	                localctx.f_params = this.params();
	            }

	            this.state = 271;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 272;
	                localctx.f_type = this.type_value(0);
	            }

	            this.state = 275;
	            this.match(DiiaParser.COLON);
	            this.state = 276;
	            localctx.f_body = this.expr(5);
	            break;

	        case 3:
	            localctx = new Anonymous_diiaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 278;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18) {
	                this.state = 277;
	                localctx.d_async = this.match(DiiaParser.ASYNC);
	            }

	            this.state = 280;
	            this.match(DiiaParser.DEF);
	            this.state = 281;
	            this.match(DiiaParser.OPEN_PAREN);

	            this.state = 282;
	            this.nls();
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 283;
	                localctx.d_params = this.params();
	            }

	            this.state = 286;
	            this.nls();
	            this.state = 288;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 289;
	                localctx.d_type = this.type_value(0);
	            }

	            this.state = 292;
	            this.nl();
	            this.state = 296;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            if(la_===1) {
	                this.state = 293;
	                localctx.d_body = this.body();
	                this.state = 294;
	                this.nl();

	            }
	            this.state = 298;
	            this.nls();
	            this.state = 299;
	            this.match(DiiaParser.END);
	            break;

	        case 4:
	            localctx = new NestedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 301;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 302;
	            localctx.n_value = this.expr(0);
	            this.state = 303;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 5:
	            localctx = new Call_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 305;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 306;
	            localctx.c_value = this.expr(0);
	            this.state = 307;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 308;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 311;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            if(la_===1) {
	                this.state = 309;
	                localctx.c_args = this.args();

	            } else if(la_===2) {
	                this.state = 310;
	                localctx.c_named_args = this.named_args();

	            }
	            this.state = 313;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 6:
	            localctx = new WaitContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 315;
	            this.match(DiiaParser.WAIT);
	            this.state = 316;
	            localctx.w_value = this.expr(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 347;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 345;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Arithmetic_mulContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 319;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 320;
	                    localctx.a_operation = this.arithmetic_op_mul();
	                    this.state = 321;
	                    localctx.a_right = this.expr(11);
	                    break;

	                case 2:
	                    localctx = new Arithmetic_addContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 323;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 324;
	                    localctx.a_operation = this.arithmetic_op_add();
	                    this.state = 325;
	                    localctx.a_right = this.expr(10);
	                    break;

	                case 3:
	                    localctx = new TernaryContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.t_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 327;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 328;
	                    this.nls();
	                    this.state = 329;
	                    this.match(DiiaParser.TERNARY);
	                    this.state = 330;
	                    this.nls();
	                    this.state = 331;
	                    localctx.t_positive = this.expr(0);
	                    this.state = 332;
	                    this.nls();
	                    this.state = 333;
	                    this.match(DiiaParser.COLON);
	                    this.state = 334;
	                    this.nls();
	                    this.state = 335;
	                    localctx.t_negative = this.expr(9);
	                    break;

	                case 4:
	                    localctx = new ComparisonContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 337;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 338;
	                    localctx.c_operation = this.comparison_op();
	                    this.state = 339;
	                    localctx.c_right = this.expr(8);
	                    break;

	                case 5:
	                    localctx = new TestContext(this, new ExprContext(this, _parentctx, _parentState));
	                    localctx.t_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_expr);
	                    this.state = 341;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 342;
	                    localctx.t_operation = this.test_op();
	                    this.state = 343;
	                    localctx.t_right = this.expr(7);
	                    break;

	                } 
	            }
	            this.state = 349;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
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



	throw_() {
	    let localctx = new ThrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DiiaParser.RULE_throw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.match(DiiaParser.THROW);
	        this.state = 351;
	        localctx.t_value = this.expr(0);
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
	    this.enterRule(localctx, 32, DiiaParser.RULE_assign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 353;
	            localctx.a_identifiers_chain = this.identifiers_chain(0);
	            break;

	        case 2:
	            this.state = 354;
	            localctx.a_identifier = this.identifier();
	            this.state = 356;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 355;
	                localctx.a_type = this.type_value(0);
	            }

	            break;

	        }
	        this.state = 360;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 361;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_assign_value);
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 363;
	            this.expr(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 364;
	            this.assign();
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



	wait_assign() {
	    let localctx = new Wait_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DiiaParser.RULE_wait_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(DiiaParser.WAIT);
	        this.state = 368;
	        localctx.wa_assign = this.assign();
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
	    this.enterRule(localctx, 38, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
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
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, DiiaParser.RULE_identifiers_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        localctx.ic_identifier = this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 380;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifiers_chainContext(this, _parentctx, _parentState);
	                localctx.ic_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_identifiers_chain);
	                this.state = 375;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 376;
	                this.match(DiiaParser.DOT);
	                this.state = 377;
	                localctx.ic_right = this.identifiers_chain(2); 
	            }
	            this.state = 382;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
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


	type_value(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Type_valueContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, DiiaParser.RULE_type_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        localctx.tv_single = this.identifiers_chain(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 392;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Type_valueContext(this, _parentctx, _parentState);
	                localctx.tv_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_type_value);
	                this.state = 386;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 387;
	                localctx.tv_operation = this.test_op();
	                this.state = 388;
	                localctx.tv_right = this.type_value(2); 
	            }
	            this.state = 394;
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



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DiiaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.arg();
	        this.state = 400;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 396;
	                this.match(DiiaParser.COMMA);
	                this.state = 397;
	                this.arg(); 
	            }
	            this.state = 402;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	        }

	        this.state = 404;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 403;
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
	    this.enterRule(localctx, 46, DiiaParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.nls();
	        this.state = 407;
	        localctx.a_value = this.expr(0);
	        this.state = 408;
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
	    this.enterRule(localctx, 48, DiiaParser.RULE_named_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.named_arg();
	        this.state = 415;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 411;
	                this.match(DiiaParser.COMMA);
	                this.state = 412;
	                this.named_arg(); 
	            }
	            this.state = 417;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
	        }

	        this.state = 419;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 418;
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_named_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.nls();
	        this.state = 422;
	        localctx.na_name = this.identifier();
	        this.state = 423;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 424;
	        localctx.na_value = this.expr(0);
	        this.state = 425;
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
	    this.enterRule(localctx, 52, DiiaParser.RULE_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
	        this.param();
	        this.state = 435;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 428;
	                this.nls();
	                this.state = 429;
	                this.match(DiiaParser.COMMA);
	                this.state = 430;
	                this.nls();
	                this.state = 431;
	                this.param(); 
	            }
	            this.state = 437;
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, DiiaParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        localctx.p_name = this.identifier();
	        this.state = 440;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 439;
	            localctx.p_type = this.type_value(0);
	        }

	        this.state = 444;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 442;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 443;
	            localctx.p_value = this.param_value();
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



	param_value() {
	    let localctx = new Param_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, DiiaParser.RULE_param_value);
	    try {
	        this.state = 449;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            localctx = new Param_value_numberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 446;
	            this.match(DiiaParser.NUMBER);
	            break;
	        case 56:
	            localctx = new Param_value_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 447;
	            this.match(DiiaParser.STRING);
	            break;
	        case 52:
	            localctx = new Param_value_identifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 448;
	            this.identifier();
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



	body() {
	    let localctx = new BodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this.body_element();
	        this.state = 457;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 452;
	                this.nl();
	                this.state = 453;
	                this.body_element(); 
	            }
	            this.state = 459;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
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
	    this.enterRule(localctx, 60, DiiaParser.RULE_body_element);
	    try {
	        this.state = 472;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 460;
	            this.structure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 461;
	            this.diia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 462;
	            this.if_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 463;
	            this.each();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 464;
	            this.while_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 465;
	            this.try_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 466;
	            this.expr(0);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 467;
	            this.throw_();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 468;
	            this.wait_assign();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 469;
	            this.assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 470;
	            this.return_body_line();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 471;
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
	    this.enterRule(localctx, 62, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
	        this.match(DiiaParser.RETURN);
	        this.state = 475;
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
	    this.enterRule(localctx, 64, DiiaParser.RULE_arithmetic_op_mul);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        _la = this._input.LA(1);
	        if(!(_la===47 || _la===48)) {
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
	    this.enterRule(localctx, 66, DiiaParser.RULE_arithmetic_op_add);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        _la = this._input.LA(1);
	        if(!(_la===45 || _la===46)) {
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
	    this.enterRule(localctx, 68, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
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
	    this.enterRule(localctx, 70, DiiaParser.RULE_comparison_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
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
	    this.enterRule(localctx, 72, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
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
	    this.enterRule(localctx, 74, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 490;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,51,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 487;
	                this.nl(); 
	            }
	            this.state = 492;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,51,this._ctx);
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
DiiaParser.STAR = 36;
DiiaParser.SKIP_SPACES = 37;
DiiaParser.NL = 38;
DiiaParser.OPEN_PAREN = 39;
DiiaParser.CLOSE_PAREN = 40;
DiiaParser.OPEN_ARRAY = 41;
DiiaParser.CLOSE_ARRAY = 42;
DiiaParser.COMMA = 43;
DiiaParser.ASSIGN = 44;
DiiaParser.PLUS = 45;
DiiaParser.MINUS = 46;
DiiaParser.MUL = 47;
DiiaParser.DIV = 48;
DiiaParser.COLON = 49;
DiiaParser.DOT = 50;
DiiaParser.NOT = 51;
DiiaParser.ID = 52;
DiiaParser.NUMBER = 53;
DiiaParser.INTEGER = 54;
DiiaParser.FLOAT = 55;
DiiaParser.STRING = 56;
DiiaParser.LINE_COMMENT = 57;
DiiaParser.COMMENT = 58;

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
DiiaParser.RULE_throw = 15;
DiiaParser.RULE_assign = 16;
DiiaParser.RULE_assign_value = 17;
DiiaParser.RULE_wait_assign = 18;
DiiaParser.RULE_identifier = 19;
DiiaParser.RULE_identifiers_chain = 20;
DiiaParser.RULE_type_value = 21;
DiiaParser.RULE_args = 22;
DiiaParser.RULE_arg = 23;
DiiaParser.RULE_named_args = 24;
DiiaParser.RULE_named_arg = 25;
DiiaParser.RULE_params = 26;
DiiaParser.RULE_param = 27;
DiiaParser.RULE_param_value = 28;
DiiaParser.RULE_body = 29;
DiiaParser.RULE_body_element = 30;
DiiaParser.RULE_return_body_line = 31;
DiiaParser.RULE_arithmetic_op_mul = 32;
DiiaParser.RULE_arithmetic_op_add = 33;
DiiaParser.RULE_test_op = 34;
DiiaParser.RULE_comparison_op = 35;
DiiaParser.RULE_nl = 36;
DiiaParser.RULE_nls = 37;

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

	throw_() {
	    return this.getTypedRuleContext(ThrowContext,0);
	};

	wait_assign() {
	    return this.getTypedRuleContext(Wait_assignContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	take() {
	    return this.getTypedRuleContext(TakeContext,0);
	};

	give() {
	    return this.getTypedRuleContext(GiveContext,0);
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
        this.d_type = null; // Type_valueContext
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

	type_value() {
	    return this.getTypedRuleContext(Type_valueContext,0);
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
        this.t_pak = null; // Token
        this.t_relative = null; // Token
        this.t_elements_chain = null; // Identifiers_chainContext
        this.t_star = null; // Token
        this.t_remote = null; // Token
        this.t_as = null; // IdentifierContext
    }

	TAKE() {
	    return this.getToken(DiiaParser.TAKE, 0);
	};

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	PAK() {
	    return this.getToken(DiiaParser.PAK, 0);
	};

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	STAR() {
	    return this.getToken(DiiaParser.STAR, 0);
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

class Anonymous_diiaContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.d_async = null; // Token;
        this.d_params = null; // ParamsContext;
        this.d_type = null; // Type_valueContext;
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

	ASYNC() {
	    return this.getToken(DiiaParser.ASYNC, 0);
	};

	type_value() {
	    return this.getTypedRuleContext(Type_valueContext,0);
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

class FunctionContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.f_params = null; // ParamsContext;
        this.f_type = null; // Type_valueContext;
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

	type_value() {
	    return this.getTypedRuleContext(Type_valueContext,0);
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

class ThrowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_throw;
        this.t_value = null; // ExprContext
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
        this.a_identifiers_chain = null; // Identifiers_chainContext
        this.a_identifier = null; // IdentifierContext
        this.a_type = null; // Type_valueContext
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

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	type_value() {
	    return this.getTypedRuleContext(Type_valueContext,0);
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
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



class Wait_assignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_wait_assign;
        this.wa_assign = null; // AssignContext
    }

	WAIT() {
	    return this.getToken(DiiaParser.WAIT, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterWait_assign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitWait_assign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitWait_assign(this);
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



class Type_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_type_value;
        this.tv_left = null; // Type_valueContext
        this.tv_single = null; // Identifiers_chainContext
        this.tv_operation = null; // Test_opContext
        this.tv_right = null; // Type_valueContext
    }

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	type_value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_valueContext);
	    } else {
	        return this.getTypedRuleContext(Type_valueContext,i);
	    }
	};

	test_op() {
	    return this.getTypedRuleContext(Test_opContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterType_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitType_value(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitType_value(this);
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
        this.p_type = null; // Type_valueContext
        this.p_value = null; // Param_valueContext
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	type_value() {
	    return this.getTypedRuleContext(Type_valueContext,0);
	};

	param_value() {
	    return this.getTypedRuleContext(Param_valueContext,0);
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



class Param_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_param_value;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Param_value_identifierContext extends Param_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterParam_value_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitParam_value_identifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitParam_value_identifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Param_value_identifierContext = Param_value_identifierContext;

class Param_value_numberContext extends Param_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(DiiaParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterParam_value_number(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitParam_value_number(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitParam_value_number(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Param_value_numberContext = Param_value_numberContext;

class Param_value_stringContext extends Param_valueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterParam_value_string(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitParam_value_string(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitParam_value_string(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Param_value_stringContext = Param_value_stringContext;

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

	throw_() {
	    return this.getTypedRuleContext(ThrowContext,0);
	};

	wait_assign() {
	    return this.getTypedRuleContext(Wait_assignContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
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
DiiaParser.ThrowContext = ThrowContext; 
DiiaParser.AssignContext = AssignContext; 
DiiaParser.Assign_valueContext = Assign_valueContext; 
DiiaParser.Wait_assignContext = Wait_assignContext; 
DiiaParser.IdentifierContext = IdentifierContext; 
DiiaParser.Identifiers_chainContext = Identifiers_chainContext; 
DiiaParser.Type_valueContext = Type_valueContext; 
DiiaParser.ArgsContext = ArgsContext; 
DiiaParser.ArgContext = ArgContext; 
DiiaParser.Named_argsContext = Named_argsContext; 
DiiaParser.Named_argContext = Named_argContext; 
DiiaParser.ParamsContext = ParamsContext; 
DiiaParser.ParamContext = ParamContext; 
DiiaParser.Param_valueContext = Param_valueContext; 
DiiaParser.BodyContext = BodyContext; 
DiiaParser.Body_elementContext = Body_elementContext; 
DiiaParser.Return_body_lineContext = Return_body_lineContext; 
DiiaParser.Arithmetic_op_mulContext = Arithmetic_op_mulContext; 
DiiaParser.Arithmetic_op_addContext = Arithmetic_op_addContext; 
DiiaParser.Test_opContext = Test_opContext; 
DiiaParser.Comparison_opContext = Comparison_opContext; 
DiiaParser.NlContext = NlContext; 
DiiaParser.NlsContext = NlsContext; 
