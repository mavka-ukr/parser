import ASTNode from "./ASTNode.js";

/**
 * а є число і б == "ок" або в не 10
 */
class TestNode extends ASTNode {
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

export default TestNode;
