import ASTNode from "./ASTNode.js";

class IdentifierNode extends ASTNode {
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default IdentifierNode;
