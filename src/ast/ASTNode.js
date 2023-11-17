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
                    line: ctx.start?.line ?? 0,
                    column: ctx.start?.column ?? 0,
                },
                stop: {
                    line: ctx.stop?.line ?? 0,
                    column: ctx.stop?.column ?? 0,
                },
                fileinfo: ctx.parser._input.tokenSource._input._mavka_fileinfo,
            };
        }
    }
}

export default ASTNode;
