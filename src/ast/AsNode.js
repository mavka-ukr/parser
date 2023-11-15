import ASTNode from "./ASTNode.js";

/**
 * а як число
 */
class AsNode extends ASTNode {
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

export default AsNode;
