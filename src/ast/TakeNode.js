import ASTNode from "./ASTNode.js";

class TakeNode extends ASTNode {
    constructor(context, { name, chain, as, pak = false }) {
        super(context);

        this.name = name;
        this.chain = chain;
        this.as = as;
        this.pak = pak;
    }
}

export default TakeNode;
