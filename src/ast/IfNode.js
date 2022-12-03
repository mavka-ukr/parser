import ASTNode from "./ASTNode.js";

class IfNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} expression
     * @param {Array} body
     * @param {ASTNode} elseBody
     */
    constructor(context, { expression, body, elseBody }) {
        super(context);

        this.expression = expression;
        this.body = body;
        this.elseBody = elseBody;
    }
}

export default IfNode;
