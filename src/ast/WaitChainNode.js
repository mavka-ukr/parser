import ASTNode from "./ASTNode.js";

class WaitChainNode extends ASTNode {
    constructor(context, { chain }) {
        super(context);

        this.chain = chain;
    }
}

export default WaitChainNode;
