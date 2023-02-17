import ASTNode from "./ASTNode.js";

/**
 * взяти а.Б.в.Г.Ґ як д
 */
class TakeNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifiersChainNode|IdentifierNode} id
     * @param {IdentifierNode|null} as
     */
    constructor(context, { id, as }) {
        super(context);

        this.id = id;
        this.as = as;
    }
}

export default TakeNode;
