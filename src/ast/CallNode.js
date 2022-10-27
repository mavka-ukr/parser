import ASTNode from "./ASTNode.js";

class CallNode extends ASTNode {
    constructor(context, { identifier, parameters }) {
        super(context);

        this.identifier = identifier;
        this.parameters = parameters || [];
    }
}

export default CallNode;
