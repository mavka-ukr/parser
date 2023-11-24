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
     * @param {ASTNode|null} middle
     * @param {string|null} middleSymbol
     * @param {ASTNode} to
     * @param {string|null} toSymbol
     */
    constructor(context, { from, to, toSymbol, middle, middleSymbol }) {
        super(context);

        this.from = from;
        this.middle = middle;
        this.middleSymbol = middleSymbol;
        this.to = to;
        this.toSymbol = toSymbol;
    }
}

export default FromtoNode;
