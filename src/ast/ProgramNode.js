import ASTNode from "./ASTNode.js";

/**
 * друк("привіт, світ")
 */
class ProgramNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode[]} body
     */
    constructor(context, { body }) {
        super(context);

        this.body = body;
    }
}

export default ProgramNode;
