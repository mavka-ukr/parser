import ASTNode from "./ASTNode.js";

class StringNode extends ASTNode {
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default StringNode;
