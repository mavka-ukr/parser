// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,34,152,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,0,5,0,41,
8,0,10,0,12,0,44,9,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,52,8,1,1,2,1,2,1,3,1,3,
1,4,1,4,1,4,1,4,5,4,62,8,4,10,4,12,4,65,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,
3,5,74,8,5,1,6,1,6,1,7,1,7,1,7,3,7,81,8,7,1,7,1,7,1,8,1,8,1,8,5,8,88,8,8,
10,8,12,8,91,9,8,1,9,1,9,3,9,95,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,
1,12,1,12,1,12,5,12,108,8,12,10,12,12,12,111,9,12,1,13,1,13,3,13,115,8,13,
1,14,1,14,3,14,119,8,14,1,14,1,14,1,14,3,14,124,8,14,1,14,3,14,127,8,14,
1,14,1,14,1,14,1,14,3,14,133,8,14,1,14,1,14,1,15,1,15,1,15,5,15,140,8,15,
10,15,12,15,143,9,15,1,16,1,16,1,17,1,17,1,17,3,17,150,8,17,1,17,0,0,18,
0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,2,3,0,10,12,31,31,34,
34,1,0,23,26,152,0,36,1,0,0,0,2,51,1,0,0,0,4,53,1,0,0,0,6,55,1,0,0,0,8,57,
1,0,0,0,10,73,1,0,0,0,12,75,1,0,0,0,14,77,1,0,0,0,16,84,1,0,0,0,18,94,1,
0,0,0,20,98,1,0,0,0,22,102,1,0,0,0,24,104,1,0,0,0,26,114,1,0,0,0,28,116,
1,0,0,0,30,136,1,0,0,0,32,144,1,0,0,0,34,146,1,0,0,0,36,42,3,2,1,0,37,38,
5,16,0,0,38,39,5,16,0,0,39,41,3,2,1,0,40,37,1,0,0,0,41,44,1,0,0,0,42,40,
1,0,0,0,42,43,1,0,0,0,43,45,1,0,0,0,44,42,1,0,0,0,45,46,5,0,0,1,46,1,1,0,
0,0,47,52,3,14,7,0,48,52,3,8,4,0,49,52,3,20,10,0,50,52,3,28,14,0,51,47,1,
0,0,0,51,48,1,0,0,0,51,49,1,0,0,0,51,50,1,0,0,0,52,3,1,0,0,0,53,54,5,30,
0,0,54,5,1,0,0,0,55,56,7,0,0,0,56,7,1,0,0,0,57,63,3,10,5,0,58,59,3,12,6,
0,59,60,3,10,5,0,60,62,1,0,0,0,61,58,1,0,0,0,62,65,1,0,0,0,63,61,1,0,0,0,
63,64,1,0,0,0,64,9,1,0,0,0,65,63,1,0,0,0,66,74,3,6,3,0,67,74,3,4,2,0,68,
74,3,14,7,0,69,70,5,17,0,0,70,71,3,8,4,0,71,72,5,18,0,0,72,74,1,0,0,0,73,
66,1,0,0,0,73,67,1,0,0,0,73,68,1,0,0,0,73,69,1,0,0,0,74,11,1,0,0,0,75,76,
7,1,0,0,76,13,1,0,0,0,77,78,3,4,2,0,78,80,5,17,0,0,79,81,3,16,8,0,80,79,
1,0,0,0,80,81,1,0,0,0,81,82,1,0,0,0,82,83,5,18,0,0,83,15,1,0,0,0,84,89,3,
18,9,0,85,86,5,21,0,0,86,88,3,18,9,0,87,85,1,0,0,0,88,91,1,0,0,0,89,87,1,
0,0,0,89,90,1,0,0,0,90,17,1,0,0,0,91,89,1,0,0,0,92,93,5,30,0,0,93,95,5,27,
0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,3,8,4,0,97,19,1,0,0,
0,98,99,3,4,2,0,99,100,5,22,0,0,100,101,3,22,11,0,101,21,1,0,0,0,102,103,
3,8,4,0,103,23,1,0,0,0,104,109,3,26,13,0,105,106,5,16,0,0,106,108,3,26,13,
0,107,105,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,25,
1,0,0,0,111,109,1,0,0,0,112,115,3,14,7,0,113,115,3,20,10,0,114,112,1,0,0,
0,114,113,1,0,0,0,115,27,1,0,0,0,116,118,5,1,0,0,117,119,3,34,17,0,118,117,
1,0,0,0,118,119,1,0,0,0,119,120,1,0,0,0,120,126,5,30,0,0,121,123,5,17,0,
0,122,124,3,30,15,0,123,122,1,0,0,0,123,124,1,0,0,0,124,125,1,0,0,0,125,
127,5,18,0,0,126,121,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,132,5,16,
0,0,129,130,3,24,12,0,130,131,5,16,0,0,131,133,1,0,0,0,132,129,1,0,0,0,132,
133,1,0,0,0,133,134,1,0,0,0,134,135,5,2,0,0,135,29,1,0,0,0,136,141,3,32,
16,0,137,138,5,21,0,0,138,140,3,32,16,0,139,137,1,0,0,0,140,143,1,0,0,0,
141,139,1,0,0,0,141,142,1,0,0,0,142,31,1,0,0,0,143,141,1,0,0,0,144,145,5,
30,0,0,145,33,1,0,0,0,146,147,5,13,0,0,147,149,5,30,0,0,148,150,5,30,0,0,
149,148,1,0,0,0,149,150,1,0,0,0,150,35,1,0,0,0,15,42,51,63,73,80,89,94,109,
114,118,123,126,132,141,149];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class DiiaParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'\\u0434\\u0456\\u044F'", "'\\u043A\\u0456\\u043D\\u0435\\u0446\\u044C'", 
                            "'\\u043A\\u043E\\u0436\\u043D\\u043E\\u043C\\u0443'", 
                            "'\\u0431\\u0435\\u0440\\u0443\\u0447\\u0438'", 
                            "'\\u0441\\u0442\\u0440\\u0443\\u043A\\u0442\\u0443\\u0440\\u0430'", 
                            "'=='", "'!='", "'>='", "'<='", "'\\u0442\\u0430\\u043A'", 
                            "'\\u043D\\u0456'", "'\\u043F\\u0443\\u0441\\u0442\\u043E'", 
                            "'\\u0434\\u043B\\u044F'", "'\\u044F\\u043A\\u0449\\u043E'", 
                            null, null, "'('", "')'", "'['", "']'", "','", 
                            "'='", "'+'", "'-'", "'*'", "'/'", "':'", "'.'", 
                            "'!'" ];
    static symbolicNames = [ null, "DEF", "END", "EACH", "TAKING", "STRUCTURE", 
                             "EQ", "NOT_EQ", "GREATER", "SMALLER", "TRUE", 
                             "FALSE", "NONE", "FOR", "IF", "SKIP_SPACES", 
                             "NL", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_ARRAY", 
                             "CLOSE_ARRAY", "COMMA", "ASSIGN", "PLUS", "MINUS", 
                             "MUL", "DIV", "COLON", "DOT", "NOT", "NAME", 
                             "NUMBER", "INTEGER", "FLOAT", "STRING" ];
    static ruleNames = [ "program", "program_line", "identifier", "literal", 
                         "arithmetic", "arithmetic_part", "arithmetic_ops", 
                         "call", "call_parameters", "call_parameter", "assign", 
                         "assign_value", "body", "body_line", "diia", "diia_parameters", 
                         "diia_parameter", "diia_for_structure" ];

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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DiiaParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.program_line();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 37;
	            this.match(DiiaParser.NL);
	            this.state = 38;
	            this.match(DiiaParser.NL);
	            this.state = 39;
	            this.program_line();
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 45;
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
	        this.state = 51;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.call();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.arithmetic();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 49;
	            this.assign();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 50;
	            this.diia();
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
	    this.enterRule(localctx, 4, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DiiaParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & 18874375) !== 0))) {
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



	arithmetic() {
	    let localctx = new ArithmeticContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DiiaParser.RULE_arithmetic);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        localctx.left = this.arithmetic_part();
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 125829120) !== 0)) {
	            this.state = 58;
	            localctx.op = this.arithmetic_ops();
	            this.state = 59;
	            localctx.right = this.arithmetic_part();
	            this.state = 65;
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



	arithmetic_part() {
	    let localctx = new Arithmetic_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DiiaParser.RULE_arithmetic_part);
	    try {
	        this.state = 73;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 68;
	            this.call();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 69;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 70;
	            this.arithmetic();
	            this.state = 71;
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



	arithmetic_ops() {
	    let localctx = new Arithmetic_opsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DiiaParser.RULE_arithmetic_ops);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 125829120) !== 0))) {
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
	    this.enterRule(localctx, 14, DiiaParser.RULE_call);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        this.identifier();
	        this.state = 78;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & 19923079) !== 0)) {
	            this.state = 79;
	            this.call_parameters();
	        }

	        this.state = 82;
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
	    this.enterRule(localctx, 16, DiiaParser.RULE_call_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84;
	        this.call_parameter();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 85;
	            this.match(DiiaParser.COMMA);
	            this.state = 86;
	            this.call_parameter();
	            this.state = 91;
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
	    this.enterRule(localctx, 18, DiiaParser.RULE_call_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 92;
	            this.match(DiiaParser.NAME);
	            this.state = 93;
	            this.match(DiiaParser.COLON);

	        }
	        this.state = 96;
	        this.arithmetic();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 20, DiiaParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98;
	        this.identifier();
	        this.state = 99;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 100;
	        this.assign_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 22, DiiaParser.RULE_assign_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.arithmetic();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 24, DiiaParser.RULE_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.body_line();
	        this.state = 109;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 105;
	                this.match(DiiaParser.NL);
	                this.state = 106;
	                this.body_line(); 
	            }
	            this.state = 111;
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



	body_line() {
	    let localctx = new Body_lineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, DiiaParser.RULE_body_line);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.call();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
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



	diia() {
	    let localctx = new DiiaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, DiiaParser.RULE_diia);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 116;
	        this.match(DiiaParser.DEF);
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 117;
	            this.diia_for_structure();
	        }

	        this.state = 120;
	        this.match(DiiaParser.NAME);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 121;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 123;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===30) {
	                this.state = 122;
	                this.diia_parameters();
	            }

	            this.state = 125;
	            this.match(DiiaParser.CLOSE_PAREN);
	        }

	        this.state = 128;
	        this.match(DiiaParser.NL);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===30) {
	            this.state = 129;
	            this.body();
	            this.state = 130;
	            this.match(DiiaParser.NL);
	        }

	        this.state = 134;
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
	    this.enterRule(localctx, 30, DiiaParser.RULE_diia_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.diia_parameter();
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 137;
	            this.match(DiiaParser.COMMA);
	            this.state = 138;
	            this.diia_parameter();
	            this.state = 143;
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



	diia_parameter() {
	    let localctx = new Diia_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, DiiaParser.RULE_diia_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
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
	    this.enterRule(localctx, 34, DiiaParser.RULE_diia_for_structure);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(DiiaParser.FOR);
	        this.state = 147;
	        this.match(DiiaParser.NAME);
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 148;
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
DiiaParser.TRUE = 10;
DiiaParser.FALSE = 11;
DiiaParser.NONE = 12;
DiiaParser.FOR = 13;
DiiaParser.IF = 14;
DiiaParser.SKIP_SPACES = 15;
DiiaParser.NL = 16;
DiiaParser.OPEN_PAREN = 17;
DiiaParser.CLOSE_PAREN = 18;
DiiaParser.OPEN_ARRAY = 19;
DiiaParser.CLOSE_ARRAY = 20;
DiiaParser.COMMA = 21;
DiiaParser.ASSIGN = 22;
DiiaParser.PLUS = 23;
DiiaParser.MINUS = 24;
DiiaParser.MUL = 25;
DiiaParser.DIV = 26;
DiiaParser.COLON = 27;
DiiaParser.DOT = 28;
DiiaParser.NOT = 29;
DiiaParser.NAME = 30;
DiiaParser.NUMBER = 31;
DiiaParser.INTEGER = 32;
DiiaParser.FLOAT = 33;
DiiaParser.STRING = 34;

DiiaParser.RULE_program = 0;
DiiaParser.RULE_program_line = 1;
DiiaParser.RULE_identifier = 2;
DiiaParser.RULE_literal = 3;
DiiaParser.RULE_arithmetic = 4;
DiiaParser.RULE_arithmetic_part = 5;
DiiaParser.RULE_arithmetic_ops = 6;
DiiaParser.RULE_call = 7;
DiiaParser.RULE_call_parameters = 8;
DiiaParser.RULE_call_parameter = 9;
DiiaParser.RULE_assign = 10;
DiiaParser.RULE_assign_value = 11;
DiiaParser.RULE_body = 12;
DiiaParser.RULE_body_line = 13;
DiiaParser.RULE_diia = 14;
DiiaParser.RULE_diia_parameters = 15;
DiiaParser.RULE_diia_parameter = 16;
DiiaParser.RULE_diia_for_structure = 17;

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

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.NL);
	    } else {
	        return this.getToken(DiiaParser.NL, i);
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
    }

	NUMBER() {
	    return this.getToken(DiiaParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(DiiaParser.STRING, 0);
	};

	TRUE() {
	    return this.getToken(DiiaParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(DiiaParser.FALSE, 0);
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
        this.left = null; // Arithmetic_partContext
        this.op = null; // Arithmetic_opsContext
        this.right = null; // Arithmetic_partContext
    }

	arithmetic_part = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_partContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_partContext,i);
	    }
	};

	arithmetic_ops = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_opsContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_opsContext,i);
	    }
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



class Arithmetic_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DiiaParser.RULE_arithmetic_part;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
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
	        listener.enterArithmetic_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof DiiaParserListener ) {
	        listener.exitArithmetic_part(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof DiiaParserVisitor ) {
	        return visitor.visitArithmetic_part(this);
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
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(DiiaParser.CLOSE_PAREN, 0);
	};

	call_parameters() {
	    return this.getTypedRuleContext(Call_parametersContext,0);
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
    }

	arithmetic() {
	    return this.getTypedRuleContext(ArithmeticContext,0);
	};

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
	};

	COLON() {
	    return this.getToken(DiiaParser.COLON, 0);
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
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	ASSIGN() {
	    return this.getToken(DiiaParser.ASSIGN, 0);
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

	arithmetic() {
	    return this.getTypedRuleContext(ArithmeticContext,0);
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

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.NL);
	    } else {
	        return this.getToken(DiiaParser.NL, i);
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

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
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
    }

	DEF() {
	    return this.getToken(DiiaParser.DEF, 0);
	};

	NAME() {
	    return this.getToken(DiiaParser.NAME, 0);
	};

	NL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(DiiaParser.NL);
	    } else {
	        return this.getToken(DiiaParser.NL, i);
	    }
	};


	END() {
	    return this.getToken(DiiaParser.END, 0);
	};

	diia_for_structure() {
	    return this.getTypedRuleContext(Diia_for_structureContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(DiiaParser.OPEN_PAREN, 0);
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
    }

	FOR() {
	    return this.getToken(DiiaParser.FOR, 0);
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




DiiaParser.ProgramContext = ProgramContext; 
DiiaParser.Program_lineContext = Program_lineContext; 
DiiaParser.IdentifierContext = IdentifierContext; 
DiiaParser.LiteralContext = LiteralContext; 
DiiaParser.ArithmeticContext = ArithmeticContext; 
DiiaParser.Arithmetic_partContext = Arithmetic_partContext; 
DiiaParser.Arithmetic_opsContext = Arithmetic_opsContext; 
DiiaParser.CallContext = CallContext; 
DiiaParser.Call_parametersContext = Call_parametersContext; 
DiiaParser.Call_parameterContext = Call_parameterContext; 
DiiaParser.AssignContext = AssignContext; 
DiiaParser.Assign_valueContext = Assign_valueContext; 
DiiaParser.BodyContext = BodyContext; 
DiiaParser.Body_lineContext = Body_lineContext; 
DiiaParser.DiiaContext = DiiaContext; 
DiiaParser.Diia_parametersContext = Diia_parametersContext; 
DiiaParser.Diia_parameterContext = Diia_parameterContext; 
DiiaParser.Diia_for_structureContext = Diia_for_structureContext; 
