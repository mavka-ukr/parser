import ASTNode from "./ASTNode.js";

/**
 * ім'я
 */
class IdentifierNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     */
    constructor(context, { name }) {
        super(context);

        this.name = name;
    }
}

export default IdentifierNode;
