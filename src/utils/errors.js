import antlr4 from "antlr4";

export class DiiaParserError extends Error {
}

export class DiiaParserSyntaxError extends DiiaParserError {
    constructor(recognizer, offendingSymbol, line, column, msg, err, code) {
        const errorMessage = [
            msg,
            code.split("\n")[line - 1],
            `${" ".repeat((column || 1) - 1)}^`
        ].join("\n");

        super(errorMessage);

        this.recognizer = recognizer;
        this.offendingSymbol = offendingSymbol;
        this.line = line;
        this.column = column;
        this.msg = errorMessage;
        this.err = err;
    }
}

export class DiiaErrorListener extends antlr4.error.ErrorListener {
    constructor(code) {
        super();
        this.code = code;
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        throw new DiiaParserSyntaxError(recognizer, offendingSymbol, line, column, msg, err, this.code);
    }
}
