import ASTNode from "./ASTNode.js";

/**
 * макет іоннийДвигун
 *   запустити()
 * кінець
 */
class MockupObjectNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {StructureParamNode[]|MethodDeclarationNode[]|TypeValueNode} elementsOrType
     */
    constructor(context, { name, elementsOrType }) {
        super(context);

        this.name = name;
        this.elementsOrType = elementsOrType;
    }
}

export default MockupObjectNode;
