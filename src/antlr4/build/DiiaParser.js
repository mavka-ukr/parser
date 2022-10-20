// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import DiiaParserListener from './DiiaParserListener.js';
import DiiaParserVisitor from './DiiaParserVisitor.js';

const serializedATN = [4,1,34,92,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,5,0,29,8,0,10,0,12,0,32,9,0,1,0,1,0,1,1,1,1,1,1,3,1,39,8,1,1,2,1,2,1,
3,1,3,1,4,1,4,1,4,1,4,5,4,49,8,4,10,4,12,4,52,9,4,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,3,5,61,8,5,1,6,1,6,1,7,1,7,1,7,3,7,68,8,7,1,7,1,7,1,8,1,8,1,8,5,8,
75,8,8,10,8,12,8,78,9,8,1,9,1,9,3,9,82,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,
11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,2,3,0,10,12,31,31,34,
34,1,0,23,26,89,0,24,1,0,0,0,2,38,1,0,0,0,4,40,1,0,0,0,6,42,1,0,0,0,8,44,
1,0,0,0,10,60,1,0,0,0,12,62,1,0,0,0,14,64,1,0,0,0,16,71,1,0,0,0,18,81,1,
0,0,0,20,85,1,0,0,0,22,89,1,0,0,0,24,30,3,2,1,0,25,26,5,16,0,0,26,27,5,16,
0,0,27,29,3,2,1,0,28,25,1,0,0,0,29,32,1,0,0,0,30,28,1,0,0,0,30,31,1,0,0,
0,31,33,1,0,0,0,32,30,1,0,0,0,33,34,5,0,0,1,34,1,1,0,0,0,35,39,3,14,7,0,
36,39,3,8,4,0,37,39,3,20,10,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,
39,3,1,0,0,0,40,41,5,30,0,0,41,5,1,0,0,0,42,43,7,0,0,0,43,7,1,0,0,0,44,50,
3,10,5,0,45,46,3,12,6,0,46,47,3,10,5,0,47,49,1,0,0,0,48,45,1,0,0,0,49,52,
1,0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,9,1,0,0,0,52,50,1,0,0,0,53,61,3,6,
3,0,54,61,3,4,2,0,55,61,3,14,7,0,56,57,5,17,0,0,57,58,3,8,4,0,58,59,5,18,
0,0,59,61,1,0,0,0,60,53,1,0,0,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,0,
0,61,11,1,0,0,0,62,63,7,1,0,0,63,13,1,0,0,0,64,65,3,4,2,0,65,67,5,17,0,0,
66,68,3,16,8,0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,18,0,0,
70,15,1,0,0,0,71,76,3,18,9,0,72,73,5,21,0,0,73,75,3,18,9,0,74,72,1,0,0,0,
75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,17,1,0,0,0,78,76,1,0,0,0,79,
80,5,30,0,0,80,82,5,27,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,83,1,0,0,0,83,
84,3,8,4,0,84,19,1,0,0,0,85,86,3,4,2,0,86,87,5,22,0,0,87,88,3,22,11,0,88,
21,1,0,0,0,89,90,3,8,4,0,90,23,1,0,0,0,7,30,38,50,60,67,76,81];


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
                         "assign_value" ];

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
	        this.state = 24;
	        this.program_line();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 25;
	            this.match(DiiaParser.NL);
	            this.state = 26;
	            this.match(DiiaParser.NL);
	            this.state = 27;
	            this.program_line();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 33;
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
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 35;
	            this.call();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 36;
	            this.arithmetic();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 37;
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DiiaParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
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
	        this.state = 42;
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
	        this.state = 44;
	        localctx.left = this.arithmetic_part();
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & 125829120) !== 0)) {
	            this.state = 45;
	            localctx.op = this.arithmetic_ops();
	            this.state = 46;
	            localctx.right = this.arithmetic_part();
	            this.state = 52;
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
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 53;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 54;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 55;
	            this.call();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            this.match(DiiaParser.OPEN_PAREN);
	            this.state = 57;
	            this.arithmetic();
	            this.state = 58;
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
	        this.state = 62;
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
	        this.state = 64;
	        this.identifier();
	        this.state = 65;
	        this.match(DiiaParser.OPEN_PAREN);
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & 19923079) !== 0)) {
	            this.state = 66;
	            this.call_parameters();
	        }

	        this.state = 69;
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
	        this.state = 71;
	        this.call_parameter();
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21) {
	            this.state = 72;
	            this.match(DiiaParser.COMMA);
	            this.state = 73;
	            this.call_parameter();
	            this.state = 78;
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 79;
	            this.match(DiiaParser.NAME);
	            this.state = 80;
	            this.match(DiiaParser.COLON);

	        }
	        this.state = 83;
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
	        this.state = 85;
	        this.identifier();
	        this.state = 86;
	        this.match(DiiaParser.ASSIGN);
	        this.state = 87;
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
	        this.state = 89;
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
