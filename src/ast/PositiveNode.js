import ASTNode from "./ASTNode.js";

/**
 * +2
 * +число(-1)
 */
class PositiveNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default PositiveNode;
