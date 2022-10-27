import antlr4 from "antlr4";
import DiiaVisitor from "./antlr4/DiiaVisitor.js";
import DiiaLexer from "./antlr4/build/DiiaLexer.js";
import { title } from "./utils/text.js";
import CustomDiiaParser from "./antlr4/CustomDiiaParser.js";

class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        throw new Error(msg);
    }
}

export function parse(code, options = {}) {
    options.start = options.start || 'program';

    code = code.toString().trim();

    const chars = new antlr4.InputStream(code);
    const lexer = new DiiaLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CustomDiiaParser(tokens, lexer);
    // parser.removeErrorListeners();
    // parser.addErrorListener(new ErrorListener());

    const tree = parser[options.start]();

    const visitor = new DiiaVisitor();

    let ast = visitor[`visit${title(options.start)}`](tree);

    return ast.flat(Infinity).filter((v) => !!v);
}
