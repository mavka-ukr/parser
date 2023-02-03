import ASTNode from "./ASTNode.js";

class WaitNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} node
     */
    constructor(context, { node }) {
        super(context);

        this.node = node;
    }
}

export default WaitNode;
