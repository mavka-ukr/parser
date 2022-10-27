import ASTNode from "./ASTNode.js";

class WaitCallNode extends ASTNode {
    constructor(context, { call }) {
        super(context);

        this.call = call;
    }
}

export default WaitCallNode;
