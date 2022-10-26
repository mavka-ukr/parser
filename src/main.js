import antlr4 from "antlr4";
import DiiaVisitor from "./antlr4/DiiaVisitor.js";
import DiiaLexer from "./antlr4/build/DiiaLexer.js";
import DiiaParser from "./antlr4/build/DiiaParser.js";
import { title } from "./utils/text.js";

export function parse(code, options = {}) {
    options.start = options.start || 'program';

    code = code.toString().trim();

    const chars = new antlr4.InputStream(code);
    const lexer = new DiiaLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new DiiaParser(tokens);
    const tree = parser[options.start]();

    const visitor = new DiiaVisitor();

    let ast = visitor[`visit${title(options.start)}`](tree);

    return ast.flat(Infinity).filter((v) => !!v);
}
