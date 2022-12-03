import ASTNode from "./ASTNode.js";

class ChainNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode[]} nodes
     */
    constructor(context, { nodes }) {
        super(context);

        this.nodes = nodes;
    }
}

export default ChainNode;
