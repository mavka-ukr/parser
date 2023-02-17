import ASTNode from "./ASTNode.js";

/**
 * дія(а число = 2, б)
 *   а + б
 * кінець
 */
class AnonymousDiiaNode extends ASTNode {
    /**
     * @param context
     * @param {ParamNode[]} params
     * @param {ASTNode[]} body
     * @param {boolean} async
     * @param {IdentifierNode|IdentifiersChainNode|null} type
     */
    constructor(context, { params, body, async, type }) {
        super(context);

        this.params = params || [];
        this.body = body || [];
        this.async = async;
        this.type = type;
    }
}

export default AnonymousDiiaNode;