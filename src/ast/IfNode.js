import ASTNode from "./ASTNode.js";

/**
 * якщо так або ні і а == 2 і б є число
 *   друк("ок")
 * кінець
 */
class IfNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     * @param {ASTNode[]} body
     * @param {ASTNode[]} elseBody
     */
    constructor(context, { value, body, elseBody }) {
        super(context);

        this.value = value;
        this.body = body;
        this.elseBody = elseBody;
    }
}

export default IfNode;
