import ASTNode from "./ASTNode.js";

class GiveNode extends ASTNode {
    constructor(context, { name, as }) {
        super(context);

        this.name = name;
        this.as = as;
    }
}

export default GiveNode;
