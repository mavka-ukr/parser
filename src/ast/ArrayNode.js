import ASTNode from "./ASTNode.js";

/**
 * [а, "б", 3.14, [1111]]
 */
class ArrayNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode[]} elements
     */
    constructor(context, { elements }) {
        super(context);

        this.elements = elements || [];
    }
}

export default ArrayNode;
