import ASTNode from "./ASTNode.js";

/**
 * !2
 * !число(1)
 * !ні
 * !так
 */
class NotNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default NotNode;
