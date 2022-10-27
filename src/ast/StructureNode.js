import ASTNode from "./ASTNode.js";

class StructureNode extends ASTNode {
    constructor(context, { name, body, functions }) {
        super(context);

        this.name = name;
        this.body = body || [];
        this.functions = functions || [];
    }
}

export default StructureNode;
