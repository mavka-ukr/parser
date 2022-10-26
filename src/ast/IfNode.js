import ASTNode from "./ASTNode.js";

class IfNode extends ASTNode {
    constructor(context, { value, body }) {
        super(context);

        this.value = value;
        this.body = body;
    }
}

export default IfNode;
