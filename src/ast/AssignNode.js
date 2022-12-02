import ASTNode from "./ASTNode.js";

class AssignNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} id
     * @param {ASTNode} value
     */
    constructor(context, { id, value }) {
        super(context);

        this.id = id;
        this.value = value;
    }
}

export default AssignNode;
