import ASTNode from "./ASTNode.js";

class ChainNode extends ASTNode {
    constructor(context, { nodes }) {
        super(context);

        this.nodes = nodes;
    }
}

export default ChainNode;
