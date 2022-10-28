import ASTNode from "./ASTNode.js";

class DiiaNode extends ASTNode {
    /**
     * @param context
     * @param {string} name
     * @param {Array} parameters
     * @param {Array} body
     * @param {string|undefined} structure
     */
    constructor(context, { name, parameters, body, structure, async }) {
        super(context);

        this.name = name;
        this.parameters = parameters || [];
        this.body = body || [];
        this.structure = structure;
        this.async = async;
    }
}

export default DiiaNode;
