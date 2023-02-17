import ASTNode from "./ASTNode.js";

/**
 * а().б.в(1, 2).г(ім'я="Давид")
 * ((а, б): а + б)(2, 2)
 */
class CallNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     * @param {ASTNode[]|Record<string, ASTNode>} args
     */
    constructor(context, { value, args }) {
        super(context);

        this.value = value;
        this.args = args || [];
    }
}

export default CallNode;
