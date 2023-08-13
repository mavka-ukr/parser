import ASTNode from "./ASTNode.js";

/**
 * ім'я
 */
class IdentifierNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {string} tokenText
     */
    constructor(context, { name, tokenText }) {
        super(context);

        this.name = name;
        this.tokenText = tokenText;
    }
}

export default IdentifierNode;
