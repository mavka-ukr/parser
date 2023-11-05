import ASTNode from "./ASTNode.js";

/**
 * взяти а.Б.в.Г.Ґ як д
 */
class TakeModuleNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifiersChainNode|IdentifierNode} id
     * @param {string|null} as
     * @param {boolean} relative
     * @param {boolean} star
     */
    constructor(context, { id, as, relative, star }) {
        super(context);

        this.id = id;
        this.as = as;
        this.relative = relative;
        this.star = star;
    }
}

export default TakeModuleNode;
