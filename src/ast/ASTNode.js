class ASTNode {
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
        };
    }
}

export default ASTNode;
