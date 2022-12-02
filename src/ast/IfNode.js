import ASTNode from "./ASTNode.js";

class IfNode extends ASTNode {
    constructor(context, { expression, body, elseBody }) {
        super(context);

        this.expression = expression;
        this.body = body;
        this.elseBody = elseBody;
    }
}

export default IfNode;
