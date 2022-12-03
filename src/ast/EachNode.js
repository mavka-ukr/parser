import ASTNode from "./ASTNode.js";

class EachNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {ASTNode} iterator
     * @param {Array} body
     */
    constructor(context, { name, iterator, body }) {
        super(context);

        this.name = name;
        this.iterator = iterator;
        this.body = body;
    }
}

export default EachNode;
