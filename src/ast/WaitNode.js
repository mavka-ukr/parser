import ASTNode from "./ASTNode.js";

/**
 * відповідь = чекати отримати_тачки()
 */
class WaitNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default WaitNode;
