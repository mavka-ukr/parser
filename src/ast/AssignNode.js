import ASTNode from "./ASTNode.js";

class AssignNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} id
     * @param {ASTNode} value
     * @param {boolean} wait
     * @param {string} type
     */
    constructor(context, { id, value, wait = false, type }) {
        super(context);

        this.id = id;
        this.value = value;
        this.wait = wait;
        this.type = type;
    }
}

export default AssignNode;
