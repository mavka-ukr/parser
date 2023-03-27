import ASTNode from "./ASTNode.js";

/**
 * взяти пак а.Б.в.Г.Ґ як д
 */
class TakePakNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifiersChainNode|IdentifierNode} id
     * @param {IdentifierNode|null} as
     * @param {boolean} star
     */
    constructor(context, { id, as, star }) {
        super(context);

        this.id = id;
        this.as = as;
        this.star = star;
    }
}

export default TakePakNode;
