import ASTNode from "./ASTNode.js";

/**
 * (а, б, в) = (а=1, б=2, в=3)
 */
class ObjectDestructionNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode[]} elements
     */
    constructor(context, { elements }) {
        super(context);

        this.elements = elements || [];
    }
}

export default ObjectDestructionNode;
