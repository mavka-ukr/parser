import ASTNode from "./ASTNode.js";

class IdentifiersChainNode extends ASTNode {
    constructor(context, { chain }) {
        super(context);

        this.chain = chain;
    }
}

export default IdentifiersChainNode;
