import ASTNode from "./ASTNode.js";

/**
 * 2 та "два"
 */
class GodNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode[]} elements
     */
    constructor(context, { elements }) {
        super(context);

        this.elements = elements;
    }
}

export default GodNode;
