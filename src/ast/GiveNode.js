import ASTNode from "./ASTNode.js";

/**
 * дати сума
 * дати Бот як СуперБот
 */
class GiveNode extends ASTNode {
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

export default GiveNode;
