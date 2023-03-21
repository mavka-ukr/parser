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
     * @param {IdentifierNode|IdentifiersChainNode|null} parent
     */
    constructor(context, { name, params, parent, methods }) {
        super(context);

        this.name = name;
        this.params = params || [];
        this.parent = parent;
        this.methods = methods;
    }
}

export default StructureNode;
