import ASTNode from "./ASTNode.js";

/**
 * (дати) сума як сум
 * (дати) а, б, в
 * (дати) Бот як СуперБот, а, б як Б, в
 *
 * @see GiveNode
 */
class GiveElementNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode|IdentifiersChainNode|null} id
     * @param {IdentifierNode|null} as
     */
    constructor(context, { id, as }) {
        super(context);

        this.id = id;
        this.as = as;
    }
}

export default GiveElementNode;
