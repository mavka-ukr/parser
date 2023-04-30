import ASTNode from "./ASTNode.js";

/**
 * друк("а", ...["б", "в"], "г")
 */
class ArgNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     * @param {boolean} spread
     */
    constructor(context, { value, spread }) {
        super(context);

        this.value = value;
        this.spread = spread;
    }
}

export default ArgNode;
