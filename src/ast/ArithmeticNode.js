import ASTNode from "./ASTNode.js";

class ArithmeticNode extends ASTNode {
    constructor(context, { left, right, operation }) {
        super(context);

        this.left = left;
        this.right = right;
        this.operation = operation;
    }
}

export default ArithmeticNode;
