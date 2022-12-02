import ASTNode from "./ASTNode.js";

class IdentifiersChainNode extends ASTNode {
    constructor(context, { identifiers }) {
        super(context);

        this.identifiers = identifiers;
    }
}

export default IdentifiersChainNode;
