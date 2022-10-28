import ASTNode from "./ASTNode.js";

class StructureNode extends ASTNode {
    constructor(context, { name, parameters, functions }) {
        super(context);

        this.name = name;
        this.parameters = parameters || [];
        this.functions = functions || [];
    }
}

export default StructureNode;
