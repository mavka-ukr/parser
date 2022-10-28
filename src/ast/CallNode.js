import ASTNode from "./ASTNode.js";

class CallNode extends ASTNode {
    constructor(context, { name, parameters }) {
        super(context);

        this.name = name;
        this.parameters = parameters || [];
    }
}

export default CallNode;
