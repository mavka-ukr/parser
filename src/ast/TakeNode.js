import ASTNode from "./ASTNode.js";

/**
 * взяти а.Б.в.Г.Ґ як д
 */
class TakeNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifiersChainNode|IdentifierNode} id
     * @param {IdentifierNode|null} as
     * @param {boolean} pak
     * @param {boolean} relative
     * @param {boolean} star
     */
    constructor(context, { id, as, pak, relative, star }) {
        super(context);

        this.id = id;
        this.as = as;
        this.pak = pak;
        this.relative = relative;
        this.star = star;
    }
}

export default TakeNode;
