import ASTNode from "./ASTNode.js";

/**
 * запустити()
 */
class MockupMethodNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} name
     * @param {ParamNode[]} params
     * @param {ASTNode[]} type
     */
    constructor(context, { name, params, type }) {
        super(context);

        this.name = name;
        this.params = params || [];
        this.type = type || [];
    }
}

export default MockupMethodNode;
