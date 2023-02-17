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
    constructor(context, { name, params, methods = [], parent }) {
        super(context);

        this.name = name;
        this.params = params || [];
        this.methods = methods || [];
        this.parent = parent;
    }
}

export default StructureNode;
