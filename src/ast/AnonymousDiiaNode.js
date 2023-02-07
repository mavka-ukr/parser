import ASTNode from "./ASTNode.js";

class AnonymousDiiaNode extends ASTNode {
    /**
     * @param context
     * @param {DiiaParameterNode[]} parameters
     * @param {Array} body
     * @param {boolean} async
     */
    constructor(context, { parameters, body, async }) {
        super(context);

        this.parameters = parameters || [];
        this.body = body || [];
        this.async = async;
    }
}

export default AnonymousDiiaNode;
