import ASTNode from "./ASTNode.js";

/**
 * поки ні не так
 *   друк("працюємо")
 * кінець
 */
class WhileNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     * @param {ASTNode[]} body
     */
    constructor(context, { value, body }) {
        super(context);

        this.value = value;
        this.body = body;
    }
}

export default WhileNode;
