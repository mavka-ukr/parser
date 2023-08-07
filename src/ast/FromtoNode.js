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
 */
class FromtoNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} from
     * @param {ASTNode} to
     */
    constructor(context, { from, to }) {
        super(context);

        this.from = from;
        this.to = to;
    }
}

export default FromtoNode;
