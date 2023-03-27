import ASTNode from "./ASTNode.js";

/**
 * взяти а.Б.в.Г.Ґ як д
 */
class TakeModuleNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifiersChainNode|IdentifierNode} id
     * @param {IdentifierNode|null} as
     * @param {boolean} absolute
     * @param {boolean} star
     */
    constructor(context, { id, as, absolute, star }) {
        super(context);

        this.id = id;
        this.as = as;
        this.absolute = absolute;
        this.star = star;
    }
}

export default TakeModuleNode;
