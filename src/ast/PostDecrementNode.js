import ASTNode from "./ASTNode.js";

/**
 * а--
 */
class PostDecrementNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default PostDecrementNode;
