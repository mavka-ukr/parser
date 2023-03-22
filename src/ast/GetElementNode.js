import ASTNode from "./ASTNode.js";

/**
 * a[1]
 */
class GetElementNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} left
     * @param {ASTNode} element
     */
    constructor(context, { left, element }) {
        super(context);

        this.left = left;
        this.element = element;
    }
}

export default GetElementNode;
