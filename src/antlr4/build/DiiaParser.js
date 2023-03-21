// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,63,570,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,94,8,1,10,1,12,1,97,9,1,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,113,8,2,1,3,1,3,1,
3,1,3,1,3,1,3,3,3,121,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,130,8,4,1,4,1,
4,1,4,1,4,1,4,3,4,137,8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,145,8,5,10,5,12,5,
148,9,5,1,6,1,6,1,6,3,6,153,8,6,1,7,3,7,156,8,7,1,7,1,7,1,7,1,7,3,7,162,
8,7,1,7,1,7,1,7,1,7,3,7,168,8,7,1,7,1,7,1,7,1,7,3,7,174,8,7,1,7,1,7,1,7,
1,7,3,7,180,8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,191,8,8,1,8,1,8,
1,8,1,8,3,8,197,8,8,1,8,1,8,3,8,201,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,209,
8,9,1,9,1,9,1,9,1,9,1,9,3,9,216,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,
3,10,226,8,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,236,8,11,1,11,
1,11,1,11,3,11,241,8,11,1,11,1,11,1,12,1,12,1,12,3,12,248,8,12,1,12,1,12,
3,12,252,8,12,1,12,3,12,255,8,12,1,12,1,12,3,12,259,8,12,1,13,1,13,1,13,
1,13,3,13,265,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,291,
8,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,299,8,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,3,14,324,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,346,8,14,
10,14,12,14,349,9,14,1,15,1,15,1,15,5,15,354,8,15,10,15,12,15,357,9,15,1,
15,3,15,360,8,15,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,3,17,371,8,
17,1,17,1,17,3,17,375,8,17,1,17,1,17,1,17,3,17,380,8,17,1,17,1,17,1,17,1,
17,3,17,386,8,17,1,17,1,17,1,17,1,17,3,17,392,8,17,1,17,1,17,1,17,1,17,3,
17,398,8,17,1,17,1,17,1,17,3,17,403,8,17,1,18,1,18,1,18,1,19,1,19,1,19,1,
19,5,19,412,8,19,10,19,12,19,415,9,19,1,19,3,19,418,8,19,1,19,1,19,1,20,
1,20,1,20,1,20,1,21,1,21,1,21,3,21,429,8,21,1,21,3,21,432,8,21,1,21,1,21,
1,21,1,22,1,22,3,22,439,8,22,1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,25,1,25,
1,25,1,25,5,25,452,8,25,10,25,12,25,455,9,25,1,26,1,26,1,26,1,26,1,26,1,
26,1,26,5,26,464,8,26,10,26,12,26,467,9,26,1,27,1,27,1,27,5,27,472,8,27,
10,27,12,27,475,9,27,1,27,3,27,478,8,27,1,28,1,28,1,28,1,28,1,29,1,29,1,
29,5,29,487,8,29,10,29,12,29,490,9,29,1,29,3,29,493,8,29,1,30,1,30,1,30,
1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,5,31,507,8,31,10,31,12,31,510,
9,31,1,32,1,32,3,32,514,8,32,1,32,3,32,517,8,32,1,32,1,32,3,32,521,8,32,
1,33,1,33,1,33,3,33,526,8,33,1,34,1,34,1,34,1,34,5,34,532,8,34,10,34,12,
34,535,9,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
3,35,549,8,35,1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,41,
1,41,1,42,5,42,565,8,42,10,42,12,42,568,9,42,1,42,0,3,28,50,52,43,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,0,4,2,0,48,49,53,56,1,0,46,
47,1,0,18,19,3,0,5,8,15,15,27,34,631,0,86,1,0,0,0,2,89,1,0,0,0,4,112,1,0,
0,0,6,114,1,0,0,0,8,125,1,0,0,0,10,140,1,0,0,0,12,152,1,0,0,0,14,155,1,0,
0,0,16,184,1,0,0,0,18,202,1,0,0,0,20,219,1,0,0,0,22,229,1,0,0,0,24,244,1,
0,0,0,26,260,1,0,0,0,28,298,1,0,0,0,30,350,1,0,0,0,32,361,1,0,0,0,34,402,
1,0,0,0,36,404,1,0,0,0,38,407,1,0,0,0,40,421,1,0,0,0,42,431,1,0,0,0,44,438,
1,0,0,0,46,440,1,0,0,0,48,443,1,0,0,0,50,445,1,0,0,0,52,456,1,0,0,0,54,468,
1,0,0,0,56,479,1,0,0,0,58,483,1,0,0,0,60,494,1,0,0,0,62,500,1,0,0,0,64,513,
1,0,0,0,66,525,1,0,0,0,68,527,1,0,0,0,70,548,1,0,0,0,72,550,1,0,0,0,74,553,
1,0,0,0,76,555,1,0,0,0,78,557,1,0,0,0,80,559,1,0,0,0,82,561,1,0,0,0,84,566,
1,0,0,0,86,87,3,2,1,0,87,88,5,0,0,1,88,1,1,0,0,0,89,95,3,4,2,0,90,91,3,82,
41,0,91,92,3,4,2,0,92,94,1,0,0,0,93,90,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,
0,95,96,1,0,0,0,96,3,1,0,0,0,97,95,1,0,0,0,98,113,3,6,3,0,99,113,3,8,4,0,
100,113,3,14,7,0,101,113,3,16,8,0,102,113,3,18,9,0,103,113,3,20,10,0,104,
113,3,22,11,0,105,113,3,34,17,0,106,113,3,36,18,0,107,113,3,46,23,0,108,
113,3,42,21,0,109,113,3,84,42,0,110,113,3,24,12,0,111,113,3,26,13,0,112,
98,1,0,0,0,112,99,1,0,0,0,112,100,1,0,0,0,112,101,1,0,0,0,112,102,1,0,0,
0,112,103,1,0,0,0,112,104,1,0,0,0,112,105,1,0,0,0,112,106,1,0,0,0,112,107,
1,0,0,0,112,108,1,0,0,0,112,109,1,0,0,0,112,110,1,0,0,0,112,111,1,0,0,0,
113,5,1,0,0,0,114,115,5,25,0,0,115,116,3,48,24,0,116,120,3,82,41,0,117,118,
3,2,1,0,118,119,3,82,41,0,119,121,1,0,0,0,120,117,1,0,0,0,120,121,1,0,0,
0,121,122,1,0,0,0,122,123,3,84,42,0,123,124,5,1,0,0,124,7,1,0,0,0,125,126,
5,3,0,0,126,129,3,48,24,0,127,128,5,15,0,0,128,130,3,50,25,0,129,127,1,0,
0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,132,3,82,41,0,132,136,3,84,42,0,
133,134,3,10,5,0,134,135,3,82,41,0,135,137,1,0,0,0,136,133,1,0,0,0,136,137,
1,0,0,0,137,138,1,0,0,0,138,139,5,1,0,0,139,9,1,0,0,0,140,146,3,12,6,0,141,
142,3,82,41,0,142,143,3,12,6,0,143,145,1,0,0,0,144,141,1,0,0,0,145,148,1,
0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,11,1,0,0,0,148,146,1,0,0,0,149,
153,3,64,32,0,150,153,3,14,7,0,151,153,3,84,42,0,152,149,1,0,0,0,152,150,
1,0,0,0,152,151,1,0,0,0,153,13,1,0,0,0,154,156,5,17,0,0,155,154,1,0,0,0,
155,156,1,0,0,0,156,157,1,0,0,0,157,161,5,2,0,0,158,159,3,48,24,0,159,160,
5,51,0,0,160,162,1,0,0,0,161,158,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,
163,164,3,48,24,0,164,165,5,40,0,0,165,167,3,84,42,0,166,168,3,62,31,0,167,
166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,170,3,84,42,0,170,171,1,
0,0,0,171,173,5,41,0,0,172,174,3,52,26,0,173,172,1,0,0,0,173,174,1,0,0,0,
174,175,1,0,0,0,175,179,3,82,41,0,176,177,3,68,34,0,177,178,3,82,41,0,178,
180,1,0,0,0,179,176,1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,182,3,84,
42,0,182,183,5,1,0,0,183,15,1,0,0,0,184,185,5,9,0,0,185,186,3,34,17,0,186,
190,3,82,41,0,187,188,3,68,34,0,188,189,3,82,41,0,189,191,1,0,0,0,190,187,
1,0,0,0,190,191,1,0,0,0,191,200,1,0,0,0,192,193,5,22,0,0,193,194,3,68,34,
0,194,195,3,82,41,0,195,197,1,0,0,0,196,192,1,0,0,0,196,197,1,0,0,0,197,
198,1,0,0,0,198,201,5,1,0,0,199,201,3,16,8,0,200,196,1,0,0,0,200,199,1,0,
0,0,201,17,1,0,0,0,202,203,5,4,0,0,203,204,3,34,17,0,204,208,5,14,0,0,205,
206,3,48,24,0,206,207,5,44,0,0,207,209,1,0,0,0,208,205,1,0,0,0,208,209,1,
0,0,0,209,210,1,0,0,0,210,211,3,48,24,0,211,215,3,82,41,0,212,213,3,68,34,
0,213,214,3,82,41,0,214,216,1,0,0,0,215,212,1,0,0,0,215,216,1,0,0,0,216,
217,1,0,0,0,217,218,5,1,0,0,218,19,1,0,0,0,219,220,5,24,0,0,220,221,3,34,
17,0,221,225,3,82,41,0,222,223,3,68,34,0,223,224,3,82,41,0,224,226,1,0,0,
0,225,222,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,228,5,1,0,0,228,21,
1,0,0,0,229,230,5,20,0,0,230,231,3,82,41,0,231,232,3,68,34,0,232,233,3,82,
41,0,233,235,5,21,0,0,234,236,3,48,24,0,235,234,1,0,0,0,235,236,1,0,0,0,
236,240,1,0,0,0,237,238,3,68,34,0,238,239,3,82,41,0,239,241,1,0,0,0,240,
237,1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,243,5,1,0,0,243,23,1,0,0,
0,244,254,5,11,0,0,245,248,5,13,0,0,246,248,5,51,0,0,247,245,1,0,0,0,247,
246,1,0,0,0,247,248,1,0,0,0,248,249,1,0,0,0,249,251,3,50,25,0,250,252,5,
35,0,0,251,250,1,0,0,0,251,252,1,0,0,0,252,255,1,0,0,0,253,255,5,61,0,0,
254,247,1,0,0,0,254,253,1,0,0,0,255,258,1,0,0,0,256,257,5,14,0,0,257,259,
3,48,24,0,258,256,1,0,0,0,258,259,1,0,0,0,259,25,1,0,0,0,260,261,5,12,0,
0,261,264,3,48,24,0,262,263,5,14,0,0,263,265,3,48,24,0,264,262,1,0,0,0,264,
265,1,0,0,0,265,27,1,0,0,0,266,267,6,14,-1,0,267,299,5,58,0,0,268,299,5,
61,0,0,269,299,3,48,24,0,270,271,5,46,0,0,271,299,3,28,14,16,272,273,5,47,
0,0,273,299,3,28,14,15,274,275,5,38,0,0,275,299,3,28,14,14,276,277,5,39,
0,0,277,299,3,28,14,13,278,279,5,52,0,0,279,299,3,28,14,10,280,281,5,40,
0,0,281,282,3,34,17,0,282,283,5,41,0,0,283,299,1,0,0,0,284,285,5,40,0,0,
285,286,3,34,17,0,286,287,5,41,0,0,287,290,5,40,0,0,288,291,3,54,27,0,289,
291,3,58,29,0,290,288,1,0,0,0,290,289,1,0,0,0,290,291,1,0,0,0,291,292,1,
0,0,0,292,293,5,41,0,0,293,299,1,0,0,0,294,295,5,42,0,0,295,296,3,30,15,
0,296,297,5,43,0,0,297,299,1,0,0,0,298,266,1,0,0,0,298,268,1,0,0,0,298,269,
1,0,0,0,298,270,1,0,0,0,298,272,1,0,0,0,298,274,1,0,0,0,298,276,1,0,0,0,
298,278,1,0,0,0,298,280,1,0,0,0,298,284,1,0,0,0,298,294,1,0,0,0,299,347,
1,0,0,0,300,301,10,18,0,0,301,302,5,51,0,0,302,346,3,28,14,19,303,304,10,
6,0,0,304,305,3,74,37,0,305,306,3,28,14,7,306,346,1,0,0,0,307,308,10,5,0,
0,308,309,3,76,38,0,309,310,3,28,14,6,310,346,1,0,0,0,311,312,10,3,0,0,312,
313,3,78,39,0,313,314,3,28,14,4,314,346,1,0,0,0,315,316,10,2,0,0,316,317,
3,80,40,0,317,318,3,28,14,3,318,346,1,0,0,0,319,320,10,17,0,0,320,323,5,
40,0,0,321,324,3,54,27,0,322,324,3,58,29,0,323,321,1,0,0,0,323,322,1,0,0,
0,323,324,1,0,0,0,324,325,1,0,0,0,325,346,5,41,0,0,326,327,10,12,0,0,327,
346,5,38,0,0,328,329,10,11,0,0,329,346,5,39,0,0,330,331,10,9,0,0,331,332,
5,42,0,0,332,333,3,34,17,0,333,334,5,43,0,0,334,346,1,0,0,0,335,336,10,4,
0,0,336,337,3,84,42,0,337,338,5,26,0,0,338,339,3,84,42,0,339,340,3,34,17,
0,340,341,3,84,42,0,341,342,5,50,0,0,342,343,3,84,42,0,343,344,3,34,17,0,
344,346,1,0,0,0,345,300,1,0,0,0,345,303,1,0,0,0,345,307,1,0,0,0,345,311,
1,0,0,0,345,315,1,0,0,0,345,319,1,0,0,0,345,326,1,0,0,0,345,328,1,0,0,0,
345,330,1,0,0,0,345,335,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,
1,0,0,0,348,29,1,0,0,0,349,347,1,0,0,0,350,355,3,32,16,0,351,352,5,44,0,
0,352,354,3,32,16,0,353,351,1,0,0,0,354,357,1,0,0,0,355,353,1,0,0,0,355,
356,1,0,0,0,356,359,1,0,0,0,357,355,1,0,0,0,358,360,5,44,0,0,359,358,1,0,
0,0,359,360,1,0,0,0,360,31,1,0,0,0,361,362,3,84,42,0,362,363,3,34,17,0,363,
364,3,84,42,0,364,33,1,0,0,0,365,403,3,28,14,0,366,367,5,10,0,0,367,403,
3,28,14,0,368,370,5,40,0,0,369,371,3,62,31,0,370,369,1,0,0,0,370,371,1,0,
0,0,371,372,1,0,0,0,372,374,5,41,0,0,373,375,3,52,26,0,374,373,1,0,0,0,374,
375,1,0,0,0,375,376,1,0,0,0,376,377,5,50,0,0,377,403,3,34,17,0,378,380,5,
17,0,0,379,378,1,0,0,0,379,380,1,0,0,0,380,381,1,0,0,0,381,382,5,2,0,0,382,
383,5,40,0,0,383,385,3,84,42,0,384,386,3,62,31,0,385,384,1,0,0,0,385,386,
1,0,0,0,386,387,1,0,0,0,387,388,3,84,42,0,388,389,1,0,0,0,389,391,5,41,0,
0,390,392,3,52,26,0,391,390,1,0,0,0,391,392,1,0,0,0,392,393,1,0,0,0,393,
397,3,82,41,0,394,395,3,68,34,0,395,396,3,82,41,0,396,398,1,0,0,0,397,394,
1,0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,399,400,3,84,42,0,400,401,5,1,0,
0,401,403,1,0,0,0,402,365,1,0,0,0,402,366,1,0,0,0,402,368,1,0,0,0,402,379,
1,0,0,0,403,35,1,0,0,0,404,405,5,23,0,0,405,406,3,34,17,0,406,37,1,0,0,0,
407,408,5,42,0,0,408,413,3,40,20,0,409,410,5,44,0,0,410,412,3,40,20,0,411,
409,1,0,0,0,412,415,1,0,0,0,413,411,1,0,0,0,413,414,1,0,0,0,414,417,1,0,
0,0,415,413,1,0,0,0,416,418,5,44,0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,
419,1,0,0,0,419,420,5,43,0,0,420,39,1,0,0,0,421,422,3,84,42,0,422,423,3,
48,24,0,423,424,3,84,42,0,424,41,1,0,0,0,425,432,3,50,25,0,426,428,3,48,
24,0,427,429,3,52,26,0,428,427,1,0,0,0,428,429,1,0,0,0,429,432,1,0,0,0,430,
432,3,38,19,0,431,425,1,0,0,0,431,426,1,0,0,0,431,430,1,0,0,0,432,433,1,
0,0,0,433,434,5,45,0,0,434,435,3,44,22,0,435,43,1,0,0,0,436,439,3,34,17,
0,437,439,3,42,21,0,438,436,1,0,0,0,438,437,1,0,0,0,439,45,1,0,0,0,440,441,
5,10,0,0,441,442,3,42,21,0,442,47,1,0,0,0,443,444,5,57,0,0,444,49,1,0,0,
0,445,446,6,25,-1,0,446,447,3,48,24,0,447,453,1,0,0,0,448,449,10,1,0,0,449,
450,5,51,0,0,450,452,3,50,25,2,451,448,1,0,0,0,452,455,1,0,0,0,453,451,1,
0,0,0,453,454,1,0,0,0,454,51,1,0,0,0,455,453,1,0,0,0,456,457,6,26,-1,0,457,
458,3,50,25,0,458,465,1,0,0,0,459,460,10,1,0,0,460,461,3,78,39,0,461,462,
3,52,26,2,462,464,1,0,0,0,463,459,1,0,0,0,464,467,1,0,0,0,465,463,1,0,0,
0,465,466,1,0,0,0,466,53,1,0,0,0,467,465,1,0,0,0,468,473,3,56,28,0,469,470,
5,44,0,0,470,472,3,56,28,0,471,469,1,0,0,0,472,475,1,0,0,0,473,471,1,0,0,
0,473,474,1,0,0,0,474,477,1,0,0,0,475,473,1,0,0,0,476,478,5,44,0,0,477,476,
1,0,0,0,477,478,1,0,0,0,478,55,1,0,0,0,479,480,3,84,42,0,480,481,3,34,17,
0,481,482,3,84,42,0,482,57,1,0,0,0,483,488,3,60,30,0,484,485,5,44,0,0,485,
487,3,60,30,0,486,484,1,0,0,0,487,490,1,0,0,0,488,486,1,0,0,0,488,489,1,
0,0,0,489,492,1,0,0,0,490,488,1,0,0,0,491,493,5,44,0,0,492,491,1,0,0,0,492,
493,1,0,0,0,493,59,1,0,0,0,494,495,3,84,42,0,495,496,3,48,24,0,496,497,5,
45,0,0,497,498,3,34,17,0,498,499,3,84,42,0,499,61,1,0,0,0,500,508,3,64,32,
0,501,502,3,84,42,0,502,503,5,44,0,0,503,504,3,84,42,0,504,505,3,64,32,0,
505,507,1,0,0,0,506,501,1,0,0,0,507,510,1,0,0,0,508,506,1,0,0,0,508,509,
1,0,0,0,509,63,1,0,0,0,510,508,1,0,0,0,511,514,3,48,24,0,512,514,3,38,19,
0,513,511,1,0,0,0,513,512,1,0,0,0,514,516,1,0,0,0,515,517,3,52,26,0,516,
515,1,0,0,0,516,517,1,0,0,0,517,520,1,0,0,0,518,519,5,45,0,0,519,521,3,66,
33,0,520,518,1,0,0,0,520,521,1,0,0,0,521,65,1,0,0,0,522,526,5,58,0,0,523,
526,5,61,0,0,524,526,3,48,24,0,525,522,1,0,0,0,525,523,1,0,0,0,525,524,1,
0,0,0,526,67,1,0,0,0,527,533,3,70,35,0,528,529,3,82,41,0,529,530,3,70,35,
0,530,532,1,0,0,0,531,528,1,0,0,0,532,535,1,0,0,0,533,531,1,0,0,0,533,534,
1,0,0,0,534,69,1,0,0,0,535,533,1,0,0,0,536,549,3,8,4,0,537,549,3,14,7,0,
538,549,3,16,8,0,539,549,3,18,9,0,540,549,3,20,10,0,541,549,3,22,11,0,542,
549,3,34,17,0,543,549,3,36,18,0,544,549,3,46,23,0,545,549,3,42,21,0,546,
549,3,72,36,0,547,549,3,84,42,0,548,536,1,0,0,0,548,537,1,0,0,0,548,538,
1,0,0,0,548,539,1,0,0,0,548,540,1,0,0,0,548,541,1,0,0,0,548,542,1,0,0,0,
548,543,1,0,0,0,548,544,1,0,0,0,548,545,1,0,0,0,548,546,1,0,0,0,548,547,
1,0,0,0,549,71,1,0,0,0,550,551,5,16,0,0,551,552,3,70,35,0,552,73,1,0,0,0,
553,554,7,0,0,0,554,75,1,0,0,0,555,556,7,1,0,0,556,77,1,0,0,0,557,558,7,
2,0,0,558,79,1,0,0,0,559,560,7,3,0,0,560,81,1,0,0,0,561,562,5,37,0,0,562,
83,1,0,0,0,563,565,3,82,41,0,564,563,1,0,0,0,565,568,1,0,0,0,566,564,1,0,
0,0,566,567,1,0,0,0,567,85,1,0,0,0,568,566,1,0,0,0,58,95,112,120,129,136,
146,152,155,161,167,173,179,190,196,200,208,215,225,235,240,247,251,254,
258,264,290,298,323,345,347,355,359,370,374,379,385,391,397,402,413,417,
428,431,438,453,465,473,477,488,492,508,513,516,520,525,533,548,566];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DiiaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'\\u043A\\u0456\\u043D\\u0435\\u0446\\u044C'", 
                            "'\\u0434\\u0456\\u044F'", "'\\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430'", 
                            "'\\u043F\\u0435\\u0440\\u0435\\u0431\\u0440\\u0430\\u0442\\u0438'", 
                            "'=='", "'!='", "'>='", "'<='", "'\\u044F\\u043A\\u0449\\u043E'", 
                            "'\\u0447\\u0435\\u043A\\u0430\\u0442\\u0438'", 
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
                            "'.*'", null, null, "'--'", "'++'", "'('", "')'", 
                            "'['", "']'", "','", "'='", "'+'", "'-'", "'*'", 
                            "'/'", "':'", "'.'", "'!'", "'%'", "'//'", "'**'", 
                            "'^'" ];
    static symbolicNames = [ null, "END", "DIIA", "STRUCTURE", "FOR", "EQ", 
                             "NOT_EQ", "GREATER", "SMALLER", "IF", "WAIT", 
                             "TAKE", "GIVE", "PAK", "AS", "IS", "RETURN", 
                             "ASYNC", "AND", "OR", "TRY", "CATCH", "ELSE", 
                             "THROW", "WHILE", "MODULE", "TERNARY", "EQ_WORD", 
                             "GR_WORD", "SM_WORD", "NOT_GR_WORD", "NOT_SM_WORD", 
                             "NOT_EQ_WORD", "NOT_IS_WORD", "NOT_WORD", "STAR_ALL", 
                             "SKIP_SPACES", "NL", "DECREMENT", "INCREMENT", 
                             "OPEN_PAREN", "CLOSE_PAREN", "OPEN_ARRAY", 
                             "CLOSE_ARRAY", "COMMA", "ASSIGN", "PLUS", "MINUS", 
                             "MUL", "DIV", "COLON", "DOT", "NOT", "PERCENT", 
                             "DIVDIV", "POW", "XOR", "ID", "NUMBER", "INTEGER", 
                             "FLOAT", "STRING", "LINE_COMMENT", "COMMENT" ];
    static ruleNames = [ "file", "program", "program_element", "module", 
                         "structure", "structure_elements", "structure_element", 
                         "diia", "if", "each", "while", "try", "take", "give", 
                         "value", "array_elements", "array_element", "expr", 
                         "throw", "array_destruction", "array_destruction_el", 
                         "assign", "assign_value", "wait_assign", "identifier", 
                         "identifiers_chain", "type_value", "args", "arg", 
                         "named_args", "named_arg", "params", "param", "param_value", 
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
    	case 14:
    	    		return this.value_sempred(localctx, predIndex);
    	case 25:
    	    		return this.identifiers_chain_sempred(localctx, predIndex);
    	case 26:
    	    		return this.type_value_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 18);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 17);
    		case 6:
    			return this.precpred(this._ctx, 12);
    		case 7:
    			return this.precpred(this._ctx, 11);
    		case 8:
    			return this.precpred(this._ctx, 9);
    		case 9:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    identifiers_chain_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 10:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    type_value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 11:
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
	        this.state = 86;
	        localctx.f_program = this.program();
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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DiiaParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.program_element();
	        this.state = 95;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 90;
	                this.nl();
	                this.state = 91;
	                this.program_element(); 
	            }
	            this.state = 97;
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
	        this.state = 112;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.module();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.structure();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 100;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 101;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 102;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 103;
	            this.while_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 104;
	            this.try_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 105;
	            this.expr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 106;
	            this.throw_();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 107;
	            this.wait_assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 108;
	            this.assign();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 109;
	            this.nls();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 110;
	            this.take();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 111;
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
	        this.state = 114;
	        this.match(DiiaParser.MODULE);
	        this.state = 115;
	        localctx.m_name = this.identifier();
	        this.state = 116;
	        this.nl();
	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 117;
	            localctx.m_program = this.program();
	            this.state = 118;
	            this.nl();

	        }
	        this.state = 122;
	        this.nls();
	        this.state = 123;
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
	        this.state = 125;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 126;
	        localctx.s_name = this.identifier();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 127;
	            this.match(DiiaParser.IS);
	            this.state = 128;
	            localctx.s_parent = this.identifiers_chain(0);
	        }

	        this.state = 131;
	        this.nl();
	        this.state = 132;
	        this.nls();
	        this.state = 136;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2 || _la===17 || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 1048609) !== 0)) {
	            this.state = 133;
	            localctx.s_elements = this.structure_elements();
	            this.state = 134;
	            this.nl();
	        }

	        this.state = 138;
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



	structure_elements() {
	    let localctx = new Structure_elementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DiiaParser.RULE_structure_elements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        this.structure_element();
	        this.state = 146;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 141;
	                this.nl();
	                this.state = 142;
	                this.structure_element(); 
	            }
	            this.state = 148;
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



	structure_element() {
	    let localctx = new Structure_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DiiaParser.RULE_structure_element);
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 149;
	            this.param();
	            break;
	        case 2:
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 150;
	            this.diia();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 151;
	            this.nls();
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



	diia() {
	    let localctx = new DiiaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 154;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 157;
	        this.match(DiiaParser.DIIA);
	        this.state = 161;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 158;
	            localctx.d_structure = this.identifier();
	            this.state = 159;
	            this.match(DiiaParser.DOT);

	        }
	        this.state = 163;
	        localctx.d_name = this.identifier();
	        this.state = 164;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 165;
	        this.nls();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42 || _la===57) {
	            this.state = 166;
	            localctx.d_params = this.params();
	        }

	        this.state = 169;
	        this.nls();
	        this.state = 171;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 173;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 172;
	            localctx.d_type = this.type_value(0);
	        }

	        this.state = 175;
	        this.nl();
	        this.state = 179;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 176;
	            localctx.d_body = this.body();
	            this.state = 177;
	            this.nl();

	        }
	        this.state = 181;
	        this.nls();
	        this.state = 182;
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
	    this.enterRule(localctx, 16, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(DiiaParser.IF);
	        this.state = 185;
	        localctx.i_value = this.expr();
	        this.state = 186;
	        this.nl();
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 187;
	            localctx.i_body = this.body();
	            this.state = 188;
	            this.nl();

	        }
	        this.state = 200;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 22:
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22) {
	                this.state = 192;
	                this.match(DiiaParser.ELSE);
	                this.state = 193;
	                localctx.i_else_body = this.body();
	                this.state = 194;
	                this.nl();
	            }

	            this.state = 198;
	            this.match(DiiaParser.END);
	            break;
	        case 9:
	            this.state = 199;
	            localctx.i_else_if = this.if_();
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



	each() {
	    let localctx = new EachContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(DiiaParser.FOR);
	        this.state = 203;
	        localctx.e_iterator = this.expr();
	        this.state = 204;
	        this.match(DiiaParser.AS);
	        this.state = 208;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 205;
	            localctx.e_key_name = this.identifier();
	            this.state = 206;
	            this.match(DiiaParser.COMMA);

	        }
	        this.state = 210;
	        localctx.e_name = this.identifier();
	        this.state = 211;
	        this.nl();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 26412572) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 19957295) !== 0)) {
	            this.state = 212;
	            localctx.e_body = this.body();
	            this.state = 213;
	            this.nl();
	        }

	        this.state = 217;
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
	    this.enterRule(localctx, 20, DiiaParser.RULE_while);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(DiiaParser.WHILE);
	        this.state = 220;
	        localctx.w_value = this.expr();
	        this.state = 221;
	        this.nl();
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 26412572) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 19957295) !== 0)) {
	            this.state = 222;
	            localctx.w_body = this.body();
	            this.state = 223;
	            this.nl();
	        }

	        this.state = 227;
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
	    this.enterRule(localctx, 22, DiiaParser.RULE_try);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(DiiaParser.TRY);
	        this.state = 230;
	        this.nl();
	        this.state = 231;
	        localctx.t_body = this.body();
	        this.state = 232;
	        this.nl();
	        this.state = 233;
	        this.match(DiiaParser.CATCH);
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 234;
	            localctx.tc_name = this.identifier();

	        }
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 26412572) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & 19957295) !== 0)) {
	            this.state = 237;
	            localctx.tc_body = this.body();
	            this.state = 238;
	            this.nl();
	        }

	        this.state = 242;
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
	    this.enterRule(localctx, 24, DiiaParser.RULE_take);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(DiiaParser.TAKE);
	        this.state = 254;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	        case 51:
	        case 57:
	            this.state = 247;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 13:
	            	this.state = 245;
	            	localctx.t_pak = this.match(DiiaParser.PAK);
	            	break;
	            case 51:
	            	this.state = 246;
	            	localctx.t_relative = this.match(DiiaParser.DOT);
	            	break;
	            case 57:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 249;
	            localctx.t_elements_chain = this.identifiers_chain(0);
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===35) {
	                this.state = 250;
	                localctx.t_star = this.match(DiiaParser.STAR_ALL);
	            }

	            break;
	        case 61:
	            this.state = 253;
	            localctx.t_remote = this.match(DiiaParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 256;
	            this.match(DiiaParser.AS);
	            this.state = 257;
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
	    this.enterRule(localctx, 26, DiiaParser.RULE_give);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(DiiaParser.GIVE);
	        this.state = 261;
	        localctx.g_name = this.identifier();
	        this.state = 264;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14) {
	            this.state = 262;
	            this.match(DiiaParser.AS);
	            this.state = 263;
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
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, DiiaParser.RULE_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 267;
	            this.match(DiiaParser.NUMBER);
	            break;

	        case 2:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 268;
	            this.match(DiiaParser.STRING);
	            break;

	        case 3:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 269;
	            this.identifier();
	            break;

	        case 4:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 270;
	            this.match(DiiaParser.PLUS);
	            this.state = 271;
	            localctx.p_value = this.value(16);
	            break;

	        case 5:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 272;
	            this.match(DiiaParser.MINUS);
	            this.state = 273;
	            localctx.n_value = this.value(15);
	            break;

	        case 6:
	            localctx = new Pre_decrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 274;
	            this.match(DiiaParser.DECREMENT);
	            this.state = 275;
	            localctx.pd_value = this.value(14);
	            break;

	        case 7:
	            localctx = new Pre_incrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 276;
	            this.match(DiiaParser.INCREMENT);
	            this.state = 277;
	            localctx.pi_value = this.value(13);
	            break;

	        case 8:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 278;
	            this.match(DiiaParser.NOT);
	            this.state = 279;
	            localctx.n_value = this.value(10);
	            break;

	        case 9:
	            localctx = new NestedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 280;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 281;
	            localctx.n_value = this.expr();
	            this.state = 282;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 10:
	            localctx = new Call_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 284;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 285;
	            localctx.c_value = this.expr();
	            this.state = 286;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 287;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 290;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            if(la_===1) {
	                this.state = 288;
	                localctx.c_args = this.args();

	            } else if(la_===2) {
	                this.state = 289;
	                localctx.c_named_args = this.named_args();

	            }
	            this.state = 292;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 11:
	            localctx = new ArrayContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 294;
	            this.match(DiiaParser.OPEN_ARRAY);
	            this.state = 295;
	            localctx.a_elements = this.array_elements();
	            this.state = 296;
	            this.match(DiiaParser.CLOSE_ARRAY);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 347;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 345;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ChainContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 300;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 301;
	                    this.match(DiiaParser.DOT);
	                    this.state = 302;
	                    localctx.c_right = this.value(19);
	                    break;

	                case 2:
	                    localctx = new Arithmetic_mulContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 303;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 304;
	                    localctx.a_operation = this.arithmetic_op_mul();
	                    this.state = 305;
	                    localctx.a_right = this.value(7);
	                    break;

	                case 3:
	                    localctx = new Arithmetic_addContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 307;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 308;
	                    localctx.a_operation = this.arithmetic_op_add();
	                    this.state = 309;
	                    localctx.a_right = this.value(6);
	                    break;

	                case 4:
	                    localctx = new TestContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 311;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 312;
	                    localctx.t_operation = this.test_op();
	                    this.state = 313;
	                    localctx.t_right = this.value(4);
	                    break;

	                case 5:
	                    localctx = new ComparisonContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 315;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 316;
	                    localctx.c_operation = this.comparison_op();
	                    this.state = 317;
	                    localctx.c_right = this.value(3);
	                    break;

	                case 6:
	                    localctx = new CallContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 319;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 320;
	                    this.match(DiiaParser.OPEN_PAREN);
	                    this.state = 323;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	                    if(la_===1) {
	                        this.state = 321;
	                        localctx.c_args = this.args();

	                    } else if(la_===2) {
	                        this.state = 322;
	                        localctx.c_named_args = this.named_args();

	                    }
	                    this.state = 325;
	                    this.match(DiiaParser.CLOSE_PAREN);
	                    break;

	                case 7:
	                    localctx = new Post_decrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pd_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 326;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 327;
	                    this.match(DiiaParser.DECREMENT);
	                    break;

	                case 8:
	                    localctx = new Post_incrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pi_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 328;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 329;
	                    this.match(DiiaParser.INCREMENT);
	                    break;

	                case 9:
	                    localctx = new AccessContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 330;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 331;
	                    this.match(DiiaParser.OPEN_ARRAY);
	                    this.state = 332;
	                    localctx.a_inner = this.expr();
	                    this.state = 333;
	                    this.match(DiiaParser.CLOSE_ARRAY);
	                    break;

	                case 10:
	                    localctx = new TernaryContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 335;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 336;
	                    this.nls();
	                    this.state = 337;
	                    this.match(DiiaParser.TERNARY);
	                    this.state = 338;
	                    this.nls();
	                    this.state = 339;
	                    localctx.t_positive = this.expr();
	                    this.state = 340;
	                    this.nls();
	                    this.state = 341;
	                    this.match(DiiaParser.COLON);
	                    this.state = 342;
	                    this.nls();
	                    this.state = 343;
	                    localctx.t_negative = this.expr();
	                    break;

	                } 
	            }
	            this.state = 349;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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



	array_elements() {
	    let localctx = new Array_elementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DiiaParser.RULE_array_elements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.array_element();
	        this.state = 355;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 351;
	                this.match(DiiaParser.COMMA);
	                this.state = 352;
	                this.array_element(); 
	            }
	            this.state = 357;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
	        }

	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 358;
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



	array_element() {
	    let localctx = new Array_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DiiaParser.RULE_array_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.nls();
	        this.state = 362;
	        localctx.ae_value = this.expr();
	        this.state = 363;
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, DiiaParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 402;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 365;
	            this.value(0);
	            break;

	        case 2:
	            localctx = new WaitContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 366;
	            this.match(DiiaParser.WAIT);
	            this.state = 367;
	            localctx.w_value = this.value(0);
	            break;

	        case 3:
	            localctx = new FunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 368;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 370;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42 || _la===57) {
	                this.state = 369;
	                localctx.f_params = this.params();
	            }

	            this.state = 372;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 374;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===57) {
	                this.state = 373;
	                localctx.f_type = this.type_value(0);
	            }

	            this.state = 376;
	            this.match(DiiaParser.COLON);
	            this.state = 377;
	            localctx.f_body = this.expr();
	            break;

	        case 4:
	            localctx = new Anonymous_diiaContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 379;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 378;
	                localctx.d_async = this.match(DiiaParser.ASYNC);
	            }

	            this.state = 381;
	            this.match(DiiaParser.DIIA);
	            this.state = 382;
	            this.match(DiiaParser.OPEN_PAREN);

	            this.state = 383;
	            this.nls();
	            this.state = 385;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===42 || _la===57) {
	                this.state = 384;
	                localctx.d_params = this.params();
	            }

	            this.state = 387;
	            this.nls();
	            this.state = 389;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 391;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===57) {
	                this.state = 390;
	                localctx.d_type = this.type_value(0);
	            }

	            this.state = 393;
	            this.nl();
	            this.state = 397;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	            if(la_===1) {
	                this.state = 394;
	                localctx.d_body = this.body();
	                this.state = 395;
	                this.nl();

	            }
	            this.state = 399;
	            this.nls();
	            this.state = 400;
	            this.match(DiiaParser.END);
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



	throw_() {
	    let localctx = new ThrowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DiiaParser.RULE_throw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(DiiaParser.THROW);
	        this.state = 405;
	        localctx.t_value = this.expr();
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



	array_destruction() {
	    let localctx = new Array_destructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DiiaParser.RULE_array_destruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.match(DiiaParser.OPEN_ARRAY);
	        this.state = 408;
	        this.array_destruction_el();
	        this.state = 413;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 409;
	                this.match(DiiaParser.COMMA);
	                this.state = 410;
	                this.array_destruction_el(); 
	            }
	            this.state = 415;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
	        }

	        this.state = 417;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 416;
	            this.match(DiiaParser.COMMA);
	        }

	        this.state = 419;
	        this.match(DiiaParser.CLOSE_ARRAY);
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



	array_destruction_el() {
	    let localctx = new Array_destruction_elContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, DiiaParser.RULE_array_destruction_el);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.nls();
	        this.state = 422;
	        localctx.aade_id = this.identifier();
	        this.state = 423;
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
	    this.enterRule(localctx, 42, DiiaParser.RULE_assign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 425;
	            localctx.a_identifiers_chain = this.identifiers_chain(0);
	            break;

	        case 2:
	            this.state = 426;
	            localctx.a_identifier = this.identifier();
	            this.state = 428;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===57) {
	                this.state = 427;
	                localctx.a_type = this.type_value(0);
	            }

	            break;

	        case 3:
	            this.state = 430;
	            localctx.a_array_destruction = this.array_destruction();
	            break;

	        }
	        this.state = 433;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 434;
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
	    this.enterRule(localctx, 44, DiiaParser.RULE_assign_value);
	    try {
	        this.state = 438;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 436;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 437;
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
	    this.enterRule(localctx, 46, DiiaParser.RULE_wait_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(DiiaParser.WAIT);
	        this.state = 441;
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
	    this.enterRule(localctx, 48, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
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
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, DiiaParser.RULE_identifiers_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 446;
	        localctx.ic_identifier = this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 453;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifiers_chainContext(this, _parentctx, _parentState);
	                localctx.ic_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_identifiers_chain);
	                this.state = 448;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 449;
	                this.match(DiiaParser.DOT);
	                this.state = 450;
	                localctx.ic_right = this.identifiers_chain(2); 
	            }
	            this.state = 455;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
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
	    const _startState = 52;
	    this.enterRecursionRule(localctx, 52, DiiaParser.RULE_type_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        localctx.tv_single = this.identifiers_chain(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 465;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Type_valueContext(this, _parentctx, _parentState);
	                localctx.tv_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_type_value);
	                this.state = 459;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 460;
	                localctx.tv_operation = this.test_op();
	                this.state = 461;
	                localctx.tv_right = this.type_value(2); 
	            }
	            this.state = 467;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
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
	    this.enterRule(localctx, 54, DiiaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.arg();
	        this.state = 473;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 469;
	                this.match(DiiaParser.COMMA);
	                this.state = 470;
	                this.arg(); 
	            }
	            this.state = 475;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
	        }

	        this.state = 477;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 476;
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
	    this.enterRule(localctx, 56, DiiaParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.nls();
	        this.state = 480;
	        localctx.a_value = this.expr();
	        this.state = 481;
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
	    this.enterRule(localctx, 58, DiiaParser.RULE_named_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
	        this.named_arg();
	        this.state = 488;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 484;
	                this.match(DiiaParser.COMMA);
	                this.state = 485;
	                this.named_arg(); 
	            }
	            this.state = 490;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
	        }

	        this.state = 492;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 491;
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
	    this.enterRule(localctx, 60, DiiaParser.RULE_named_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.nls();
	        this.state = 495;
	        localctx.na_name = this.identifier();
	        this.state = 496;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 497;
	        localctx.na_value = this.expr();
	        this.state = 498;
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
	    this.enterRule(localctx, 62, DiiaParser.RULE_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 500;
	        this.param();
	        this.state = 508;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 501;
	                this.nls();
	                this.state = 502;
	                this.match(DiiaParser.COMMA);
	                this.state = 503;
	                this.nls();
	                this.state = 504;
	                this.param(); 
	            }
	            this.state = 510;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
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
	    this.enterRule(localctx, 64, DiiaParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 513;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            this.state = 511;
	            localctx.p_name = this.identifier();
	            break;
	        case 42:
	            this.state = 512;
	            localctx.p_array_destruction = this.array_destruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 516;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 515;
	            localctx.p_type = this.type_value(0);
	        }

	        this.state = 520;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===45) {
	            this.state = 518;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 519;
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
	    this.enterRule(localctx, 66, DiiaParser.RULE_param_value);
	    try {
	        this.state = 525;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 58:
	            localctx = new Param_value_numberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 522;
	            this.match(DiiaParser.NUMBER);
	            break;
	        case 61:
	            localctx = new Param_value_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 523;
	            this.match(DiiaParser.STRING);
	            break;
	        case 57:
	            localctx = new Param_value_identifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 524;
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
	    this.enterRule(localctx, 68, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 527;
	        this.body_element();
	        this.state = 533;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 528;
	                this.nl();
	                this.state = 529;
	                this.body_element(); 
	            }
	            this.state = 535;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
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
	    this.enterRule(localctx, 70, DiiaParser.RULE_body_element);
	    try {
	        this.state = 548;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,56,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 536;
	            this.structure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 537;
	            this.diia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 538;
	            this.if_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 539;
	            this.each();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 540;
	            this.while_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 541;
	            this.try_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 542;
	            this.expr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 543;
	            this.throw_();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 544;
	            this.wait_assign();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 545;
	            this.assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 546;
	            this.return_body_line();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 547;
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
	    this.enterRule(localctx, 72, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 550;
	        this.match(DiiaParser.RETURN);
	        this.state = 551;
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
	    this.enterRule(localctx, 74, DiiaParser.RULE_arithmetic_op_mul);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & 483) !== 0))) {
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
	    this.enterRule(localctx, 76, DiiaParser.RULE_arithmetic_op_add);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 555;
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



	test_op() {
	    let localctx = new Test_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 557;
	        _la = this._input.LA(1);
	        if(!(_la===18 || _la===19)) {
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
	    this.enterRule(localctx, 80, DiiaParser.RULE_comparison_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 559;
	        _la = this._input.LA(1);
	        if(!(((((_la - 5)) & ~0x1f) == 0 && ((1 << (_la - 5)) & 1069548559) !== 0))) {
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
	    this.enterRule(localctx, 82, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
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
	    this.enterRule(localctx, 84, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 563;
	                this.nl(); 
	            }
	            this.state = 568;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
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
DiiaParser.DIIA = 2;
DiiaParser.STRUCTURE = 3;
DiiaParser.FOR = 4;
DiiaParser.EQ = 5;
DiiaParser.NOT_EQ = 6;
DiiaParser.GREATER = 7;
DiiaParser.SMALLER = 8;
DiiaParser.IF = 9;
DiiaParser.WAIT = 10;
DiiaParser.TAKE = 11;
DiiaParser.GIVE = 12;
DiiaParser.PAK = 13;
DiiaParser.AS = 14;
DiiaParser.IS = 15;
DiiaParser.RETURN = 16;
DiiaParser.ASYNC = 17;
DiiaParser.AND = 18;
DiiaParser.OR = 19;
DiiaParser.TRY = 20;
DiiaParser.CATCH = 21;
DiiaParser.ELSE = 22;
DiiaParser.THROW = 23;
DiiaParser.WHILE = 24;
DiiaParser.MODULE = 25;
DiiaParser.TERNARY = 26;
DiiaParser.EQ_WORD = 27;
DiiaParser.GR_WORD = 28;
DiiaParser.SM_WORD = 29;
DiiaParser.NOT_GR_WORD = 30;
DiiaParser.NOT_SM_WORD = 31;
DiiaParser.NOT_EQ_WORD = 32;
DiiaParser.NOT_IS_WORD = 33;
DiiaParser.NOT_WORD = 34;
DiiaParser.STAR_ALL = 35;
DiiaParser.SKIP_SPACES = 36;
DiiaParser.NL = 37;
DiiaParser.DECREMENT = 38;
DiiaParser.INCREMENT = 39;
DiiaParser.OPEN_PAREN = 40;
DiiaParser.CLOSE_PAREN = 41;
DiiaParser.OPEN_ARRAY = 42;
DiiaParser.CLOSE_ARRAY = 43;
DiiaParser.COMMA = 44;
DiiaParser.ASSIGN = 45;
DiiaParser.PLUS = 46;
DiiaParser.MINUS = 47;
DiiaParser.MUL = 48;
DiiaParser.DIV = 49;
DiiaParser.COLON = 50;
DiiaParser.DOT = 51;
DiiaParser.NOT = 52;
DiiaParser.PERCENT = 53;
DiiaParser.DIVDIV = 54;
DiiaParser.POW = 55;
DiiaParser.XOR = 56;
DiiaParser.ID = 57;
DiiaParser.NUMBER = 58;
DiiaParser.INTEGER = 59;
DiiaParser.FLOAT = 60;
DiiaParser.STRING = 61;
DiiaParser.LINE_COMMENT = 62;
DiiaParser.COMMENT = 63;

DiiaParser.RULE_file = 0;
DiiaParser.RULE_program = 1;
DiiaParser.RULE_program_element = 2;
DiiaParser.RULE_module = 3;
DiiaParser.RULE_structure = 4;
DiiaParser.RULE_structure_elements = 5;
DiiaParser.RULE_structure_element = 6;
DiiaParser.RULE_diia = 7;
DiiaParser.RULE_if = 8;
DiiaParser.RULE_each = 9;
DiiaParser.RULE_while = 10;
DiiaParser.RULE_try = 11;
DiiaParser.RULE_take = 12;
DiiaParser.RULE_give = 13;
DiiaParser.RULE_value = 14;
DiiaParser.RULE_array_elements = 15;
DiiaParser.RULE_array_element = 16;
DiiaParser.RULE_expr = 17;
DiiaParser.RULE_throw = 18;
DiiaParser.RULE_array_destruction = 19;
DiiaParser.RULE_array_destruction_el = 20;
DiiaParser.RULE_assign = 21;
DiiaParser.RULE_assign_value = 22;
DiiaParser.RULE_wait_assign = 23;
DiiaParser.RULE_identifier = 24;
DiiaParser.RULE_identifiers_chain = 25;
DiiaParser.RULE_type_value = 26;
DiiaParser.RULE_args = 27;
DiiaParser.RULE_arg = 28;
DiiaParser.RULE_named_args = 29;
DiiaParser.RULE_named_arg = 30;
DiiaParser.RULE_params = 31;
DiiaParser.RULE_param = 32;
DiiaParser.RULE_param_value = 33;
DiiaParser.RULE_body = 34;
DiiaParser.RULE_body_element = 35;
DiiaParser.RULE_return_body_line = 36;
DiiaParser.RULE_arithmetic_op_mul = 37;
DiiaParser.RULE_arithmetic_op_add = 38;
DiiaParser.RULE_test_op = 39;
DiiaParser.RULE_comparison_op = 40;
DiiaParser.RULE_nl = 41;
DiiaParser.RULE_nls = 42;

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
        this.s_elements = null; // Structure_elementsContext
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

	structure_elements() {
	    return this.getTypedRuleContext(Structure_elementsContext,0);
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



class Structure_elementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_structure_elements;
    }

	structure_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Structure_elementContext);
	    } else {
	        return this.getTypedRuleContext(Structure_elementContext,i);
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
	        listener.enterStructure_elements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitStructure_elements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitStructure_elements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Structure_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_structure_element;
    }

	param() {
	    return this.getTypedRuleContext(ParamContext,0);
	};

	diia() {
	    return this.getTypedRuleContext(DiiaContext,0);
	};

	nls() {
	    return this.getTypedRuleContext(NlsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterStructure_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitStructure_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitStructure_element(this);
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

	DIIA() {
	    return this.getToken(DiiaParser.DIIA, 0);
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
        this.i_else_if = null; // IfContext
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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

	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	ELSE() {
	    return this.getToken(DiiaParser.ELSE, 0);
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
        this.e_key_name = null; // IdentifierContext
        this.e_name = null; // IdentifierContext
        this.e_body = null; // BodyContext
    }

	FOR() {
	    return this.getToken(DiiaParser.FOR, 0);
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

	COMMA() {
	    return this.getToken(DiiaParser.COMMA, 0);
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

	STAR_ALL() {
	    return this.getToken(DiiaParser.STAR_ALL, 0);
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


class Arithmetic_mulContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_left = null; // ValueContext;
        this.a_operation = null; // Arithmetic_op_mulContext;
        this.a_right = null; // ValueContext;
        super.copyFrom(ctx);
    }

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

class Pre_incrementContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.pi_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	INCREMENT() {
	    return this.getToken(DiiaParser.INCREMENT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterPre_increment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitPre_increment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitPre_increment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Pre_incrementContext = Pre_incrementContext;

class Arithmetic_addContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_left = null; // ValueContext;
        this.a_operation = null; // Arithmetic_op_addContext;
        this.a_right = null; // ValueContext;
        super.copyFrom(ctx);
    }

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

class ComparisonContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.c_left = null; // ValueContext;
        this.c_operation = null; // Comparison_opContext;
        this.c_right = null; // ValueContext;
        super.copyFrom(ctx);
    }

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

class AccessContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_left = null; // ValueContext;
        this.a_inner = null; // ExprContext;
        super.copyFrom(ctx);
    }

	OPEN_ARRAY() {
	    return this.getToken(DiiaParser.OPEN_ARRAY, 0);
	};

	CLOSE_ARRAY() {
	    return this.getToken(DiiaParser.CLOSE_ARRAY, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitAccess(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitAccess(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.AccessContext = AccessContext;

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

class TestContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.t_left = null; // ValueContext;
        this.t_operation = null; // Test_opContext;
        this.t_right = null; // ValueContext;
        super.copyFrom(ctx);
    }

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

class Call_exprContext extends ValueContext {

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

class PositiveContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.p_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	PLUS() {
	    return this.getToken(DiiaParser.PLUS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterPositive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitPositive(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitPositive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.PositiveContext = PositiveContext;

class NestedContext extends ValueContext {

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

class NegativeContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.n_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	MINUS() {
	    return this.getToken(DiiaParser.MINUS, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterNegative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNegative(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNegative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.NegativeContext = NegativeContext;

class NotContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.n_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(DiiaParser.NOT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitNot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.NotContext = NotContext;

class ArrayContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_elements = null; // Array_elementsContext;
        super.copyFrom(ctx);
    }

	OPEN_ARRAY() {
	    return this.getToken(DiiaParser.OPEN_ARRAY, 0);
	};

	CLOSE_ARRAY() {
	    return this.getToken(DiiaParser.CLOSE_ARRAY, 0);
	};

	array_elements() {
	    return this.getTypedRuleContext(Array_elementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArray(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.ArrayContext = ArrayContext;

class Pre_decrementContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.pd_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	DECREMENT() {
	    return this.getToken(DiiaParser.DECREMENT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterPre_decrement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitPre_decrement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitPre_decrement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Pre_decrementContext = Pre_decrementContext;

class Post_decrementContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.pd_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	DECREMENT() {
	    return this.getToken(DiiaParser.DECREMENT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterPost_decrement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitPost_decrement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitPost_decrement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Post_decrementContext = Post_decrementContext;

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

class Post_incrementContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.pi_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	INCREMENT() {
	    return this.getToken(DiiaParser.INCREMENT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterPost_increment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitPost_increment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitPost_increment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Post_incrementContext = Post_incrementContext;

class TernaryContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.t_value = null; // ValueContext;
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

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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

class Array_elementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_array_elements;
    }

	array_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Array_elementContext);
	    } else {
	        return this.getTypedRuleContext(Array_elementContext,i);
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
	        listener.enterArray_elements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArray_elements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArray_elements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Array_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_array_element;
        this.ae_value = null; // ExprContext
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
	        listener.enterArray_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArray_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArray_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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


class Anonymous_diiaContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.d_async = null; // Token;
        this.d_params = null; // ParamsContext;
        this.d_type = null; // Type_valueContext;
        this.d_body = null; // BodyContext;
        super.copyFrom(ctx);
    }

	DIIA() {
	    return this.getToken(DiiaParser.DIIA, 0);
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
        this.w_value = null; // ValueContext;
        super.copyFrom(ctx);
    }

	WAIT() {
	    return this.getToken(DiiaParser.WAIT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
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



class Array_destructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_array_destruction;
    }

	OPEN_ARRAY() {
	    return this.getToken(DiiaParser.OPEN_ARRAY, 0);
	};

	array_destruction_el = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Array_destruction_elContext);
	    } else {
	        return this.getTypedRuleContext(Array_destruction_elContext,i);
	    }
	};

	CLOSE_ARRAY() {
	    return this.getToken(DiiaParser.CLOSE_ARRAY, 0);
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
	        listener.enterArray_destruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArray_destruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArray_destruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Array_destruction_elContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_array_destruction_el;
        this.aade_id = null; // IdentifierContext
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

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterArray_destruction_el(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArray_destruction_el(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArray_destruction_el(this);
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
        this.a_array_destruction = null; // Array_destructionContext
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

	array_destruction() {
	    return this.getTypedRuleContext(Array_destructionContext,0);
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
        this.p_array_destruction = null; // Array_destructionContext
        this.p_type = null; // Type_valueContext
        this.p_value = null; // Param_valueContext
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	array_destruction() {
	    return this.getTypedRuleContext(Array_destructionContext,0);
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

	PERCENT() {
	    return this.getToken(DiiaParser.PERCENT, 0);
	};

	DIVDIV() {
	    return this.getToken(DiiaParser.DIVDIV, 0);
	};

	POW() {
	    return this.getToken(DiiaParser.POW, 0);
	};

	XOR() {
	    return this.getToken(DiiaParser.XOR, 0);
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
DiiaParser.Structure_elementsContext = Structure_elementsContext; 
DiiaParser.Structure_elementContext = Structure_elementContext; 
DiiaParser.DiiaContext = DiiaContext; 
DiiaParser.IfContext = IfContext; 
DiiaParser.EachContext = EachContext; 
DiiaParser.WhileContext = WhileContext; 
DiiaParser.TryContext = TryContext; 
DiiaParser.TakeContext = TakeContext; 
DiiaParser.GiveContext = GiveContext; 
DiiaParser.ValueContext = ValueContext; 
DiiaParser.Array_elementsContext = Array_elementsContext; 
DiiaParser.Array_elementContext = Array_elementContext; 
DiiaParser.ExprContext = ExprContext; 
DiiaParser.ThrowContext = ThrowContext; 
DiiaParser.Array_destructionContext = Array_destructionContext; 
DiiaParser.Array_destruction_elContext = Array_destruction_elContext; 
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
