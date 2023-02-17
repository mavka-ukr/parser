import ASTNode from "./ASTNode.js";

/**
 * а.Б.в.г.Ґ.Д
 */
class IdentifiersChainNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} left
     * @param {IdentifierNode} right
     */
    constructor(context, { left, right }) {
        super(context);

        this.left = left;
        this.right = right;
    }
}

export default IdentifiersChainNode;
