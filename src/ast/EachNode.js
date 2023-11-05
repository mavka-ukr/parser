import ASTNode from "./ASTNode.js";

/**
 * перебрати машини як машина
 *   друк(машина.марка)
 * кінець
 */
class EachNode extends ASTNode {
    /**
     * @param context
     * @param {string|null} keyName
     * @param {string|null} name
     * @param {ASTNode} iterator
     * @param {ASTNode[]} body
     */
    constructor(context, { keyName, name, iterator, body }) {
        super(context);

        this.keyName = keyName;
        this.name = name;
        this.iterator = iterator;
        this.body = body;
    }
}

export default EachNode;
