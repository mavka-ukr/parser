import ASTNode from "./ASTNode.js";

class DiiaNode extends ASTNode {
    constructor(context, { name, parameters, body, forStructure, forStructureVariableName }) {
        super(context);

        this.name = name;
        this.parameters = parameters;
        this.body = body;
        this.forStructure = forStructure;
        this.forStructureVariableName = forStructureVariableName;
    }
}

export default DiiaNode;
