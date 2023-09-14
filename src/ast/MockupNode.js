import ASTNode from "./ASTNode.js";

/**
 * макет ІоннийДвигунМ є ДвигунМ
 *   запустити()
 * кінець
 */
class MockupNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} name
     * @param {IdentifierNode[]|IdentifiersChainNode[]} parents
     * @param {MethodDeclarationNode[]} methods
     */
    constructor(context, { name, parents, methods }) {
        super(context);

        this.name = name;
        this.parents = parents || [];
        this.methods = methods || [];
    }
}

export default MockupNode;
