import ASTNode from "./ASTNode.js";

/**
 * a[1]
 */
class AccessNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} left
     * @param {ASTNode} inner
     */
    constructor(context, { left, inner }) {
        super(context);

        this.left = left;
        this.inner = inner;
    }
}

export default AccessNode;
