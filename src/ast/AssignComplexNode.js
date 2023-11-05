import ASTNode from "./ASTNode.js";

/**
 * а.б = 2
 * б[1] = Людина(ім'я="Давид")
 * б.в[2].г.ґ[д] := Людина(ім'я="Давид")
 */
class AssignComplexNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode|IdentifiersChainNode|GetElementNode} left
     * @param {AssignComplexRightNode} right
     * @param {string} symbol
     * @param {ASTNode} value
     */
    constructor(context, { left, right, symbol, value }) {
        super(context);

        this.left = left;
        this.right = right;
        this.symbol = symbol;
        this.value = value;
    }
}

export default AssignComplexNode;
