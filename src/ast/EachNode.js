import ASTNode from "./ASTNode.js";

class EachNode extends ASTNode {
    constructor(context, { name, iterator, body }) {
        super(context);

        this.name = name;
        this.iterator = iterator;
        this.body = body;
    }
}

export default EachNode;
