import ASTNode from "./ASTNode.js";

/**
 * 2 ^ 2
 * а >> б
 * а.б << в() | (7 & М.корінь(2))
 */
class BitwiseNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} left
     * @param {ASTNode} right
     * @param {string} operation
     */
    constructor(context, { left, right, operation }) {
        super(context);

        this.left = left;
        this.right = right;
        this.operation = operation;
    }
}

export default BitwiseNode;
