import ASTNode from "./ASTNode.js";

/**
 * js "console.log('hello from js!')"
 */
class EvalNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value, body }) {
        super(context);

        this.value = value;
    }
}

export default EvalNode;
