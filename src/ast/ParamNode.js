import ASTNode from "./ASTNode.js";

/**
 * а число = 1
 * б Людина
 * в
 * г = так
 */
class ParamNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} name
     * @param {IdentifierNode|IdentifiersChainNode|null} type
     * @param {ASTNode|null} defaultValue
     */
    constructor(context, { name, type, defaultValue }) {
        super(context);

        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
    }
}

export default ParamNode;
