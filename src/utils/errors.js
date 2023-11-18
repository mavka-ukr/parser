import antlr4 from "antlr4";

export class DiiaParserError extends Error {
}

export class DiiaParserSyntaxError extends DiiaParserError {
    constructor(recognizer, offendingSymbol, line, column, msg, err, fileinfo) {
        super(msg);

        this.recognizer = recognizer;
        this.offendingSymbol = offendingSymbol;
        this.line = line;
        this.column = column;
        this.msg = msg;
        this.err = err;
        this.highlight = [fileinfo.code.split("\n")[line - 1], `${" ".repeat((column || 1) - 1)}^`].join("\n");
        this.fileinfo = fileinfo;
    }
}

export class DiiaErrorListener extends antlr4.error.ErrorListener {
    constructor(fileinfo) {
        super();
        this.fileinfo = fileinfo;
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg, err) {
        msg = msg.replaceAll("token recognition error at", "не вдалось розпізнати токен").replaceAll("\n", "\\n");
        throw new DiiaParserSyntaxError(recognizer, offendingSymbol, line, column, msg, err, this.fileinfo);
    }
}
