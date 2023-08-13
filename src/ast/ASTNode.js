class ASTNode {
    /**
     * @param {ParserRuleContext} ctx
     */
    constructor(ctx) {
        if (ctx.__ast_node__) {
            this.context = ctx;
        } else {
            this.context = {
                __ast_node__: true,
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
}

export default ASTNode;
