import ASTNode from "./ASTNode.js";

/**
 * макет дія запустити(відлік число) логічне
 */
class MockupDiiaNode extends ASTNode {
    /**
     * @param context
     * @param {boolean} async
     * @param {string} name
     * @param {ParamNode[]} params
     * @param {IdentifierNode|IdentifiersChainNode|null} type
     */
    constructor(context, { async, name, params, type }) {
        super(context);

        this.async = async;
        this.name = name;
        this.params = params;
        this.type = type;
    }
}

export default MockupDiiaNode;
