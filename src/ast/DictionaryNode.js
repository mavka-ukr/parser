import ASTNode from "./ASTNode.js";

/**
 * (а=1, б=3)
 */
class DictionaryNode extends ASTNode {
    /**
     * @param context
     * @param {Object} args
     */
    constructor(context, { args }) {
        super(context);

        this.args = args || [];
    }
}

export default DictionaryNode;
