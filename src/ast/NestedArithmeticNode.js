import ASTNode from "./ASTNode.js";

class NestedArithmeticNode extends ASTNode {
    constructor(context, { arithmetic }) {
        super(context);

        this.arithmetic = arithmetic;
    }
}

export default NestedArithmeticNode;
