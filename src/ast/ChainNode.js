import ASTNode from "./ASTNode.js";

/**
 * а.б().в.г.ґ()()().д
 */
class ChainNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} left
     * @param {ASTNode} right
     */
    constructor(context, { left, right }) {
        super(context);

        this.left = left;
        this.right = right;
    }
}

export default ChainNode;
