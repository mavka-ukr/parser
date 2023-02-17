import ASTNode from "./ASTNode.js";

/**
 * "їхав козак полем..."
 */
class StringNode extends ASTNode {
    /**
     * @param context
     * @param {string} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = String(value);
    }
}

export default StringNode;
