import ASTNode from "./ASTNode.js";

/**
 * а = 2
 * б = Людина(ім'я="Давид")
 */
class AssignNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode|IdentifiersChainNode} id
     * @param {ASTNode} value
     * @param {boolean} wait
     * @param {IdentifierNode|IdentifiersChainNode|null} type
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
