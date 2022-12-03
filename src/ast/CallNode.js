import ASTNode from "./ASTNode.js";

class CallNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {Array|Object} parameters
     */
    constructor(context, { name, parameters }) {
        super(context);

        this.name = name;
        this.parameters = parameters || [];
    }
}

export default CallNode;
