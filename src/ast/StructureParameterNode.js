import ASTNode from "./ASTNode.js";

class StructureParameterNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {ASTNode} defaultValue
     */
    constructor(context, { name, defaultValue }) {
        super(context);

        this.name = name;
        this.defaultValue = defaultValue;
    }
}

export default StructureParameterNode;
