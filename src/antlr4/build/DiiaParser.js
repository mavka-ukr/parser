// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,86,712,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,1,0,1,0,1,0,1,1,1,1,1,1,
1,1,5,1,116,8,1,10,1,12,1,119,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,137,8,2,1,3,1,3,3,3,141,8,3,1,3,1,3,1,3,1,
3,3,3,147,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,156,8,4,1,4,1,4,3,4,160,8,
4,1,4,1,4,1,4,1,4,1,4,3,4,167,8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,175,8,5,10,
5,12,5,178,9,5,1,6,1,6,1,6,3,6,183,8,6,1,7,1,7,1,7,1,7,3,7,189,8,7,1,7,1,
7,1,7,1,7,1,7,3,7,196,8,7,1,7,1,7,1,8,1,8,1,8,5,8,203,8,8,10,8,12,8,206,
9,8,1,9,1,9,1,9,1,9,5,9,212,8,9,10,9,12,9,215,9,9,1,10,1,10,1,10,1,10,3,
10,221,8,10,1,10,1,10,1,10,1,10,3,10,227,8,10,1,11,3,11,230,8,11,1,11,1,
11,1,11,1,11,3,11,236,8,11,1,11,1,11,1,11,1,11,3,11,242,8,11,1,11,1,11,1,
11,1,11,3,11,248,8,11,1,11,1,11,1,11,1,11,3,11,254,8,11,1,11,1,11,1,11,1,
12,1,12,1,12,1,12,1,12,1,12,3,12,265,8,12,1,12,1,12,1,12,1,12,3,12,271,8,
12,1,12,1,12,3,12,275,8,12,1,13,1,13,1,13,1,13,1,13,1,13,3,13,283,8,13,1,
13,3,13,286,8,13,1,13,1,13,1,13,1,13,3,13,292,8,13,1,13,1,13,1,14,1,14,1,
14,1,14,1,14,1,14,3,14,302,8,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,16,
1,16,1,16,1,16,3,16,315,8,16,1,16,1,16,1,16,3,16,320,8,16,1,16,1,16,1,17,
1,17,3,17,326,8,17,1,17,1,17,3,17,330,8,17,1,17,1,17,3,17,334,8,17,1,17,
1,17,1,17,3,17,339,8,17,1,17,1,17,3,17,343,8,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,3,17,353,8,17,3,17,355,8,17,1,18,1,18,1,18,1,18,5,18,361,
8,18,10,18,12,18,364,9,18,1,19,1,19,1,19,3,19,369,8,19,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,3,20,395,8,20,1,20,1,20,1,20,1,20,3,20,401,
8,20,1,20,1,20,1,20,3,20,406,8,20,1,20,3,20,409,8,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,3,20,434,8,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,456,
8,20,10,20,12,20,459,9,20,1,21,1,21,1,21,5,21,464,8,21,10,21,12,21,467,9,
21,1,22,1,22,1,22,1,22,1,23,1,23,1,23,5,23,476,8,23,10,23,12,23,479,9,23,
1,24,1,24,1,24,3,24,484,8,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,
3,25,495,8,25,1,25,1,25,3,25,499,8,25,1,25,1,25,1,25,3,25,504,8,25,1,25,
1,25,1,25,1,25,3,25,510,8,25,1,25,1,25,1,25,1,25,3,25,516,8,25,1,25,1,25,
1,25,1,25,3,25,522,8,25,1,25,1,25,1,25,3,25,527,8,25,1,26,1,26,1,26,1,27,
1,27,1,27,1,27,5,27,536,8,27,10,27,12,27,539,9,27,1,27,1,27,1,28,1,28,1,
28,1,28,1,29,1,29,1,29,1,29,5,29,551,8,29,10,29,12,29,554,9,29,1,29,1,29,
1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,3,31,567,8,31,1,31,1,31,3,31,
571,8,31,1,31,1,31,3,31,575,8,31,1,31,1,31,1,31,1,32,1,32,3,32,582,8,32,
1,33,1,33,1,34,1,34,1,34,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,5,36,597,
8,36,10,36,12,36,600,9,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,5,37,609,8,
37,10,37,12,37,612,9,37,1,38,1,38,1,38,5,38,617,8,38,10,38,12,38,620,9,38,
1,39,1,39,1,39,1,39,1,40,1,40,1,40,5,40,629,8,40,10,40,12,40,632,9,40,1,
41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,5,42,646,8,42,
10,42,12,42,649,9,42,1,43,1,43,1,43,3,43,654,8,43,1,43,3,43,657,8,43,1,43,
1,43,3,43,661,8,43,1,44,1,44,1,44,3,44,666,8,44,1,45,1,45,1,45,1,45,5,45,
672,8,45,10,45,12,45,675,9,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
46,1,46,1,46,1,46,1,46,1,46,3,46,691,8,46,1,47,1,47,1,47,1,48,1,48,1,49,
1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,5,53,707,8,53,10,53,12,53,710,9,
53,1,53,0,3,40,72,74,54,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,
84,86,88,90,92,94,96,98,100,102,104,106,0,5,1,0,53,62,2,0,65,66,70,73,1,
0,63,64,2,0,21,22,74,75,3,0,5,10,18,18,30,39,785,0,108,1,0,0,0,2,111,1,0,
0,0,4,136,1,0,0,0,6,138,1,0,0,0,8,151,1,0,0,0,10,170,1,0,0,0,12,182,1,0,
0,0,14,184,1,0,0,0,16,199,1,0,0,0,18,207,1,0,0,0,20,216,1,0,0,0,22,229,1,
0,0,0,24,258,1,0,0,0,26,276,1,0,0,0,28,295,1,0,0,0,30,305,1,0,0,0,32,308,
1,0,0,0,34,354,1,0,0,0,36,356,1,0,0,0,38,365,1,0,0,0,40,408,1,0,0,0,42,460,
1,0,0,0,44,468,1,0,0,0,46,472,1,0,0,0,48,480,1,0,0,0,50,526,1,0,0,0,52,528,
1,0,0,0,54,531,1,0,0,0,56,542,1,0,0,0,58,546,1,0,0,0,60,557,1,0,0,0,62,574,
1,0,0,0,64,581,1,0,0,0,66,583,1,0,0,0,68,585,1,0,0,0,70,588,1,0,0,0,72,590,
1,0,0,0,74,601,1,0,0,0,76,613,1,0,0,0,78,621,1,0,0,0,80,625,1,0,0,0,82,633,
1,0,0,0,84,639,1,0,0,0,86,653,1,0,0,0,88,665,1,0,0,0,90,667,1,0,0,0,92,690,
1,0,0,0,94,692,1,0,0,0,96,695,1,0,0,0,98,697,1,0,0,0,100,699,1,0,0,0,102,
701,1,0,0,0,104,703,1,0,0,0,106,708,1,0,0,0,108,109,3,2,1,0,109,110,5,0,
0,1,110,1,1,0,0,0,111,117,3,4,2,0,112,113,3,104,52,0,113,114,3,4,2,0,114,
116,1,0,0,0,115,112,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,
0,0,118,3,1,0,0,0,119,117,1,0,0,0,120,137,3,6,3,0,121,137,3,8,4,0,122,137,
3,14,7,0,123,137,3,22,11,0,124,137,3,24,12,0,125,137,3,26,13,0,126,137,3,
28,14,0,127,137,3,32,16,0,128,137,3,50,25,0,129,137,3,52,26,0,130,137,3,
30,15,0,131,137,3,68,34,0,132,137,3,62,31,0,133,137,3,106,53,0,134,137,3,
34,17,0,135,137,3,36,18,0,136,120,1,0,0,0,136,121,1,0,0,0,136,122,1,0,0,
0,136,123,1,0,0,0,136,124,1,0,0,0,136,125,1,0,0,0,136,126,1,0,0,0,136,127,
1,0,0,0,136,128,1,0,0,0,136,129,1,0,0,0,136,130,1,0,0,0,136,131,1,0,0,0,
136,132,1,0,0,0,136,133,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,5,1,
0,0,0,138,140,5,28,0,0,139,141,3,70,35,0,140,139,1,0,0,0,140,141,1,0,0,0,
141,142,1,0,0,0,142,146,3,104,52,0,143,144,3,2,1,0,144,145,3,104,52,0,145,
147,1,0,0,0,146,143,1,0,0,0,146,147,1,0,0,0,147,148,1,0,0,0,148,149,3,106,
53,0,149,150,5,1,0,0,150,7,1,0,0,0,151,152,5,3,0,0,152,155,3,70,35,0,153,
154,5,18,0,0,154,156,3,72,36,0,155,153,1,0,0,0,155,156,1,0,0,0,156,159,1,
0,0,0,157,158,5,42,0,0,158,160,3,16,8,0,159,157,1,0,0,0,159,160,1,0,0,0,
160,161,1,0,0,0,161,162,3,104,52,0,162,166,3,106,53,0,163,164,3,10,5,0,164,
165,3,104,52,0,165,167,1,0,0,0,166,163,1,0,0,0,166,167,1,0,0,0,167,168,1,
0,0,0,168,169,5,1,0,0,169,9,1,0,0,0,170,176,3,12,6,0,171,172,3,104,52,0,
172,173,3,12,6,0,173,175,1,0,0,0,174,171,1,0,0,0,175,178,1,0,0,0,176,174,
1,0,0,0,176,177,1,0,0,0,177,11,1,0,0,0,178,176,1,0,0,0,179,183,3,86,43,0,
180,183,3,22,11,0,181,183,3,106,53,0,182,179,1,0,0,0,182,180,1,0,0,0,182,
181,1,0,0,0,183,13,1,0,0,0,184,185,5,41,0,0,185,188,3,70,35,0,186,187,5,
42,0,0,187,189,3,16,8,0,188,186,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,
190,191,3,104,52,0,191,195,3,106,53,0,192,193,3,18,9,0,193,194,3,104,52,
0,194,196,1,0,0,0,195,192,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,198,
5,1,0,0,198,15,1,0,0,0,199,204,3,72,36,0,200,201,5,52,0,0,201,203,3,72,36,
0,202,200,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,0,0,0,205,17,
1,0,0,0,206,204,1,0,0,0,207,213,3,20,10,0,208,209,3,104,52,0,209,210,3,20,
10,0,210,212,1,0,0,0,211,208,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,
214,1,0,0,0,214,19,1,0,0,0,215,213,1,0,0,0,216,217,3,70,35,0,217,218,5,48,
0,0,218,220,3,106,53,0,219,221,3,84,42,0,220,219,1,0,0,0,220,221,1,0,0,0,
221,222,1,0,0,0,222,223,3,106,53,0,223,224,1,0,0,0,224,226,5,49,0,0,225,
227,3,74,37,0,226,225,1,0,0,0,226,227,1,0,0,0,227,21,1,0,0,0,228,230,5,20,
0,0,229,228,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,235,5,2,0,0,232,
233,3,70,35,0,233,234,5,68,0,0,234,236,1,0,0,0,235,232,1,0,0,0,235,236,1,
0,0,0,236,237,1,0,0,0,237,238,3,70,35,0,238,239,5,48,0,0,239,241,3,106,53,
0,240,242,3,84,42,0,241,240,1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,
244,3,106,53,0,244,245,1,0,0,0,245,247,5,49,0,0,246,248,3,74,37,0,247,246,
1,0,0,0,247,248,1,0,0,0,248,249,1,0,0,0,249,253,3,104,52,0,250,251,3,90,
45,0,251,252,3,104,52,0,252,254,1,0,0,0,253,250,1,0,0,0,253,254,1,0,0,0,
254,255,1,0,0,0,255,256,3,106,53,0,256,257,5,1,0,0,257,23,1,0,0,0,258,259,
5,11,0,0,259,260,3,50,25,0,260,264,3,104,52,0,261,262,3,90,45,0,262,263,
3,104,52,0,263,265,1,0,0,0,264,261,1,0,0,0,264,265,1,0,0,0,265,274,1,0,0,
0,266,267,5,25,0,0,267,268,3,90,45,0,268,269,3,104,52,0,269,271,1,0,0,0,
270,266,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,275,5,1,0,0,273,275,
3,24,12,0,274,270,1,0,0,0,274,273,1,0,0,0,275,25,1,0,0,0,276,277,5,4,0,0,
277,285,3,50,25,0,278,282,5,17,0,0,279,280,3,70,35,0,280,281,5,52,0,0,281,
283,1,0,0,0,282,279,1,0,0,0,282,283,1,0,0,0,283,284,1,0,0,0,284,286,3,70,
35,0,285,278,1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,291,3,104,52,0,
288,289,3,90,45,0,289,290,3,104,52,0,290,292,1,0,0,0,291,288,1,0,0,0,291,
292,1,0,0,0,292,293,1,0,0,0,293,294,5,1,0,0,294,27,1,0,0,0,295,296,5,27,
0,0,296,297,3,50,25,0,297,301,3,104,52,0,298,299,3,90,45,0,299,300,3,104,
52,0,300,302,1,0,0,0,301,298,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,
304,5,1,0,0,304,29,1,0,0,0,305,306,5,43,0,0,306,307,3,40,20,0,307,31,1,0,
0,0,308,309,5,23,0,0,309,310,3,104,52,0,310,311,3,90,45,0,311,312,3,104,
52,0,312,314,5,24,0,0,313,315,3,70,35,0,314,313,1,0,0,0,314,315,1,0,0,0,
315,319,1,0,0,0,316,317,3,90,45,0,317,318,3,104,52,0,318,320,1,0,0,0,319,
316,1,0,0,0,319,320,1,0,0,0,320,321,1,0,0,0,321,322,5,1,0,0,322,33,1,0,0,
0,323,325,5,13,0,0,324,326,5,68,0,0,325,324,1,0,0,0,325,326,1,0,0,0,326,
327,1,0,0,0,327,329,3,72,36,0,328,330,5,40,0,0,329,328,1,0,0,0,329,330,1,
0,0,0,330,333,1,0,0,0,331,332,5,17,0,0,332,334,3,70,35,0,333,331,1,0,0,0,
333,334,1,0,0,0,334,355,1,0,0,0,335,336,5,14,0,0,336,338,3,72,36,0,337,339,
5,40,0,0,338,337,1,0,0,0,338,339,1,0,0,0,339,342,1,0,0,0,340,341,5,17,0,
0,341,343,3,70,35,0,342,340,1,0,0,0,342,343,1,0,0,0,343,355,1,0,0,0,344,
345,5,15,0,0,345,346,5,84,0,0,346,347,5,17,0,0,347,355,3,70,35,0,348,349,
5,13,0,0,349,352,5,84,0,0,350,351,5,17,0,0,351,353,3,70,35,0,352,350,1,0,
0,0,352,353,1,0,0,0,353,355,1,0,0,0,354,323,1,0,0,0,354,335,1,0,0,0,354,
344,1,0,0,0,354,348,1,0,0,0,355,35,1,0,0,0,356,357,5,16,0,0,357,362,3,38,
19,0,358,359,5,52,0,0,359,361,3,38,19,0,360,358,1,0,0,0,361,364,1,0,0,0,
362,360,1,0,0,0,362,363,1,0,0,0,363,37,1,0,0,0,364,362,1,0,0,0,365,368,3,
70,35,0,366,367,5,17,0,0,367,369,3,70,35,0,368,366,1,0,0,0,368,369,1,0,0,
0,369,39,1,0,0,0,370,371,6,20,-1,0,371,409,5,81,0,0,372,409,5,84,0,0,373,
409,3,70,35,0,374,375,5,63,0,0,375,409,3,40,20,17,376,377,5,64,0,0,377,409,
3,40,20,16,378,379,5,46,0,0,379,409,3,40,20,15,380,381,5,47,0,0,381,409,
3,40,20,14,382,383,5,69,0,0,383,409,3,40,20,11,384,385,5,48,0,0,385,386,
3,50,25,0,386,387,5,49,0,0,387,409,1,0,0,0,388,389,5,48,0,0,389,390,3,50,
25,0,390,391,5,49,0,0,391,394,5,48,0,0,392,395,3,76,38,0,393,395,3,80,40,
0,394,392,1,0,0,0,394,393,1,0,0,0,394,395,1,0,0,0,395,396,1,0,0,0,396,397,
5,49,0,0,397,409,1,0,0,0,398,400,5,50,0,0,399,401,3,42,21,0,400,399,1,0,
0,0,400,401,1,0,0,0,401,402,1,0,0,0,402,409,5,51,0,0,403,405,5,48,0,0,404,
406,3,46,23,0,405,404,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,409,5,
49,0,0,408,370,1,0,0,0,408,372,1,0,0,0,408,373,1,0,0,0,408,374,1,0,0,0,408,
376,1,0,0,0,408,378,1,0,0,0,408,380,1,0,0,0,408,382,1,0,0,0,408,384,1,0,
0,0,408,388,1,0,0,0,408,398,1,0,0,0,408,403,1,0,0,0,409,457,1,0,0,0,410,
411,10,7,0,0,411,412,3,96,48,0,412,413,3,40,20,8,413,456,1,0,0,0,414,415,
10,6,0,0,415,416,3,98,49,0,416,417,3,40,20,7,417,456,1,0,0,0,418,419,10,
5,0,0,419,420,3,102,51,0,420,421,3,40,20,6,421,456,1,0,0,0,422,423,10,4,
0,0,423,424,3,100,50,0,424,425,3,40,20,5,425,456,1,0,0,0,426,427,10,19,0,
0,427,428,5,68,0,0,428,456,3,70,35,0,429,430,10,18,0,0,430,433,5,48,0,0,
431,434,3,76,38,0,432,434,3,80,40,0,433,431,1,0,0,0,433,432,1,0,0,0,433,
434,1,0,0,0,434,435,1,0,0,0,435,456,5,49,0,0,436,437,10,13,0,0,437,456,5,
46,0,0,438,439,10,12,0,0,439,456,5,47,0,0,440,441,10,10,0,0,441,442,5,50,
0,0,442,443,3,50,25,0,443,444,5,51,0,0,444,456,1,0,0,0,445,446,10,3,0,0,
446,447,3,106,53,0,447,448,5,29,0,0,448,449,3,106,53,0,449,450,3,50,25,0,
450,451,3,106,53,0,451,452,5,67,0,0,452,453,3,106,53,0,453,454,3,50,25,0,
454,456,1,0,0,0,455,410,1,0,0,0,455,414,1,0,0,0,455,418,1,0,0,0,455,422,
1,0,0,0,455,426,1,0,0,0,455,429,1,0,0,0,455,436,1,0,0,0,455,438,1,0,0,0,
455,440,1,0,0,0,455,445,1,0,0,0,456,459,1,0,0,0,457,455,1,0,0,0,457,458,
1,0,0,0,458,41,1,0,0,0,459,457,1,0,0,0,460,465,3,44,22,0,461,462,5,52,0,
0,462,464,3,44,22,0,463,461,1,0,0,0,464,467,1,0,0,0,465,463,1,0,0,0,465,
466,1,0,0,0,466,43,1,0,0,0,467,465,1,0,0,0,468,469,3,106,53,0,469,470,3,
50,25,0,470,471,3,106,53,0,471,45,1,0,0,0,472,477,3,48,24,0,473,474,5,52,
0,0,474,476,3,48,24,0,475,473,1,0,0,0,476,479,1,0,0,0,477,475,1,0,0,0,477,
478,1,0,0,0,478,47,1,0,0,0,479,477,1,0,0,0,480,483,3,106,53,0,481,484,3,
70,35,0,482,484,5,84,0,0,483,481,1,0,0,0,483,482,1,0,0,0,484,485,1,0,0,0,
485,486,5,53,0,0,486,487,3,50,25,0,487,488,3,106,53,0,488,49,1,0,0,0,489,
527,3,40,20,0,490,491,5,12,0,0,491,527,3,40,20,0,492,494,5,48,0,0,493,495,
3,84,42,0,494,493,1,0,0,0,494,495,1,0,0,0,495,496,1,0,0,0,496,498,5,49,0,
0,497,499,3,74,37,0,498,497,1,0,0,0,498,499,1,0,0,0,499,500,1,0,0,0,500,
501,5,67,0,0,501,527,3,50,25,0,502,504,5,20,0,0,503,502,1,0,0,0,503,504,
1,0,0,0,504,505,1,0,0,0,505,506,5,2,0,0,506,507,5,48,0,0,507,509,3,106,53,
0,508,510,3,84,42,0,509,508,1,0,0,0,509,510,1,0,0,0,510,511,1,0,0,0,511,
512,3,106,53,0,512,513,1,0,0,0,513,515,5,49,0,0,514,516,3,74,37,0,515,514,
1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,521,3,104,52,0,518,519,3,90,
45,0,519,520,3,104,52,0,520,522,1,0,0,0,521,518,1,0,0,0,521,522,1,0,0,0,
522,523,1,0,0,0,523,524,3,106,53,0,524,525,5,1,0,0,525,527,1,0,0,0,526,489,
1,0,0,0,526,490,1,0,0,0,526,492,1,0,0,0,526,503,1,0,0,0,527,51,1,0,0,0,528,
529,5,26,0,0,529,530,3,50,25,0,530,53,1,0,0,0,531,532,5,50,0,0,532,537,3,
56,28,0,533,534,5,52,0,0,534,536,3,56,28,0,535,533,1,0,0,0,536,539,1,0,0,
0,537,535,1,0,0,0,537,538,1,0,0,0,538,540,1,0,0,0,539,537,1,0,0,0,540,541,
5,51,0,0,541,55,1,0,0,0,542,543,3,106,53,0,543,544,3,70,35,0,544,545,3,106,
53,0,545,57,1,0,0,0,546,547,5,48,0,0,547,552,3,60,30,0,548,549,5,52,0,0,
549,551,3,60,30,0,550,548,1,0,0,0,551,554,1,0,0,0,552,550,1,0,0,0,552,553,
1,0,0,0,553,555,1,0,0,0,554,552,1,0,0,0,555,556,5,49,0,0,556,59,1,0,0,0,
557,558,3,106,53,0,558,559,3,70,35,0,559,560,3,106,53,0,560,61,1,0,0,0,561,
566,3,72,36,0,562,563,5,50,0,0,563,564,3,50,25,0,564,565,5,51,0,0,565,567,
1,0,0,0,566,562,1,0,0,0,566,567,1,0,0,0,567,575,1,0,0,0,568,570,3,70,35,
0,569,571,3,74,37,0,570,569,1,0,0,0,570,571,1,0,0,0,571,575,1,0,0,0,572,
575,3,54,27,0,573,575,3,58,29,0,574,561,1,0,0,0,574,568,1,0,0,0,574,572,
1,0,0,0,574,573,1,0,0,0,575,576,1,0,0,0,576,577,3,66,33,0,577,578,3,64,32,
0,578,63,1,0,0,0,579,582,3,50,25,0,580,582,3,62,31,0,581,579,1,0,0,0,581,
580,1,0,0,0,582,65,1,0,0,0,583,584,7,0,0,0,584,67,1,0,0,0,585,586,5,12,0,
0,586,587,3,62,31,0,587,69,1,0,0,0,588,589,5,80,0,0,589,71,1,0,0,0,590,591,
6,36,-1,0,591,592,3,70,35,0,592,598,1,0,0,0,593,594,10,1,0,0,594,595,5,68,
0,0,595,597,3,72,36,2,596,593,1,0,0,0,597,600,1,0,0,0,598,596,1,0,0,0,598,
599,1,0,0,0,599,73,1,0,0,0,600,598,1,0,0,0,601,602,6,37,-1,0,602,603,3,72,
36,0,603,610,1,0,0,0,604,605,10,1,0,0,605,606,3,100,50,0,606,607,3,74,37,
2,607,609,1,0,0,0,608,604,1,0,0,0,609,612,1,0,0,0,610,608,1,0,0,0,610,611,
1,0,0,0,611,75,1,0,0,0,612,610,1,0,0,0,613,618,3,78,39,0,614,615,5,52,0,
0,615,617,3,78,39,0,616,614,1,0,0,0,617,620,1,0,0,0,618,616,1,0,0,0,618,
619,1,0,0,0,619,77,1,0,0,0,620,618,1,0,0,0,621,622,3,106,53,0,622,623,3,
50,25,0,623,624,3,106,53,0,624,79,1,0,0,0,625,630,3,82,41,0,626,627,5,52,
0,0,627,629,3,82,41,0,628,626,1,0,0,0,629,632,1,0,0,0,630,628,1,0,0,0,630,
631,1,0,0,0,631,81,1,0,0,0,632,630,1,0,0,0,633,634,3,106,53,0,634,635,3,
70,35,0,635,636,5,53,0,0,636,637,3,50,25,0,637,638,3,106,53,0,638,83,1,0,
0,0,639,647,3,86,43,0,640,641,3,106,53,0,641,642,5,52,0,0,642,643,3,106,
53,0,643,644,3,86,43,0,644,646,1,0,0,0,645,640,1,0,0,0,646,649,1,0,0,0,647,
645,1,0,0,0,647,648,1,0,0,0,648,85,1,0,0,0,649,647,1,0,0,0,650,654,3,70,
35,0,651,654,3,54,27,0,652,654,3,58,29,0,653,650,1,0,0,0,653,651,1,0,0,0,
653,652,1,0,0,0,654,656,1,0,0,0,655,657,3,74,37,0,656,655,1,0,0,0,656,657,
1,0,0,0,657,660,1,0,0,0,658,659,5,53,0,0,659,661,3,88,44,0,660,658,1,0,0,
0,660,661,1,0,0,0,661,87,1,0,0,0,662,666,5,81,0,0,663,666,5,84,0,0,664,666,
3,70,35,0,665,662,1,0,0,0,665,663,1,0,0,0,665,664,1,0,0,0,666,89,1,0,0,0,
667,673,3,92,46,0,668,669,3,104,52,0,669,670,3,92,46,0,670,672,1,0,0,0,671,
668,1,0,0,0,672,675,1,0,0,0,673,671,1,0,0,0,673,674,1,0,0,0,674,91,1,0,0,
0,675,673,1,0,0,0,676,691,3,8,4,0,677,691,3,14,7,0,678,691,3,22,11,0,679,
691,3,24,12,0,680,691,3,26,13,0,681,691,3,28,14,0,682,691,3,32,16,0,683,
691,3,50,25,0,684,691,3,52,26,0,685,691,3,68,34,0,686,691,3,62,31,0,687,
691,3,30,15,0,688,691,3,94,47,0,689,691,3,106,53,0,690,676,1,0,0,0,690,677,
1,0,0,0,690,678,1,0,0,0,690,679,1,0,0,0,690,680,1,0,0,0,690,681,1,0,0,0,
690,682,1,0,0,0,690,683,1,0,0,0,690,684,1,0,0,0,690,685,1,0,0,0,690,686,
1,0,0,0,690,687,1,0,0,0,690,688,1,0,0,0,690,689,1,0,0,0,691,93,1,0,0,0,692,
693,5,19,0,0,693,694,3,92,46,0,694,95,1,0,0,0,695,696,7,1,0,0,696,97,1,0,
0,0,697,698,7,2,0,0,698,99,1,0,0,0,699,700,7,3,0,0,700,101,1,0,0,0,701,702,
7,4,0,0,702,103,1,0,0,0,703,704,5,45,0,0,704,105,1,0,0,0,705,707,3,104,52,
0,706,705,1,0,0,0,707,710,1,0,0,0,708,706,1,0,0,0,708,709,1,0,0,0,709,107,
1,0,0,0,710,708,1,0,0,0,73,117,136,140,146,155,159,166,176,182,188,195,204,
213,220,226,229,235,241,247,253,264,270,274,282,285,291,301,314,319,325,
329,333,338,342,352,354,362,368,394,400,405,408,433,455,457,465,477,483,
494,498,503,509,515,521,526,537,552,566,570,574,581,598,610,618,630,647,
653,656,660,665,673,690,708];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DiiaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'\\u043A\\u0456\\u043D\\u0435\\u0446\\u044C'", 
                            "'\\u0434\\u0456\\u044F'", "'\\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430'", 
                            "'\\u043F\\u0435\\u0440\\u0435\\u0431\\u0440\\u0430\\u0442\\u0438'", 
                            "'=='", "'!='", "'>='", "'<='", "'>'", "'<'", 
                            "'\\u044F\\u043A\\u0449\\u043E'", "'\\u0447\\u0435\\u043A\\u0430\\u0442\\u0438'", 
                            "'\\u0432\\u0437\\u044F\\u0442\\u0438'", "'\\u0432\\u0437\\u044F\\u0442\\u0438 \\u043F\\u0430\\u043A'", 
                            "'\\u0432\\u0437\\u044F\\u0442\\u0438 \\u0444\\u0430\\u0439\\u043B'", 
                            "'\\u0434\\u0430\\u0442\\u0438'", "'\\u044F\\u043A'", 
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
                            "'\\u043D\\u0435 \\u0454'", "'\\u043C\\u0456\\u0441\\u0442\\u0438\\u0442\\u044C'", 
                            "'\\u043D\\u0435 \\u043C\\u0456\\u0441\\u0442\\u0438\\u0442\\u044C'", 
                            "'\\u043D\\u0435'", "'.*'", "'\\u043C\\u0430\\u043A\\u0435\\u0442'", 
                            "'\\u0432\\u0442\\u0456\\u043B\\u044E\\u0454'", 
                            "'js'", null, null, "'--'", "'++'", "'('", "')'", 
                            "'['", "']'", "','", "'='", "':='", "'+='", 
                            "'-='", "'*='", "'/='", "'//='", "'%='", "'^='", 
                            "'**='", "'+'", "'-'", "'*'", "'/'", "':'", 
                            "'.'", "'!'", "'%'", "'//'", "'**'", "'^'", 
                            "'||'", "'&&'", "'|'", "'&'", "'<<'", "'>>'" ];
    static symbolicNames = [ null, "END", "DIIA", "STRUCTURE", "FOR", "EQ", 
                             "NOT_EQ", "GREATER_EQ", "SMALLER_EQ", "GREATER", 
                             "SMALLER", "IF", "WAIT", "TAKE", "TAKE_PAK", 
                             "TAKE_FILE", "GIVE", "AS", "IS", "RETURN", 
                             "ASYNC", "AND", "OR", "TRY", "CATCH", "ELSE", 
                             "THROW", "WHILE", "MODULE", "TERNARY", "EQ_WORD", 
                             "GR_WORD", "SM_WORD", "NOT_GR_WORD", "NOT_SM_WORD", 
                             "NOT_EQ_WORD", "NOT_IS_WORD", "HAS_IS_WORD", 
                             "NOT_HAS_IS_WORD", "NOT_WORD", "STAR_ALL", 
                             "MOCKUP", "IMPLEMENTS", "EVAL", "SKIP_SPACES", 
                             "NL", "DECREMENT", "INCREMENT", "OPEN_PAREN", 
                             "CLOSE_PAREN", "OPEN_ARRAY", "CLOSE_ARRAY", 
                             "COMMA", "ASSIGN", "ASSIGN_PARENT", "ASSIGN_ADD", 
                             "ASSIGN_SUB", "ASSIGN_MUL", "ASSIGN_DIV", "ASSIGN_DIVDIV", 
                             "ASSIGN_MOD", "ASSIGN_XOR", "ASSIGN_POW", "PLUS", 
                             "MINUS", "MUL", "DIV", "COLON", "DOT", "NOT", 
                             "PERCENT", "DIVDIV", "POW", "XOR", "OR_SYM", 
                             "AND_SYM", "OR_BW", "AND_BW", "BW_SHIFT_LEFT", 
                             "BW_SHIFT_RIGHT", "ID", "NUMBER", "INTEGER", 
                             "FLOAT", "STRING", "LINE_COMMENT", "COMMENT" ];
    static ruleNames = [ "file", "program", "program_element", "module", 
                         "structure", "structure_elements", "structure_element", 
                         "mockup", "mockup_parents", "mockup_elements", 
                         "mockup_element", "diia", "if", "each", "while", 
                         "eval", "try", "take", "give", "give_element", 
                         "value", "array_elements", "array_element", "dictionary_args", 
                         "dictionary_arg", "expr", "throw", "array_destruction", 
                         "array_destruction_el", "object_destruction", "object_destruction_el", 
                         "assign", "assign_value", "assign_symbol", "wait_assign", 
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
    	case 20:
    	    		return this.value_sempred(localctx, predIndex);
    	case 36:
    	    		return this.identifiers_chain_sempred(localctx, predIndex);
    	case 37:
    	    		return this.type_value_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    value_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 7);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 4);
    		case 4:
    			return this.precpred(this._ctx, 19);
    		case 5:
    			return this.precpred(this._ctx, 18);
    		case 6:
    			return this.precpred(this._ctx, 13);
    		case 7:
    			return this.precpred(this._ctx, 12);
    		case 8:
    			return this.precpred(this._ctx, 10);
    		case 9:
    			return this.precpred(this._ctx, 3);
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
	        this.state = 108;
	        localctx.f_program = this.program();
	        this.state = 109;
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
	        this.state = 111;
	        this.program_element();
	        this.state = 117;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 112;
	                this.nl();
	                this.state = 113;
	                this.program_element(); 
	            }
	            this.state = 119;
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
	        this.state = 136;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.module();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.structure();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.mockup();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 123;
	            this.diia();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 124;
	            this.if_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 125;
	            this.each();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 126;
	            this.while_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 127;
	            this.try_();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 128;
	            this.expr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 129;
	            this.throw_();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 130;
	            this.eval();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 131;
	            this.wait_assign();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 132;
	            this.assign();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 133;
	            this.nls();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 134;
	            this.take();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 135;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(DiiaParser.MODULE);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80) {
	            this.state = 139;
	            localctx.m_name = this.identifier();
	        }

	        this.state = 142;
	        this.nl();
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 143;
	            localctx.m_program = this.program();
	            this.state = 144;
	            this.nl();

	        }
	        this.state = 148;
	        this.nls();
	        this.state = 149;
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
	        this.state = 151;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 152;
	        localctx.s_name = this.identifier();
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 153;
	            this.match(DiiaParser.IS);
	            this.state = 154;
	            localctx.s_parent = this.identifiers_chain(0);
	        }

	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 157;
	            this.match(DiiaParser.IMPLEMENTS);
	            this.state = 158;
	            localctx.m_parents = this.mockup_parents();
	        }

	        this.state = 161;
	        this.nl();
	        this.state = 162;
	        this.nls();
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2 || _la===20 || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & 41) !== 0) || _la===80) {
	            this.state = 163;
	            localctx.s_elements = this.structure_elements();
	            this.state = 164;
	            this.nl();
	        }

	        this.state = 168;
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
	        this.state = 170;
	        this.structure_element();
	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 171;
	                this.nl();
	                this.state = 172;
	                this.structure_element(); 
	            }
	            this.state = 178;
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



	structure_element() {
	    let localctx = new Structure_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DiiaParser.RULE_structure_element);
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	        case 50:
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 179;
	            this.param();
	            break;
	        case 2:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 180;
	            this.diia();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 181;
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



	mockup() {
	    let localctx = new MockupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, DiiaParser.RULE_mockup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(DiiaParser.MOCKUP);
	        this.state = 185;
	        localctx.m_name = this.identifier();
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 186;
	            this.match(DiiaParser.IMPLEMENTS);
	            this.state = 187;
	            localctx.m_parents = this.mockup_parents();
	        }

	        this.state = 190;
	        this.nl();
	        this.state = 191;
	        this.nls();
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80) {
	            this.state = 192;
	            localctx.m_elements = this.mockup_elements();
	            this.state = 193;
	            this.nl();
	        }

	        this.state = 197;
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



	mockup_parents() {
	    let localctx = new Mockup_parentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DiiaParser.RULE_mockup_parents);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.identifiers_chain(0);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 200;
	            this.match(DiiaParser.COMMA);
	            this.state = 201;
	            this.identifiers_chain(0);
	            this.state = 206;
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



	mockup_elements() {
	    let localctx = new Mockup_elementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DiiaParser.RULE_mockup_elements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.mockup_element();
	        this.state = 213;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 208;
	                this.nl();
	                this.state = 209;
	                this.mockup_element(); 
	            }
	            this.state = 215;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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



	mockup_element() {
	    let localctx = new Mockup_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, DiiaParser.RULE_mockup_element);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        localctx.me_name = this.identifier();
	        this.state = 217;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 218;
	        this.nls();
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48 || _la===50 || _la===80) {
	            this.state = 219;
	            localctx.m_params = this.params();
	        }

	        this.state = 222;
	        this.nls();
	        this.state = 224;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80) {
	            this.state = 225;
	            localctx.m_type = this.type_value(0);
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
	    this.enterRule(localctx, 22, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 228;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 231;
	        this.match(DiiaParser.DIIA);
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 232;
	            localctx.d_structure = this.identifier();
	            this.state = 233;
	            this.match(DiiaParser.DOT);

	        }
	        this.state = 237;
	        localctx.d_name = this.identifier();
	        this.state = 238;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 239;
	        this.nls();
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48 || _la===50 || _la===80) {
	            this.state = 240;
	            localctx.d_params = this.params();
	        }

	        this.state = 243;
	        this.nls();
	        this.state = 245;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80) {
	            this.state = 246;
	            localctx.d_type = this.type_value(0);
	        }

	        this.state = 249;
	        this.nl();
	        this.state = 253;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 250;
	            localctx.d_body = this.body();
	            this.state = 251;
	            this.nl();

	        }
	        this.state = 255;
	        this.nls();
	        this.state = 256;
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
	    this.enterRule(localctx, 24, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(DiiaParser.IF);
	        this.state = 259;
	        localctx.i_value = this.expr();
	        this.state = 260;
	        this.nl();
	        this.state = 264;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        if(la_===1) {
	            this.state = 261;
	            localctx.i_body = this.body();
	            this.state = 262;
	            this.nl();

	        }
	        this.state = 274;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 25:
	            this.state = 270;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 266;
	                this.match(DiiaParser.ELSE);
	                this.state = 267;
	                localctx.i_else_body = this.body();
	                this.state = 268;
	                this.nl();
	            }

	            this.state = 272;
	            this.match(DiiaParser.END);
	            break;
	        case 11:
	            this.state = 273;
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
	    this.enterRule(localctx, 26, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(DiiaParser.FOR);
	        this.state = 277;
	        localctx.e_iterator = this.expr();
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 278;
	            this.match(DiiaParser.AS);
	            this.state = 282;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            if(la_===1) {
	                this.state = 279;
	                localctx.e_key_name = this.identifier();
	                this.state = 280;
	                this.match(DiiaParser.COMMA);

	            }
	            this.state = 284;
	            localctx.e_name = this.identifier();
	        }

	        this.state = 287;
	        this.nl();
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 211294236) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 281019125) !== 0) || ((((_la - 80)) & ~0x1f) == 0 && ((1 << (_la - 80)) & 19) !== 0)) {
	            this.state = 288;
	            localctx.e_body = this.body();
	            this.state = 289;
	            this.nl();
	        }

	        this.state = 293;
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
	    this.enterRule(localctx, 28, DiiaParser.RULE_while);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(DiiaParser.WHILE);
	        this.state = 296;
	        localctx.w_value = this.expr();
	        this.state = 297;
	        this.nl();
	        this.state = 301;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 211294236) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 281019125) !== 0) || ((((_la - 80)) & ~0x1f) == 0 && ((1 << (_la - 80)) & 19) !== 0)) {
	            this.state = 298;
	            localctx.w_body = this.body();
	            this.state = 299;
	            this.nl();
	        }

	        this.state = 303;
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



	eval() {
	    let localctx = new EvalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, DiiaParser.RULE_eval);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(DiiaParser.EVAL);
	        this.state = 306;
	        localctx.e_value = this.value(0);
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
	    this.enterRule(localctx, 32, DiiaParser.RULE_try);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(DiiaParser.TRY);
	        this.state = 309;
	        this.nl();
	        this.state = 310;
	        localctx.t_body = this.body();
	        this.state = 311;
	        this.nl();
	        this.state = 312;
	        this.match(DiiaParser.CATCH);
	        this.state = 314;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        if(la_===1) {
	            this.state = 313;
	            localctx.tc_name = this.identifier();

	        }
	        this.state = 319;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 211294236) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 281019125) !== 0) || ((((_la - 80)) & ~0x1f) == 0 && ((1 << (_la - 80)) & 19) !== 0)) {
	            this.state = 316;
	            localctx.tc_body = this.body();
	            this.state = 317;
	            this.nl();
	        }

	        this.state = 321;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_take);
	    var _la = 0; // Token type
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Take_moduleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 323;
	            this.match(DiiaParser.TAKE);
	            this.state = 325;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===68) {
	                this.state = 324;
	                localctx.tm_absolute = this.match(DiiaParser.DOT);
	            }

	            this.state = 327;
	            localctx.tm_elements_chain = this.identifiers_chain(0);
	            this.state = 329;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 328;
	                localctx.tm_star = this.match(DiiaParser.STAR_ALL);
	            }

	            this.state = 333;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 331;
	                this.match(DiiaParser.AS);
	                this.state = 332;
	                localctx.tm_as = this.identifier();
	            }

	            break;

	        case 2:
	            localctx = new Take_pakContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            this.match(DiiaParser.TAKE_PAK);
	            this.state = 336;
	            localctx.tp_elements_chain = this.identifiers_chain(0);
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 337;
	                localctx.tp_star = this.match(DiiaParser.STAR_ALL);
	            }

	            this.state = 342;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 340;
	                this.match(DiiaParser.AS);
	                this.state = 341;
	                localctx.tp_as = this.identifier();
	            }

	            break;

	        case 3:
	            localctx = new Take_fileContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 344;
	            this.match(DiiaParser.TAKE_FILE);
	            this.state = 345;
	            localctx.tf_name = this.match(DiiaParser.STRING);
	            this.state = 346;
	            this.match(DiiaParser.AS);
	            this.state = 347;
	            localctx.tf_as = this.identifier();
	            break;

	        case 4:
	            localctx = new Take_remoteContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 348;
	            this.match(DiiaParser.TAKE);
	            this.state = 349;
	            localctx.tr_url = this.match(DiiaParser.STRING);
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 350;
	                this.match(DiiaParser.AS);
	                this.state = 351;
	                localctx.tr_as = this.identifier();
	            }

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



	give() {
	    let localctx = new GiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DiiaParser.RULE_give);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(DiiaParser.GIVE);
	        this.state = 357;
	        this.give_element();
	        this.state = 362;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 358;
	            this.match(DiiaParser.COMMA);
	            this.state = 359;
	            this.give_element();
	            this.state = 364;
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



	give_element() {
	    let localctx = new Give_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DiiaParser.RULE_give_element);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        localctx.ge_name = this.identifier();
	        this.state = 368;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 366;
	            this.match(DiiaParser.AS);
	            this.state = 367;
	            localctx.ge_as = this.identifier();
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
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, DiiaParser.RULE_value, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 371;
	            this.match(DiiaParser.NUMBER);
	            break;

	        case 2:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 372;
	            this.match(DiiaParser.STRING);
	            break;

	        case 3:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 373;
	            this.identifier();
	            break;

	        case 4:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 374;
	            this.match(DiiaParser.PLUS);
	            this.state = 375;
	            localctx.p_value = this.value(17);
	            break;

	        case 5:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 376;
	            this.match(DiiaParser.MINUS);
	            this.state = 377;
	            localctx.n_value = this.value(16);
	            break;

	        case 6:
	            localctx = new Pre_decrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 378;
	            this.match(DiiaParser.DECREMENT);
	            this.state = 379;
	            localctx.pd_value = this.value(15);
	            break;

	        case 7:
	            localctx = new Pre_incrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 380;
	            this.match(DiiaParser.INCREMENT);
	            this.state = 381;
	            localctx.pi_value = this.value(14);
	            break;

	        case 8:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 382;
	            this.match(DiiaParser.NOT);
	            this.state = 383;
	            localctx.n_value = this.value(11);
	            break;

	        case 9:
	            localctx = new NestedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 384;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 385;
	            localctx.n_value = this.expr();
	            this.state = 386;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 10:
	            localctx = new Call_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 388;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 389;
	            localctx.c_value = this.expr();
	            this.state = 390;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 391;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 394;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	            if(la_===1) {
	                this.state = 392;
	                localctx.c_args = this.args();

	            } else if(la_===2) {
	                this.state = 393;
	                localctx.c_named_args = this.named_args();

	            }
	            this.state = 396;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 11:
	            localctx = new ArrayContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 398;
	            this.match(DiiaParser.OPEN_ARRAY);
	            this.state = 400;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1052676) !== 0) || ((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & 17563695) !== 0) || ((((_la - 80)) & ~0x1f) == 0 && ((1 << (_la - 80)) & 19) !== 0)) {
	                this.state = 399;
	                localctx.a_elements = this.array_elements();
	            }

	            this.state = 402;
	            this.match(DiiaParser.CLOSE_ARRAY);
	            break;

	        case 12:
	            localctx = new DictionaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 403;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 405;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45 || _la===80 || _la===84) {
	                this.state = 404;
	                localctx.d_args = this.dictionary_args();
	            }

	            this.state = 407;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 457;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 455;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Arithmetic_mulContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 410;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 411;
	                    localctx.a_operation = this.arithmetic_op_mul();
	                    this.state = 412;
	                    localctx.a_right = this.value(8);
	                    break;

	                case 2:
	                    localctx = new Arithmetic_addContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 414;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 415;
	                    localctx.a_operation = this.arithmetic_op_add();
	                    this.state = 416;
	                    localctx.a_right = this.value(7);
	                    break;

	                case 3:
	                    localctx = new ComparisonContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 418;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 419;
	                    localctx.c_operation = this.comparison_op();
	                    this.state = 420;
	                    localctx.c_right = this.value(6);
	                    break;

	                case 4:
	                    localctx = new TestContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 422;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 423;
	                    localctx.t_operation = this.test_op();
	                    this.state = 424;
	                    localctx.t_right = this.value(5);
	                    break;

	                case 5:
	                    localctx = new ChainContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 426;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 427;
	                    this.match(DiiaParser.DOT);
	                    this.state = 428;
	                    localctx.c_right = this.identifier();
	                    break;

	                case 6:
	                    localctx = new CallContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 429;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 430;
	                    this.match(DiiaParser.OPEN_PAREN);
	                    this.state = 433;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	                    if(la_===1) {
	                        this.state = 431;
	                        localctx.c_args = this.args();

	                    } else if(la_===2) {
	                        this.state = 432;
	                        localctx.c_named_args = this.named_args();

	                    }
	                    this.state = 435;
	                    this.match(DiiaParser.CLOSE_PAREN);
	                    break;

	                case 7:
	                    localctx = new Post_decrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pd_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 436;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 437;
	                    this.match(DiiaParser.DECREMENT);
	                    break;

	                case 8:
	                    localctx = new Post_incrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pi_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 438;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 439;
	                    this.match(DiiaParser.INCREMENT);
	                    break;

	                case 9:
	                    localctx = new Get_elementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 440;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 441;
	                    this.match(DiiaParser.OPEN_ARRAY);
	                    this.state = 442;
	                    localctx.a_element = this.expr();
	                    this.state = 443;
	                    this.match(DiiaParser.CLOSE_ARRAY);
	                    break;

	                case 10:
	                    localctx = new TernaryContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 445;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 446;
	                    this.nls();
	                    this.state = 447;
	                    this.match(DiiaParser.TERNARY);
	                    this.state = 448;
	                    this.nls();
	                    this.state = 449;
	                    localctx.t_positive = this.expr();
	                    this.state = 450;
	                    this.nls();
	                    this.state = 451;
	                    this.match(DiiaParser.COLON);
	                    this.state = 452;
	                    this.nls();
	                    this.state = 453;
	                    localctx.t_negative = this.expr();
	                    break;

	                } 
	            }
	            this.state = 459;
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



	array_elements() {
	    let localctx = new Array_elementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, DiiaParser.RULE_array_elements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this.array_element();
	        this.state = 465;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 461;
	            this.match(DiiaParser.COMMA);
	            this.state = 462;
	            this.array_element();
	            this.state = 467;
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



	array_element() {
	    let localctx = new Array_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, DiiaParser.RULE_array_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.nls();
	        this.state = 469;
	        localctx.ae_value = this.expr();
	        this.state = 470;
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



	dictionary_args() {
	    let localctx = new Dictionary_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, DiiaParser.RULE_dictionary_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.dictionary_arg();
	        this.state = 477;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 473;
	            this.match(DiiaParser.COMMA);
	            this.state = 474;
	            this.dictionary_arg();
	            this.state = 479;
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



	dictionary_arg() {
	    let localctx = new Dictionary_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, DiiaParser.RULE_dictionary_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
	        this.nls();
	        this.state = 483;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            this.state = 481;
	            localctx.da_name_id = this.identifier();
	            break;
	        case 84:
	            this.state = 482;
	            localctx.da_name_string = this.match(DiiaParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 485;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 486;
	        localctx.da_value = this.expr();
	        this.state = 487;
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 526;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 489;
	            this.value(0);
	            break;

	        case 2:
	            localctx = new WaitContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 490;
	            this.match(DiiaParser.WAIT);
	            this.state = 491;
	            localctx.w_value = this.value(0);
	            break;

	        case 3:
	            localctx = new FunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 492;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 494;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48 || _la===50 || _la===80) {
	                this.state = 493;
	                localctx.f_params = this.params();
	            }

	            this.state = 496;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 498;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===80) {
	                this.state = 497;
	                localctx.f_type = this.type_value(0);
	            }

	            this.state = 500;
	            this.match(DiiaParser.COLON);
	            this.state = 501;
	            localctx.f_body = this.expr();
	            break;

	        case 4:
	            localctx = new Anonymous_diiaContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 503;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 502;
	                localctx.d_async = this.match(DiiaParser.ASYNC);
	            }

	            this.state = 505;
	            this.match(DiiaParser.DIIA);
	            this.state = 506;
	            this.match(DiiaParser.OPEN_PAREN);

	            this.state = 507;
	            this.nls();
	            this.state = 509;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48 || _la===50 || _la===80) {
	                this.state = 508;
	                localctx.d_params = this.params();
	            }

	            this.state = 511;
	            this.nls();
	            this.state = 513;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 515;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===80) {
	                this.state = 514;
	                localctx.d_type = this.type_value(0);
	            }

	            this.state = 517;
	            this.nl();
	            this.state = 521;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	            if(la_===1) {
	                this.state = 518;
	                localctx.d_body = this.body();
	                this.state = 519;
	                this.nl();

	            }
	            this.state = 523;
	            this.nls();
	            this.state = 524;
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
	    this.enterRule(localctx, 52, DiiaParser.RULE_throw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 528;
	        this.match(DiiaParser.THROW);
	        this.state = 529;
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
	    this.enterRule(localctx, 54, DiiaParser.RULE_array_destruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 531;
	        this.match(DiiaParser.OPEN_ARRAY);
	        this.state = 532;
	        this.array_destruction_el();
	        this.state = 537;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 533;
	            this.match(DiiaParser.COMMA);
	            this.state = 534;
	            this.array_destruction_el();
	            this.state = 539;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 540;
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
	    this.enterRule(localctx, 56, DiiaParser.RULE_array_destruction_el);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 542;
	        this.nls();
	        this.state = 543;
	        localctx.ade_id = this.identifier();
	        this.state = 544;
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



	object_destruction() {
	    let localctx = new Object_destructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, DiiaParser.RULE_object_destruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 546;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 547;
	        this.object_destruction_el();
	        this.state = 552;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 548;
	            this.match(DiiaParser.COMMA);
	            this.state = 549;
	            this.object_destruction_el();
	            this.state = 554;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 555;
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



	object_destruction_el() {
	    let localctx = new Object_destruction_elContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, DiiaParser.RULE_object_destruction_el);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 557;
	        this.nls();
	        this.state = 558;
	        localctx.ode_id = this.identifier();
	        this.state = 559;
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
	    this.enterRule(localctx, 62, DiiaParser.RULE_assign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 574;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 561;
	            localctx.a_identifiers_chain = this.identifiers_chain(0);
	            this.state = 566;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===50) {
	                this.state = 562;
	                this.match(DiiaParser.OPEN_ARRAY);
	                this.state = 563;
	                localctx.a_set_element = this.expr();
	                this.state = 564;
	                this.match(DiiaParser.CLOSE_ARRAY);
	            }

	            break;

	        case 2:
	            this.state = 568;
	            localctx.a_identifier = this.identifier();
	            this.state = 570;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===80) {
	                this.state = 569;
	                localctx.a_type = this.type_value(0);
	            }

	            break;

	        case 3:
	            this.state = 572;
	            localctx.a_array_destruction = this.array_destruction();
	            break;

	        case 4:
	            this.state = 573;
	            localctx.a_object_destruction = this.object_destruction();
	            break;

	        }
	        this.state = 576;
	        localctx.a_symbol = this.assign_symbol();
	        this.state = 577;
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
	    this.enterRule(localctx, 64, DiiaParser.RULE_assign_value);
	    try {
	        this.state = 581;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 579;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 580;
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



	assign_symbol() {
	    let localctx = new Assign_symbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, DiiaParser.RULE_assign_symbol);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & 1023) !== 0))) {
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



	wait_assign() {
	    let localctx = new Wait_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, DiiaParser.RULE_wait_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 585;
	        this.match(DiiaParser.WAIT);
	        this.state = 586;
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
	    this.enterRule(localctx, 70, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 588;
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
	    const _startState = 72;
	    this.enterRecursionRule(localctx, 72, DiiaParser.RULE_identifiers_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        localctx.ic_identifier = this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 598;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,61,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifiers_chainContext(this, _parentctx, _parentState);
	                localctx.ic_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_identifiers_chain);
	                this.state = 593;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 594;
	                this.match(DiiaParser.DOT);
	                this.state = 595;
	                localctx.ic_right = this.identifiers_chain(2); 
	            }
	            this.state = 600;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,61,this._ctx);
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
	    const _startState = 74;
	    this.enterRecursionRule(localctx, 74, DiiaParser.RULE_type_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 602;
	        localctx.tv_single = this.identifiers_chain(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 610;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,62,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Type_valueContext(this, _parentctx, _parentState);
	                localctx.tv_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_type_value);
	                this.state = 604;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 605;
	                localctx.tv_operation = this.test_op();
	                this.state = 606;
	                localctx.tv_right = this.type_value(2); 
	            }
	            this.state = 612;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,62,this._ctx);
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
	    this.enterRule(localctx, 76, DiiaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 613;
	        this.arg();
	        this.state = 618;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 614;
	            this.match(DiiaParser.COMMA);
	            this.state = 615;
	            this.arg();
	            this.state = 620;
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, DiiaParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 621;
	        this.nls();
	        this.state = 622;
	        localctx.a_value = this.expr();
	        this.state = 623;
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
	    this.enterRule(localctx, 80, DiiaParser.RULE_named_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 625;
	        this.named_arg();
	        this.state = 630;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===52) {
	            this.state = 626;
	            this.match(DiiaParser.COMMA);
	            this.state = 627;
	            this.named_arg();
	            this.state = 632;
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



	named_arg() {
	    let localctx = new Named_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, DiiaParser.RULE_named_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 633;
	        this.nls();
	        this.state = 634;
	        localctx.na_name = this.identifier();
	        this.state = 635;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 636;
	        localctx.na_value = this.expr();
	        this.state = 637;
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
	    this.enterRule(localctx, 84, DiiaParser.RULE_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 639;
	        this.param();
	        this.state = 647;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,65,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 640;
	                this.nls();
	                this.state = 641;
	                this.match(DiiaParser.COMMA);
	                this.state = 642;
	                this.nls();
	                this.state = 643;
	                this.param(); 
	            }
	            this.state = 649;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,65,this._ctx);
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
	    this.enterRule(localctx, 86, DiiaParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 653;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            this.state = 650;
	            localctx.p_name = this.identifier();
	            break;
	        case 50:
	            this.state = 651;
	            localctx.p_array_destruction = this.array_destruction();
	            break;
	        case 48:
	            this.state = 652;
	            localctx.p_object_destruction = this.object_destruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 656;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===80) {
	            this.state = 655;
	            localctx.p_type = this.type_value(0);
	        }

	        this.state = 660;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===53) {
	            this.state = 658;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 659;
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
	    this.enterRule(localctx, 88, DiiaParser.RULE_param_value);
	    try {
	        this.state = 665;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 81:
	            localctx = new Param_value_numberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 662;
	            this.match(DiiaParser.NUMBER);
	            break;
	        case 84:
	            localctx = new Param_value_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 663;
	            this.match(DiiaParser.STRING);
	            break;
	        case 80:
	            localctx = new Param_value_identifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 664;
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
	    this.enterRule(localctx, 90, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 667;
	        this.body_element();
	        this.state = 673;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,70,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 668;
	                this.nl();
	                this.state = 669;
	                this.body_element(); 
	            }
	            this.state = 675;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,70,this._ctx);
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
	    this.enterRule(localctx, 92, DiiaParser.RULE_body_element);
	    try {
	        this.state = 690;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,71,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 676;
	            this.structure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 677;
	            this.mockup();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 678;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 679;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 680;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 681;
	            this.while_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 682;
	            this.try_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 683;
	            this.expr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 684;
	            this.throw_();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 685;
	            this.wait_assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 686;
	            this.assign();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 687;
	            this.eval();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 688;
	            this.return_body_line();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 689;
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
	    this.enterRule(localctx, 94, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 692;
	        this.match(DiiaParser.RETURN);
	        this.state = 693;
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
	    this.enterRule(localctx, 96, DiiaParser.RULE_arithmetic_op_mul);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 695;
	        _la = this._input.LA(1);
	        if(!(((((_la - 65)) & ~0x1f) == 0 && ((1 << (_la - 65)) & 483) !== 0))) {
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
	    this.enterRule(localctx, 98, DiiaParser.RULE_arithmetic_op_add);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 697;
	        _la = this._input.LA(1);
	        if(!(_la===63 || _la===64)) {
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
	    this.enterRule(localctx, 100, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 699;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22 || _la===74 || _la===75)) {
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
	    this.enterRule(localctx, 102, DiiaParser.RULE_comparison_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 701;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 3221489632) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 255) !== 0))) {
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
	    this.enterRule(localctx, 104, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 703;
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
	    this.enterRule(localctx, 106, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 708;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,72,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 705;
	                this.nl(); 
	            }
	            this.state = 710;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,72,this._ctx);
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
DiiaParser.GREATER_EQ = 7;
DiiaParser.SMALLER_EQ = 8;
DiiaParser.GREATER = 9;
DiiaParser.SMALLER = 10;
DiiaParser.IF = 11;
DiiaParser.WAIT = 12;
DiiaParser.TAKE = 13;
DiiaParser.TAKE_PAK = 14;
DiiaParser.TAKE_FILE = 15;
DiiaParser.GIVE = 16;
DiiaParser.AS = 17;
DiiaParser.IS = 18;
DiiaParser.RETURN = 19;
DiiaParser.ASYNC = 20;
DiiaParser.AND = 21;
DiiaParser.OR = 22;
DiiaParser.TRY = 23;
DiiaParser.CATCH = 24;
DiiaParser.ELSE = 25;
DiiaParser.THROW = 26;
DiiaParser.WHILE = 27;
DiiaParser.MODULE = 28;
DiiaParser.TERNARY = 29;
DiiaParser.EQ_WORD = 30;
DiiaParser.GR_WORD = 31;
DiiaParser.SM_WORD = 32;
DiiaParser.NOT_GR_WORD = 33;
DiiaParser.NOT_SM_WORD = 34;
DiiaParser.NOT_EQ_WORD = 35;
DiiaParser.NOT_IS_WORD = 36;
DiiaParser.HAS_IS_WORD = 37;
DiiaParser.NOT_HAS_IS_WORD = 38;
DiiaParser.NOT_WORD = 39;
DiiaParser.STAR_ALL = 40;
DiiaParser.MOCKUP = 41;
DiiaParser.IMPLEMENTS = 42;
DiiaParser.EVAL = 43;
DiiaParser.SKIP_SPACES = 44;
DiiaParser.NL = 45;
DiiaParser.DECREMENT = 46;
DiiaParser.INCREMENT = 47;
DiiaParser.OPEN_PAREN = 48;
DiiaParser.CLOSE_PAREN = 49;
DiiaParser.OPEN_ARRAY = 50;
DiiaParser.CLOSE_ARRAY = 51;
DiiaParser.COMMA = 52;
DiiaParser.ASSIGN = 53;
DiiaParser.ASSIGN_PARENT = 54;
DiiaParser.ASSIGN_ADD = 55;
DiiaParser.ASSIGN_SUB = 56;
DiiaParser.ASSIGN_MUL = 57;
DiiaParser.ASSIGN_DIV = 58;
DiiaParser.ASSIGN_DIVDIV = 59;
DiiaParser.ASSIGN_MOD = 60;
DiiaParser.ASSIGN_XOR = 61;
DiiaParser.ASSIGN_POW = 62;
DiiaParser.PLUS = 63;
DiiaParser.MINUS = 64;
DiiaParser.MUL = 65;
DiiaParser.DIV = 66;
DiiaParser.COLON = 67;
DiiaParser.DOT = 68;
DiiaParser.NOT = 69;
DiiaParser.PERCENT = 70;
DiiaParser.DIVDIV = 71;
DiiaParser.POW = 72;
DiiaParser.XOR = 73;
DiiaParser.OR_SYM = 74;
DiiaParser.AND_SYM = 75;
DiiaParser.OR_BW = 76;
DiiaParser.AND_BW = 77;
DiiaParser.BW_SHIFT_LEFT = 78;
DiiaParser.BW_SHIFT_RIGHT = 79;
DiiaParser.ID = 80;
DiiaParser.NUMBER = 81;
DiiaParser.INTEGER = 82;
DiiaParser.FLOAT = 83;
DiiaParser.STRING = 84;
DiiaParser.LINE_COMMENT = 85;
DiiaParser.COMMENT = 86;

DiiaParser.RULE_file = 0;
DiiaParser.RULE_program = 1;
DiiaParser.RULE_program_element = 2;
DiiaParser.RULE_module = 3;
DiiaParser.RULE_structure = 4;
DiiaParser.RULE_structure_elements = 5;
DiiaParser.RULE_structure_element = 6;
DiiaParser.RULE_mockup = 7;
DiiaParser.RULE_mockup_parents = 8;
DiiaParser.RULE_mockup_elements = 9;
DiiaParser.RULE_mockup_element = 10;
DiiaParser.RULE_diia = 11;
DiiaParser.RULE_if = 12;
DiiaParser.RULE_each = 13;
DiiaParser.RULE_while = 14;
DiiaParser.RULE_eval = 15;
DiiaParser.RULE_try = 16;
DiiaParser.RULE_take = 17;
DiiaParser.RULE_give = 18;
DiiaParser.RULE_give_element = 19;
DiiaParser.RULE_value = 20;
DiiaParser.RULE_array_elements = 21;
DiiaParser.RULE_array_element = 22;
DiiaParser.RULE_dictionary_args = 23;
DiiaParser.RULE_dictionary_arg = 24;
DiiaParser.RULE_expr = 25;
DiiaParser.RULE_throw = 26;
DiiaParser.RULE_array_destruction = 27;
DiiaParser.RULE_array_destruction_el = 28;
DiiaParser.RULE_object_destruction = 29;
DiiaParser.RULE_object_destruction_el = 30;
DiiaParser.RULE_assign = 31;
DiiaParser.RULE_assign_value = 32;
DiiaParser.RULE_assign_symbol = 33;
DiiaParser.RULE_wait_assign = 34;
DiiaParser.RULE_identifier = 35;
DiiaParser.RULE_identifiers_chain = 36;
DiiaParser.RULE_type_value = 37;
DiiaParser.RULE_args = 38;
DiiaParser.RULE_arg = 39;
DiiaParser.RULE_named_args = 40;
DiiaParser.RULE_named_arg = 41;
DiiaParser.RULE_params = 42;
DiiaParser.RULE_param = 43;
DiiaParser.RULE_param_value = 44;
DiiaParser.RULE_body = 45;
DiiaParser.RULE_body_element = 46;
DiiaParser.RULE_return_body_line = 47;
DiiaParser.RULE_arithmetic_op_mul = 48;
DiiaParser.RULE_arithmetic_op_add = 49;
DiiaParser.RULE_test_op = 50;
DiiaParser.RULE_comparison_op = 51;
DiiaParser.RULE_nl = 52;
DiiaParser.RULE_nls = 53;

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

	mockup() {
	    return this.getTypedRuleContext(MockupContext,0);
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

	eval() {
	    return this.getTypedRuleContext(EvalContext,0);
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
        this.m_parents = null; // Mockup_parentsContext
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

	IMPLEMENTS() {
	    return this.getToken(DiiaParser.IMPLEMENTS, 0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	mockup_parents() {
	    return this.getTypedRuleContext(Mockup_parentsContext,0);
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



class MockupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_mockup;
        this.m_name = null; // IdentifierContext
        this.m_parents = null; // Mockup_parentsContext
        this.m_elements = null; // Mockup_elementsContext
    }

	MOCKUP() {
	    return this.getToken(DiiaParser.MOCKUP, 0);
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

	IMPLEMENTS() {
	    return this.getToken(DiiaParser.IMPLEMENTS, 0);
	};

	mockup_parents() {
	    return this.getTypedRuleContext(Mockup_parentsContext,0);
	};

	mockup_elements() {
	    return this.getTypedRuleContext(Mockup_elementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterMockup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitMockup(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitMockup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Mockup_parentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_mockup_parents;
    }

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
	        listener.enterMockup_parents(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitMockup_parents(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitMockup_parents(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Mockup_elementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_mockup_elements;
    }

	mockup_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Mockup_elementContext);
	    } else {
	        return this.getTypedRuleContext(Mockup_elementContext,i);
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
	        listener.enterMockup_elements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitMockup_elements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitMockup_elements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Mockup_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_mockup_element;
        this.me_name = null; // IdentifierContext
        this.m_params = null; // ParamsContext
        this.m_type = null; // Type_valueContext
    }

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
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

	type_value() {
	    return this.getTypedRuleContext(Type_valueContext,0);
	};

	params() {
	    return this.getTypedRuleContext(ParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterMockup_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitMockup_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitMockup_element(this);
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

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
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

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
	};

	COMMA() {
	    return this.getToken(DiiaParser.COMMA, 0);
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



class EvalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_eval;
        this.e_value = null; // ValueContext
    }

	EVAL() {
	    return this.getToken(DiiaParser.EVAL, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterEval(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitEval(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitEval(this);
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
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Take_moduleContext extends TakeContext {

    constructor(parser, ctx) {
        super(parser);
        this.tm_absolute = null; // Token;
        this.tm_elements_chain = null; // Identifiers_chainContext;
        this.tm_star = null; // Token;
        this.tm_as = null; // IdentifierContext;
        super.copyFrom(ctx);
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

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	STAR_ALL() {
	    return this.getToken(DiiaParser.STAR_ALL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTake_module(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTake_module(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTake_module(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Take_moduleContext = Take_moduleContext;

class Take_pakContext extends TakeContext {

    constructor(parser, ctx) {
        super(parser);
        this.tp_elements_chain = null; // Identifiers_chainContext;
        this.tp_star = null; // Token;
        this.tp_as = null; // IdentifierContext;
        super.copyFrom(ctx);
    }

	TAKE_PAK() {
	    return this.getToken(DiiaParser.TAKE_PAK, 0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
	};

	STAR_ALL() {
	    return this.getToken(DiiaParser.STAR_ALL, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTake_pak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTake_pak(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTake_pak(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Take_pakContext = Take_pakContext;

class Take_fileContext extends TakeContext {

    constructor(parser, ctx) {
        super(parser);
        this.tf_name = null; // Token;
        this.tf_as = null; // IdentifierContext;
        super.copyFrom(ctx);
    }

	TAKE_FILE() {
	    return this.getToken(DiiaParser.TAKE_FILE, 0);
	};

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
	};

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTake_file(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTake_file(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTake_file(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Take_fileContext = Take_fileContext;

class Take_remoteContext extends TakeContext {

    constructor(parser, ctx) {
        super(parser);
        this.tr_url = null; // Token;
        this.tr_as = null; // IdentifierContext;
        super.copyFrom(ctx);
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

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTake_remote(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTake_remote(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTake_remote(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Take_remoteContext = Take_remoteContext;

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
    }

	GIVE() {
	    return this.getToken(DiiaParser.GIVE, 0);
	};

	give_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Give_elementContext);
	    } else {
	        return this.getTypedRuleContext(Give_elementContext,i);
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



class Give_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_give_element;
        this.ge_name = null; // IdentifierContext
        this.ge_as = null; // IdentifierContext
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

	AS() {
	    return this.getToken(DiiaParser.AS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterGive_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitGive_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitGive_element(this);
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

class Get_elementContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.a_left = null; // ValueContext;
        this.a_element = null; // ExprContext;
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
	        listener.enterGet_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitGet_element(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitGet_element(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.Get_elementContext = Get_elementContext;

class ChainContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.c_left = null; // ValueContext;
        this.c_right = null; // IdentifierContext;
        super.copyFrom(ctx);
    }

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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

class DictionaryContext extends ValueContext {

    constructor(parser, ctx) {
        super(parser);
        this.d_args = null; // Dictionary_argsContext;
        super.copyFrom(ctx);
    }

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	dictionary_args() {
	    return this.getTypedRuleContext(Dictionary_argsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterDictionary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDictionary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDictionary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

DiiaParser.DictionaryContext = DictionaryContext;

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



class Dictionary_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_dictionary_args;
    }

	dictionary_arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dictionary_argContext);
	    } else {
	        return this.getTypedRuleContext(Dictionary_argContext,i);
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
	        listener.enterDictionary_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDictionary_args(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDictionary_args(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Dictionary_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_dictionary_arg;
        this.da_name_id = null; // IdentifierContext
        this.da_name_string = null; // Token
        this.da_value = null; // ExprContext
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterDictionary_arg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDictionary_arg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDictionary_arg(this);
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
        this.ade_id = null; // IdentifierContext
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



class Object_destructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_object_destruction;
    }

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	object_destruction_el = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_destruction_elContext);
	    } else {
	        return this.getTypedRuleContext(Object_destruction_elContext,i);
	    }
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
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
	        listener.enterObject_destruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitObject_destruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitObject_destruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Object_destruction_elContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_object_destruction_el;
        this.ode_id = null; // IdentifierContext
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
	        listener.enterObject_destruction_el(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitObject_destruction_el(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitObject_destruction_el(this);
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
        this.a_set_element = null; // ExprContext
        this.a_identifier = null; // IdentifierContext
        this.a_type = null; // Type_valueContext
        this.a_array_destruction = null; // Array_destructionContext
        this.a_object_destruction = null; // Object_destructionContext
        this.a_symbol = null; // Assign_symbolContext
        this.a_value = null; // Assign_valueContext
    }

	assign_symbol() {
	    return this.getTypedRuleContext(Assign_symbolContext,0);
	};

	assign_value() {
	    return this.getTypedRuleContext(Assign_valueContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	array_destruction() {
	    return this.getTypedRuleContext(Array_destructionContext,0);
	};

	object_destruction() {
	    return this.getTypedRuleContext(Object_destructionContext,0);
	};

	identifiers_chain() {
	    return this.getTypedRuleContext(Identifiers_chainContext,0);
	};

	type_value() {
	    return this.getTypedRuleContext(Type_valueContext,0);
	};

	OPEN_ARRAY() {
	    return this.getToken(DiiaParser.OPEN_ARRAY, 0);
	};

	CLOSE_ARRAY() {
	    return this.getToken(DiiaParser.CLOSE_ARRAY, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
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



class Assign_symbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_assign_symbol;
    }

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
	};

	ASSIGN_PARENT() {
	    return this.getToken(DiiaParser.ASSIGN_PARENT, 0);
	};

	ASSIGN_ADD() {
	    return this.getToken(DiiaParser.ASSIGN_ADD, 0);
	};

	ASSIGN_SUB() {
	    return this.getToken(DiiaParser.ASSIGN_SUB, 0);
	};

	ASSIGN_MUL() {
	    return this.getToken(DiiaParser.ASSIGN_MUL, 0);
	};

	ASSIGN_DIV() {
	    return this.getToken(DiiaParser.ASSIGN_DIV, 0);
	};

	ASSIGN_DIVDIV() {
	    return this.getToken(DiiaParser.ASSIGN_DIVDIV, 0);
	};

	ASSIGN_MOD() {
	    return this.getToken(DiiaParser.ASSIGN_MOD, 0);
	};

	ASSIGN_XOR() {
	    return this.getToken(DiiaParser.ASSIGN_XOR, 0);
	};

	ASSIGN_POW() {
	    return this.getToken(DiiaParser.ASSIGN_POW, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterAssign_symbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitAssign_symbol(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitAssign_symbol(this);
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
        this.p_object_destruction = null; // Object_destructionContext
        this.p_type = null; // Type_valueContext
        this.p_value = null; // Param_valueContext
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	array_destruction() {
	    return this.getTypedRuleContext(Array_destructionContext,0);
	};

	object_destruction() {
	    return this.getTypedRuleContext(Object_destructionContext,0);
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

	mockup() {
	    return this.getTypedRuleContext(MockupContext,0);
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

	eval() {
	    return this.getTypedRuleContext(EvalContext,0);
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

	OR_SYM() {
	    return this.getToken(DiiaParser.OR_SYM, 0);
	};

	AND_SYM() {
	    return this.getToken(DiiaParser.AND_SYM, 0);
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

	GREATER_EQ() {
	    return this.getToken(DiiaParser.GREATER_EQ, 0);
	};

	SMALLER_EQ() {
	    return this.getToken(DiiaParser.SMALLER_EQ, 0);
	};

	IS() {
	    return this.getToken(DiiaParser.IS, 0);
	};

	NOT_IS_WORD() {
	    return this.getToken(DiiaParser.NOT_IS_WORD, 0);
	};

	EQ_WORD() {
	    return this.getToken(DiiaParser.EQ_WORD, 0);
	};

	NOT_EQ_WORD() {
	    return this.getToken(DiiaParser.NOT_EQ_WORD, 0);
	};

	GR_WORD() {
	    return this.getToken(DiiaParser.GR_WORD, 0);
	};

	NOT_GR_WORD() {
	    return this.getToken(DiiaParser.NOT_GR_WORD, 0);
	};

	SM_WORD() {
	    return this.getToken(DiiaParser.SM_WORD, 0);
	};

	NOT_SM_WORD() {
	    return this.getToken(DiiaParser.NOT_SM_WORD, 0);
	};

	HAS_IS_WORD() {
	    return this.getToken(DiiaParser.HAS_IS_WORD, 0);
	};

	NOT_HAS_IS_WORD() {
	    return this.getToken(DiiaParser.NOT_HAS_IS_WORD, 0);
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
DiiaParser.MockupContext = MockupContext; 
DiiaParser.Mockup_parentsContext = Mockup_parentsContext; 
DiiaParser.Mockup_elementsContext = Mockup_elementsContext; 
DiiaParser.Mockup_elementContext = Mockup_elementContext; 
DiiaParser.DiiaContext = DiiaContext; 
DiiaParser.IfContext = IfContext; 
DiiaParser.EachContext = EachContext; 
DiiaParser.WhileContext = WhileContext; 
DiiaParser.EvalContext = EvalContext; 
DiiaParser.TryContext = TryContext; 
DiiaParser.TakeContext = TakeContext; 
DiiaParser.GiveContext = GiveContext; 
DiiaParser.Give_elementContext = Give_elementContext; 
DiiaParser.ValueContext = ValueContext; 
DiiaParser.Array_elementsContext = Array_elementsContext; 
DiiaParser.Array_elementContext = Array_elementContext; 
DiiaParser.Dictionary_argsContext = Dictionary_argsContext; 
DiiaParser.Dictionary_argContext = Dictionary_argContext; 
DiiaParser.ExprContext = ExprContext; 
DiiaParser.ThrowContext = ThrowContext; 
DiiaParser.Array_destructionContext = Array_destructionContext; 
DiiaParser.Array_destruction_elContext = Array_destruction_elContext; 
DiiaParser.Object_destructionContext = Object_destructionContext; 
DiiaParser.Object_destruction_elContext = Object_destruction_elContext; 
DiiaParser.AssignContext = AssignContext; 
DiiaParser.Assign_valueContext = Assign_valueContext; 
DiiaParser.Assign_symbolContext = Assign_symbolContext; 
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
