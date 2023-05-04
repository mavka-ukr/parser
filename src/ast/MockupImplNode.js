import ASTNode from "./ASTNode.js";

/**
 * макет Двигун
 *   запустити()
 * кінець
 *
 * втілити Двигун як ІоннийДвигун
 *   дія запустити()
 *     ;; логіка запуску...
 *   кінець
 * кінець
 */
class MockupImplNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode|IdentifiersChainNode} mockupName
     * @param {IdentifierNode|IdentifiersChainNode} structureName
     * @param {ASTNode[]} body
     */

    constructor(context, { mockupName, structureName, body }) {
        super(context);

        this.mockupName = mockupName;
        this.structureName = structureName;
        this.body = body;
    }
}

export default MockupImplNode;
