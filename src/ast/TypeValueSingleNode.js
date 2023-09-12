import ASTNode from "./ASTNode.js";

/**
 * []число
 */
class TypeValueSingleNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} value
     * @param {boolean} array
     */
    constructor(context, { value, array }) {
        super(context);

        this.value = value;
        this.array = array;
    }
}

export default TypeValueSingleNode;
