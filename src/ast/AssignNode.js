import ASTNode from "./ASTNode.js";

class AssignNode extends ASTNode {
    constructor(context, { identifier, value }) {
        super(context);

        this.identifier = identifier;
        this.value = value;
    }
}

export default AssignNode;
