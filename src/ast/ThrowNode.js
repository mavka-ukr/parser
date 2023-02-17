import ASTNode from "./ASTNode.js";

/**
 * впасти "біда..."
 */
class ThrowNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default ThrowNode;
