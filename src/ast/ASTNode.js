class ASTNode {
    /**
     * @param {ParserRuleContext} ctx
     */
    constructor(ctx) {
        this.context = {
            start: {
                line: ctx.start.line,
                column: ctx.start.column,
            },
            stop: {
                line: ctx.stop.line,
                column: ctx.stop.column,
            },
            fileinfo: ctx.parser._input.tokenSource._input._mavka_fileinfo,
        };
    }
}

export default ASTNode;
