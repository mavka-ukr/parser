import ASTNode from "./ASTNode.js";

class ChainNode extends ASTNode {
    constructor(context, { chain }) {
        super(context);

        this.chain = chain;
    }
}

export default ChainNode;
