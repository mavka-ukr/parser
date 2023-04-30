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
     * @param {IdentifierNode|ArrayDestructionNode} name
     * @param {IdentifierNode|IdentifiersChainNode|null} type
     * @param {ASTNode|null} defaultValue
     * @param {boolean} spread
     */
    constructor(context, { name, type, defaultValue, spread }) {
        super(context);

        this.name = name;
        this.type = type;
        this.defaultValue = defaultValue;
        this.spread = spread;
    }
}

export default ParamNode;
