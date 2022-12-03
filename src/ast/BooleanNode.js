import ASTNode from "./ASTNode.js";

class BooleanNode extends ASTNode {
    /**
     * @param context
     * @param {boolean} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default BooleanNode;
