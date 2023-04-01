class ASTNode {
    constructor(ctx) {
        Object.assign(this, {
            start: {
                line: ctx.start.line,
                column: ctx.start.column,
            },
            stop: {
                line: ctx.stop.line,
                column: ctx.stop.column,
            },
        });
    }
}

export default ASTNode;
