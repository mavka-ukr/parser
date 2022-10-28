import ASTNode from "./ASTNode.js";

class ReturnNode extends ASTNode {
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default ReturnNode;
