import DiiaParser from "./build/DiiaParser.js";

class CustomDiiaParser extends DiiaParser {
    constructor(input, lexer) {
        super(input);
        this.lexer = lexer;
    }
}

export default CustomDiiaParser;
