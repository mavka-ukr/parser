import ASTNode from "./ASTNode.js";

class WaitChainNode extends ASTNode {
    /**
     * @param context
     * @param {ChainNode} chain
     */
    constructor(context, { chain }) {
        super(context);

        this.chain = chain;
    }
}

export default WaitChainNode;
