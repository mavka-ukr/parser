import ASTNode from "./ASTNode.js";

class StructureParameterNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {string} type
     * @param {ASTNode} defaultValue
     */
    constructor(context, { name, type, defaultValue }) {
        super(context);

        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
    }
}

export default StructureParameterNode;
