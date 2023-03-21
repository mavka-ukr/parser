import antlr4 from "antlr4";

export class DiiaParserError extends Error {
}

export class DiiaParserSyntaxError extends DiiaParserError {
    constructor(recognizer, offendingSymbol, line, column, msg, err) {
        super(msg);

        // this.recognizer = recognizer;
        // this.offendingSymbol = offendingSymbol;
        // this.line = line;
        // this.column = column;
        this.msg = msg;
        // this.err = err;
    }
}

export class DiiaErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        throw new DiiaParserSyntaxError(recognizer, offendingSymbol, line, column, `Синтаксична помилка на ${line}:${column}`, err);
    }
}
