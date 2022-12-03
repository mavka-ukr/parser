import ASTNode from "./ASTNode.js";

class GiveNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {string} as
     */
    constructor(context, { name, as }) {
        super(context);

        this.name = name;
        this.as = as;
    }
}

export default GiveNode;
