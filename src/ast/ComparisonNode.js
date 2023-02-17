import ASTNode from "./ASTNode.js";

/**
 * а більше 2
 * б є число
 * в == 10
 * г не менше 3
 * ґ не є текст
 * д не 5
 */
class ComparisonNode extends ASTNode {
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

export default ComparisonNode;
