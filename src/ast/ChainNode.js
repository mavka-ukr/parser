import ASTNode from "./ASTNode.js";

class ChainNode extends ASTNode {
    constructor(context, { parts }) {
        super(context);

        this.parts = parts;
    }
}

export default ChainNode;
