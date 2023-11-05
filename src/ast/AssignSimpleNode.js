import ASTNode from "./ASTNode.js";

/**
 * а = 2
 * б = Людина(ім'я="Давид")
 * б := Людина(ім'я="Давид")
 */
class AssignSimpleNode extends ASTNode {
    /**
     * @param context
     * @param {boolean} subject
     * @param {string} name
     * @param {TypeValueNode|null} type
     * @param {string} symbol
     * @param {ASTNode[]} value
     */
    constructor(context, { subject, name, type, symbol, value }) {
        super(context);

        this.subject = subject;
        this.name = name;
        this.type = type;
        this.symbol = symbol;
        this.value = value;
    }
}

export default AssignSimpleNode;
