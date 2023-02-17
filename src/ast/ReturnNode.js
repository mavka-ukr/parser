import ASTNode from "./ASTNode.js";

/**
 * вернути 1
 */
class ReturnNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default ReturnNode;
