import ASTNode from "./ASTNode.js";

class BooleanNode extends ASTNode {
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default BooleanNode;
