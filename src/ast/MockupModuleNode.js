import ASTNode from "./ASTNode.js";

/**
 * макет модуль двигуни
 *   ІоннийДвигун ІоннийДвигун
 * кінець
 */
class MockupModuleNode extends ASTNode {
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

export default MockupModuleNode;
