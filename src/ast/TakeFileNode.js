import ASTNode from "./ASTNode.js";

/**
 * взяти файл "ext.m.js" як ext
 */
class TakeRemoteNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {IdentifierNode|null} as
     */
    constructor(context, { name, as }) {
        super(context);

        this.name = name;
        this.as = as;
    }
}

export default TakeRemoteNode;
