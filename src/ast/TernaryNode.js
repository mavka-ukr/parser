import ASTNode from "./ASTNode.js";

/**
 * ні не так ? "правильно" : "кринж"
 */
class TernaryNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     * @param {ASTNode} positiveValue
     * @param {ASTNode} negativeValue
     */
    constructor(context, { value, positiveValue, negativeValue }) {
        super(context);

        this.value = value;
        this.positiveValue = positiveValue;
        this.negativeValue = negativeValue;
    }
}

export default TernaryNode;
