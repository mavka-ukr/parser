import ASTNode from "./ASTNode.js";

class NumberNode extends ASTNode {
    /**
     * @param context
     * @param {number} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = Number(value);
    }
}

export default NumberNode;
