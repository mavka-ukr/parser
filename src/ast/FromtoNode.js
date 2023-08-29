import ASTNode from "./ASTNode.js";

/**
 * 0..10
 * -2..2
 * 0..-10
 * -2..-2
 * 0..10.5
 * -2..2.5
 * 0..-10.5
 * -2..-2.5
 * а..б
 * (а + 2)..б
 * а..(б + 2)
 * а..=3
 */
class FromtoNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} from
     * @param {ASTNode} to
     * @param {ASTNode} middle
     * @param {string} symbol
     */
    constructor(context, { from, to, middle, symbol }) {
        super(context);

        this.from = from;
        this.to = to;
        this.middle = middle;
        this.symbol = symbol;
    }
}

export default FromtoNode;
