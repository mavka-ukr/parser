// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,76,642,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,1,
0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,106,8,1,10,1,12,1,109,9,1,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,125,8,2,1,3,1,3,1,3,1,3,1,3,
1,3,3,3,133,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,142,8,4,1,4,1,4,1,4,1,4,
1,4,3,4,149,8,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,157,8,5,10,5,12,5,160,9,5,1,
6,1,6,1,6,3,6,165,8,6,1,7,3,7,168,8,7,1,7,1,7,1,7,1,7,3,7,174,8,7,1,7,1,
7,1,7,1,7,3,7,180,8,7,1,7,1,7,1,7,1,7,3,7,186,8,7,1,7,1,7,1,7,1,7,3,7,192,
8,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,203,8,8,1,8,1,8,1,8,1,8,3,8,
209,8,8,1,8,1,8,3,8,213,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,221,8,9,1,9,3,9,
224,8,9,1,9,1,9,1,9,1,9,3,9,230,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,
3,10,240,8,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,3,11,250,8,11,1,11,
1,11,1,11,3,11,255,8,11,1,11,1,11,1,12,1,12,3,12,261,8,12,1,12,1,12,3,12,
265,8,12,1,12,1,12,3,12,269,8,12,1,12,1,12,1,12,1,12,3,12,275,8,12,1,12,
1,12,3,12,279,8,12,1,12,1,12,1,12,1,12,3,12,285,8,12,3,12,287,8,12,1,13,
1,13,1,13,1,13,5,13,293,8,13,10,13,12,13,296,9,13,1,14,1,14,1,14,3,14,301,
8,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,327,8,15,1,15,
1,15,1,15,1,15,3,15,333,8,15,1,15,1,15,1,15,3,15,338,8,15,1,15,3,15,341,
8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,366,8,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,5,15,388,8,15,10,15,12,15,391,9,15,1,16,1,16,1,16,5,16,
396,8,16,10,16,12,16,399,9,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,5,18,408,
8,18,10,18,12,18,411,9,18,1,19,1,19,1,19,3,19,416,8,19,1,19,1,19,1,19,1,
19,1,20,1,20,1,20,1,20,1,20,3,20,427,8,20,1,20,1,20,3,20,431,8,20,1,20,1,
20,1,20,3,20,436,8,20,1,20,1,20,1,20,1,20,3,20,442,8,20,1,20,1,20,1,20,1,
20,3,20,448,8,20,1,20,1,20,1,20,1,20,3,20,454,8,20,1,20,1,20,1,20,3,20,459,
8,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,5,22,468,8,22,10,22,12,22,471,9,
22,1,22,1,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,5,24,483,8,24,10,24,
12,24,486,9,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,3,
26,499,8,26,1,26,1,26,3,26,503,8,26,1,26,1,26,3,26,507,8,26,1,26,1,26,1,
26,1,27,1,27,3,27,514,8,27,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,31,1,31,
1,31,1,31,1,31,1,31,5,31,529,8,31,10,31,12,31,532,9,31,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,5,32,541,8,32,10,32,12,32,544,9,32,1,33,1,33,1,33,5,33,
549,8,33,10,33,12,33,552,9,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,5,35,561,
8,35,10,35,12,35,564,9,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,
37,1,37,1,37,5,37,578,8,37,10,37,12,37,581,9,37,1,38,1,38,1,38,3,38,586,
8,38,1,38,3,38,589,8,38,1,38,1,38,3,38,593,8,38,1,39,1,39,1,39,3,39,598,
8,39,1,40,1,40,1,40,1,40,5,40,604,8,40,10,40,12,40,607,9,40,1,41,1,41,1,
41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,621,8,41,1,42,1,42,
1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,1,48,5,48,637,8,48,
10,48,12,48,640,9,48,1,48,0,3,30,62,64,49,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,80,82,84,86,88,90,92,94,96,0,5,1,0,49,58,2,0,61,62,66,69,1,0,
59,60,1,0,20,21,3,0,5,10,17,17,29,38,707,0,98,1,0,0,0,2,101,1,0,0,0,4,124,
1,0,0,0,6,126,1,0,0,0,8,137,1,0,0,0,10,152,1,0,0,0,12,164,1,0,0,0,14,167,
1,0,0,0,16,196,1,0,0,0,18,214,1,0,0,0,20,233,1,0,0,0,22,243,1,0,0,0,24,286,
1,0,0,0,26,288,1,0,0,0,28,297,1,0,0,0,30,340,1,0,0,0,32,392,1,0,0,0,34,400,
1,0,0,0,36,404,1,0,0,0,38,412,1,0,0,0,40,458,1,0,0,0,42,460,1,0,0,0,44,463,
1,0,0,0,46,474,1,0,0,0,48,478,1,0,0,0,50,489,1,0,0,0,52,506,1,0,0,0,54,513,
1,0,0,0,56,515,1,0,0,0,58,517,1,0,0,0,60,520,1,0,0,0,62,522,1,0,0,0,64,533,
1,0,0,0,66,545,1,0,0,0,68,553,1,0,0,0,70,557,1,0,0,0,72,565,1,0,0,0,74,571,
1,0,0,0,76,585,1,0,0,0,78,597,1,0,0,0,80,599,1,0,0,0,82,620,1,0,0,0,84,622,
1,0,0,0,86,625,1,0,0,0,88,627,1,0,0,0,90,629,1,0,0,0,92,631,1,0,0,0,94,633,
1,0,0,0,96,638,1,0,0,0,98,99,3,2,1,0,99,100,5,0,0,1,100,1,1,0,0,0,101,107,
3,4,2,0,102,103,3,94,47,0,103,104,3,4,2,0,104,106,1,0,0,0,105,102,1,0,0,
0,106,109,1,0,0,0,107,105,1,0,0,0,107,108,1,0,0,0,108,3,1,0,0,0,109,107,
1,0,0,0,110,125,3,6,3,0,111,125,3,8,4,0,112,125,3,14,7,0,113,125,3,16,8,
0,114,125,3,18,9,0,115,125,3,20,10,0,116,125,3,22,11,0,117,125,3,40,20,0,
118,125,3,42,21,0,119,125,3,58,29,0,120,125,3,52,26,0,121,125,3,96,48,0,
122,125,3,24,12,0,123,125,3,26,13,0,124,110,1,0,0,0,124,111,1,0,0,0,124,
112,1,0,0,0,124,113,1,0,0,0,124,114,1,0,0,0,124,115,1,0,0,0,124,116,1,0,
0,0,124,117,1,0,0,0,124,118,1,0,0,0,124,119,1,0,0,0,124,120,1,0,0,0,124,
121,1,0,0,0,124,122,1,0,0,0,124,123,1,0,0,0,125,5,1,0,0,0,126,127,5,27,0,
0,127,128,3,60,30,0,128,132,3,94,47,0,129,130,3,2,1,0,130,131,3,94,47,0,
131,133,1,0,0,0,132,129,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,0,134,135,
3,96,48,0,135,136,5,1,0,0,136,7,1,0,0,0,137,138,5,3,0,0,138,141,3,60,30,
0,139,140,5,17,0,0,140,142,3,62,31,0,141,139,1,0,0,0,141,142,1,0,0,0,142,
143,1,0,0,0,143,144,3,94,47,0,144,148,3,96,48,0,145,146,3,10,5,0,146,147,
3,94,47,0,147,149,1,0,0,0,148,145,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,
0,150,151,5,1,0,0,151,9,1,0,0,0,152,158,3,12,6,0,153,154,3,94,47,0,154,155,
3,12,6,0,155,157,1,0,0,0,156,153,1,0,0,0,157,160,1,0,0,0,158,156,1,0,0,0,
158,159,1,0,0,0,159,11,1,0,0,0,160,158,1,0,0,0,161,165,3,76,38,0,162,165,
3,14,7,0,163,165,3,96,48,0,164,161,1,0,0,0,164,162,1,0,0,0,164,163,1,0,0,
0,165,13,1,0,0,0,166,168,5,19,0,0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,
1,0,0,0,169,173,5,2,0,0,170,171,3,60,30,0,171,172,5,64,0,0,172,174,1,0,0,
0,173,170,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,176,3,60,30,0,176,
177,5,44,0,0,177,179,3,96,48,0,178,180,3,74,37,0,179,178,1,0,0,0,179,180,
1,0,0,0,180,181,1,0,0,0,181,182,3,96,48,0,182,183,1,0,0,0,183,185,5,45,0,
0,184,186,3,64,32,0,185,184,1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,
191,3,94,47,0,188,189,3,80,40,0,189,190,3,94,47,0,190,192,1,0,0,0,191,188,
1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,3,96,48,0,194,195,5,1,0,
0,195,15,1,0,0,0,196,197,5,11,0,0,197,198,3,40,20,0,198,202,3,94,47,0,199,
200,3,80,40,0,200,201,3,94,47,0,201,203,1,0,0,0,202,199,1,0,0,0,202,203,
1,0,0,0,203,212,1,0,0,0,204,205,5,24,0,0,205,206,3,80,40,0,206,207,3,94,
47,0,207,209,1,0,0,0,208,204,1,0,0,0,208,209,1,0,0,0,209,210,1,0,0,0,210,
213,5,1,0,0,211,213,3,16,8,0,212,208,1,0,0,0,212,211,1,0,0,0,213,17,1,0,
0,0,214,215,5,4,0,0,215,223,3,40,20,0,216,220,5,16,0,0,217,218,3,60,30,0,
218,219,5,48,0,0,219,221,1,0,0,0,220,217,1,0,0,0,220,221,1,0,0,0,221,222,
1,0,0,0,222,224,3,60,30,0,223,216,1,0,0,0,223,224,1,0,0,0,224,225,1,0,0,
0,225,229,3,94,47,0,226,227,3,80,40,0,227,228,3,94,47,0,228,230,1,0,0,0,
229,226,1,0,0,0,229,230,1,0,0,0,230,231,1,0,0,0,231,232,5,1,0,0,232,19,1,
0,0,0,233,234,5,26,0,0,234,235,3,40,20,0,235,239,3,94,47,0,236,237,3,80,
40,0,237,238,3,94,47,0,238,240,1,0,0,0,239,236,1,0,0,0,239,240,1,0,0,0,240,
241,1,0,0,0,241,242,5,1,0,0,242,21,1,0,0,0,243,244,5,22,0,0,244,245,3,94,
47,0,245,246,3,80,40,0,246,247,3,94,47,0,247,249,5,23,0,0,248,250,3,60,30,
0,249,248,1,0,0,0,249,250,1,0,0,0,250,254,1,0,0,0,251,252,3,80,40,0,252,
253,3,94,47,0,253,255,1,0,0,0,254,251,1,0,0,0,254,255,1,0,0,0,255,256,1,
0,0,0,256,257,5,1,0,0,257,23,1,0,0,0,258,260,5,13,0,0,259,261,5,64,0,0,260,
259,1,0,0,0,260,261,1,0,0,0,261,262,1,0,0,0,262,264,3,62,31,0,263,265,5,
39,0,0,264,263,1,0,0,0,264,265,1,0,0,0,265,268,1,0,0,0,266,267,5,16,0,0,
267,269,3,60,30,0,268,266,1,0,0,0,268,269,1,0,0,0,269,287,1,0,0,0,270,271,
5,13,0,0,271,272,5,15,0,0,272,274,3,62,31,0,273,275,5,39,0,0,274,273,1,0,
0,0,274,275,1,0,0,0,275,278,1,0,0,0,276,277,5,16,0,0,277,279,3,60,30,0,278,
276,1,0,0,0,278,279,1,0,0,0,279,287,1,0,0,0,280,281,5,13,0,0,281,284,5,74,
0,0,282,283,5,16,0,0,283,285,3,60,30,0,284,282,1,0,0,0,284,285,1,0,0,0,285,
287,1,0,0,0,286,258,1,0,0,0,286,270,1,0,0,0,286,280,1,0,0,0,287,25,1,0,0,
0,288,289,5,14,0,0,289,294,3,28,14,0,290,291,5,48,0,0,291,293,3,28,14,0,
292,290,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,27,1,
0,0,0,296,294,1,0,0,0,297,300,3,60,30,0,298,299,5,16,0,0,299,301,3,60,30,
0,300,298,1,0,0,0,300,301,1,0,0,0,301,29,1,0,0,0,302,303,6,15,-1,0,303,341,
5,71,0,0,304,341,5,74,0,0,305,341,3,60,30,0,306,307,5,59,0,0,307,341,3,30,
15,17,308,309,5,60,0,0,309,341,3,30,15,16,310,311,5,42,0,0,311,341,3,30,
15,15,312,313,5,43,0,0,313,341,3,30,15,14,314,315,5,65,0,0,315,341,3,30,
15,11,316,317,5,44,0,0,317,318,3,40,20,0,318,319,5,45,0,0,319,341,1,0,0,
0,320,321,5,44,0,0,321,322,3,40,20,0,322,323,5,45,0,0,323,326,5,44,0,0,324,
327,3,66,33,0,325,327,3,70,35,0,326,324,1,0,0,0,326,325,1,0,0,0,326,327,
1,0,0,0,327,328,1,0,0,0,328,329,5,45,0,0,329,341,1,0,0,0,330,332,5,46,0,
0,331,333,3,32,16,0,332,331,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,
341,5,47,0,0,335,337,5,44,0,0,336,338,3,36,18,0,337,336,1,0,0,0,337,338,
1,0,0,0,338,339,1,0,0,0,339,341,5,45,0,0,340,302,1,0,0,0,340,304,1,0,0,0,
340,305,1,0,0,0,340,306,1,0,0,0,340,308,1,0,0,0,340,310,1,0,0,0,340,312,
1,0,0,0,340,314,1,0,0,0,340,316,1,0,0,0,340,320,1,0,0,0,340,330,1,0,0,0,
340,335,1,0,0,0,341,389,1,0,0,0,342,343,10,7,0,0,343,344,3,86,43,0,344,345,
3,30,15,8,345,388,1,0,0,0,346,347,10,6,0,0,347,348,3,88,44,0,348,349,3,30,
15,7,349,388,1,0,0,0,350,351,10,4,0,0,351,352,3,92,46,0,352,353,3,30,15,
5,353,388,1,0,0,0,354,355,10,3,0,0,355,356,3,90,45,0,356,357,3,30,15,4,357,
388,1,0,0,0,358,359,10,19,0,0,359,360,5,64,0,0,360,388,3,60,30,0,361,362,
10,18,0,0,362,365,5,44,0,0,363,366,3,66,33,0,364,366,3,70,35,0,365,363,1,
0,0,0,365,364,1,0,0,0,365,366,1,0,0,0,366,367,1,0,0,0,367,388,5,45,0,0,368,
369,10,13,0,0,369,388,5,42,0,0,370,371,10,12,0,0,371,388,5,43,0,0,372,373,
10,10,0,0,373,374,5,46,0,0,374,375,3,40,20,0,375,376,5,47,0,0,376,388,1,
0,0,0,377,378,10,5,0,0,378,379,3,96,48,0,379,380,5,28,0,0,380,381,3,96,48,
0,381,382,3,40,20,0,382,383,3,96,48,0,383,384,5,63,0,0,384,385,3,96,48,0,
385,386,3,40,20,0,386,388,1,0,0,0,387,342,1,0,0,0,387,346,1,0,0,0,387,350,
1,0,0,0,387,354,1,0,0,0,387,358,1,0,0,0,387,361,1,0,0,0,387,368,1,0,0,0,
387,370,1,0,0,0,387,372,1,0,0,0,387,377,1,0,0,0,388,391,1,0,0,0,389,387,
1,0,0,0,389,390,1,0,0,0,390,31,1,0,0,0,391,389,1,0,0,0,392,397,3,34,17,0,
393,394,5,48,0,0,394,396,3,34,17,0,395,393,1,0,0,0,396,399,1,0,0,0,397,395,
1,0,0,0,397,398,1,0,0,0,398,33,1,0,0,0,399,397,1,0,0,0,400,401,3,96,48,0,
401,402,3,40,20,0,402,403,3,96,48,0,403,35,1,0,0,0,404,409,3,38,19,0,405,
406,5,48,0,0,406,408,3,38,19,0,407,405,1,0,0,0,408,411,1,0,0,0,409,407,1,
0,0,0,409,410,1,0,0,0,410,37,1,0,0,0,411,409,1,0,0,0,412,415,3,96,48,0,413,
416,3,60,30,0,414,416,5,74,0,0,415,413,1,0,0,0,415,414,1,0,0,0,416,417,1,
0,0,0,417,418,5,49,0,0,418,419,3,40,20,0,419,420,3,96,48,0,420,39,1,0,0,
0,421,459,3,30,15,0,422,423,5,12,0,0,423,459,3,30,15,0,424,426,5,44,0,0,
425,427,3,74,37,0,426,425,1,0,0,0,426,427,1,0,0,0,427,428,1,0,0,0,428,430,
5,45,0,0,429,431,3,64,32,0,430,429,1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,
0,432,433,5,63,0,0,433,459,3,40,20,0,434,436,5,19,0,0,435,434,1,0,0,0,435,
436,1,0,0,0,436,437,1,0,0,0,437,438,5,2,0,0,438,439,5,44,0,0,439,441,3,96,
48,0,440,442,3,74,37,0,441,440,1,0,0,0,441,442,1,0,0,0,442,443,1,0,0,0,443,
444,3,96,48,0,444,445,1,0,0,0,445,447,5,45,0,0,446,448,3,64,32,0,447,446,
1,0,0,0,447,448,1,0,0,0,448,449,1,0,0,0,449,453,3,94,47,0,450,451,3,80,40,
0,451,452,3,94,47,0,452,454,1,0,0,0,453,450,1,0,0,0,453,454,1,0,0,0,454,
455,1,0,0,0,455,456,3,96,48,0,456,457,5,1,0,0,457,459,1,0,0,0,458,421,1,
0,0,0,458,422,1,0,0,0,458,424,1,0,0,0,458,435,1,0,0,0,459,41,1,0,0,0,460,
461,5,25,0,0,461,462,3,40,20,0,462,43,1,0,0,0,463,464,5,46,0,0,464,469,3,
46,23,0,465,466,5,48,0,0,466,468,3,46,23,0,467,465,1,0,0,0,468,471,1,0,0,
0,469,467,1,0,0,0,469,470,1,0,0,0,470,472,1,0,0,0,471,469,1,0,0,0,472,473,
5,47,0,0,473,45,1,0,0,0,474,475,3,96,48,0,475,476,3,60,30,0,476,477,3,96,
48,0,477,47,1,0,0,0,478,479,5,44,0,0,479,484,3,50,25,0,480,481,5,48,0,0,
481,483,3,50,25,0,482,480,1,0,0,0,483,486,1,0,0,0,484,482,1,0,0,0,484,485,
1,0,0,0,485,487,1,0,0,0,486,484,1,0,0,0,487,488,5,45,0,0,488,49,1,0,0,0,
489,490,3,96,48,0,490,491,3,60,30,0,491,492,3,96,48,0,492,51,1,0,0,0,493,
498,3,62,31,0,494,495,5,46,0,0,495,496,3,40,20,0,496,497,5,47,0,0,497,499,
1,0,0,0,498,494,1,0,0,0,498,499,1,0,0,0,499,507,1,0,0,0,500,502,3,60,30,
0,501,503,3,64,32,0,502,501,1,0,0,0,502,503,1,0,0,0,503,507,1,0,0,0,504,
507,3,44,22,0,505,507,3,48,24,0,506,493,1,0,0,0,506,500,1,0,0,0,506,504,
1,0,0,0,506,505,1,0,0,0,507,508,1,0,0,0,508,509,3,56,28,0,509,510,3,54,27,
0,510,53,1,0,0,0,511,514,3,40,20,0,512,514,3,52,26,0,513,511,1,0,0,0,513,
512,1,0,0,0,514,55,1,0,0,0,515,516,7,0,0,0,516,57,1,0,0,0,517,518,5,12,0,
0,518,519,3,52,26,0,519,59,1,0,0,0,520,521,5,70,0,0,521,61,1,0,0,0,522,523,
6,31,-1,0,523,524,3,60,30,0,524,530,1,0,0,0,525,526,10,1,0,0,526,527,5,64,
0,0,527,529,3,62,31,2,528,525,1,0,0,0,529,532,1,0,0,0,530,528,1,0,0,0,530,
531,1,0,0,0,531,63,1,0,0,0,532,530,1,0,0,0,533,534,6,32,-1,0,534,535,3,62,
31,0,535,542,1,0,0,0,536,537,10,1,0,0,537,538,3,90,45,0,538,539,3,64,32,
2,539,541,1,0,0,0,540,536,1,0,0,0,541,544,1,0,0,0,542,540,1,0,0,0,542,543,
1,0,0,0,543,65,1,0,0,0,544,542,1,0,0,0,545,550,3,68,34,0,546,547,5,48,0,
0,547,549,3,68,34,0,548,546,1,0,0,0,549,552,1,0,0,0,550,548,1,0,0,0,550,
551,1,0,0,0,551,67,1,0,0,0,552,550,1,0,0,0,553,554,3,96,48,0,554,555,3,40,
20,0,555,556,3,96,48,0,556,69,1,0,0,0,557,562,3,72,36,0,558,559,5,48,0,0,
559,561,3,72,36,0,560,558,1,0,0,0,561,564,1,0,0,0,562,560,1,0,0,0,562,563,
1,0,0,0,563,71,1,0,0,0,564,562,1,0,0,0,565,566,3,96,48,0,566,567,3,60,30,
0,567,568,5,49,0,0,568,569,3,40,20,0,569,570,3,96,48,0,570,73,1,0,0,0,571,
579,3,76,38,0,572,573,3,96,48,0,573,574,5,48,0,0,574,575,3,96,48,0,575,576,
3,76,38,0,576,578,1,0,0,0,577,572,1,0,0,0,578,581,1,0,0,0,579,577,1,0,0,
0,579,580,1,0,0,0,580,75,1,0,0,0,581,579,1,0,0,0,582,586,3,60,30,0,583,586,
3,44,22,0,584,586,3,48,24,0,585,582,1,0,0,0,585,583,1,0,0,0,585,584,1,0,
0,0,586,588,1,0,0,0,587,589,3,64,32,0,588,587,1,0,0,0,588,589,1,0,0,0,589,
592,1,0,0,0,590,591,5,49,0,0,591,593,3,78,39,0,592,590,1,0,0,0,592,593,1,
0,0,0,593,77,1,0,0,0,594,598,5,71,0,0,595,598,5,74,0,0,596,598,3,60,30,0,
597,594,1,0,0,0,597,595,1,0,0,0,597,596,1,0,0,0,598,79,1,0,0,0,599,605,3,
82,41,0,600,601,3,94,47,0,601,602,3,82,41,0,602,604,1,0,0,0,603,600,1,0,
0,0,604,607,1,0,0,0,605,603,1,0,0,0,605,606,1,0,0,0,606,81,1,0,0,0,607,605,
1,0,0,0,608,621,3,8,4,0,609,621,3,14,7,0,610,621,3,16,8,0,611,621,3,18,9,
0,612,621,3,20,10,0,613,621,3,22,11,0,614,621,3,40,20,0,615,621,3,42,21,
0,616,621,3,58,29,0,617,621,3,52,26,0,618,621,3,84,42,0,619,621,3,96,48,
0,620,608,1,0,0,0,620,609,1,0,0,0,620,610,1,0,0,0,620,611,1,0,0,0,620,612,
1,0,0,0,620,613,1,0,0,0,620,614,1,0,0,0,620,615,1,0,0,0,620,616,1,0,0,0,
620,617,1,0,0,0,620,618,1,0,0,0,620,619,1,0,0,0,621,83,1,0,0,0,622,623,5,
18,0,0,623,624,3,82,41,0,624,85,1,0,0,0,625,626,7,1,0,0,626,87,1,0,0,0,627,
628,7,2,0,0,628,89,1,0,0,0,629,630,7,3,0,0,630,91,1,0,0,0,631,632,7,4,0,
0,632,93,1,0,0,0,633,634,5,41,0,0,634,95,1,0,0,0,635,637,3,94,47,0,636,635,
1,0,0,0,637,640,1,0,0,0,638,636,1,0,0,0,638,639,1,0,0,0,639,97,1,0,0,0,640,
638,1,0,0,0,65,107,124,132,141,148,158,164,167,173,179,185,191,202,208,212,
220,223,229,239,249,254,260,264,268,274,278,284,286,294,300,326,332,337,
340,365,387,389,397,409,415,426,430,435,441,447,453,458,469,484,498,502,
506,513,530,542,550,562,579,585,588,592,597,605,620,638];


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
                            "'\\u043D\\u0435 \\u0454'", "'\\u043C\\u0456\\u0441\\u0442\\u0438\\u0442\\u044C'", 
                            "'\\u043D\\u0435 \\u043C\\u0456\\u0441\\u0442\\u0438\\u0442\\u044C'", 
                            "'\\u043D\\u0435'", "'.*'", null, null, "'--'", 
                            "'++'", "'('", "')'", "'['", "']'", "','", "'='", 
                            "':='", "'+='", "'-='", "'*='", "'/='", "'//='", 
                            "'%='", "'^='", "'**='", "'+'", "'-'", "'*'", 
                            "'/'", "':'", "'.'", "'!'", "'%'", "'//'", "'**'", 
                            "'^'" ];
    static symbolicNames = [ null, "END", "DIIA", "STRUCTURE", "FOR", "EQ", 
                             "NOT_EQ", "GREATER_EQ", "SMALLER_EQ", "GREATER", 
                             "SMALLER", "IF", "WAIT", "TAKE", "GIVE", "PAK", 
                             "AS", "IS", "RETURN", "ASYNC", "AND", "OR", 
                             "TRY", "CATCH", "ELSE", "THROW", "WHILE", "MODULE", 
                             "TERNARY", "EQ_WORD", "GR_WORD", "SM_WORD", 
                             "NOT_GR_WORD", "NOT_SM_WORD", "NOT_EQ_WORD", 
                             "NOT_IS_WORD", "HAS_IS_WORD", "NOT_HAS_IS_WORD", 
                             "NOT_WORD", "STAR_ALL", "SKIP_SPACES", "NL", 
                             "DECREMENT", "INCREMENT", "OPEN_PAREN", "CLOSE_PAREN", 
                             "OPEN_ARRAY", "CLOSE_ARRAY", "COMMA", "ASSIGN", 
                             "ASSIGN_PARENT", "ASSIGN_ADD", "ASSIGN_SUB", 
                             "ASSIGN_MUL", "ASSIGN_DIV", "ASSIGN_DIVDIV", 
                             "ASSIGN_MOD", "ASSIGN_XOR", "ASSIGN_POW", "PLUS", 
                             "MINUS", "MUL", "DIV", "COLON", "DOT", "NOT", 
                             "PERCENT", "DIVDIV", "POW", "XOR", "ID", "NUMBER", 
                             "INTEGER", "FLOAT", "STRING", "LINE_COMMENT", 
                             "COMMENT" ];
    static ruleNames = [ "file", "program", "program_element", "module", 
                         "structure", "structure_elements", "structure_element", 
                         "diia", "if", "each", "while", "try", "take", "give", 
                         "give_element", "value", "array_elements", "array_element", 
                         "dictionary_args", "dictionary_arg", "expr", "throw", 
                         "array_destruction", "array_destruction_el", "object_destruction", 
                         "object_destruction_el", "assign", "assign_value", 
                         "assign_symbol", "wait_assign", "identifier", "identifiers_chain", 
                         "type_value", "args", "arg", "named_args", "named_arg", 
                         "params", "param", "param_value", "body", "body_element", 
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
    	case 15:
    	    		return this.value_sempred(localctx, predIndex);
    	case 31:
    	    		return this.identifiers_chain_sempred(localctx, predIndex);
    	case 32:
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
    			return this.precpred(this._ctx, 4);
    		case 3:
    			return this.precpred(this._ctx, 3);
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
    			return this.precpred(this._ctx, 5);
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
	        this.state = 98;
	        localctx.f_program = this.program();
	        this.state = 99;
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
	        this.state = 101;
	        this.program_element();
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 102;
	                this.nl();
	                this.state = 103;
	                this.program_element(); 
	            }
	            this.state = 109;
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
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.module();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.structure();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 113;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 114;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 115;
	            this.while_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 116;
	            this.try_();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 117;
	            this.expr();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 118;
	            this.throw_();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 119;
	            this.wait_assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 120;
	            this.assign();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 121;
	            this.nls();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 122;
	            this.take();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 123;
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
	        this.state = 126;
	        this.match(DiiaParser.MODULE);
	        this.state = 127;
	        localctx.m_name = this.identifier();
	        this.state = 128;
	        this.nl();
	        this.state = 132;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 129;
	            localctx.m_program = this.program();
	            this.state = 130;
	            this.nl();

	        }
	        this.state = 134;
	        this.nls();
	        this.state = 135;
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
	        this.state = 137;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 138;
	        localctx.s_name = this.identifier();
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 139;
	            this.match(DiiaParser.IS);
	            this.state = 140;
	            localctx.s_parent = this.identifiers_chain(0);
	        }

	        this.state = 143;
	        this.nl();
	        this.state = 144;
	        this.nls();
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2 || _la===19 || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 536870953) !== 0)) {
	            this.state = 145;
	            localctx.s_elements = this.structure_elements();
	            this.state = 146;
	            this.nl();
	        }

	        this.state = 150;
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
	        this.state = 152;
	        this.structure_element();
	        this.state = 158;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 153;
	                this.nl();
	                this.state = 154;
	                this.structure_element(); 
	            }
	            this.state = 160;
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
	        this.state = 164;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	        case 46:
	        case 70:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 161;
	            this.param();
	            break;
	        case 2:
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.diia();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 163;
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
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 166;
	            localctx.d_async = this.match(DiiaParser.ASYNC);
	        }

	        this.state = 169;
	        this.match(DiiaParser.DIIA);
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 170;
	            localctx.d_structure = this.identifier();
	            this.state = 171;
	            this.match(DiiaParser.DOT);

	        }
	        this.state = 175;
	        localctx.d_name = this.identifier();
	        this.state = 176;
	        this.match(DiiaParser.OPEN_PAREN);

	        this.state = 177;
	        this.nls();
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & 67108869) !== 0)) {
	            this.state = 178;
	            localctx.d_params = this.params();
	        }

	        this.state = 181;
	        this.nls();
	        this.state = 183;
	        this.match(DiiaParser.CLOSE_PAREN);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===70) {
	            this.state = 184;
	            localctx.d_type = this.type_value(0);
	        }

	        this.state = 187;
	        this.nl();
	        this.state = 191;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 188;
	            localctx.d_body = this.body();
	            this.state = 189;
	            this.nl();

	        }
	        this.state = 193;
	        this.nls();
	        this.state = 194;
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
	        this.state = 196;
	        this.match(DiiaParser.IF);
	        this.state = 197;
	        localctx.i_value = this.expr();
	        this.state = 198;
	        this.nl();
	        this.state = 202;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 199;
	            localctx.i_body = this.body();
	            this.state = 200;
	            this.nl();

	        }
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 24:
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===24) {
	                this.state = 204;
	                this.match(DiiaParser.ELSE);
	                this.state = 205;
	                localctx.i_else_body = this.body();
	                this.state = 206;
	                this.nl();
	            }

	            this.state = 210;
	            this.match(DiiaParser.END);
	            break;
	        case 11:
	            this.state = 211;
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
	        this.state = 214;
	        this.match(DiiaParser.FOR);
	        this.state = 215;
	        localctx.e_iterator = this.expr();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 216;
	            this.match(DiiaParser.AS);
	            this.state = 220;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	            if(la_===1) {
	                this.state = 217;
	                localctx.e_key_name = this.identifier();
	                this.state = 218;
	                this.match(DiiaParser.COMMA);

	            }
	            this.state = 222;
	            localctx.e_name = this.identifier();
	        }

	        this.state = 225;
	        this.nl();
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 105650204) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 1628176431) !== 0) || _la===74) {
	            this.state = 226;
	            localctx.e_body = this.body();
	            this.state = 227;
	            this.nl();
	        }

	        this.state = 231;
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
	        this.state = 233;
	        this.match(DiiaParser.WHILE);
	        this.state = 234;
	        localctx.w_value = this.expr();
	        this.state = 235;
	        this.nl();
	        this.state = 239;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 105650204) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 1628176431) !== 0) || _la===74) {
	            this.state = 236;
	            localctx.w_body = this.body();
	            this.state = 237;
	            this.nl();
	        }

	        this.state = 241;
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
	        this.state = 243;
	        this.match(DiiaParser.TRY);
	        this.state = 244;
	        this.nl();
	        this.state = 245;
	        localctx.t_body = this.body();
	        this.state = 246;
	        this.nl();
	        this.state = 247;
	        this.match(DiiaParser.CATCH);
	        this.state = 249;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 248;
	            localctx.tc_name = this.identifier();

	        }
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 105650204) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 1628176431) !== 0) || _la===74) {
	            this.state = 251;
	            localctx.tc_body = this.body();
	            this.state = 252;
	            this.nl();
	        }

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



	take() {
	    let localctx = new TakeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, DiiaParser.RULE_take);
	    var _la = 0; // Token type
	    try {
	        this.state = 286;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new Take_moduleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 258;
	            this.match(DiiaParser.TAKE);
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===64) {
	                this.state = 259;
	                localctx.tm_absolute = this.match(DiiaParser.DOT);
	            }

	            this.state = 262;
	            localctx.tm_elements_chain = this.identifiers_chain(0);
	            this.state = 264;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 263;
	                localctx.tm_star = this.match(DiiaParser.STAR_ALL);
	            }

	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 266;
	                this.match(DiiaParser.AS);
	                this.state = 267;
	                localctx.tm_as = this.identifier();
	            }

	            break;

	        case 2:
	            localctx = new Take_pakContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 270;
	            this.match(DiiaParser.TAKE);
	            this.state = 271;
	            this.match(DiiaParser.PAK);
	            this.state = 272;
	            localctx.tp_elements_chain = this.identifiers_chain(0);
	            this.state = 274;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===39) {
	                this.state = 273;
	                localctx.tp_star = this.match(DiiaParser.STAR_ALL);
	            }

	            this.state = 278;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 276;
	                this.match(DiiaParser.AS);
	                this.state = 277;
	                localctx.tp_as = this.identifier();
	            }

	            break;

	        case 3:
	            localctx = new Take_remoteContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 280;
	            this.match(DiiaParser.TAKE);
	            this.state = 281;
	            localctx.tr_url = this.match(DiiaParser.STRING);
	            this.state = 284;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===16) {
	                this.state = 282;
	                this.match(DiiaParser.AS);
	                this.state = 283;
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
	    this.enterRule(localctx, 26, DiiaParser.RULE_give);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(DiiaParser.GIVE);
	        this.state = 289;
	        this.give_element();
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 290;
	            this.match(DiiaParser.COMMA);
	            this.state = 291;
	            this.give_element();
	            this.state = 296;
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
	    this.enterRule(localctx, 28, DiiaParser.RULE_give_element);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        localctx.ge_name = this.identifier();
	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===16) {
	            this.state = 298;
	            this.match(DiiaParser.AS);
	            this.state = 299;
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
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, DiiaParser.RULE_value, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumberContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 303;
	            this.match(DiiaParser.NUMBER);
	            break;

	        case 2:
	            localctx = new StringContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 304;
	            this.match(DiiaParser.STRING);
	            break;

	        case 3:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 305;
	            this.identifier();
	            break;

	        case 4:
	            localctx = new PositiveContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 306;
	            this.match(DiiaParser.PLUS);
	            this.state = 307;
	            localctx.p_value = this.value(17);
	            break;

	        case 5:
	            localctx = new NegativeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 308;
	            this.match(DiiaParser.MINUS);
	            this.state = 309;
	            localctx.n_value = this.value(16);
	            break;

	        case 6:
	            localctx = new Pre_decrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 310;
	            this.match(DiiaParser.DECREMENT);
	            this.state = 311;
	            localctx.pd_value = this.value(15);
	            break;

	        case 7:
	            localctx = new Pre_incrementContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 312;
	            this.match(DiiaParser.INCREMENT);
	            this.state = 313;
	            localctx.pi_value = this.value(14);
	            break;

	        case 8:
	            localctx = new NotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 314;
	            this.match(DiiaParser.NOT);
	            this.state = 315;
	            localctx.n_value = this.value(11);
	            break;

	        case 9:
	            localctx = new NestedContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 316;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 317;
	            localctx.n_value = this.expr();
	            this.state = 318;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 10:
	            localctx = new Call_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 320;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 321;
	            localctx.c_value = this.expr();
	            this.state = 322;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 323;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 326;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 324;
	                localctx.c_args = this.args();

	            } else if(la_===2) {
	                this.state = 325;
	                localctx.c_named_args = this.named_args();

	            }
	            this.state = 328;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        case 11:
	            localctx = new ArrayContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 330;
	            this.match(DiiaParser.OPEN_ARRAY);
	            this.state = 332;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & 528388) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & 1628176431) !== 0) || _la===74) {
	                this.state = 331;
	                localctx.a_elements = this.array_elements();
	            }

	            this.state = 334;
	            this.match(DiiaParser.CLOSE_ARRAY);
	            break;

	        case 12:
	            localctx = new DictionaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 335;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 337;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41 || _la===70 || _la===74) {
	                this.state = 336;
	                localctx.d_args = this.dictionary_args();
	            }

	            this.state = 339;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 389;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 387;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Arithmetic_mulContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 342;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 343;
	                    localctx.a_operation = this.arithmetic_op_mul();
	                    this.state = 344;
	                    localctx.a_right = this.value(8);
	                    break;

	                case 2:
	                    localctx = new Arithmetic_addContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 346;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 347;
	                    localctx.a_operation = this.arithmetic_op_add();
	                    this.state = 348;
	                    localctx.a_right = this.value(7);
	                    break;

	                case 3:
	                    localctx = new ComparisonContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 350;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 351;
	                    localctx.c_operation = this.comparison_op();
	                    this.state = 352;
	                    localctx.c_right = this.value(5);
	                    break;

	                case 4:
	                    localctx = new TestContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 354;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 355;
	                    localctx.t_operation = this.test_op();
	                    this.state = 356;
	                    localctx.t_right = this.value(4);
	                    break;

	                case 5:
	                    localctx = new ChainContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 358;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 359;
	                    this.match(DiiaParser.DOT);
	                    this.state = 360;
	                    localctx.c_right = this.identifier();
	                    break;

	                case 6:
	                    localctx = new CallContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.c_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 361;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 362;
	                    this.match(DiiaParser.OPEN_PAREN);
	                    this.state = 365;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	                    if(la_===1) {
	                        this.state = 363;
	                        localctx.c_args = this.args();

	                    } else if(la_===2) {
	                        this.state = 364;
	                        localctx.c_named_args = this.named_args();

	                    }
	                    this.state = 367;
	                    this.match(DiiaParser.CLOSE_PAREN);
	                    break;

	                case 7:
	                    localctx = new Post_decrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pd_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 368;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 369;
	                    this.match(DiiaParser.DECREMENT);
	                    break;

	                case 8:
	                    localctx = new Post_incrementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.pi_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 370;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 371;
	                    this.match(DiiaParser.INCREMENT);
	                    break;

	                case 9:
	                    localctx = new Get_elementContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.a_left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 372;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 373;
	                    this.match(DiiaParser.OPEN_ARRAY);
	                    this.state = 374;
	                    localctx.a_element = this.expr();
	                    this.state = 375;
	                    this.match(DiiaParser.CLOSE_ARRAY);
	                    break;

	                case 10:
	                    localctx = new TernaryContext(this, new ValueContext(this, _parentctx, _parentState));
	                    localctx.t_value = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_value);
	                    this.state = 377;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 378;
	                    this.nls();
	                    this.state = 379;
	                    this.match(DiiaParser.TERNARY);
	                    this.state = 380;
	                    this.nls();
	                    this.state = 381;
	                    localctx.t_positive = this.expr();
	                    this.state = 382;
	                    this.nls();
	                    this.state = 383;
	                    this.match(DiiaParser.COLON);
	                    this.state = 384;
	                    this.nls();
	                    this.state = 385;
	                    localctx.t_negative = this.expr();
	                    break;

	                } 
	            }
	            this.state = 391;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
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
	    this.enterRule(localctx, 32, DiiaParser.RULE_array_elements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.array_element();
	        this.state = 397;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 393;
	            this.match(DiiaParser.COMMA);
	            this.state = 394;
	            this.array_element();
	            this.state = 399;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_array_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.nls();
	        this.state = 401;
	        localctx.ae_value = this.expr();
	        this.state = 402;
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
	    this.enterRule(localctx, 36, DiiaParser.RULE_dictionary_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.dictionary_arg();
	        this.state = 409;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 405;
	            this.match(DiiaParser.COMMA);
	            this.state = 406;
	            this.dictionary_arg();
	            this.state = 411;
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
	    this.enterRule(localctx, 38, DiiaParser.RULE_dictionary_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.nls();
	        this.state = 415;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.state = 413;
	            localctx.da_name_id = this.identifier();
	            break;
	        case 74:
	            this.state = 414;
	            localctx.da_name_string = this.match(DiiaParser.STRING);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 417;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 418;
	        localctx.da_value = this.expr();
	        this.state = 419;
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
	    this.enterRule(localctx, 40, DiiaParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.state = 458;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SimpleContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 421;
	            this.value(0);
	            break;

	        case 2:
	            localctx = new WaitContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 422;
	            this.match(DiiaParser.WAIT);
	            this.state = 423;
	            localctx.w_value = this.value(0);
	            break;

	        case 3:
	            localctx = new FunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 424;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 426;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & 67108869) !== 0)) {
	                this.state = 425;
	                localctx.f_params = this.params();
	            }

	            this.state = 428;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 430;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===70) {
	                this.state = 429;
	                localctx.f_type = this.type_value(0);
	            }

	            this.state = 432;
	            this.match(DiiaParser.COLON);
	            this.state = 433;
	            localctx.f_body = this.expr();
	            break;

	        case 4:
	            localctx = new Anonymous_diiaContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 435;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 434;
	                localctx.d_async = this.match(DiiaParser.ASYNC);
	            }

	            this.state = 437;
	            this.match(DiiaParser.DIIA);
	            this.state = 438;
	            this.match(DiiaParser.OPEN_PAREN);

	            this.state = 439;
	            this.nls();
	            this.state = 441;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & 67108869) !== 0)) {
	                this.state = 440;
	                localctx.d_params = this.params();
	            }

	            this.state = 443;
	            this.nls();
	            this.state = 445;
	            this.match(DiiaParser.CLOSE_PAREN);
	            this.state = 447;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===70) {
	                this.state = 446;
	                localctx.d_type = this.type_value(0);
	            }

	            this.state = 449;
	            this.nl();
	            this.state = 453;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	            if(la_===1) {
	                this.state = 450;
	                localctx.d_body = this.body();
	                this.state = 451;
	                this.nl();

	            }
	            this.state = 455;
	            this.nls();
	            this.state = 456;
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
	    this.enterRule(localctx, 42, DiiaParser.RULE_throw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this.match(DiiaParser.THROW);
	        this.state = 461;
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
	    this.enterRule(localctx, 44, DiiaParser.RULE_array_destruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.match(DiiaParser.OPEN_ARRAY);
	        this.state = 464;
	        this.array_destruction_el();
	        this.state = 469;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 465;
	            this.match(DiiaParser.COMMA);
	            this.state = 466;
	            this.array_destruction_el();
	            this.state = 471;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 472;
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
	    this.enterRule(localctx, 46, DiiaParser.RULE_array_destruction_el);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
	        this.nls();
	        this.state = 475;
	        localctx.ade_id = this.identifier();
	        this.state = 476;
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
	    this.enterRule(localctx, 48, DiiaParser.RULE_object_destruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 479;
	        this.object_destruction_el();
	        this.state = 484;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 480;
	            this.match(DiiaParser.COMMA);
	            this.state = 481;
	            this.object_destruction_el();
	            this.state = 486;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 487;
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_object_destruction_el);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.nls();
	        this.state = 490;
	        localctx.ode_id = this.identifier();
	        this.state = 491;
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
	    this.enterRule(localctx, 52, DiiaParser.RULE_assign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 493;
	            localctx.a_identifiers_chain = this.identifiers_chain(0);
	            this.state = 498;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===46) {
	                this.state = 494;
	                this.match(DiiaParser.OPEN_ARRAY);
	                this.state = 495;
	                localctx.a_set_element = this.expr();
	                this.state = 496;
	                this.match(DiiaParser.CLOSE_ARRAY);
	            }

	            break;

	        case 2:
	            this.state = 500;
	            localctx.a_identifier = this.identifier();
	            this.state = 502;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===70) {
	                this.state = 501;
	                localctx.a_type = this.type_value(0);
	            }

	            break;

	        case 3:
	            this.state = 504;
	            localctx.a_array_destruction = this.array_destruction();
	            break;

	        case 4:
	            this.state = 505;
	            localctx.a_object_destruction = this.object_destruction();
	            break;

	        }
	        this.state = 508;
	        localctx.a_symbol = this.assign_symbol();
	        this.state = 509;
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
	    this.enterRule(localctx, 54, DiiaParser.RULE_assign_value);
	    try {
	        this.state = 513;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 511;
	            this.expr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 512;
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
	    this.enterRule(localctx, 56, DiiaParser.RULE_assign_symbol);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 515;
	        _la = this._input.LA(1);
	        if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & 1023) !== 0))) {
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
	    this.enterRule(localctx, 58, DiiaParser.RULE_wait_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.match(DiiaParser.WAIT);
	        this.state = 518;
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
	    this.enterRule(localctx, 60, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
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
	    const _startState = 62;
	    this.enterRecursionRule(localctx, 62, DiiaParser.RULE_identifiers_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        localctx.ic_identifier = this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 530;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,53,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifiers_chainContext(this, _parentctx, _parentState);
	                localctx.ic_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_identifiers_chain);
	                this.state = 525;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 526;
	                this.match(DiiaParser.DOT);
	                this.state = 527;
	                localctx.ic_right = this.identifiers_chain(2); 
	            }
	            this.state = 532;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,53,this._ctx);
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
	    const _startState = 64;
	    this.enterRecursionRule(localctx, 64, DiiaParser.RULE_type_value, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        localctx.tv_single = this.identifiers_chain(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 542;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,54,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Type_valueContext(this, _parentctx, _parentState);
	                localctx.tv_left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_type_value);
	                this.state = 536;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 537;
	                localctx.tv_operation = this.test_op();
	                this.state = 538;
	                localctx.tv_right = this.type_value(2); 
	            }
	            this.state = 544;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,54,this._ctx);
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
	    this.enterRule(localctx, 66, DiiaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 545;
	        this.arg();
	        this.state = 550;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 546;
	            this.match(DiiaParser.COMMA);
	            this.state = 547;
	            this.arg();
	            this.state = 552;
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
	    this.enterRule(localctx, 68, DiiaParser.RULE_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        this.nls();
	        this.state = 554;
	        localctx.a_value = this.expr();
	        this.state = 555;
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
	    this.enterRule(localctx, 70, DiiaParser.RULE_named_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 557;
	        this.named_arg();
	        this.state = 562;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 558;
	            this.match(DiiaParser.COMMA);
	            this.state = 559;
	            this.named_arg();
	            this.state = 564;
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
	    this.enterRule(localctx, 72, DiiaParser.RULE_named_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 565;
	        this.nls();
	        this.state = 566;
	        localctx.na_name = this.identifier();
	        this.state = 567;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 568;
	        localctx.na_value = this.expr();
	        this.state = 569;
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
	    this.enterRule(localctx, 74, DiiaParser.RULE_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 571;
	        this.param();
	        this.state = 579;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 572;
	                this.nls();
	                this.state = 573;
	                this.match(DiiaParser.COMMA);
	                this.state = 574;
	                this.nls();
	                this.state = 575;
	                this.param(); 
	            }
	            this.state = 581;
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, DiiaParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 585;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.state = 582;
	            localctx.p_name = this.identifier();
	            break;
	        case 46:
	            this.state = 583;
	            localctx.p_array_destruction = this.array_destruction();
	            break;
	        case 44:
	            this.state = 584;
	            localctx.p_object_destruction = this.object_destruction();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 588;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===70) {
	            this.state = 587;
	            localctx.p_type = this.type_value(0);
	        }

	        this.state = 592;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49) {
	            this.state = 590;
	            this.match(DiiaParser.ASSIGN);
	            this.state = 591;
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
	    this.enterRule(localctx, 78, DiiaParser.RULE_param_value);
	    try {
	        this.state = 597;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 71:
	            localctx = new Param_value_numberContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 594;
	            this.match(DiiaParser.NUMBER);
	            break;
	        case 74:
	            localctx = new Param_value_stringContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 595;
	            this.match(DiiaParser.STRING);
	            break;
	        case 70:
	            localctx = new Param_value_identifierContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 596;
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
	    this.enterRule(localctx, 80, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599;
	        this.body_element();
	        this.state = 605;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,62,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 600;
	                this.nl();
	                this.state = 601;
	                this.body_element(); 
	            }
	            this.state = 607;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,62,this._ctx);
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
	    this.enterRule(localctx, 82, DiiaParser.RULE_body_element);
	    try {
	        this.state = 620;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 608;
	            this.structure();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 609;
	            this.diia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 610;
	            this.if_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 611;
	            this.each();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 612;
	            this.while_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 613;
	            this.try_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 614;
	            this.expr();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 615;
	            this.throw_();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 616;
	            this.wait_assign();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 617;
	            this.assign();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 618;
	            this.return_body_line();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 619;
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
	    this.enterRule(localctx, 84, DiiaParser.RULE_return_body_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 622;
	        this.match(DiiaParser.RETURN);
	        this.state = 623;
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
	    this.enterRule(localctx, 86, DiiaParser.RULE_arithmetic_op_mul);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 625;
	        _la = this._input.LA(1);
	        if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & 483) !== 0))) {
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
	    this.enterRule(localctx, 88, DiiaParser.RULE_arithmetic_op_add);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 627;
	        _la = this._input.LA(1);
	        if(!(_la===59 || _la===60)) {
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
	    this.enterRule(localctx, 90, DiiaParser.RULE_test_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 629;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
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
	    this.enterRule(localctx, 92, DiiaParser.RULE_comparison_op);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 631;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 3758229472) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 127) !== 0))) {
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
	    this.enterRule(localctx, 94, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 633;
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
	    this.enterRule(localctx, 96, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 638;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,64,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 635;
	                this.nl(); 
	            }
	            this.state = 640;
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
DiiaParser.GIVE = 14;
DiiaParser.PAK = 15;
DiiaParser.AS = 16;
DiiaParser.IS = 17;
DiiaParser.RETURN = 18;
DiiaParser.ASYNC = 19;
DiiaParser.AND = 20;
DiiaParser.OR = 21;
DiiaParser.TRY = 22;
DiiaParser.CATCH = 23;
DiiaParser.ELSE = 24;
DiiaParser.THROW = 25;
DiiaParser.WHILE = 26;
DiiaParser.MODULE = 27;
DiiaParser.TERNARY = 28;
DiiaParser.EQ_WORD = 29;
DiiaParser.GR_WORD = 30;
DiiaParser.SM_WORD = 31;
DiiaParser.NOT_GR_WORD = 32;
DiiaParser.NOT_SM_WORD = 33;
DiiaParser.NOT_EQ_WORD = 34;
DiiaParser.NOT_IS_WORD = 35;
DiiaParser.HAS_IS_WORD = 36;
DiiaParser.NOT_HAS_IS_WORD = 37;
DiiaParser.NOT_WORD = 38;
DiiaParser.STAR_ALL = 39;
DiiaParser.SKIP_SPACES = 40;
DiiaParser.NL = 41;
DiiaParser.DECREMENT = 42;
DiiaParser.INCREMENT = 43;
DiiaParser.OPEN_PAREN = 44;
DiiaParser.CLOSE_PAREN = 45;
DiiaParser.OPEN_ARRAY = 46;
DiiaParser.CLOSE_ARRAY = 47;
DiiaParser.COMMA = 48;
DiiaParser.ASSIGN = 49;
DiiaParser.ASSIGN_PARENT = 50;
DiiaParser.ASSIGN_ADD = 51;
DiiaParser.ASSIGN_SUB = 52;
DiiaParser.ASSIGN_MUL = 53;
DiiaParser.ASSIGN_DIV = 54;
DiiaParser.ASSIGN_DIVDIV = 55;
DiiaParser.ASSIGN_MOD = 56;
DiiaParser.ASSIGN_XOR = 57;
DiiaParser.ASSIGN_POW = 58;
DiiaParser.PLUS = 59;
DiiaParser.MINUS = 60;
DiiaParser.MUL = 61;
DiiaParser.DIV = 62;
DiiaParser.COLON = 63;
DiiaParser.DOT = 64;
DiiaParser.NOT = 65;
DiiaParser.PERCENT = 66;
DiiaParser.DIVDIV = 67;
DiiaParser.POW = 68;
DiiaParser.XOR = 69;
DiiaParser.ID = 70;
DiiaParser.NUMBER = 71;
DiiaParser.INTEGER = 72;
DiiaParser.FLOAT = 73;
DiiaParser.STRING = 74;
DiiaParser.LINE_COMMENT = 75;
DiiaParser.COMMENT = 76;

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
DiiaParser.RULE_give_element = 14;
DiiaParser.RULE_value = 15;
DiiaParser.RULE_array_elements = 16;
DiiaParser.RULE_array_element = 17;
DiiaParser.RULE_dictionary_args = 18;
DiiaParser.RULE_dictionary_arg = 19;
DiiaParser.RULE_expr = 20;
DiiaParser.RULE_throw = 21;
DiiaParser.RULE_array_destruction = 22;
DiiaParser.RULE_array_destruction_el = 23;
DiiaParser.RULE_object_destruction = 24;
DiiaParser.RULE_object_destruction_el = 25;
DiiaParser.RULE_assign = 26;
DiiaParser.RULE_assign_value = 27;
DiiaParser.RULE_assign_symbol = 28;
DiiaParser.RULE_wait_assign = 29;
DiiaParser.RULE_identifier = 30;
DiiaParser.RULE_identifiers_chain = 31;
DiiaParser.RULE_type_value = 32;
DiiaParser.RULE_args = 33;
DiiaParser.RULE_arg = 34;
DiiaParser.RULE_named_args = 35;
DiiaParser.RULE_named_arg = 36;
DiiaParser.RULE_params = 37;
DiiaParser.RULE_param = 38;
DiiaParser.RULE_param_value = 39;
DiiaParser.RULE_body = 40;
DiiaParser.RULE_body_element = 41;
DiiaParser.RULE_return_body_line = 42;
DiiaParser.RULE_arithmetic_op_mul = 43;
DiiaParser.RULE_arithmetic_op_add = 44;
DiiaParser.RULE_test_op = 45;
DiiaParser.RULE_comparison_op = 46;
DiiaParser.RULE_nl = 47;
DiiaParser.RULE_nls = 48;

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

	TAKE() {
	    return this.getToken(DiiaParser.TAKE, 0);
	};

	PAK() {
	    return this.getToken(DiiaParser.PAK, 0);
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
