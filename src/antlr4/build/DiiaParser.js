// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,35,302,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,1,0,1,0,1,1,5,1,64,8,1,10,1,12,1,67,9,1,1,2,1,2,
1,2,1,2,5,2,73,8,2,10,2,12,2,76,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
86,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,96,8,4,1,5,1,5,1,6,1,6,1,6,1,
6,1,6,1,6,5,6,106,8,6,10,6,12,6,109,9,6,1,7,1,7,1,7,1,7,1,7,3,7,116,8,7,
1,7,1,7,1,7,1,7,1,7,1,7,3,7,124,8,7,1,7,5,7,127,8,7,10,7,12,7,130,9,7,1,
8,1,8,1,8,1,8,1,8,3,8,137,8,8,1,9,1,9,1,9,1,9,3,9,143,8,9,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,3,10,152,8,10,1,10,1,10,1,10,1,10,5,10,158,8,10,10,10,
12,10,161,9,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,3,12,170,8,12,1,12,1,12,
1,12,1,13,1,13,1,13,5,13,178,8,13,10,13,12,13,181,9,13,1,14,1,14,1,14,1,
14,1,15,1,15,1,15,5,15,190,8,15,10,15,12,15,193,9,15,1,16,1,16,1,16,1,16,
1,16,1,16,1,17,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,5,19,211,8,19,
10,19,12,19,214,9,19,1,20,1,20,1,20,1,20,1,20,1,20,3,20,222,8,20,1,21,1,
21,3,21,226,8,21,1,21,1,21,1,21,1,21,3,21,232,8,21,1,21,1,21,1,21,3,21,237,
8,21,1,21,1,21,1,21,1,21,3,21,243,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,5,22,256,8,22,10,22,12,22,259,9,22,1,23,1,23,1,24,1,
24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,3,26,276,8,26,
1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,3,28,286,8,28,1,28,1,28,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,3,29,298,8,29,1,29,1,29,1,29,0,4,12,14,20,
44,30,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,0,2,1,0,24,27,1,0,6,9,319,0,60,1,0,0,0,2,65,1,0,0,0,4,
68,1,0,0,0,6,85,1,0,0,0,8,95,1,0,0,0,10,97,1,0,0,0,12,99,1,0,0,0,14,115,
1,0,0,0,16,136,1,0,0,0,18,142,1,0,0,0,20,151,1,0,0,0,22,162,1,0,0,0,24,164,
1,0,0,0,26,174,1,0,0,0,28,182,1,0,0,0,30,186,1,0,0,0,32,194,1,0,0,0,34,200,
1,0,0,0,36,204,1,0,0,0,38,206,1,0,0,0,40,221,1,0,0,0,42,223,1,0,0,0,44,246,
1,0,0,0,46,260,1,0,0,0,48,262,1,0,0,0,50,265,1,0,0,0,52,275,1,0,0,0,54,277,
1,0,0,0,56,279,1,0,0,0,58,289,1,0,0,0,60,61,5,17,0,0,61,1,1,0,0,0,62,64,
3,0,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,0,65,66,1,0,0,0,66,3,1,0,
0,0,67,65,1,0,0,0,68,74,3,6,3,0,69,70,3,0,0,0,70,71,3,6,3,0,71,73,1,0,0,
0,72,69,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,77,1,0,0,0,
76,74,1,0,0,0,77,78,5,0,0,1,78,5,1,0,0,0,79,86,3,14,7,0,80,86,3,34,17,0,
81,86,3,42,21,0,82,86,3,56,28,0,83,86,3,58,29,0,84,86,3,2,1,0,85,79,1,0,
0,0,85,80,1,0,0,0,85,81,1,0,0,0,85,82,1,0,0,0,85,83,1,0,0,0,85,84,1,0,0,
0,86,7,1,0,0,0,87,96,3,10,5,0,88,96,3,24,12,0,89,96,3,20,10,0,90,96,3,34,
17,0,91,96,3,42,21,0,92,96,3,56,28,0,93,96,3,58,29,0,94,96,3,50,25,0,95,
87,1,0,0,0,95,88,1,0,0,0,95,89,1,0,0,0,95,90,1,0,0,0,95,91,1,0,0,0,95,92,
1,0,0,0,95,93,1,0,0,0,95,94,1,0,0,0,96,9,1,0,0,0,97,98,5,31,0,0,98,11,1,
0,0,0,99,100,6,6,-1,0,100,101,3,10,5,0,101,107,1,0,0,0,102,103,10,2,0,0,
103,104,5,29,0,0,104,106,3,12,6,3,105,102,1,0,0,0,106,109,1,0,0,0,107,105,
1,0,0,0,107,108,1,0,0,0,108,13,1,0,0,0,109,107,1,0,0,0,110,111,6,7,-1,0,
111,112,5,15,0,0,112,116,3,14,7,3,113,116,3,10,5,0,114,116,3,24,12,0,115,
110,1,0,0,0,115,113,1,0,0,0,115,114,1,0,0,0,116,128,1,0,0,0,117,123,10,4,
0,0,118,119,3,2,1,0,119,120,5,29,0,0,120,121,3,2,1,0,121,124,1,0,0,0,122,
124,5,29,0,0,123,118,1,0,0,0,123,122,1,0,0,0,124,125,1,0,0,0,125,127,3,14,
7,5,126,117,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,
15,1,0,0,0,130,128,1,0,0,0,131,137,5,32,0,0,132,137,5,35,0,0,133,137,5,10,
0,0,134,137,5,11,0,0,135,137,5,12,0,0,136,131,1,0,0,0,136,132,1,0,0,0,136,
133,1,0,0,0,136,134,1,0,0,0,136,135,1,0,0,0,137,17,1,0,0,0,138,143,3,16,
8,0,139,143,3,14,7,0,140,143,3,20,10,0,141,143,3,50,25,0,142,138,1,0,0,0,
142,139,1,0,0,0,142,140,1,0,0,0,142,141,1,0,0,0,143,19,1,0,0,0,144,145,6,
10,-1,0,145,152,3,16,8,0,146,152,3,14,7,0,147,148,5,18,0,0,148,149,3,20,
10,0,149,150,5,19,0,0,150,152,1,0,0,0,151,144,1,0,0,0,151,146,1,0,0,0,151,
147,1,0,0,0,152,159,1,0,0,0,153,154,10,4,0,0,154,155,3,22,11,0,155,156,3,
20,10,5,156,158,1,0,0,0,157,153,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,
159,160,1,0,0,0,160,21,1,0,0,0,161,159,1,0,0,0,162,163,7,0,0,0,163,23,1,
0,0,0,164,165,3,10,5,0,165,166,5,18,0,0,166,169,3,2,1,0,167,170,3,26,13,
0,168,170,3,30,15,0,169,167,1,0,0,0,169,168,1,0,0,0,169,170,1,0,0,0,170,
171,1,0,0,0,171,172,3,2,1,0,172,173,5,19,0,0,173,25,1,0,0,0,174,179,3,28,
14,0,175,176,5,22,0,0,176,178,3,28,14,0,177,175,1,0,0,0,178,181,1,0,0,0,
179,177,1,0,0,0,179,180,1,0,0,0,180,27,1,0,0,0,181,179,1,0,0,0,182,183,3,
2,1,0,183,184,3,18,9,0,184,185,3,2,1,0,185,29,1,0,0,0,186,191,3,32,16,0,
187,188,5,22,0,0,188,190,3,32,16,0,189,187,1,0,0,0,190,193,1,0,0,0,191,189,
1,0,0,0,191,192,1,0,0,0,192,31,1,0,0,0,193,191,1,0,0,0,194,195,3,2,1,0,195,
196,5,31,0,0,196,197,5,28,0,0,197,198,3,18,9,0,198,199,3,2,1,0,199,33,1,
0,0,0,200,201,3,12,6,0,201,202,5,23,0,0,202,203,3,36,18,0,203,35,1,0,0,0,
204,205,3,18,9,0,205,37,1,0,0,0,206,212,3,40,20,0,207,208,3,0,0,0,208,209,
3,40,20,0,209,211,1,0,0,0,210,207,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,
0,212,213,1,0,0,0,213,39,1,0,0,0,214,212,1,0,0,0,215,222,3,34,17,0,216,222,
3,56,28,0,217,222,3,20,10,0,218,222,3,14,7,0,219,222,3,58,29,0,220,222,3,
2,1,0,221,215,1,0,0,0,221,216,1,0,0,0,221,217,1,0,0,0,221,218,1,0,0,0,221,
219,1,0,0,0,221,220,1,0,0,0,222,41,1,0,0,0,223,225,5,1,0,0,224,226,3,48,
24,0,225,224,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,236,5,31,0,0,228,
229,5,18,0,0,229,231,3,2,1,0,230,232,3,44,22,0,231,230,1,0,0,0,231,232,1,
0,0,0,232,233,1,0,0,0,233,234,3,2,1,0,234,235,5,19,0,0,235,237,1,0,0,0,236,
228,1,0,0,0,236,237,1,0,0,0,237,238,1,0,0,0,238,242,3,0,0,0,239,240,3,38,
19,0,240,241,3,0,0,0,241,243,1,0,0,0,242,239,1,0,0,0,242,243,1,0,0,0,243,
244,1,0,0,0,244,245,5,2,0,0,245,43,1,0,0,0,246,247,6,22,-1,0,247,248,3,46,
23,0,248,257,1,0,0,0,249,250,10,2,0,0,250,251,3,2,1,0,251,252,5,22,0,0,252,
253,3,2,1,0,253,254,3,44,22,3,254,256,1,0,0,0,255,249,1,0,0,0,256,259,1,
0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,45,1,0,0,0,259,257,1,0,0,0,260,
261,5,31,0,0,261,47,1,0,0,0,262,263,5,31,0,0,263,264,5,29,0,0,264,49,1,0,
0,0,265,266,3,52,26,0,266,267,3,54,27,0,267,268,3,52,26,0,268,51,1,0,0,0,
269,276,3,16,8,0,270,276,3,14,7,0,271,272,5,18,0,0,272,273,3,20,10,0,273,
274,5,19,0,0,274,276,1,0,0,0,275,269,1,0,0,0,275,270,1,0,0,0,275,271,1,0,
0,0,276,53,1,0,0,0,277,278,7,1,0,0,278,55,1,0,0,0,279,280,5,14,0,0,280,281,
3,18,9,0,281,285,3,0,0,0,282,283,3,38,19,0,283,284,3,0,0,0,284,286,1,0,0,
0,285,282,1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,288,5,2,0,0,288,57,
1,0,0,0,289,290,5,3,0,0,290,291,5,31,0,0,291,292,5,4,0,0,292,293,3,18,9,
0,293,297,3,0,0,0,294,295,3,38,19,0,295,296,3,0,0,0,296,298,1,0,0,0,297,
294,1,0,0,0,297,298,1,0,0,0,298,299,1,0,0,0,299,300,5,2,0,0,300,59,1,0,0,
0,25,65,74,85,95,107,115,123,128,136,142,151,159,169,179,191,212,221,225,
231,236,242,257,275,285,297];


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
                            null, null, "'('", "')'", "'['", "']'", "','", 
                            "'='", "'+'", "'-'", "'*'", "'/'", "':'", "'.'", 
                            "'!'" ];
    static symbolicNames = [ null, "DEF", "END", "EACH", "TAKING", "STRUCTURE", 
                             "EQ", "NOT_EQ", "GREATER", "SMALLER", "YES", 
                             "NO", "NONE", "FOR", "IF", "WAIT", "SKIP_SPACES", 
                             "NL", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_ARRAY", 
                             "CLOSE_ARRAY", "COMMA", "ASSIGN", "PLUS", "MINUS", 
                             "MUL", "DIV", "COLON", "DOT", "NOT", "NAME", 
                             "NUMBER", "INTEGER", "FLOAT", "STRING" ];
    static ruleNames = [ "nl", "nls", "program", "program_line", "only_for_testing", 
                         "identifier", "identifiers_chain", "chain", "literal", 
                         "atom", "arithmetic", "arithmetic_ops", "call", 
                         "call_parameters", "call_parameter", "call_parameters_with_name", 
                         "call_parameter_with_name", "assign", "assign_value", 
                         "body", "body_line", "diia", "diia_parameters", 
                         "diia_parameter", "diia_for_structure", "test", 
                         "test_part", "test_ops", "if", "each" ];

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
    	case 6:
    	    		return this.identifiers_chain_sempred(localctx, predIndex);
    	case 7:
    	    		return this.chain_sempred(localctx, predIndex);
    	case 10:
    	    		return this.arithmetic_sempred(localctx, predIndex);
    	case 22:
    	    		return this.diia_parameters_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    identifiers_chain_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    chain_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arithmetic_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    diia_parameters_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
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
	        this.state = 60;
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
	        this.state = 65;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 62;
	                this.nl(); 
	            }
	            this.state = 67;
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
	        this.state = 68;
	        this.program_line();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 69;
	            this.nl();
	            this.state = 70;
	            this.program_line();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
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



	program_line() {
	    let localctx = new Program_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DiiaParser.RULE_program_line);
	    try {
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 79;
	            this.chain(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80;
	            this.assign();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 81;
	            this.diia();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 82;
	            this.if_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 83;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 84;
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



	only_for_testing() {
	    let localctx = new Only_for_testingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DiiaParser.RULE_only_for_testing);
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 87;
	            this.identifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 88;
	            this.call();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 89;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 90;
	            this.assign();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 91;
	            this.diia();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 92;
	            this.if_();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 93;
	            this.each();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 94;
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
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


	identifiers_chain(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Identifiers_chainContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, DiiaParser.RULE_identifiers_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        localctx.identifier_v = this.identifier();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 107;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifiers_chainContext(this, _parentctx, _parentState);
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_identifiers_chain);
	                this.state = 102;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 103;
	                this.match(DiiaParser.DOT);
	                this.state = 104;
	                localctx.right = this.identifiers_chain(3); 
	            }
	            this.state = 109;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
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


	chain(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ChainContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, DiiaParser.RULE_chain, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 111;
	            this.match(DiiaParser.WAIT);
	            this.state = 112;
	            localctx.wait_chain_v = this.chain(3);
	            break;

	        case 2:
	            this.state = 113;
	            localctx.identifier_v = this.identifier();
	            break;

	        case 3:
	            this.state = 114;
	            localctx.call_v = this.call();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ChainContext(this, _parentctx, _parentState);
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_chain);
	                this.state = 117;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 123;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 118;
	                    this.nls();
	                    this.state = 119;
	                    this.match(DiiaParser.DOT);
	                    this.state = 120;
	                    this.nls();
	                    break;

	                case 2:
	                    this.state = 122;
	                    this.match(DiiaParser.DOT);
	                    break;

	                }
	                this.state = 125;
	                localctx.right = this.chain(5); 
	            }
	            this.state = 130;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
	    this.enterRule(localctx, 16, DiiaParser.RULE_literal);
	    try {
	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            localctx.number = this.match(DiiaParser.NUMBER);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            localctx.string = this.match(DiiaParser.STRING);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 133;
	            localctx.yes = this.match(DiiaParser.YES);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 134;
	            localctx.no = this.match(DiiaParser.NO);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 135;
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
	    this.enterRule(localctx, 18, DiiaParser.RULE_atom);
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 138;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 139;
	            this.chain(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 141;
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
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, DiiaParser.RULE_arithmetic, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	        case 32:
	        case 35:
	            this.state = 145;
	            localctx.literal_v = this.literal();
	            break;
	        case 15:
	        case 31:
	            this.state = 146;
	            localctx.chain_v = this.chain(0);
	            break;
	        case 18:
	            this.state = 147;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 148;
	            localctx.nested = this.arithmetic(0);
	            this.state = 149;
	            this.match(DiiaParser.CLOSE_PAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 159;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ArithmeticContext(this, _parentctx, _parentState);
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_arithmetic);
	                this.state = 153;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 154;
	                localctx.op = this.arithmetic_ops();
	                this.state = 155;
	                localctx.right = this.arithmetic(5); 
	            }
	            this.state = 161;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	    this.enterRule(localctx, 22, DiiaParser.RULE_arithmetic_ops);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 251658240) !== 0))) {
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
	    this.enterRule(localctx, 24, DiiaParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.identifier();
	        this.state = 165;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 166;
	        this.nls();
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 167;
	            localctx.call_parameters_v = this.call_parameters();

	        } else if(la_===2) {
	            this.state = 168;
	            localctx.call_parameters_with_name_v = this.call_parameters_with_name();

	        }
	        this.state = 171;
	        this.nls();
	        this.state = 172;
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
	    this.enterRule(localctx, 26, DiiaParser.RULE_call_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.call_parameter();
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 175;
	            this.match(DiiaParser.COMMA);
	            this.state = 176;
	            this.call_parameter();
	            this.state = 181;
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
	    this.enterRule(localctx, 28, DiiaParser.RULE_call_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.nls();
	        this.state = 183;
	        localctx.value_v = this.atom();
	        this.state = 184;
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
	    this.enterRule(localctx, 30, DiiaParser.RULE_call_parameters_with_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.call_parameter_with_name();
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 187;
	            this.match(DiiaParser.COMMA);
	            this.state = 188;
	            this.call_parameter_with_name();
	            this.state = 193;
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
	    this.enterRule(localctx, 32, DiiaParser.RULE_call_parameter_with_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.nls();
	        this.state = 195;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 196;
	        this.match(DiiaParser.COLON);
	        this.state = 197;
	        localctx.value_v = this.atom();
	        this.state = 198;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        localctx.identifier_v = this.identifiers_chain(0);
	        this.state = 201;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 202;
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
	    this.enterRule(localctx, 36, DiiaParser.RULE_assign_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
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
	    this.enterRule(localctx, 38, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.body_line();
	        this.state = 212;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 207;
	                this.nl();
	                this.state = 208;
	                this.body_line(); 
	            }
	            this.state = 214;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
	    this.enterRule(localctx, 40, DiiaParser.RULE_body_line);
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.assign();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
	            this.if_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 217;
	            this.arithmetic(0);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 218;
	            this.chain(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 219;
	            this.each();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 220;
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
	    this.enterRule(localctx, 42, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(DiiaParser.DEF);
	        this.state = 225;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 224;
	            this.diia_for_structure();

	        }
	        this.state = 227;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 228;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 229;
	            this.nls();
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===31) {
	                this.state = 230;
	                localctx.parameters_v = this.diia_parameters(0);
	            }

	            this.state = 233;
	            this.nls();
	            this.state = 234;
	            this.match(DiiaParser.CLOSE_PAREN);
	        }

	        this.state = 238;
	        this.nl();
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 2147933192) !== 0) || _la===32 || _la===35) {
	            this.state = 239;
	            localctx.body_v = this.body();
	            this.state = 240;
	            this.nl();
	        }

	        this.state = 244;
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
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, DiiaParser.RULE_diia_parameters, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        localctx.parameter_v = this.diia_parameter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 257;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Diia_parametersContext(this, _parentctx, _parentState);
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, DiiaParser.RULE_diia_parameters);
	                this.state = 249;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 250;
	                this.nls();
	                this.state = 251;
	                this.match(DiiaParser.COMMA);
	                this.state = 252;
	                this.nls();
	                this.state = 253;
	                localctx.right = this.diia_parameters(3); 
	            }
	            this.state = 259;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
	    this.enterRule(localctx, 46, DiiaParser.RULE_diia_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
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
	    this.enterRule(localctx, 48, DiiaParser.RULE_diia_for_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        localctx.structure_name_v = this.match(DiiaParser.NAME);
	        this.state = 263;
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
	    this.enterRule(localctx, 50, DiiaParser.RULE_test);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        localctx.left = this.test_part();
	        this.state = 266;
	        localctx.op = this.test_ops();
	        this.state = 267;
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
	    this.enterRule(localctx, 52, DiiaParser.RULE_test_part);
	    try {
	        this.state = 275;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	        case 12:
	        case 32:
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 269;
	            this.literal();
	            break;
	        case 15:
	        case 31:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 270;
	            this.chain(0);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 271;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 272;
	            this.arithmetic(0);
	            this.state = 273;
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
	    this.enterRule(localctx, 54, DiiaParser.RULE_test_ops);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
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
	    this.enterRule(localctx, 56, DiiaParser.RULE_if);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(DiiaParser.IF);
	        this.state = 280;
	        localctx.expression_v = this.atom();
	        this.state = 281;
	        this.nl();
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 2147933192) !== 0) || _la===32 || _la===35) {
	            this.state = 282;
	            localctx.body_v = this.body();
	            this.state = 283;
	            this.nl();
	        }

	        this.state = 287;
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
	    this.enterRule(localctx, 58, DiiaParser.RULE_each);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.match(DiiaParser.EACH);
	        this.state = 290;
	        localctx.name_v = this.match(DiiaParser.NAME);
	        this.state = 291;
	        this.match(DiiaParser.TAKING);
	        this.state = 292;
	        localctx.iterator_v = this.atom();
	        this.state = 293;
	        this.nl();
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 2147933192) !== 0) || _la===32 || _la===35) {
	            this.state = 294;
	            localctx.body_v = this.body();
	            this.state = 295;
	            this.nl();
	        }

	        this.state = 299;
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
DiiaParser.SKIP_SPACES = 16;
DiiaParser.NL = 17;
DiiaParser.OPEN_PAREN = 18;
DiiaParser.CLOSE_PAREN = 19;
DiiaParser.OPEN_ARRAY = 20;
DiiaParser.CLOSE_ARRAY = 21;
DiiaParser.COMMA = 22;
DiiaParser.ASSIGN = 23;
DiiaParser.PLUS = 24;
DiiaParser.MINUS = 25;
DiiaParser.MUL = 26;
DiiaParser.DIV = 27;
DiiaParser.COLON = 28;
DiiaParser.DOT = 29;
DiiaParser.NOT = 30;
DiiaParser.NAME = 31;
DiiaParser.NUMBER = 32;
DiiaParser.INTEGER = 33;
DiiaParser.FLOAT = 34;
DiiaParser.STRING = 35;

DiiaParser.RULE_nl = 0;
DiiaParser.RULE_nls = 1;
DiiaParser.RULE_program = 2;
DiiaParser.RULE_program_line = 3;
DiiaParser.RULE_only_for_testing = 4;
DiiaParser.RULE_identifier = 5;
DiiaParser.RULE_identifiers_chain = 6;
DiiaParser.RULE_chain = 7;
DiiaParser.RULE_literal = 8;
DiiaParser.RULE_atom = 9;
DiiaParser.RULE_arithmetic = 10;
DiiaParser.RULE_arithmetic_ops = 11;
DiiaParser.RULE_call = 12;
DiiaParser.RULE_call_parameters = 13;
DiiaParser.RULE_call_parameter = 14;
DiiaParser.RULE_call_parameters_with_name = 15;
DiiaParser.RULE_call_parameter_with_name = 16;
DiiaParser.RULE_assign = 17;
DiiaParser.RULE_assign_value = 18;
DiiaParser.RULE_body = 19;
DiiaParser.RULE_body_line = 20;
DiiaParser.RULE_diia = 21;
DiiaParser.RULE_diia_parameters = 22;
DiiaParser.RULE_diia_parameter = 23;
DiiaParser.RULE_diia_for_structure = 24;
DiiaParser.RULE_test = 25;
DiiaParser.RULE_test_part = 26;
DiiaParser.RULE_test_ops = 27;
DiiaParser.RULE_if = 28;
DiiaParser.RULE_each = 29;

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
        this.left = null; // Identifiers_chainContext
        this.identifier_v = null; // IdentifierContext
        this.right = null; // Identifiers_chainContext
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
        this.call_parameters_v = null; // Call_parametersContext
        this.call_parameters_with_name_v = null; // Call_parameters_with_nameContext
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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




DiiaParser.NlContext = NlContext; 
DiiaParser.NlsContext = NlsContext; 
DiiaParser.ProgramContext = ProgramContext; 
DiiaParser.Program_lineContext = Program_lineContext; 
DiiaParser.Only_for_testingContext = Only_for_testingContext; 
DiiaParser.IdentifierContext = IdentifierContext; 
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
