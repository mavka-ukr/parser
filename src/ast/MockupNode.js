import ASTNode from "./ASTNode.js";

/**
 * макет ІоннийДвигунМ є ДвигунМ
 *   кількість_хромосом число
 * кінець
 */
class StructureNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} name
     * @param {IdentifierNode[]|IdentifiersChainNode[]} parents
     * @param {MockupMethod[]} methods
     */
    constructor(context, { name, parents, methods }) {
        super(context);

        this.name = name;
        this.parents = parents || [];
        this.methods = methods || [];
    }
}

export default StructureNode;
