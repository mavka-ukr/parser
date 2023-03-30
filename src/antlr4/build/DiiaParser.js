// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,85,703,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,114,
8,1,10,1,12,1,117,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,3,2,134,8,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,142,8,3,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,3,4,151,8,4,1,4,1,4,3,4,155,8,4,1,4,1,4,1,4,1,4,1,4,3,4,162,
8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,170,8,5,10,5,12,5,173,9,5,1,6,1,6,1,6,3,
6,178,8,6,1,7,1,7,1,7,1,7,3,7,184,8,7,1,7,1,7,1,7,1,7,1,7,3,7,191,8,7,1,
7,1,7,1,8,1,8,1,8,5,8,198,8,8,10,8,12,8,201,9,8,1,9,1,9,1,9,1,9,5,9,207,
8,9,10,9,12,9,210,9,9,1,10,1,10,1,10,1,10,3,10,216,8,10,1,10,1,10,1,10,1,
10,3,10,222,8,10,1,11,3,11,225,8,11,1,11,1,11,1,11,1,11,3,11,231,8,11,1,
11,1,11,1,11,1,11,3,11,237,8,11,1,11,1,11,1,11,1,11,3,11,243,8,11,1,11,1,
11,1,11,1,11,3,11,249,8,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
3,12,260,8,12,1,12,1,12,1,12,1,12,3,12,266,8,12,1,12,1,12,3,12,270,8,12,
1,13,1,13,1,13,1,13,1,13,1,13,3,13,278,8,13,1,13,3,13,281,8,13,1,13,1,13,
1,13,1,13,3,13,287,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,3,14,297,
8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,3,15,307,8,15,1,15,1,15,1,15,
3,15,312,8,15,1,15,1,15,1,16,1,16,3,16,318,8,16,1,16,1,16,3,16,322,8,16,
1,16,1,16,3,16,326,8,16,1,16,1,16,1,16,3,16,331,8,16,1,16,1,16,3,16,335,
8,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,345,8,16,3,16,347,8,16,
1,17,1,17,1,17,1,17,5,17,353,8,17,10,17,12,17,356,9,17,1,18,1,18,1,18,3,
18,361,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,387,8,19,
1,19,1,19,1,19,1,19,3,19,393,8,19,1,19,1,19,1,19,3,19,398,8,19,1,19,3,19,
401,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,426,8,19,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
19,1,19,1,19,1,19,5,19,448,8,19,10,19,12,19,451,9,19,1,20,1,20,1,20,5,20,
456,8,20,10,20,12,20,459,9,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,5,22,468,
8,22,10,22,12,22,471,9,22,1,23,1,23,1,23,3,23,476,8,23,1,23,1,23,1,23,1,
23,1,24,1,24,1,24,1,24,1,24,3,24,487,8,24,1,24,1,24,3,24,491,8,24,1,24,1,
24,1,24,3,24,496,8,24,1,24,1,24,1,24,1,24,3,24,502,8,24,1,24,1,24,1,24,1,
24,3,24,508,8,24,1,24,1,24,1,24,1,24,3,24,514,8,24,1,24,1,24,1,24,3,24,519,
8,24,1,25,1,25,1,25,1,26,1,26,1,26,1,26,5,26,528,8,26,10,26,12,26,531,9,
26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,5,28,543,8,28,10,28,
12,28,546,9,28,1,28,1,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,3,
30,559,8,30,1,30,1,30,3,30,563,8,30,1,30,1,30,3,30,567,8,30,1,30,1,30,1,
30,1,31,1,31,3,31,574,8,31,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,35,1,35,
1,35,1,35,1,35,1,35,5,35,589,8,35,10,35,12,35,592,9,35,1,36,1,36,1,36,1,
36,1,36,1,36,1,36,5,36,601,8,36,10,36,12,36,604,9,36,1,37,1,37,1,37,5,37,
609,8,37,10,37,12,37,612,9,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,5,39,621,
8,39,10,39,12,39,624,9,39,1,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,
41,1,41,1,41,5,41,638,8,41,10,41,12,41,641,9,41,1,42,1,42,1,42,3,42,646,
8,42,1,42,3,42,649,8,42,1,42,1,42,3,42,653,8,42,1,43,1,43,1,43,3,43,658,
8,43,1,44,1,44,1,44,1,44,5,44,664,8,44,10,44,12,44,667,9,44,1,45,1,45,1,
45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,682,8,45,1,46,
1,46,1,46,1,47,1,47,1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,5,52,698,
8,52,10,52,12,52,701,9,52,1,52,0,3,38,70,72,53,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,0,5,1,0,52,61,
2,0,64,65,69,72,1,0,62,63,2,0,21,22,73,74,3,0,5,10,18,18,30,39,774,0,106,
1,0,0,0,2,109,1,0,0,0,4,133,1,0,0,0,6,135,1,0,0,0,8,146,1,0,0,0,10,165,1,
0,0,0,12,177,1,0,0,0,14,179,1,0,0,0,16,194,1,0,0,0,18,202,1,0,0,0,20,211,
1,0,0,0,22,224,1,0,0,0,24,253,1,0,0,0,26,271,1,0,0,0,28,290,1,0,0,0,30,300,
1,0,0,0,32,346,1,0,0,0,34,348,1,0,0,0,36,357,1,0,0,0,38,400,1,0,0,0,40,452,
1,0,0,0,42,460,1,0,0,0,44,464,1,0,0,0,46,472,1,0,0,0,48,518,1,0,0,0,50,520,
1,0,0,0,52,523,1,0,0,0,54,534,1,0,0,0,56,538,1,0,0,0,58,549,1,0,0,0,60,566,
1,0,0,0,62,573,1,0,0,0,64,575,1,0,0,0,66,577,1,0,0,0,68,580,1,0,0,0,70,582,
1,0,0,0,72,593,1,0,0,0,74,605,1,0,0,0,76,613,1,0,0,0,78,617,1,0,0,0,80,625,
1,0,0,0,82,631,1,0,0,0,84,645,1,0,0,0,86,657,1,0,0,0,88,659,1,0,0,0,90,681,
1,0,0,0,92,683,1,0,0,0,94,686,1,0,0,0,96,688,1,0,0,0,98,690,1,0,0,0,100,
692,1,0,0,0,102,694,1,0,0,0,104,699,1,0,0,0,106,107,3,2,1,0,107,108,5,0,
0,1,108,1,1,0,0,0,109,115,3,4,2,0,110,111,3,102,51,0,111,112,3,4,2,0,112,
114,1,0,0,0,113,110,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,
0,0,116,3,1,0,0,0,117,115,1,0,0,0,118,134,3,6,3,0,119,134,3,8,4,0,120,134,
3,14,7,0,121,134,3,22,11,0,122,134,3,24,12,0,123,134,3,26,13,0,124,134,3,
28,14,0,125,134,3,30,15,0,126,134,3,48,24,0,127,134,3,50,25,0,128,134,3,
66,33,0,129,134,3,60,30,0,130,134,3,104,52,0,131,134,3,32,16,0,132,134,3,
34,17,0,133,118,1,0,0,0,133,119,1,0,0,0,133,120,1,0,0,0,133,121,1,0,0,0,
133,122,1,0,0,0,133,123,1,0,0,0,133,124,1,0,0,0,133,125,1,0,0,0,133,126,
1,0,0,0,133,127,1,0,0,0,133,128,1,0,0,0,133,129,1,0,0,0,133,130,1,0,0,0,
133,131,1,0,0,0,133,132,1,0,0,0,134,5,1,0,0,0,135,136,5,28,0,0,136,137,3,
68,34,0,137,141,3,102,51,0,138,139,3,2,1,0,139,140,3,102,51,0,140,142,1,
0,0,0,141,138,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,144,3,104,52,0,
144,145,5,1,0,0,145,7,1,0,0,0,146,147,5,3,0,0,147,150,3,68,34,0,148,149,
5,18,0,0,149,151,3,70,35,0,150,148,1,0,0,0,150,151,1,0,0,0,151,154,1,0,0,
0,152,153,5,42,0,0,153,155,3,16,8,0,154,152,1,0,0,0,154,155,1,0,0,0,155,
156,1,0,0,0,156,157,3,102,51,0,157,161,3,104,52,0,158,159,3,10,5,0,159,160,
3,102,51,0,160,162,1,0,0,0,161,158,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,
0,163,164,5,1,0,0,164,9,1,0,0,0,165,171,3,12,6,0,166,167,3,102,51,0,167,
168,3,12,6,0,168,170,1,0,0,0,169,166,1,0,0,0,170,173,1,0,0,0,171,169,1,0,
0,0,171,172,1,0,0,0,172,11,1,0,0,0,173,171,1,0,0,0,174,178,3,84,42,0,175,
178,3,22,11,0,176,178,3,104,52,0,177,174,1,0,0,0,177,175,1,0,0,0,177,176,
1,0,0,0,178,13,1,0,0,0,179,180,5,41,0,0,180,183,3,68,34,0,181,182,5,42,0,
0,182,184,3,16,8,0,183,181,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,186,
3,102,51,0,186,190,3,104,52,0,187,188,3,18,9,0,188,189,3,102,51,0,189,191,
1,0,0,0,190,187,1,0,0,0,190,191,1,0,0,0,191,192,1,0,0,0,192,193,5,1,0,0,
193,15,1,0,0,0,194,199,3,70,35,0,195,196,5,51,0,0,196,198,3,70,35,0,197,
195,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,17,1,0,0,
0,201,199,1,0,0,0,202,208,3,20,10,0,203,204,3,102,51,0,204,205,3,20,10,0,
205,207,1,0,0,0,206,203,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,
1,0,0,0,209,19,1,0,0,0,210,208,1,0,0,0,211,212,3,68,34,0,212,213,5,47,0,
0,213,215,3,104,52,0,214,216,3,82,41,0,215,214,1,0,0,0,215,216,1,0,0,0,216,
217,1,0,0,0,217,218,3,104,52,0,218,219,1,0,0,0,219,221,5,48,0,0,220,222,
3,72,36,0,221,220,1,0,0,0,221,222,1,0,0,0,222,21,1,0,0,0,223,225,5,20,0,
0,224,223,1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,230,5,2,0,0,227,228,
3,68,34,0,228,229,5,67,0,0,229,231,1,0,0,0,230,227,1,0,0,0,230,231,1,0,0,
0,231,232,1,0,0,0,232,233,3,68,34,0,233,234,5,47,0,0,234,236,3,104,52,0,
235,237,3,82,41,0,236,235,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,239,
3,104,52,0,239,240,1,0,0,0,240,242,5,48,0,0,241,243,3,72,36,0,242,241,1,
0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,248,3,102,51,0,245,246,3,88,44,
0,246,247,3,102,51,0,247,249,1,0,0,0,248,245,1,0,0,0,248,249,1,0,0,0,249,
250,1,0,0,0,250,251,3,104,52,0,251,252,5,1,0,0,252,23,1,0,0,0,253,254,5,
11,0,0,254,255,3,48,24,0,255,259,3,102,51,0,256,257,3,88,44,0,257,258,3,
102,51,0,258,260,1,0,0,0,259,256,1,0,0,0,259,260,1,0,0,0,260,269,1,0,0,0,
261,262,5,25,0,0,262,263,3,88,44,0,263,264,3,102,51,0,264,266,1,0,0,0,265,
261,1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,0,267,270,5,1,0,0,268,270,3,24,
12,0,269,265,1,0,0,0,269,268,1,0,0,0,270,25,1,0,0,0,271,272,5,4,0,0,272,
280,3,48,24,0,273,277,5,17,0,0,274,275,3,68,34,0,275,276,5,51,0,0,276,278,
1,0,0,0,277,274,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,281,3,68,34,
0,280,273,1,0,0,0,280,281,1,0,0,0,281,282,1,0,0,0,282,286,3,102,51,0,283,
284,3,88,44,0,284,285,3,102,51,0,285,287,1,0,0,0,286,283,1,0,0,0,286,287,
1,0,0,0,287,288,1,0,0,0,288,289,5,1,0,0,289,27,1,0,0,0,290,291,5,27,0,0,
291,292,3,48,24,0,292,296,3,102,51,0,293,294,3,88,44,0,294,295,3,102,51,
0,295,297,1,0,0,0,296,293,1,0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,299,
5,1,0,0,299,29,1,0,0,0,300,301,5,23,0,0,301,302,3,102,51,0,302,303,3,88,
44,0,303,304,3,102,51,0,304,306,5,24,0,0,305,307,3,68,34,0,306,305,1,0,0,
0,306,307,1,0,0,0,307,311,1,0,0,0,308,309,3,88,44,0,309,310,3,102,51,0,310,
312,1,0,0,0,311,308,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,314,5,1,
0,0,314,31,1,0,0,0,315,317,5,13,0,0,316,318,5,67,0,0,317,316,1,0,0,0,317,
318,1,0,0,0,318,319,1,0,0,0,319,321,3,70,35,0,320,322,5,40,0,0,321,320,1,
0,0,0,321,322,1,0,0,0,322,325,1,0,0,0,323,324,5,17,0,0,324,326,3,68,34,0,
325,323,1,0,0,0,325,326,1,0,0,0,326,347,1,0,0,0,327,328,5,14,0,0,328,330,
3,70,35,0,329,331,5,40,0,0,330,329,1,0,0,0,330,331,1,0,0,0,331,334,1,0,0,
0,332,333,5,17,0,0,333,335,3,68,34,0,334,332,1,0,0,0,334,335,1,0,0,0,335,
347,1,0,0,0,336,337,5,15,0,0,337,338,5,83,0,0,338,339,5,17,0,0,339,347,3,
68,34,0,340,341,5,13,0,0,341,344,5,83,0,0,342,343,5,17,0,0,343,345,3,68,
34,0,344,342,1,0,0,0,344,345,1,0,0,0,345,347,1,0,0,0,346,315,1,0,0,0,346,
327,1,0,0,0,346,336,1,0,0,0,346,340,1,0,0,0,347,33,1,0,0,0,348,349,5,16,
0,0,349,354,3,36,18,0,350,351,5,51,0,0,351,353,3,36,18,0,352,350,1,0,0,0,
353,356,1,0,0,0,354,352,1,0,0,0,354,355,1,0,0,0,355,35,1,0,0,0,356,354,1,
0,0,0,357,360,3,68,34,0,358,359,5,17,0,0,359,361,3,68,34,0,360,358,1,0,0,
0,360,361,1,0,0,0,361,37,1,0,0,0,362,363,6,19,-1,0,363,401,5,80,0,0,364,
401,5,83,0,0,365,401,3,68,34,0,366,367,5,62,0,0,367,401,3,38,19,17,368,369,
5,63,0,0,369,401,3,38,19,16,370,371,5,45,0,0,371,401,3,38,19,15,372,373,
5,46,0,0,373,401,3,38,19,14,374,375,5,68,0,0,375,401,3,38,19,11,376,377,
5,47,0,0,377,378,3,48,24,0,378,379,5,48,0,0,379,401,1,0,0,0,380,381,5,47,
0,0,381,382,3,48,24,0,382,383,5,48,0,0,383,386,5,47,0,0,384,387,3,74,37,
0,385,387,3,78,39,0,386,384,1,0,0,0,386,385,1,0,0,0,386,387,1,0,0,0,387,
388,1,0,0,0,388,389,5,48,0,0,389,401,1,0,0,0,390,392,5,49,0,0,391,393,3,
40,20,0,392,391,1,0,0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,401,5,50,0,0,
395,397,5,47,0,0,396,398,3,44,22,0,397,396,1,0,0,0,397,398,1,0,0,0,398,399,
1,0,0,0,399,401,5,48,0,0,400,362,1,0,0,0,400,364,1,0,0,0,400,365,1,0,0,0,
400,366,1,0,0,0,400,368,1,0,0,0,400,370,1,0,0,0,400,372,1,0,0,0,400,374,
1,0,0,0,400,376,1,0,0,0,400,380,1,0,0,0,400,390,1,0,0,0,400,395,1,0,0,0,
401,449,1,0,0,0,402,403,10,7,0,0,403,404,3,94,47,0,404,405,3,38,19,8,405,
448,1,0,0,0,406,407,10,6,0,0,407,408,3,96,48,0,408,409,3,38,19,7,409,448,
1,0,0,0,410,411,10,5,0,0,411,412,3,100,50,0,412,413,3,38,19,6,413,448,1,
0,0,0,414,415,10,4,0,0,415,416,3,98,49,0,416,417,3,38,19,5,417,448,1,0,0,
0,418,419,10,19,0,0,419,420,5,67,0,0,420,448,3,68,34,0,421,422,10,18,0,0,
422,425,5,47,0,0,423,426,3,74,37,0,424,426,3,78,39,0,425,423,1,0,0,0,425,
424,1,0,0,0,425,426,1,0,0,0,426,427,1,0,0,0,427,448,5,48,0,0,428,429,10,
13,0,0,429,448,5,45,0,0,430,431,10,12,0,0,431,448,5,46,0,0,432,433,10,10,
0,0,433,434,5,49,0,0,434,435,3,48,24,0,435,436,5,50,0,0,436,448,1,0,0,0,
437,438,10,3,0,0,438,439,3,104,52,0,439,440,5,29,0,0,440,441,3,104,52,0,
441,442,3,48,24,0,442,443,3,104,52,0,443,444,5,66,0,0,444,445,3,104,52,0,
445,446,3,48,24,0,446,448,1,0,0,0,447,402,1,0,0,0,447,406,1,0,0,0,447,410,
1,0,0,0,447,414,1,0,0,0,447,418,1,0,0,0,447,421,1,0,0,0,447,428,1,0,0,0,
447,430,1,0,0,0,447,432,1,0,0,0,447,437,1,0,0,0,448,451,1,0,0,0,449,447,
1,0,0,0,449,450,1,0,0,0,450,39,1,0,0,0,451,449,1,0,0,0,452,457,3,42,21,0,
453,454,5,51,0,0,454,456,3,42,21,0,455,453,1,0,0,0,456,459,1,0,0,0,457,455,
1,0,0,0,457,458,1,0,0,0,458,41,1,0,0,0,459,457,1,0,0,0,460,461,3,104,52,
0,461,462,3,48,24,0,462,463,3,104,52,0,463,43,1,0,0,0,464,469,3,46,23,0,
465,466,5,51,0,0,466,468,3,46,23,0,467,465,1,0,0,0,468,471,1,0,0,0,469,467,
1,0,0,0,469,470,1,0,0,0,470,45,1,0,0,0,471,469,1,0,0,0,472,475,3,104,52,
0,473,476,3,68,34,0,474,476,5,83,0,0,475,473,1,0,0,0,475,474,1,0,0,0,476,
477,1,0,0,0,477,478,5,52,0,0,478,479,3,48,24,0,479,480,3,104,52,0,480,47,
1,0,0,0,481,519,3,38,19,0,482,483,5,12,0,0,483,519,3,38,19,0,484,486,5,47,
0,0,485,487,3,82,41,0,486,485,1,0,0,0,486,487,1,0,0,0,487,488,1,0,0,0,488,
490,5,48,0,0,489,491,3,72,36,0,490,489,1,0,0,0,490,491,1,0,0,0,491,492,1,
0,0,0,492,493,5,66,0,0,493,519,3,48,24,0,494,496,5,20,0,0,495,494,1,0,0,
0,495,496,1,0,0,0,496,497,1,0,0,0,497,498,5,2,0,0,498,499,5,47,0,0,499,501,
3,104,52,0,500,502,3,82,41,0,501,500,1,0,0,0,501,502,1,0,0,0,502,503,1,0,
0,0,503,504,3,104,52,0,504,505,1,0,0,0,505,507,5,48,0,0,506,508,3,72,36,
0,507,506,1,0,0,0,507,508,1,0,0,0,508,509,1,0,0,0,509,513,3,102,51,0,510,
511,3,88,44,0,511,512,3,102,51,0,512,514,1,0,0,0,513,510,1,0,0,0,513,514,
1,0,0,0,514,515,1,0,0,0,515,516,3,104,52,0,516,517,5,1,0,0,517,519,1,0,0,
0,518,481,1,0,0,0,518,482,1,0,0,0,518,484,1,0,0,0,518,495,1,0,0,0,519,49,
1,0,0,0,520,521,5,26,0,0,521,522,3,48,24,0,522,51,1,0,0,0,523,524,5,49,0,
0,524,529,3,54,27,0,525,526,5,51,0,0,526,528,3,54,27,0,527,525,1,0,0,0,528,
531,1,0,0,0,529,527,1,0,0,0,529,530,1,0,0,0,530,532,1,0,0,0,531,529,1,0,
0,0,532,533,5,50,0,0,533,53,1,0,0,0,534,535,3,104,52,0,535,536,3,68,34,0,
536,537,3,104,52,0,537,55,1,0,0,0,538,539,5,47,0,0,539,544,3,58,29,0,540,
541,5,51,0,0,541,543,3,58,29,0,542,540,1,0,0,0,543,546,1,0,0,0,544,542,1,
0,0,0,544,545,1,0,0,0,545,547,1,0,0,0,546,544,1,0,0,0,547,548,5,48,0,0,548,
57,1,0,0,0,549,550,3,104,52,0,550,551,3,68,34,0,551,552,3,104,52,0,552,59,
1,0,0,0,553,558,3,70,35,0,554,555,5,49,0,0,555,556,3,48,24,0,556,557,5,50,
0,0,557,559,1,0,0,0,558,554,1,0,0,0,558,559,1,0,0,0,559,567,1,0,0,0,560,
562,3,68,34,0,561,563,3,72,36,0,562,561,1,0,0,0,562,563,1,0,0,0,563,567,
1,0,0,0,564,567,3,52,26,0,565,567,3,56,28,0,566,553,1,0,0,0,566,560,1,0,
0,0,566,564,1,0,0,0,566,565,1,0,0,0,567,568,1,0,0,0,568,569,3,64,32,0,569,
570,3,62,31,0,570,61,1,0,0,0,571,574,3,48,24,0,572,574,3,60,30,0,573,571,
1,0,0,0,573,572,1,0,0,0,574,63,1,0,0,0,575,576,7,0,0,0,576,65,1,0,0,0,577,
578,5,12,0,0,578,579,3,60,30,0,579,67,1,0,0,0,580,581,5,79,0,0,581,69,1,
0,0,0,582,583,6,35,-1,0,583,584,3,68,34,0,584,590,1,0,0,0,585,586,10,1,0,
0,586,587,5,67,0,0,587,589,3,70,35,2,588,585,1,0,0,0,589,592,1,0,0,0,590,
588,1,0,0,0,590,591,1,0,0,0,591,71,1,0,0,0,592,590,1,0,0,0,593,594,6,36,
-1,0,594,595,3,70,35,0,595,602,1,0,0,0,596,597,10,1,0,0,597,598,3,98,49,
0,598,599,3,72,36,2,599,601,1,0,0,0,600,596,1,0,0,0,601,604,1,0,0,0,602,
600,1,0,0,0,602,603,1,0,0,0,603,73,1,0,0,0,604,602,1,0,0,0,605,610,3,76,
38,0,606,607,5,51,0,0,607,609,3,76,38,0,608,606,1,0,0,0,609,612,1,0,0,0,
610,608,1,0,0,0,610,611,1,0,0,0,611,75,1,0,0,0,612,610,1,0,0,0,613,614,3,
104,52,0,614,615,3,48,24,0,615,616,3,104,52,0,616,77,1,0,0,0,617,622,3,80,
40,0,618,619,5,51,0,0,619,621,3,80,40,0,620,618,1,0,0,0,621,624,1,0,0,0,
622,620,1,0,0,0,622,623,1,0,0,0,623,79,1,0,0,0,624,622,1,0,0,0,625,626,3,
104,52,0,626,627,3,68,34,0,627,628,5,52,0,0,628,629,3,48,24,0,629,630,3,
104,52,0,630,81,1,0,0,0,631,639,3,84,42,0,632,633,3,104,52,0,633,634,5,51,
0,0,634,635,3,104,52,0,635,636,3,84,42,0,636,638,1,0,0,0,637,632,1,0,0,0,
638,641,1,0,0,0,639,637,1,0,0,0,639,640,1,0,0,0,640,83,1,0,0,0,641,639,1,
0,0,0,642,646,3,68,34,0,643,646,3,52,26,0,644,646,3,56,28,0,645,642,1,0,
0,0,645,643,1,0,0,0,645,644,1,0,0,0,646,648,1,0,0,0,647,649,3,72,36,0,648,
647,1,0,0,0,648,649,1,0,0,0,649,652,1,0,0,0,650,651,5,52,0,0,651,653,3,86,
43,0,652,650,1,0,0,0,652,653,1,0,0,0,653,85,1,0,0,0,654,658,5,80,0,0,655,
658,5,83,0,0,656,658,3,68,34,0,657,654,1,0,0,0,657,655,1,0,0,0,657,656,1,
0,0,0,658,87,1,0,0,0,659,665,3,90,45,0,660,661,3,102,51,0,661,662,3,90,45,
0,662,664,1,0,0,0,663,660,1,0,0,0,664,667,1,0,0,0,665,663,1,0,0,0,665,666,
1,0,0,0,666,89,1,0,0,0,667,665,1,0,0,0,668,682,3,8,4,0,669,682,3,14,7,0,
670,682,3,22,11,0,671,682,3,24,12,0,672,682,3,26,13,0,673,682,3,28,14,0,
674,682,3,30,15,0,675,682,3,48,24,0,676,682,3,50,25,0,677,682,3,66,33,0,
678,682,3,60,30,0,679,682,3,92,46,0,680,682,3,104,52,0,681,668,1,0,0,0,681,
669,1,0,0,0,681,670,1,0,0,0,681,671,1,0,0,0,681,672,1,0,0,0,681,673,1,0,
0,0,681,674,1,0,0,0,681,675,1,0,0,0,681,676,1,0,0,0,681,677,1,0,0,0,681,
678,1,0,0,0,681,679,1,0,0,0,681,680,1,0,0,0,682,91,1,0,0,0,683,684,5,19,
0,0,684,685,3,90,45,0,685,93,1,0,0,0,686,687,7,1,0,0,687,95,1,0,0,0,688,
689,7,2,0,0,689,97,1,0,0,0,690,691,7,3,0,0,691,99,1,0,0,0,692,693,7,4,0,
0,693,101,1,0,0,0,694,695,5,44,0,0,695,103,1,0,0,0,696,698,3,102,51,0,697,
696,1,0,0,0,698,701,1,0,0,0,699,697,1,0,0,0,699,700,1,0,0,0,700,105,1,0,
0,0,701,699,1,0,0,0,72,115,133,141,150,154,161,171,177,183,190,199,208,215,
221,224,230,236,242,248,259,265,269,277,280,286,296,306,311,317,321,325,
330,334,344,346,354,360,386,392,397,400,425,447,449,457,469,475,486,490,
495,501,507,513,518,529,544,558,562,566,573,590,602,610,622,639,645,648,
652,657,665,681,699];


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
                            null, null, "'--'", "'++'", "'('", "')'", "'['", 
                            "']'", "','", "'='", "':='", "'+='", "'-='", 
                            "'*='", "'/='", "'//='", "'%='", "'^='", "'**='", 
                            "'+'", "'-'", "'*'", "'/'", "':'", "'.'", "'!'", 
                            "'%'", "'//'", "'**'", "'^'", "'||'", "'&&'", 
                            "'|'", "'&'", "'<<'", "'>>'" ];
    static symbolicNames = [ null, "END", "DIIA", "STRUCTURE", "FOR", "EQ", 
                             "NOT_EQ", "GREATER_EQ", "SMALLER_EQ", "GREATER", 
                             "SMALLER", "IF", "WAIT", "TAKE", "TAKE_PAK", 
                             "TAKE_FILE", "GIVE", "AS", "IS", "RETURN", 
                             "ASYNC", "AND", "OR", "TRY", "CATCH", "ELSE", 
                             "THROW", "WHILE", "MODULE", "TERNARY", "EQ_WORD", 
                             "GR_WORD", "SM_WORD", "NOT_GR_WORD", "NOT_SM_WORD", 
                             "NOT_EQ_WORD", "NOT_IS_WORD", "HAS_IS_WORD", 
                             "NOT_HAS_IS_WORD", "NOT_WORD", "STAR_ALL", 
                             "MOCKUP", "IMPLEMENTS", "SKIP_SPACES", "NL", 
                             "DECREMENT", "INCREMENT", "OPEN_PAREN", "CLOSE_PAREN", 
                             "OPEN_ARRAY", "CLOSE_ARRAY", "COMMA", "ASSIGN", 
                             "ASSIGN_PARENT", "ASSIGN_ADD", "ASSIGN_SUB", 
                             "ASSIGN_MUL", "ASSIGN_DIV", "ASSIGN_DIVDIV", 
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
                         "try", "take", "give", "give_element", "value", 
                         "array_elements", "array_element", "dictionary_args", 
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
    	case 19:
    	    		return this.value_sempred(localctx, predIndex);
    	case 35:
    	    		return this.identifiers_chain_sempred(localctx, predIndex);
    	case 36:
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
	        this.state = 106;
	        localctx.f_program = this.program();
	        this.state = 107;
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
	        this.state = 109;
	        this.program_element();
	        this.state = 115;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 110;
	                this.nl();
	                this.state = 111;
	                this.program_element(); 
	            }
	            this.state = 117;
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
	        this.state = 133;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 118;
	            this.module();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 119;
	            this.structure();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 120;
	            this.mockup();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 121;
	            this.diia();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 122;
	            this.if_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 123;
	            this.each();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 124;
	            this.while_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 125;
	            this.try_();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 126;
	            this.expr();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 127;
	            this.throw_();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 128;
	            this.wait_assign();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 129;
	            this.assign();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 130;
	            this.nls();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 131;
	            this.take();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 132;
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
	        this.state = 135;
	        this.match(DiiaParser.MODULE);
	        this.state = 136;
	        localctx.m_name = this.identifier();
	        this.state = 137;
	        this.nl();
	        this.state = 141;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 138;
	            localctx.m_program = this.program();
	            this.state = 139;
	            this.nl();

	        }
	        this.state = 143;
	        this.nls();
	        this.state = 144;
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
	        this.state = 146;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 147;
	        localctx.s_name = this.identifier();
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 148;
	            this.match(DiiaParser.IS);
	            this.state = 149;
	            localctx.s_parent = this.identifiers_chain(0);
	        }

	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 152;
	            this.match(DiiaParser.IMPLEMENTS);
	            this.state = 153;
	            localctx.m_parents = this.mockup_parents();
	        }

	        this.state = 156;
	        this.nl();
	        this.state = 157;
	        this.nls();
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2 || _la===20 || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & 41) !== 0) || _la===79) {
	            this.state = 158;
	            localctx.s_elements = this.structure_elements();
	            this.state = 159;
	            this.nl();
	        }

	        this.state = 163;
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
	        this.state = 165;
	        this.structure_element();
	        this.state = 171;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 166;
	                this.nl();
	                this.state = 167;
	                this.structure_element(); 
	            }
	            this.state = 173;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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
	        this.state = 177;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 47:
	        case 49:
	        case 79:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.param();
	            break;
	        case 2:
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 175;
	            this.diia();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 176;
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
	        this.state = 179;
	        this.match(DiiaParser.MOCKUP);
	        this.state = 180;
	        localctx.m_name = this.identifier();
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 181;
	            this.match(DiiaParser.IMPLEMENTS);
	            this.state = 182;
	            localctx.m_parents = this.mockup_parents();
	        }

	        this.state = 185;
	        this.nl();
	        this.state = 186;
	        this.nls();
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 187;
	            localctx.m_elements = this.mockup_elements();
	            this.state = 188;
	            this.nl();
	        }

	        this.state = 192;
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
	        this.state = 194;
	        this.identifiers_chain(0);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 195;
	            this.match(DiiaParser.COMMA);
	            this.state = 196;
	            this.identifiers_chain(0);
	            this.state = 201;
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
	        this.state = 202;
	        this.mockup_element();
	        this.state = 208;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 203;
	                this.nl();
	                this.state = 204;
	                this.mockup_element(); 
	            }
	            this.state = 210;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	        this.state = 211;
	        localctx.me_name = this.identifier();
	        this.state = 212;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 213;
	        this.nls();
	        this.state = 215;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47 || _la===49 || _la===79) {
	            this.state = 214;
	            localctx.m_params = this.params();
	        }

	        this.state = 217;
	        this.nls();
	        this.state = 219;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 220;
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
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 223;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 226;
	        this.match(DiiaParser.DIIA);
	        this.state = 230;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 227;
	            localctx.d_structure = this.identifier();
	            this.state = 228;
	            this.match(DiiaParser.DOT);

	        }
	        this.state = 232;
	        localctx.d_name = this.identifier();
	        this.state = 233;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 234;
	        this.nls();
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===47 || _la===49 || _la===79) {
	            this.state = 235;
	            localctx.d_params = this.params();
	        }

	        this.state = 238;
	        this.nls();
	        this.state = 240;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 241;
	            localctx.d_type = this.type_value(0);
	        }

	        this.state = 244;
	        this.nl();
	        this.state = 248;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 245;
	            localctx.d_body = this.body();
	            this.state = 246;
	            this.nl();

	        }
	        this.state = 250;
	        this.nls();
	        this.state = 251;
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
	        this.state = 253;
	        this.match(DiiaParser.IF);
	        this.state = 254;
	        localctx.i_value = this.expr();
	        this.state = 255;
	        this.nl();
	        this.state = 259;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 256;
	            localctx.i_body = this.body();
	            this.state = 257;
	            this.nl();

	        }
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 25:
	            this.state = 265;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 261;
	                this.match(DiiaParser.ELSE);
	                this.state = 262;
	                localctx.i_else_body = this.body();
	                this.state = 263;
	                this.nl();
	            }

	            this.state = 267;
	            this.match(DiiaParser.END);
	            break;
	        case 11:
	            this.state = 268;
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
	        this.state = 271;
	        this.match(DiiaParser.FOR);
	        this.state = 272;
	        localctx.e_iterator = this.expr();
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 273;
	            this.match(DiiaParser.AS);
	            this.state = 277;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	            if(la_===1) {
	                this.state = 274;
	                localctx.e_key_name = this.identifier();
	                this.state = 275;
	                this.match(DiiaParser.COMMA);

	            }
	            this.state = 279;
	            localctx.e_name = this.identifier();
	        }

	        this.state = 282;
	        this.nl();
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 211294236) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 140509561) !== 0) || ((((_la - 79)) & ~0x1f) == 0 && ((1 << (_la - 79)) & 19) !== 0)) {
	            this.state = 283;
	            localctx.e_body = this.body();
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



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DiiaParser.RULE_while);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(DiiaParser.WHILE);
	        this.state = 291;
	        localctx.w_value = this.expr();
	        this.state = 292;
	        this.nl();
	        this.state = 296;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 211294236) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 140509561) !== 0) || ((((_la - 79)) & ~0x1f) == 0 && ((1 << (_la - 79)) & 19) !== 0)) {
	            this.state = 293;
	            localctx.w_body = this.body();
	            this.state = 294;
	            this.nl();
	        }

	        this.state = 298;
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
	    this.enterRule(localctx, 30, DiiaParser.RULE_try);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(DiiaParser.TRY);
	        this.state = 301;
	        this.nl();
	        this.state = 302;
	        localctx.t_body = this.body();
	        this.state = 303;
	        this.nl();
	        this.state = 304;
	        this.match(DiiaParser.CATCH);
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        if(la_===1) {
	            this.state = 305;
	            localctx.tc_name = this.identifier();

	        }
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 211294236) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 140509561) !== 0) || ((((_la - 79)) & ~0x1f) == 0 && ((1 << (_la - 79)) & 19) !== 0)) {
	            this.state = 308;
	            localctx.tc_body = this.body();
	            this.state = 309;
	            this.nl();
	        }

	        this.state = 313;
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
	    this.enterRule(localctx, 32, DiiaParser.RULE_take);
	    var _la = 0; // Token type
	    try {
	        this.state = 346;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Take_moduleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 315;
	            this.match(DiiaParser.TAKE);
	            this.state = 317;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===67) {
	                this.state = 316;
	                localctx.tm_absolute = this.match(DiiaParser.DOT);
	            }

	            this.state = 319;
	            localctx.tm_elements_chain = this.identifiers_chain(0);
	            this.state = 321;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 320;
	                localctx.tm_star = this.match(DiiaParser.STAR_ALL);
	            }

	            this.state = 325;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 323;
	                this.match(DiiaParser.AS);
	                this.state = 324;
	                localctx.tm_as = this.identifier();
	            }

	            break;

	        case 2:
	            localctx = new Take_pakContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 327;
	            this.match(DiiaParser.TAKE_PAK);
	            this.state = 328;
	            localctx.tp_elements_chain = this.identifiers_chain(0);
	            this.state = 330;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 329;
	                localctx.tp_star = this.match(DiiaParser.STAR_ALL);
	            }

	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 332;
	                this.match(DiiaParser.AS);
	                this.state = 333;
	                localctx.tp_as = this.identifier();
	            }

	            break;

	        case 3:
	            localctx = new Take_fileContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 336;
	            this.match(DiiaParser.TAKE_FILE);
	            this.state = 337;
	            localctx.tf_name = this.match(DiiaParser.STRING);
	            this.state = 338;
	            this.match(DiiaParser.AS);
	            this.state = 339;
	            localctx.tf_as = this.identifier();
	            break;

	        case 4:
	            localctx = new Take_remoteContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 340;
	            this.match(DiiaParser.TAKE);
	            this.state = 341;
	            localctx.tr_url = this.match(DiiaParser.STRING);
	            this.state = 344;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 342;
	                this.match(DiiaParser.AS);
	                this.state = 343;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_give);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.match(DiiaParser.GIVE);
	        this.state = 349;
	        this.give_element();
	        this.state = 354;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 350;
	            this.match(DiiaParser.COMMA);
	            this.state = 351;
	            this.give_element();
	            this.state = 356;
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
	    this.enterRule(localctx, 36, DiiaParser.RULE_give_element);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
	        localctx.ge_name = this.identifier();
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 358;
	            this.match(DiiaParser.AS);
	            this.state = 359;
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
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, DiiaParser.RULE_value, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 363;
	            this.match(DiiaParser.NUMBER);
	            break;

	        case 2:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 364;
	            this.match(DiiaParser.STRING);
	            break;

	        case 3:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 365;
	            this.identifier();
	            break;

	        case 4:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 366;
	            this.match(DiiaParser.PLUS);
	            this.state = 367;
	            localctx.p_value = this.value(17);
	            break;

	        case 5:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 368;
	            this.match(DiiaParser.MINUS);
	            this.state = 369;
	            localctx.n_value = this.value(16);
	            break;

	        case 6:
	            localctx = new Pre_decrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 370;
	            this.match(DiiaParser.DECREMENT);
	            this.state = 371;
	            localctx.pd_value = this.value(15);
	            break;

	        case 7:
	            localctx = new Pre_incrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 372;
	            this.match(DiiaParser.INCREMENT);
	            this.state = 373;
	            localctx.pi_value = this.value(14);
	            break;

	        case 8:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 374;
	            this.match(DiiaParser.NOT);
	            this.state = 375;
	            localctx.n_value = this.value(11);
	            break;

	        case 9:
	            localctx = new NestedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 376;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 377;
	            localctx.n_value = this.expr();
	            this.state = 378;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 10:
	            localctx = new Call_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 380;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 381;
	            localctx.c_value = this.expr();
	            this.state = 382;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 383;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 386;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	            if(la_===1) {
	                this.state = 384;
	                localctx.c_args = this.args();

	            } else if(la_===2) {
	                this.state = 385;
	                localctx.c_named_args = this.named_args();

	            }
	            this.state = 388;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 11:
	            localctx = new ArrayContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 390;
	            this.match(DiiaParser.OPEN_ARRAY);
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 1052676) !== 0) || ((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & 17563695) !== 0) || ((((_la - 79)) & ~0x1f) == 0 && ((1 << (_la - 79)) & 19) !== 0)) {
	                this.state = 391;
	                localctx.a_elements = this.array_elements();
	            }

	            this.state = 394;
	            this.match(DiiaParser.CLOSE_ARRAY);
	            break;

	        case 12:
	            localctx = new DictionaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 395;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 397;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44 || _la===79 || _la===83) {
	                this.state = 396;
	                localctx.d_args = this.dictionary_args();
	            }

	            this.state = 399;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 449;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 447;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Arithmetic_mulContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 402;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 403;
	                    localctx.a_operation = this.arithmetic_op_mul();
	                    this.state = 404;
	                    localctx.a_right = this.value(8);
	                    break;

	                case 2:
	                    localctx = new Arithmetic_addContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 406;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 407;
	                    localctx.a_operation = this.arithmetic_op_add();
	                    this.state = 408;
	                    localctx.a_right = this.value(7);
	                    break;

	                case 3:
	                    localctx = new ComparisonContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 410;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 411;
	                    localctx.c_operation = this.comparison_op();
	                    this.state = 412;
	                    localctx.c_right = this.value(6);
	                    break;

	                case 4:
	                    localctx = new TestContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 414;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 415;
	                    localctx.t_operation = this.test_op();
	                    this.state = 416;
	                    localctx.t_right = this.value(5);
	                    break;

	                case 5:
	                    localctx = new ChainContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 418;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 419;
	                    this.match(DiiaParser.DOT);
	                    this.state = 420;
	                    localctx.c_right = this.identifier();
	                    break;

	                case 6:
	                    localctx = new CallContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 421;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 422;
	                    this.match(DiiaParser.OPEN_PAREN);
	                    this.state = 425;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	                    if(la_===1) {
	                        this.state = 423;
	                        localctx.c_args = this.args();

	                    } else if(la_===2) {
	                        this.state = 424;
	                        localctx.c_named_args = this.named_args();

	                    }
	                    this.state = 427;
	                    this.match(DiiaParser.CLOSE_PAREN);
	                    break;

	                case 7:
	                    localctx = new Post_decrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pd_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 428;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 429;
	                    this.match(DiiaParser.DECREMENT);
	                    break;

	                case 8:
	                    localctx = new Post_incrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pi_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 430;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 431;
	                    this.match(DiiaParser.INCREMENT);
	                    break;

	                case 9:
	                    localctx = new Get_elementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 432;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 433;
	                    this.match(DiiaParser.OPEN_ARRAY);
	                    this.state = 434;
	                    localctx.a_element = this.expr();
	                    this.state = 435;
	                    this.match(DiiaParser.CLOSE_ARRAY);
	                    break;

	                case 10:
	                    localctx = new TernaryContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 437;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 438;
	                    this.nls();
	                    this.state = 439;
	                    this.match(DiiaParser.TERNARY);
	                    this.state = 440;
	                    this.nls();
	                    this.state = 441;
	                    localctx.t_positive = this.expr();
	                    this.state = 442;
	                    this.nls();
	                    this.state = 443;
	                    this.match(DiiaParser.COLON);
	                    this.state = 444;
	                    this.nls();
	                    this.state = 445;
	                    localctx.t_negative = this.expr();
	                    break;

	                } 
	            }
	            this.state = 451;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
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
	    this.enterRule(localctx, 40, DiiaParser.RULE_array_elements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.array_element();
	        this.state = 457;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 453;
	            this.match(DiiaParser.COMMA);
	            this.state = 454;
	            this.array_element();
	            this.state = 459;
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
	    this.enterRule(localctx, 42, DiiaParser.RULE_array_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this.nls();
	        this.state = 461;
	        localctx.ae_value = this.expr();
	        this.state = 462;
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
	    this.enterRule(localctx, 44, DiiaParser.RULE_dictionary_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this.dictionary_arg();
	        this.state = 469;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 465;
	            this.match(DiiaParser.COMMA);
	            this.state = 466;
	            this.dictionary_arg();
	            this.state = 471;
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
	    this.enterRule(localctx, 46, DiiaParser.RULE_dictionary_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.nls();
	        this.state = 475;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 79:
	            this.state = 473;
	            localctx.da_name_id = this.identifier();
	            break;
	        case 83:
	            this.state = 474;
	            localctx.da_name_string = this.match(DiiaParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 477;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 478;
	        localctx.da_value = this.expr();
	        this.state = 479;
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
	    this.enterRule(localctx, 48, DiiaParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 518;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 481;
	            this.value(0);
	            break;

	        case 2:
	            localctx = new WaitContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 482;
	            this.match(DiiaParser.WAIT);
	            this.state = 483;
	            localctx.w_value = this.value(0);
	            break;

	        case 3:
	            localctx = new FunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 484;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 486;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===47 || _la===49 || _la===79) {
	                this.state = 485;
	                localctx.f_params = this.params();
	            }

	            this.state = 488;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 490;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===79) {
	                this.state = 489;
	                localctx.f_type = this.type_value(0);
	            }

	            this.state = 492;
	            this.match(DiiaParser.COLON);
	            this.state = 493;
	            localctx.f_body = this.expr();
	            break;

	        case 4:
	            localctx = new Anonymous_diiaContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 495;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 494;
	                localctx.d_async = this.match(DiiaParser.ASYNC);
	            }

	            this.state = 497;
	            this.match(DiiaParser.DIIA);
	            this.state = 498;
	            this.match(DiiaParser.OPEN_PAREN);

	            this.state = 499;
	            this.nls();
	            this.state = 501;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===47 || _la===49 || _la===79) {
	                this.state = 500;
	                localctx.d_params = this.params();
	            }

	            this.state = 503;
	            this.nls();
	            this.state = 505;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 507;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===79) {
	                this.state = 506;
	                localctx.d_type = this.type_value(0);
	            }

	            this.state = 509;
	            this.nl();
	            this.state = 513;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	            if(la_===1) {
	                this.state = 510;
	                localctx.d_body = this.body();
	                this.state = 511;
	                this.nl();

	            }
	            this.state = 515;
	            this.nls();
	            this.state = 516;
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_throw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this.match(DiiaParser.THROW);
	        this.state = 521;
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
	    this.enterRule(localctx, 52, DiiaParser.RULE_array_destruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        this.match(DiiaParser.OPEN_ARRAY);
	        this.state = 524;
	        this.array_destruction_el();
	        this.state = 529;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 525;
	            this.match(DiiaParser.COMMA);
	            this.state = 526;
	            this.array_destruction_el();
	            this.state = 531;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 532;
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
	    this.enterRule(localctx, 54, DiiaParser.RULE_array_destruction_el);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.nls();
	        this.state = 535;
	        localctx.ade_id = this.identifier();
	        this.state = 536;
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
	    this.enterRule(localctx, 56, DiiaParser.RULE_object_destruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 538;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 539;
	        this.object_destruction_el();
	        this.state = 544;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 540;
	            this.match(DiiaParser.COMMA);
	            this.state = 541;
	            this.object_destruction_el();
	            this.state = 546;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 547;
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
	    this.enterRule(localctx, 58, DiiaParser.RULE_object_destruction_el);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 549;
	        this.nls();
	        this.state = 550;
	        localctx.ode_id = this.identifier();
	        this.state = 551;
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
	    this.enterRule(localctx, 60, DiiaParser.RULE_assign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 553;
	            localctx.a_identifiers_chain = this.identifiers_chain(0);
	            this.state = 558;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 554;
	                this.match(DiiaParser.OPEN_ARRAY);
	                this.state = 555;
	                localctx.a_set_element = this.expr();
	                this.state = 556;
	                this.match(DiiaParser.CLOSE_ARRAY);
	            }

	            break;

	        case 2:
	            this.state = 560;
	            localctx.a_identifier = this.identifier();
	            this.state = 562;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===79) {
	                this.state = 561;
	                localctx.a_type = this.type_value(0);
	            }

	            break;

	        case 3:
	            this.state = 564;
	            localctx.a_array_destruction = this.array_destruction();
	            break;

	        case 4:
	            this.state = 565;
	            localctx.a_object_destruction = this.object_destruction();
	            break;

	        }
	        this.state = 568;
	        localctx.a_symbol = this.assign_symbol();
	        this.state = 569;
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
	    this.enterRule(localctx, 62, DiiaParser.RULE_assign_value);
	    try {
	        this.state = 573;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 571;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 572;
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
	    this.enterRule(localctx, 64, DiiaParser.RULE_assign_symbol);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        _la = this._input.LA(1);
	        if(!(((((_la - 52)) & ~0x1f) == 0 && ((1 << (_la - 52)) & 1023) !== 0))) {
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
	    this.enterRule(localctx, 66, DiiaParser.RULE_wait_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 577;
	        this.match(DiiaParser.WAIT);
	        this.state = 578;
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
	    this.enterRule(localctx, 68, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 580;
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
	    const _startState = 70;
	    this.enterRecursionRule(localctx, 70, DiiaParser.RULE_identifiers_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        localctx.ic_identifier = this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 590;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,60,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifiers_chainContext(this, _parentctx, _parentState);
	                localctx.ic_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_identifiers_chain);
	                this.state = 585;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 586;
	                this.match(DiiaParser.DOT);
	                this.state = 587;
	                localctx.ic_right = this.identifiers_chain(2); 
	            }
	            this.state = 592;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,60,this._ctx);
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
	    const _startState = 72;
	    this.enterRecursionRule(localctx, 72, DiiaParser.RULE_type_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 594;
	        localctx.tv_single = this.identifiers_chain(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 602;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,61,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Type_valueContext(this, _parentctx, _parentState);
	                localctx.tv_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_type_value);
	                this.state = 596;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 597;
	                localctx.tv_operation = this.test_op();
	                this.state = 598;
	                localctx.tv_right = this.type_value(2); 
	            }
	            this.state = 604;
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



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, DiiaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 605;
	        this.arg();
	        this.state = 610;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 606;
	            this.match(DiiaParser.COMMA);
	            this.state = 607;
	            this.arg();
	            this.state = 612;
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
	    this.enterRule(localctx, 76, DiiaParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 613;
	        this.nls();
	        this.state = 614;
	        localctx.a_value = this.expr();
	        this.state = 615;
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
	    this.enterRule(localctx, 78, DiiaParser.RULE_named_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 617;
	        this.named_arg();
	        this.state = 622;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 618;
	            this.match(DiiaParser.COMMA);
	            this.state = 619;
	            this.named_arg();
	            this.state = 624;
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
	    this.enterRule(localctx, 80, DiiaParser.RULE_named_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 625;
	        this.nls();
	        this.state = 626;
	        localctx.na_name = this.identifier();
	        this.state = 627;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 628;
	        localctx.na_value = this.expr();
	        this.state = 629;
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
	    this.enterRule(localctx, 82, DiiaParser.RULE_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 631;
	        this.param();
	        this.state = 639;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,64,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 632;
	                this.nls();
	                this.state = 633;
	                this.match(DiiaParser.COMMA);
	                this.state = 634;
	                this.nls();
	                this.state = 635;
	                this.param(); 
	            }
	            this.state = 641;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,64,this._ctx);
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
	    this.enterRule(localctx, 84, DiiaParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 645;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 79:
	            this.state = 642;
	            localctx.p_name = this.identifier();
	            break;
	        case 49:
	            this.state = 643;
	            localctx.p_array_destruction = this.array_destruction();
	            break;
	        case 47:
	            this.state = 644;
	            localctx.p_object_destruction = this.object_destruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 648;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 647;
	            localctx.p_type = this.type_value(0);
	        }

	        this.state = 652;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 650;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 651;
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
	    this.enterRule(localctx, 86, DiiaParser.RULE_param_value);
	    try {
	        this.state = 657;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            localctx = new Param_value_numberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 654;
	            this.match(DiiaParser.NUMBER);
	            break;
	        case 83:
	            localctx = new Param_value_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 655;
	            this.match(DiiaParser.STRING);
	            break;
	        case 79:
	            localctx = new Param_value_identifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 656;
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
	    this.enterRule(localctx, 88, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 659;
	        this.body_element();
	        this.state = 665;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,69,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 660;
	                this.nl();
	                this.state = 661;
	                this.body_element(); 
	            }
	            this.state = 667;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,69,this._ctx);
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
	    this.enterRule(localctx, 90, DiiaParser.RULE_body_element);
	    try {
	        this.state = 681;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 668;
	            this.structure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 669;
	            this.mockup();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 670;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 671;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 672;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 673;
	            this.while_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 674;
	            this.try_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 675;
	            this.expr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 676;
	            this.throw_();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 677;
	            this.wait_assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 678;
	            this.assign();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 679;
	            this.return_body_line();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 680;
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
	    this.enterRule(localctx, 92, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 683;
	        this.match(DiiaParser.RETURN);
	        this.state = 684;
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
	    this.enterRule(localctx, 94, DiiaParser.RULE_arithmetic_op_mul);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 686;
	        _la = this._input.LA(1);
	        if(!(((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 483) !== 0))) {
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
	    this.enterRule(localctx, 96, DiiaParser.RULE_arithmetic_op_add);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 688;
	        _la = this._input.LA(1);
	        if(!(_la===62 || _la===63)) {
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
	    this.enterRule(localctx, 98, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 690;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22 || _la===73 || _la===74)) {
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
	    this.enterRule(localctx, 100, DiiaParser.RULE_comparison_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 692;
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
	    this.enterRule(localctx, 102, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 694;
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
	    this.enterRule(localctx, 104, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 699;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,71,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 696;
	                this.nl(); 
	            }
	            this.state = 701;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,71,this._ctx);
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
DiiaParser.SKIP_SPACES = 43;
DiiaParser.NL = 44;
DiiaParser.DECREMENT = 45;
DiiaParser.INCREMENT = 46;
DiiaParser.OPEN_PAREN = 47;
DiiaParser.CLOSE_PAREN = 48;
DiiaParser.OPEN_ARRAY = 49;
DiiaParser.CLOSE_ARRAY = 50;
DiiaParser.COMMA = 51;
DiiaParser.ASSIGN = 52;
DiiaParser.ASSIGN_PARENT = 53;
DiiaParser.ASSIGN_ADD = 54;
DiiaParser.ASSIGN_SUB = 55;
DiiaParser.ASSIGN_MUL = 56;
DiiaParser.ASSIGN_DIV = 57;
DiiaParser.ASSIGN_DIVDIV = 58;
DiiaParser.ASSIGN_MOD = 59;
DiiaParser.ASSIGN_XOR = 60;
DiiaParser.ASSIGN_POW = 61;
DiiaParser.PLUS = 62;
DiiaParser.MINUS = 63;
DiiaParser.MUL = 64;
DiiaParser.DIV = 65;
DiiaParser.COLON = 66;
DiiaParser.DOT = 67;
DiiaParser.NOT = 68;
DiiaParser.PERCENT = 69;
DiiaParser.DIVDIV = 70;
DiiaParser.POW = 71;
DiiaParser.XOR = 72;
DiiaParser.OR_SYM = 73;
DiiaParser.AND_SYM = 74;
DiiaParser.OR_BW = 75;
DiiaParser.AND_BW = 76;
DiiaParser.BW_SHIFT_LEFT = 77;
DiiaParser.BW_SHIFT_RIGHT = 78;
DiiaParser.ID = 79;
DiiaParser.NUMBER = 80;
DiiaParser.INTEGER = 81;
DiiaParser.FLOAT = 82;
DiiaParser.STRING = 83;
DiiaParser.LINE_COMMENT = 84;
DiiaParser.COMMENT = 85;

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
DiiaParser.RULE_try = 15;
DiiaParser.RULE_take = 16;
DiiaParser.RULE_give = 17;
DiiaParser.RULE_give_element = 18;
DiiaParser.RULE_value = 19;
DiiaParser.RULE_array_elements = 20;
DiiaParser.RULE_array_element = 21;
DiiaParser.RULE_dictionary_args = 22;
DiiaParser.RULE_dictionary_arg = 23;
DiiaParser.RULE_expr = 24;
DiiaParser.RULE_throw = 25;
DiiaParser.RULE_array_destruction = 26;
DiiaParser.RULE_array_destruction_el = 27;
DiiaParser.RULE_object_destruction = 28;
DiiaParser.RULE_object_destruction_el = 29;
DiiaParser.RULE_assign = 30;
DiiaParser.RULE_assign_value = 31;
DiiaParser.RULE_assign_symbol = 32;
DiiaParser.RULE_wait_assign = 33;
DiiaParser.RULE_identifier = 34;
DiiaParser.RULE_identifiers_chain = 35;
DiiaParser.RULE_type_value = 36;
DiiaParser.RULE_args = 37;
DiiaParser.RULE_arg = 38;
DiiaParser.RULE_named_args = 39;
DiiaParser.RULE_named_arg = 40;
DiiaParser.RULE_params = 41;
DiiaParser.RULE_param = 42;
DiiaParser.RULE_param_value = 43;
DiiaParser.RULE_body = 44;
DiiaParser.RULE_body_element = 45;
DiiaParser.RULE_return_body_line = 46;
DiiaParser.RULE_arithmetic_op_mul = 47;
DiiaParser.RULE_arithmetic_op_add = 48;
DiiaParser.RULE_test_op = 49;
DiiaParser.RULE_comparison_op = 50;
DiiaParser.RULE_nl = 51;
DiiaParser.RULE_nls = 52;

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
