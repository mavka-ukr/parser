import ASTNode from "./ASTNode.js";

class IdentifiersChainNode extends ASTNode {
    /**
     * @param context
     * @param {string[]} identifiers
     */
    constructor(context, { identifiers }) {
        super(context);

        this.identifiers = identifiers;
    }
}

export default IdentifiersChainNode;
