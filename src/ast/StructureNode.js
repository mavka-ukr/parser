import ASTNode from "./ASTNode.js";

/**
 * структура Людина є Тварина
 *   кількість_хромосом число
 * кінець
 */
class StructureNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} name
     * @param {ParamNode[]} params
     * @param {DiiaNode[]} methods
     * @param {MethodDeclarationNode[]} methodDeclarations
     * @param {IdentifierNode|IdentifiersChainNode|null} parent
     */
    constructor(context, { name, params, parent, methods, methodDeclarations }) {
        super(context);

        this.name = name;
        this.params = params || [];
        this.parent = parent;
        this.methods = methods;
        this.methodDeclarations = methodDeclarations;
    }
}

export default StructureNode;
