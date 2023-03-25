import ASTNode from "./ASTNode.js";

/**
 * а = 2
 * б = Людина(ім'я="Давид")
 * б := Людина(ім'я="Давид")
 */
class AssignNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode|IdentifiersChainNode|ArrayDestructionNode} id
     * @param {ASTNode} value
     * @param {boolean} wait
     * @param {IdentifierNode|IdentifiersChainNode|null} type
     * @param {string} symbol
     * @param {ASTNode|null} setElement
     */
    constructor(context, { id, value, wait = false, type, symbol, setElement }) {
        super(context);

        this.id = id;
        this.value = value;
        this.wait = wait;
        this.type = type;
        this.symbol = symbol;
        this.setElement = setElement;
    }
}

export default AssignNode;
