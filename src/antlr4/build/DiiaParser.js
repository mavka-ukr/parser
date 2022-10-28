// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,39,369,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,1,0,1,0,1,1,5,1,76,8,1,10,1,12,1,79,9,1,1,2,1,2,1,2,1,2,5,2,
85,8,2,10,2,12,2,88,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
101,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,114,8,4,1,5,1,5,
1,5,3,5,119,8,5,1,5,1,5,1,5,3,5,124,8,5,1,5,1,5,3,5,128,8,5,1,6,1,6,1,6,
1,6,3,6,134,8,6,1,7,1,7,1,8,1,8,1,8,3,8,141,8,8,1,9,1,9,1,9,4,9,146,8,9,
11,9,12,9,147,1,9,3,9,151,8,9,1,10,1,10,1,10,1,10,1,10,3,10,158,8,10,1,10,
1,10,1,10,1,10,1,10,1,10,3,10,166,8,10,1,10,5,10,169,8,10,10,10,12,10,172,
9,10,1,11,1,11,1,11,1,11,1,11,3,11,179,8,11,1,12,1,12,1,12,1,12,3,12,185,
8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,194,8,13,1,13,1,13,1,13,1,13,
5,13,200,8,13,10,13,12,13,203,9,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,3,
15,212,8,15,1,15,1,15,1,15,1,16,1,16,1,16,5,16,220,8,16,10,16,12,16,223,
9,16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,5,18,232,8,18,10,18,12,18,235,9,
18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,21,1,21,1,22,1,22,
1,22,1,22,5,22,253,8,22,10,22,12,22,256,9,22,1,23,1,23,1,23,1,23,1,23,1,
23,3,23,264,8,23,1,24,1,24,3,24,268,8,24,1,24,1,24,1,24,1,24,3,24,274,8,
24,1,24,1,24,1,24,3,24,279,8,24,1,24,1,24,1,24,1,24,3,24,285,8,24,1,24,1,
24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,298,8,25,10,25,12,25,
301,9,25,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,
1,29,1,29,3,29,318,8,29,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,328,
8,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,340,8,32,1,32,
1,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,351,8,33,1,33,1,33,1,33,1,34,
1,34,1,34,1,34,5,34,360,8,34,10,34,12,34,363,9,34,1,35,1,35,1,35,1,35,1,
35,0,3,20,26,50,36,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,0,2,1,0,28,31,1,0,6,9,394,
0,72,1,0,0,0,2,77,1,0,0,0,4,80,1,0,0,0,6,100,1,0,0,0,8,113,1,0,0,0,10,115,
1,0,0,0,12,129,1,0,0,0,14,135,1,0,0,0,16,137,1,0,0,0,18,150,1,0,0,0,20,157,
1,0,0,0,22,178,1,0,0,0,24,184,1,0,0,0,26,193,1,0,0,0,28,204,1,0,0,0,30,206,
1,0,0,0,32,216,1,0,0,0,34,224,1,0,0,0,36,228,1,0,0,0,38,236,1,0,0,0,40,242,
1,0,0,0,42,246,1,0,0,0,44,248,1,0,0,0,46,263,1,0,0,0,48,265,1,0,0,0,50,288,
1,0,0,0,52,302,1,0,0,0,54,304,1,0,0,0,56,307,1,0,0,0,58,317,1,0,0,0,60,319,
1,0,0,0,62,321,1,0,0,0,64,331,1,0,0,0,66,343,1,0,0,0,68,355,1,0,0,0,70,364,
1,0,0,0,72,73,5,21,0,0,73,1,1,0,0,0,74,76,3,0,0,0,75,74,1,0,0,0,76,79,1,
0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,3,1,0,0,0,79,77,1,0,0,0,80,86,3,6,3,
0,81,82,3,0,0,0,82,83,3,6,3,0,83,85,1,0,0,0,84,81,1,0,0,0,85,88,1,0,0,0,
86,84,1,0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,86,1,0,0,0,89,90,5,0,0,1,90,
5,1,0,0,0,91,101,3,20,10,0,92,101,3,40,20,0,93,101,3,48,24,0,94,101,3,62,
31,0,95,101,3,64,32,0,96,101,3,2,1,0,97,101,3,66,33,0,98,101,3,10,5,0,99,
101,3,12,6,0,100,91,1,0,0,0,100,92,1,0,0,0,100,93,1,0,0,0,100,94,1,0,0,0,
100,95,1,0,0,0,100,96,1,0,0,0,100,97,1,0,0,0,100,98,1,0,0,0,100,99,1,0,0,
0,101,7,1,0,0,0,102,114,3,14,7,0,103,114,3,30,15,0,104,114,3,26,13,0,105,
114,3,40,20,0,106,114,3,48,24,0,107,114,3,62,31,0,108,114,3,64,32,0,109,
114,3,56,28,0,110,114,3,66,33,0,111,114,3,10,5,0,112,114,3,12,6,0,113,102,
1,0,0,0,113,103,1,0,0,0,113,104,1,0,0,0,113,105,1,0,0,0,113,106,1,0,0,0,
113,107,1,0,0,0,113,108,1,0,0,0,113,109,1,0,0,0,113,110,1,0,0,0,113,111,
1,0,0,0,113,112,1,0,0,0,114,9,1,0,0,0,115,118,5,16,0,0,116,117,5,18,0,0,
117,119,5,32,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,123,
3,16,8,0,121,122,5,33,0,0,122,124,3,18,9,0,123,121,1,0,0,0,123,124,1,0,0,
0,124,127,1,0,0,0,125,126,5,19,0,0,126,128,5,35,0,0,127,125,1,0,0,0,127,
128,1,0,0,0,128,11,1,0,0,0,129,130,5,17,0,0,130,133,5,35,0,0,131,132,5,19,
0,0,132,134,5,35,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,13,1,0,0,0,135,
136,5,35,0,0,136,15,1,0,0,0,137,140,5,35,0,0,138,139,5,32,0,0,139,141,5,
35,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,17,1,0,0,0,142,145,3,14,7,0,143,
144,5,33,0,0,144,146,3,14,7,0,145,143,1,0,0,0,146,147,1,0,0,0,147,145,1,
0,0,0,147,148,1,0,0,0,148,151,1,0,0,0,149,151,3,14,7,0,150,142,1,0,0,0,150,
149,1,0,0,0,151,19,1,0,0,0,152,153,6,10,-1,0,153,154,5,15,0,0,154,158,3,
20,10,3,155,158,3,14,7,0,156,158,3,30,15,0,157,152,1,0,0,0,157,155,1,0,0,
0,157,156,1,0,0,0,158,170,1,0,0,0,159,165,10,4,0,0,160,161,3,2,1,0,161,162,
5,33,0,0,162,163,3,2,1,0,163,166,1,0,0,0,164,166,5,33,0,0,165,160,1,0,0,
0,165,164,1,0,0,0,166,167,1,0,0,0,167,169,3,20,10,5,168,159,1,0,0,0,169,
172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,21,1,0,0,0,172,170,1,0,0,
0,173,179,5,36,0,0,174,179,5,39,0,0,175,179,5,10,0,0,176,179,5,11,0,0,177,
179,5,12,0,0,178,173,1,0,0,0,178,174,1,0,0,0,178,175,1,0,0,0,178,176,1,0,
0,0,178,177,1,0,0,0,179,23,1,0,0,0,180,185,3,22,11,0,181,185,3,20,10,0,182,
185,3,26,13,0,183,185,3,56,28,0,184,180,1,0,0,0,184,181,1,0,0,0,184,182,
1,0,0,0,184,183,1,0,0,0,185,25,1,0,0,0,186,187,6,13,-1,0,187,194,3,22,11,
0,188,194,3,20,10,0,189,190,5,22,0,0,190,191,3,26,13,0,191,192,5,23,0,0,
192,194,1,0,0,0,193,186,1,0,0,0,193,188,1,0,0,0,193,189,1,0,0,0,194,201,
1,0,0,0,195,196,10,4,0,0,196,197,3,28,14,0,197,198,3,26,13,5,198,200,1,0,
0,0,199,195,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,
27,1,0,0,0,203,201,1,0,0,0,204,205,7,0,0,0,205,29,1,0,0,0,206,207,5,35,0,
0,207,208,5,22,0,0,208,211,3,2,1,0,209,212,3,32,16,0,210,212,3,36,18,0,211,
209,1,0,0,0,211,210,1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,214,3,2,
1,0,214,215,5,23,0,0,215,31,1,0,0,0,216,221,3,34,17,0,217,218,5,26,0,0,218,
220,3,34,17,0,219,217,1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,
0,0,0,222,33,1,0,0,0,223,221,1,0,0,0,224,225,3,2,1,0,225,226,3,24,12,0,226,
227,3,2,1,0,227,35,1,0,0,0,228,233,3,38,19,0,229,230,5,26,0,0,230,232,3,
38,19,0,231,229,1,0,0,0,232,235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,
234,37,1,0,0,0,235,233,1,0,0,0,236,237,3,2,1,0,237,238,5,35,0,0,238,239,
5,32,0,0,239,240,3,24,12,0,240,241,3,2,1,0,241,39,1,0,0,0,242,243,3,18,9,
0,243,244,5,27,0,0,244,245,3,42,21,0,245,41,1,0,0,0,246,247,3,24,12,0,247,
43,1,0,0,0,248,254,3,46,23,0,249,250,3,0,0,0,250,251,3,46,23,0,251,253,1,
0,0,0,252,249,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,
45,1,0,0,0,256,254,1,0,0,0,257,264,3,40,20,0,258,264,3,62,31,0,259,264,3,
26,13,0,260,264,3,20,10,0,261,264,3,64,32,0,262,264,3,2,1,0,263,257,1,0,
0,0,263,258,1,0,0,0,263,259,1,0,0,0,263,260,1,0,0,0,263,261,1,0,0,0,263,
262,1,0,0,0,264,47,1,0,0,0,265,267,5,1,0,0,266,268,3,54,27,0,267,266,1,0,
0,0,267,268,1,0,0,0,268,269,1,0,0,0,269,278,5,35,0,0,270,271,5,22,0,0,271,
273,3,2,1,0,272,274,3,50,25,0,273,272,1,0,0,0,273,274,1,0,0,0,274,275,1,
0,0,0,275,276,3,2,1,0,276,277,5,23,0,0,277,279,1,0,0,0,278,270,1,0,0,0,278,
279,1,0,0,0,279,280,1,0,0,0,280,284,3,0,0,0,281,282,3,44,22,0,282,283,3,
0,0,0,283,285,1,0,0,0,284,281,1,0,0,0,284,285,1,0,0,0,285,286,1,0,0,0,286,
287,5,2,0,0,287,49,1,0,0,0,288,289,6,25,-1,0,289,290,3,52,26,0,290,299,1,
0,0,0,291,292,10,2,0,0,292,293,3,2,1,0,293,294,5,26,0,0,294,295,3,2,1,0,
295,296,3,50,25,3,296,298,1,0,0,0,297,291,1,0,0,0,298,301,1,0,0,0,299,297,
1,0,0,0,299,300,1,0,0,0,300,51,1,0,0,0,301,299,1,0,0,0,302,303,5,35,0,0,
303,53,1,0,0,0,304,305,5,35,0,0,305,306,5,33,0,0,306,55,1,0,0,0,307,308,
3,58,29,0,308,309,3,60,30,0,309,310,3,58,29,0,310,57,1,0,0,0,311,318,3,22,
11,0,312,318,3,20,10,0,313,314,5,22,0,0,314,315,3,26,13,0,315,316,5,23,0,
0,316,318,1,0,0,0,317,311,1,0,0,0,317,312,1,0,0,0,317,313,1,0,0,0,318,59,
1,0,0,0,319,320,7,1,0,0,320,61,1,0,0,0,321,322,5,14,0,0,322,323,3,24,12,
0,323,327,3,0,0,0,324,325,3,44,22,0,325,326,3,0,0,0,326,328,1,0,0,0,327,
324,1,0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,330,5,2,0,0,330,63,1,0,0,
0,331,332,5,3,0,0,332,333,5,35,0,0,333,334,5,4,0,0,334,335,3,24,12,0,335,
339,3,0,0,0,336,337,3,44,22,0,337,338,3,0,0,0,338,340,1,0,0,0,339,336,1,
0,0,0,339,340,1,0,0,0,340,341,1,0,0,0,341,342,5,2,0,0,342,65,1,0,0,0,343,
344,5,5,0,0,344,345,5,35,0,0,345,346,3,0,0,0,346,350,3,2,1,0,347,348,3,68,
34,0,348,349,3,0,0,0,349,351,1,0,0,0,350,347,1,0,0,0,350,351,1,0,0,0,351,
352,1,0,0,0,352,353,3,2,1,0,353,354,5,2,0,0,354,67,1,0,0,0,355,361,3,70,
35,0,356,357,3,0,0,0,357,358,3,70,35,0,358,360,1,0,0,0,359,356,1,0,0,0,360,
363,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,69,1,0,0,0,363,361,1,0,0,
0,364,365,3,2,1,0,365,366,5,35,0,0,366,367,3,2,1,0,367,71,1,0,0,0,33,77,
86,100,113,118,123,127,133,140,147,150,157,165,170,178,184,193,201,211,221,
233,254,263,267,273,278,284,299,317,327,339,350,361];


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
                            null, null, "'('", "')'", "'['", "']'", "','", 
                            "'='", "'+'", "'-'", "'*'", "'/'", "':'", "'.'", 
                            "'!'" ];
    static symbolicNames = [ null, "DEF", "END", "EACH", "TAKING", "STRUCTURE", 
                             "EQ", "NOT_EQ", "GREATER", "SMALLER", "YES", 
                             "NO", "NONE", "FOR", "IF", "WAIT", "TAKE", 
                             "GIVE", "PAK", "AS", "SKIP_SPACES", "NL", "OPEN_PAREN", 
                             "CLOSE_PAREN", "OPEN_ARRAY", "CLOSE_ARRAY", 
                             "COMMA", "ASSIGN", "PLUS", "MINUS", "MUL", 
                             "DIV", "COLON", "DOT", "NOT", "NAME", "NUMBER", 
                             "INTEGER", "FLOAT", "STRING" ];
    static ruleNames = [ "nl", "nls", "program", "program_line", "only_for_testing", 
                         "take", "give", "identifier", "pakname", "identifiers_chain", 
                         "chain", "literal", "atom", "arithmetic", "arithmetic_ops", 
                         "call", "call_parameters", "call_parameter", "call_parameters_with_name", 
                         "call_parameter_with_name", "assign", "assign_value", 
                         "body", "body_line", "diia", "diia_parameters", 
                         "diia_parameter", "diia_for_structure", "test", 
                         "test_part", "test_ops", "if", "each", "structure", 
                         "structure_parameters", "structure_parameter" ];

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
    	case 10:
    	    		return this.chain_sempred(localctx, predIndex);
    	case 13:
    	    		return this.arithmetic_sempred(localctx, predIndex);
    	case 25:
    	    		return this.diia_parameters_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    chain_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arithmetic_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    diia_parameters_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	nl() {
	    let localctx = new NlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DiiaParser.RULE_nl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
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
	    this.enterRule(localctx, 2, DiiaParser.RULE_nls);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 74;
	                this.nl(); 
	            }
	            this.state = 79;
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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DiiaParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.program_line();
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
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
	    this.enterRule(localctx, 6, DiiaParser.RULE_program_line);
	    try {
	        this.state = 100;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 91;
	            this.chain(0);
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



	only_for_testing() {
	    let localctx = new Only_for_testingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DiiaParser.RULE_only_for_testing);
	    try {
	        this.state = 113;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 102;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.call();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 104;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 105;
	            this.assign();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 106;
	            this.diia();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 107;
	            this.if_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 108;
	            this.each();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 109;
	            this.test();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 110;
	            this.structure();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 111;
	            this.take();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 112;
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



	take() {
	    let localctx = new TakeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DiiaParser.RULE_take);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(DiiaParser.TAKE);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 116;
	            localctx.pak_v = this.match(DiiaParser.PAK);
	            this.state = 117;
	            this.match(DiiaParser.COLON);
	        }

	        this.state = 120;
	        localctx.paknme_v = this.pakname();
	        this.state = 123;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 121;
	            this.match(DiiaParser.DOT);
	            this.state = 122;
	            localctx.identifiers_chain_v = this.identifiers_chain();
	        }

	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 125;
	            this.match(DiiaParser.AS);
	            this.state = 126;
	            localctx.as_name_v = this.match(DiiaParser.NAME);
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
	    this.enterRule(localctx, 12, DiiaParser.RULE_give);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this.match(DiiaParser.GIVE);
	        this.state = 130;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 133;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19) {
	            this.state = 131;
	            this.match(DiiaParser.AS);
	            this.state = 132;
	            localctx.as_name_v = this.match(DiiaParser.NAME);
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
	    this.enterRule(localctx, 14, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(DiiaParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pakname() {
	    let localctx = new PaknameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, DiiaParser.RULE_pakname);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(DiiaParser.NAME);
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 138;
	            this.match(DiiaParser.COLON);
	            this.state = 139;
	            this.match(DiiaParser.NAME);
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



	identifiers_chain() {
	    let localctx = new Identifiers_chainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, DiiaParser.RULE_identifiers_chain);
	    var _la = 0; // Token type
	    try {
	        this.state = 150;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 142;
	            this.identifier();
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 143;
	                this.match(DiiaParser.DOT);
	                this.state = 144;
	                this.identifier();
	                this.state = 147; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===33);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 149;
	            localctx.identifier_v = this.identifier();
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


	chain(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ChainContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, DiiaParser.RULE_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 153;
	            this.match(DiiaParser.WAIT);
	            this.state = 154;
	            localctx.wait_chain_v = this.chain(3);
	            break;

	        case 2:
	            this.state = 155;
	            localctx.identifier_v = this.identifier();
	            break;

	        case 3:
	            this.state = 156;
	            localctx.call_v = this.call();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ChainContext(this, _parentctx, _parentState);
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_chain);
	                this.state = 159;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 165;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 160;
	                    this.nls();
	                    this.state = 161;
	                    this.match(DiiaParser.DOT);
	                    this.state = 162;
	                    this.nls();
	                    break;

	                case 2:
	                    this.state = 164;
	                    this.match(DiiaParser.DOT);
	                    break;

	                }
	                this.state = 167;
	                localctx.right = this.chain(5); 
	            }
	            this.state = 172;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, DiiaParser.RULE_literal);
	    try {
	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 173;
	            localctx.number = this.match(DiiaParser.NUMBER);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 174;
	            localctx.string = this.match(DiiaParser.STRING);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 175;
	            localctx.yes = this.match(DiiaParser.YES);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 176;
	            localctx.no = this.match(DiiaParser.NO);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 177;
	            localctx.none = this.match(DiiaParser.NONE);
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
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 181;
	            this.chain(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 182;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 183;
	            this.test();
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	        case 36:
	        case 39:
	            this.state = 187;
	            localctx.literal_v = this.literal();
	            break;
	        case 15:
	        case 35:
	            this.state = 188;
	            localctx.chain_v = this.chain(0);
	            break;
	        case 22:
	            this.state = 189;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 190;
	            localctx.nested = this.arithmetic(0);
	            this.state = 191;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 201;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ArithmeticContext(this, _parentctx, _parentState);
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_arithmetic);
	                this.state = 195;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 196;
	                localctx.op = this.arithmetic_ops();
	                this.state = 197;
	                localctx.right = this.arithmetic(5); 
	            }
	            this.state = 203;
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



	arithmetic_ops() {
	    let localctx = new Arithmetic_opsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DiiaParser.RULE_arithmetic_ops);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 4026531840) !== 0))) {
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
	    this.enterRule(localctx, 30, DiiaParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 207;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 208;
	        this.nls();
	        this.state = 211;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 209;
	            localctx.call_parameters_v = this.call_parameters();

	        } else if(la_===2) {
	            this.state = 210;
	            localctx.call_parameters_with_name_v = this.call_parameters_with_name();

	        }
	        this.state = 213;
	        this.nls();
	        this.state = 214;
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
	    this.enterRule(localctx, 32, DiiaParser.RULE_call_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.call_parameter();
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 217;
	            this.match(DiiaParser.COMMA);
	            this.state = 218;
	            this.call_parameter();
	            this.state = 223;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_call_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.nls();
	        this.state = 225;
	        localctx.value_v = this.atom();
	        this.state = 226;
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



	call_parameters_with_name() {
	    let localctx = new Call_parameters_with_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, DiiaParser.RULE_call_parameters_with_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.call_parameter_with_name();
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 229;
	            this.match(DiiaParser.COMMA);
	            this.state = 230;
	            this.call_parameter_with_name();
	            this.state = 235;
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



	call_parameter_with_name() {
	    let localctx = new Call_parameter_with_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, DiiaParser.RULE_call_parameter_with_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.nls();
	        this.state = 237;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 238;
	        this.match(DiiaParser.COLON);
	        this.state = 239;
	        localctx.value_v = this.atom();
	        this.state = 240;
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
	    this.enterRule(localctx, 40, DiiaParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        localctx.identifier_v = this.identifiers_chain();
	        this.state = 243;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 244;
	        localctx.value_v = this.assign_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 42, DiiaParser.RULE_assign_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
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
	    this.enterRule(localctx, 44, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.body_line();
	        this.state = 254;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 249;
	                this.nl();
	                this.state = 250;
	                this.body_line(); 
	            }
	            this.state = 256;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
	    this.enterRule(localctx, 46, DiiaParser.RULE_body_line);
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 257;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 258;
	            this.if_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 259;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 260;
	            this.chain(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 261;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 262;
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



	diia() {
	    let localctx = new DiiaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(DiiaParser.DEF);
	        this.state = 267;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        if(la_===1) {
	            this.state = 266;
	            this.diia_for_structure();

	        }
	        this.state = 269;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 270;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 271;
	            this.nls();
	            this.state = 273;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===35) {
	                this.state = 272;
	                localctx.parameters_v = this.diia_parameters(0);
	            }

	            this.state = 275;
	            this.nls();
	            this.state = 276;
	            this.match(DiiaParser.CLOSE_PAREN);
	        }

	        this.state = 280;
	        this.nl();
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 6347784) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & 19) !== 0)) {
	            this.state = 281;
	            localctx.body_v = this.body();
	            this.state = 282;
	            this.nl();
	        }

	        this.state = 286;
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


	diia_parameters(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Diia_parametersContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, DiiaParser.RULE_diia_parameters, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        localctx.parameter_v = this.diia_parameter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 299;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Diia_parametersContext(this, _parentctx, _parentState);
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_diia_parameters);
	                this.state = 291;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 292;
	                this.nls();
	                this.state = 293;
	                this.match(DiiaParser.COMMA);
	                this.state = 294;
	                this.nls();
	                this.state = 295;
	                localctx.right = this.diia_parameters(3); 
	            }
	            this.state = 301;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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



	diia_parameter() {
	    let localctx = new Diia_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, DiiaParser.RULE_diia_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(DiiaParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	diia_for_structure() {
	    let localctx = new Diia_for_structureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, DiiaParser.RULE_diia_for_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        localctx.structure_name_v = this.match(DiiaParser.NAME);
	        this.state = 305;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        localctx.left = this.test_part();
	        this.state = 308;
	        localctx.op = this.test_ops();
	        this.state = 309;
	        localctx.right = this.test_part();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 317;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	        case 36:
	        case 39:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 311;
	            this.literal();
	            break;
	        case 15:
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 312;
	            this.chain(0);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 313;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 314;
	            this.arithmetic(0);
	            this.state = 315;
	            this.match(DiiaParser.CLOSE_PAREN);
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



	test_ops() {
	    let localctx = new Test_opsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, DiiaParser.RULE_test_ops);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 960) !== 0))) {
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
	    this.enterRule(localctx, 62, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(DiiaParser.IF);
	        this.state = 322;
	        localctx.expression_v = this.atom();
	        this.state = 323;
	        this.nl();
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 6347784) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & 19) !== 0)) {
	            this.state = 324;
	            localctx.body_v = this.body();
	            this.state = 325;
	            this.nl();
	        }

	        this.state = 329;
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
	    this.enterRule(localctx, 64, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(DiiaParser.EACH);
	        this.state = 332;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 333;
	        this.match(DiiaParser.TAKING);
	        this.state = 334;
	        localctx.iterator_v = this.atom();
	        this.state = 335;
	        this.nl();
	        this.state = 339;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 6347784) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & 19) !== 0)) {
	            this.state = 336;
	            localctx.body_v = this.body();
	            this.state = 337;
	            this.nl();
	        }

	        this.state = 341;
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
	    this.enterRule(localctx, 66, DiiaParser.RULE_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this.match(DiiaParser.STRUCTURE);
	        this.state = 344;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 345;
	        this.nl();
	        this.state = 346;
	        this.nls();
	        this.state = 350;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 347;
	            localctx.parameters_v = this.structure_parameters();
	            this.state = 348;
	            this.nl();

	        }
	        this.state = 352;
	        this.nls();
	        this.state = 353;
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
	    this.enterRule(localctx, 68, DiiaParser.RULE_structure_parameters);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.structure_parameter();
	        this.state = 361;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 356;
	                this.nl();
	                this.state = 357;
	                this.structure_parameter(); 
	            }
	            this.state = 363;
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



	structure_parameter() {
	    let localctx = new Structure_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, DiiaParser.RULE_structure_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.nls();
	        this.state = 365;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 366;
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
DiiaParser.SKIP_SPACES = 20;
DiiaParser.NL = 21;
DiiaParser.OPEN_PAREN = 22;
DiiaParser.CLOSE_PAREN = 23;
DiiaParser.OPEN_ARRAY = 24;
DiiaParser.CLOSE_ARRAY = 25;
DiiaParser.COMMA = 26;
DiiaParser.ASSIGN = 27;
DiiaParser.PLUS = 28;
DiiaParser.MINUS = 29;
DiiaParser.MUL = 30;
DiiaParser.DIV = 31;
DiiaParser.COLON = 32;
DiiaParser.DOT = 33;
DiiaParser.NOT = 34;
DiiaParser.NAME = 35;
DiiaParser.NUMBER = 36;
DiiaParser.INTEGER = 37;
DiiaParser.FLOAT = 38;
DiiaParser.STRING = 39;

DiiaParser.RULE_nl = 0;
DiiaParser.RULE_nls = 1;
DiiaParser.RULE_program = 2;
DiiaParser.RULE_program_line = 3;
DiiaParser.RULE_only_for_testing = 4;
DiiaParser.RULE_take = 5;
DiiaParser.RULE_give = 6;
DiiaParser.RULE_identifier = 7;
DiiaParser.RULE_pakname = 8;
DiiaParser.RULE_identifiers_chain = 9;
DiiaParser.RULE_chain = 10;
DiiaParser.RULE_literal = 11;
DiiaParser.RULE_atom = 12;
DiiaParser.RULE_arithmetic = 13;
DiiaParser.RULE_arithmetic_ops = 14;
DiiaParser.RULE_call = 15;
DiiaParser.RULE_call_parameters = 16;
DiiaParser.RULE_call_parameter = 17;
DiiaParser.RULE_call_parameters_with_name = 18;
DiiaParser.RULE_call_parameter_with_name = 19;
DiiaParser.RULE_assign = 20;
DiiaParser.RULE_assign_value = 21;
DiiaParser.RULE_body = 22;
DiiaParser.RULE_body_line = 23;
DiiaParser.RULE_diia = 24;
DiiaParser.RULE_diia_parameters = 25;
DiiaParser.RULE_diia_parameter = 26;
DiiaParser.RULE_diia_for_structure = 27;
DiiaParser.RULE_test = 28;
DiiaParser.RULE_test_part = 29;
DiiaParser.RULE_test_ops = 30;
DiiaParser.RULE_if = 31;
DiiaParser.RULE_each = 32;
DiiaParser.RULE_structure = 33;
DiiaParser.RULE_structure_parameters = 34;
DiiaParser.RULE_structure_parameter = 35;

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



class Only_for_testingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_only_for_testing;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	arithmetic() {
	    return this.getTypedRuleContext(ArithmeticContext,0);
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

	test() {
	    return this.getTypedRuleContext(TestContext,0);
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
	        listener.enterOnly_for_testing(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitOnly_for_testing(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitOnly_for_testing(this);
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
        this.pak_v = null; // Token
        this.paknme_v = null; // PaknameContext
        this.identifiers_chain_v = null; // Identifiers_chainContext
        this.as_name_v = null; // Token
    }

	TAKE() {
	    return this.getToken(DiiaParser.TAKE, 0);
	};

	pakname() {
	    return this.getTypedRuleContext(PaknameContext,0);
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
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
        this.name_v = null; // Token
        this.as_name_v = null; // Token
    }

	GIVE() {
	    return this.getToken(DiiaParser.GIVE, 0);
	};

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.NAME);
	    } else {
	        return this.getToken(DiiaParser.NAME, i);
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
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



class PaknameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_pakname;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.NAME);
	    } else {
	        return this.getToken(DiiaParser.NAME, i);
	    }
	};


	COLON() {
	    return this.getToken(DiiaParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterPakname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitPakname(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitPakname(this);
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
        this.identifier_v = null; // IdentifierContext
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
        this.left = null; // ChainContext
        this.wait_chain_v = null; // ChainContext
        this.identifier_v = null; // IdentifierContext
        this.call_v = null; // CallContext
        this.right = null; // ChainContext
    }

	WAIT() {
	    return this.getToken(DiiaParser.WAIT, 0);
	};

	chain = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ChainContext);
	    } else {
	        return this.getTypedRuleContext(ChainContext,i);
	    }
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
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

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
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
        this.number = null; // Token
        this.string = null; // Token
        this.yes = null; // Token
        this.no = null; // Token
        this.none = null; // Token
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
        this.left = null; // ArithmeticContext
        this.literal_v = null; // LiteralContext
        this.chain_v = null; // ChainContext
        this.nested = null; // ArithmeticContext
        this.op = null; // Arithmetic_opsContext
        this.right = null; // ArithmeticContext
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

	arithmetic_ops() {
	    return this.getTypedRuleContext(Arithmetic_opsContext,0);
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



class Arithmetic_opsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_arithmetic_ops;
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
	        listener.enterArithmetic_ops(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic_ops(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic_ops(this);
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
        this.name_v = null; // Token
        this.call_parameters_v = null; // Call_parametersContext
        this.call_parameters_with_name_v = null; // Call_parameters_with_nameContext
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
	};

	call_parameters() {
	    return this.getTypedRuleContext(Call_parametersContext,0);
	};

	call_parameters_with_name() {
	    return this.getTypedRuleContext(Call_parameters_with_nameContext,0);
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
        this.value_v = null; // AtomContext
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



class Call_parameters_with_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_call_parameters_with_name;
    }

	call_parameter_with_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Call_parameter_with_nameContext);
	    } else {
	        return this.getTypedRuleContext(Call_parameter_with_nameContext,i);
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
	        listener.enterCall_parameters_with_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall_parameters_with_name(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall_parameters_with_name(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Call_parameter_with_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_call_parameter_with_name;
        this.name_v = null; // Token
        this.value_v = null; // AtomContext
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterCall_parameter_with_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitCall_parameter_with_name(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitCall_parameter_with_name(this);
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
        this.identifier_v = null; // Identifiers_chainContext
        this.value_v = null; // Assign_valueContext
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
        this.name_v = null; // Token
        this.parameters_v = null; // Diia_parametersContext
        this.body_v = null; // BodyContext
    }

	DEF() {
	    return this.getToken(DiiaParser.DEF, 0);
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
	};

	diia_for_structure() {
	    return this.getTypedRuleContext(Diia_for_structureContext,0);
	};

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
        this.left = null; // Diia_parametersContext
        this.parameter_v = null; // Diia_parameterContext
        this.right = null; // Diia_parametersContext
    }

	diia_parameter() {
	    return this.getTypedRuleContext(Diia_parameterContext,0);
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

	COMMA() {
	    return this.getToken(DiiaParser.COMMA, 0);
	};

	diia_parameters = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Diia_parametersContext);
	    } else {
	        return this.getTypedRuleContext(Diia_parametersContext,i);
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
    }

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
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



class Diia_for_structureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_diia_for_structure;
        this.structure_name_v = null; // Token
    }

	DOT() {
	    return this.getToken(DiiaParser.DOT, 0);
	};

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterDiia_for_structure(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitDiia_for_structure(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitDiia_for_structure(this);
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
        this.left = null; // Test_partContext
        this.op = null; // Test_opsContext
        this.right = null; // Test_partContext
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

	test_ops() {
	    return this.getTypedRuleContext(Test_opsContext,0);
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

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	arithmetic() {
	    return this.getTypedRuleContext(ArithmeticContext,0);
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



class Test_opsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_test_ops;
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

	enterRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.enterTest_ops(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitTest_ops(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitTest_ops(this);
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
        this.expression_v = null; // AtomContext
        this.body_v = null; // BodyContext
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

	body() {
	    return this.getTypedRuleContext(BodyContext,0);
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
        this.name_v = null; // Token
        this.iterator_v = null; // AtomContext
        this.body_v = null; // BodyContext
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
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
        this.name_v = null; // Token
        this.parameters_v = null; // Structure_parametersContext
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
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
        this.name_v = null; // Token
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

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
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




DiiaParser.NlContext = NlContext; 
DiiaParser.NlsContext = NlsContext; 
DiiaParser.ProgramContext = ProgramContext; 
DiiaParser.Program_lineContext = Program_lineContext; 
DiiaParser.Only_for_testingContext = Only_for_testingContext; 
DiiaParser.TakeContext = TakeContext; 
DiiaParser.GiveContext = GiveContext; 
DiiaParser.IdentifierContext = IdentifierContext; 
DiiaParser.PaknameContext = PaknameContext; 
DiiaParser.Identifiers_chainContext = Identifiers_chainContext; 
DiiaParser.ChainContext = ChainContext; 
DiiaParser.LiteralContext = LiteralContext; 
DiiaParser.AtomContext = AtomContext; 
DiiaParser.ArithmeticContext = ArithmeticContext; 
DiiaParser.Arithmetic_opsContext = Arithmetic_opsContext; 
DiiaParser.CallContext = CallContext; 
DiiaParser.Call_parametersContext = Call_parametersContext; 
DiiaParser.Call_parameterContext = Call_parameterContext; 
DiiaParser.Call_parameters_with_nameContext = Call_parameters_with_nameContext; 
DiiaParser.Call_parameter_with_nameContext = Call_parameter_with_nameContext; 
DiiaParser.AssignContext = AssignContext; 
DiiaParser.Assign_valueContext = Assign_valueContext; 
DiiaParser.BodyContext = BodyContext; 
DiiaParser.Body_lineContext = Body_lineContext; 
DiiaParser.DiiaContext = DiiaContext; 
DiiaParser.Diia_parametersContext = Diia_parametersContext; 
DiiaParser.Diia_parameterContext = Diia_parameterContext; 
DiiaParser.Diia_for_structureContext = Diia_for_structureContext; 
DiiaParser.TestContext = TestContext; 
DiiaParser.Test_partContext = Test_partContext; 
DiiaParser.Test_opsContext = Test_opsContext; 
DiiaParser.IfContext = IfContext; 
DiiaParser.EachContext = EachContext; 
DiiaParser.StructureContext = StructureContext; 
DiiaParser.Structure_parametersContext = Structure_parametersContext; 
DiiaParser.Structure_parameterContext = Structure_parameterContext; 
