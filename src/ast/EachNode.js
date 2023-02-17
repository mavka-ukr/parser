import ASTNode from "./ASTNode.js";

/**
 * перебрати машини як машина
 *   друк(машина.марка)
 * кінець
 */
class EachNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} name
     * @param {ASTNode} iterator
     * @param {ASTNode[]} body
     */
    constructor(context, { name, iterator, body }) {
        super(context);

        this.name = name;
        this.iterator = iterator;
        this.body = body;
    }
}

export default EachNode;
