import ASTNode from "./ASTNode.js";

class NestedArithmeticNode extends ASTNode {
    /**
     * @param context
     * @param {ArithmeticNode} arithmetic
     */
    constructor(context, { arithmetic }) {
        super(context);

        this.arithmetic = arithmetic;
    }
}

export default NestedArithmeticNode;
