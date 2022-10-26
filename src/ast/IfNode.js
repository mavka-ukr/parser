import ASTNode from "./ASTNode.js";

class IfNode extends ASTNode {
    constructor(context, { expression, body }) {
        super(context);

        this.expression = expression;
        this.body = body;
    }
}

export default IfNode;
