import antlr4 from "antlr4";
import DiiaVisitor from "./antlr4/DiiaVisitor.js";
import DiiaLexer from "./antlr4/build/DiiaLexer.js";
import { title } from "./utils/text.js";
import DiiaParser from "./antlr4/build/DiiaParser.js";
import StructureNode from "./ast/StructureNode.js";
import DiiaNode from "./ast/DiiaNode.js";

class DiiaParserError extends Error {
}

class DiiaParserSyntaxError extends DiiaParserError {
    constructor(recognizer, offendingSymbol, line, column, msg, err) {
        super(msg);

        this.recognizer = recognizer;
        this.offendingSymbol = offendingSymbol;
        this.line = line;
        this.column = column;
        this.msg = msg;
        this.err = err;
    }
}

class DiiaErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        throw new DiiaParserSyntaxError(recognizer, offendingSymbol, line, column, msg, err);
    }
}

function processStructures(ast) {
    const structures = {};

    ast.forEach((node) => {
        if (node instanceof StructureNode) {
            structures[node.name] = node;
        }
    });

    ast.forEach((node) => {
        if (node instanceof DiiaNode) {
            if (node.structure) {
                if (node.structure in structures) {
                    structures[node.structure].methods.push(node);
                } else {
                    throw new DiiaParserError(`"${node.structure}" не знайдено в контексті`);
                }
            }
        }
    });

    return ast.filter((node) => {
        if (node instanceof DiiaNode) {
            if (node.structure) {
                return false;
            }
        }

        return true;
    });
}

export function parse(code, options = {}) {
    options.start = options.start || 'program';

    code = code.toString().trim();

    const chars = new antlr4.InputStream(code);
    const lexer = new DiiaLexer(chars);

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new DiiaParser(tokens, lexer);
    parser.removeErrorListeners();
    parser.addErrorListener(new DiiaErrorListener());

    const tree = parser[options.start]();

    const visitor = new DiiaVisitor();

    let ast = visitor[`visit${title(options.start)}`](tree);

    if (!Array.isArray(ast)) {
        return ast;
    }

    ast = ast.flat(Infinity).filter((v) => !!v);

    return processStructures(ast);
}
