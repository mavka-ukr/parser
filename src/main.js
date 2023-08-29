import antlr4 from "antlr4";
import { title } from "./utils/text.js";
import DiiaLexer from "./antlr4/build/DiiaLexer.js";
import DiiaParser from "./antlr4/build/DiiaParser.js";
import DiiaVisitor from "./antlr4/DiiaVisitor.js";
import { DiiaErrorListener } from "./utils/errors.js";
import DefaultErrorStrategy from "antlr4/src/antlr4/error/DefaultErrorStrategy.js";
import Token from "antlr4/src/antlr4/Token.js";
import Interval from "antlr4/src/antlr4/misc/Interval.js";

function decodeUnicode(str) {
    var r = /\\u([\d\w]{4})/gi;
    str = str.replace(r, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
    });
    str = unescape(str);
    str = str.replaceAll("<EOF>", "<кінець файлу>")
    return str;
}

class CustomErrorStrategy extends DefaultErrorStrategy {
    reportNoViableAlternative(recognizer, e) {
        const tokens = recognizer.getTokenStream()
        let input
        if (tokens !== null) {
            if (e.startToken.type === Token.EOF) {
                input = "<кінець файлу>";
            } else {
                input = tokens.getText(new Interval(e.startToken.tokenIndex, e.offendingToken.tokenIndex));
            }
        } else {
            input = "<unknown input>";
        }
        const msg = "немає альтернативи для значення " + this.escapeWSAndQuote(input)
        recognizer.notifyErrorListeners(msg, e.offendingToken, e);
    }

    reportInputMismatch(recognizer, e) {
        const msg = "невірне значення " + decodeUnicode(this.getTokenErrorDisplay(e.offendingToken)) +
            " очікується " + decodeUnicode(e.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames))
        recognizer.notifyErrorListeners(msg, e.offendingToken, e);
    }

    reportFailedPredicate(recognizer, e) {
        const ruleName = recognizer.ruleNames[recognizer._ctx.ruleIndex]
        const msg = "правило " + ruleName + " " + e.message
        recognizer.notifyErrorListeners(msg, e.offendingToken, e);
    }

    reportUnwantedToken(recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        const t = recognizer.getCurrentToken()
        const tokenName = this.getTokenErrorDisplay(t)
        const expecting = this.getExpectedTokens(recognizer)
        const msg = "зайвий значення " + tokenName + " очікується " +
            decodeUnicode(expecting.toString(recognizer.literalNames, recognizer.symbolicNames))
        recognizer.notifyErrorListeners(msg, t, null);
    }

    reportMissingToken(recognizer) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        const t = recognizer.getCurrentToken()
        const expecting = this.getExpectedTokens(recognizer)
        const msg = "очікується " + decodeUnicode(expecting.toString(recognizer.literalNames, recognizer.symbolicNames)) +
            " біля " + this.getTokenErrorDisplay(t)
        recognizer.notifyErrorListeners(msg, t, null);
    }
}

export function parse(code, options = {}) {
    options.start = options.start || 'file';

    code = code.toString().trim();

    const fileinfo = {
        name: options.name || 'unknown',
        path: options.path || 'unknown',
        code,
    };

    const chars = new antlr4.InputStream(code);
    chars._mavka_fileinfo = fileinfo;
    const lexer = new DiiaLexer(chars);
    lexer.removeErrorListeners();
    lexer.addErrorListener(new DiiaErrorListener(code));

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new DiiaParser(tokens, lexer);
    parser._errHandler = new CustomErrorStrategy();
    parser.removeErrorListeners();
    parser.addErrorListener(new DiiaErrorListener(code));

    const tree = parser[options.start]();

    const visitor = new DiiaVisitor();

    let ast = visitor[`visit${title(options.start)}`](tree);

    if (!Array.isArray(ast)) {
        return ast;
    }

    return ast;
}
