import ASTNode from "./ASTNode.js";

class NumberNode extends ASTNode {
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default NumberNode;
