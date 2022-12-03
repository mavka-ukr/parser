import ASTNode from "./ASTNode.js";

class TakeNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {IdentifiersChainNode} chain
     * @param {string} as
     * @param {boolean} pak
     */
    constructor(context, { name, chain, as, pak = false }) {
        super(context);

        this.name = name;
        this.chain = chain;
        this.as = as;
        this.pak = pak;
    }
}

export default TakeNode;
