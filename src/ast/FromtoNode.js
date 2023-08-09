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
     * @param {boolean} include
     */
    constructor(context, { from, to, include }) {
        super(context);

        this.from = from;
        this.to = to;
        this.include = include;
    }
}

export default FromtoNode;
