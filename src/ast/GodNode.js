import ASTNode from "./ASTNode.js";

/**
 * 2 та "два"
 */
class GodNode extends ASTNode {
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

export default GodNode;
