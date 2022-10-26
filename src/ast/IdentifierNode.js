import ASTNode from "./ASTNode.js";

class IdentifierNode extends ASTNode {
    constructor(context, { parts }) {
        super(context);

        this.parts = parts;
    }
}

export default IdentifierNode;
