import ASTNode from "./ASTNode.js";

/**
 * a[1] = 2
 */
class SetElementNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} left
     * @param {ASTNode} element
     * @param {ASTNode} value
     */
    constructor(context, { left, element, value }) {
        super(context);

        this.left = left;
        this.element = element;
        this.value = value;
    }
}

export default SetElementNode;
