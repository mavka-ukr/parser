import ASTNode from "./ASTNode.js";

/**
 * макет структура ІоннийДвигун
 *   запустити()
 * кінець
 */
class MockupStructureNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {StructureParamNode[]|MethodDeclarationNode[]} elements
     */
    constructor(context, { name, elements }) {
        super(context);

        this.name = name;
        this.elements = elements;
    }
}

export default MockupStructureNode;
