import ASTNode from "./ASTNode.js";

/**
 * --а
 */
class PreDecrementNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default PreDecrementNode;
