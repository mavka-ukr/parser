import ASTNode from "./ASTNode.js";

/**
 * дати сума як сум
 * дати а, б, в
 * дати Бот як СуперБот, а, б як Б, в
 *
 * @see GiveElementNode
 */
class GiveNode extends ASTNode {
    /**
     * @param context
     * @param {GiveElementNode[]} elements
     */
    constructor(context, { elements }) {
        super(context);

        this.elements = elements;
    }
}

export default GiveNode;
