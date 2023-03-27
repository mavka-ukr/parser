import ASTNode from "./ASTNode.js";

/**
 * взяти "інтелект.пак.укр" як інтелект
 */
class TakeRemoteNode extends ASTNode {
    /**
     * @param context
     * @param {string} url
     * @param {IdentifierNode|null} as
     */
    constructor(context, { url, as }) {
        super(context);

        this.url = url;
        this.as = as;
    }
}

export default TakeRemoteNode;
