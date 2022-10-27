import ASTNode from "./ASTNode.js";

class AssignNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} identifier
     * @param {ASTNode} value
     */
    constructor(context, { identifier, value }) {
        super(context);

        this.identifier = identifier;
        this.value = value;
    }
}

export default AssignNode;
