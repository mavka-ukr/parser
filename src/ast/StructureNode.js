import ASTNode from "./ASTNode.js";

class StructureNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {StructureParameterNode[]} parameters
     * @param {DiiaNode[]} methods
     */
    constructor(context, { name, parameters, methods }) {
        super(context);

        this.name = name;
        this.parameters = parameters || [];
        this.methods = methods || [];
    }
}

export default StructureNode;
