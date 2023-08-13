import ASTNode from "./ASTNode.js";

/**
 * а.б().в.г.ґ()()().д
 */
class ChainNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} left
     * @param {ASTNode} right
     * @param {string} tokenText
     */
    constructor(context, { left, right, tokenText }) {
        super(context);

        this.left = left;
        this.right = right;
        this.tokenText = tokenText;
    }
}

export default ChainNode;
