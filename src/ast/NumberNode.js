import ASTNode from "./ASTNode.js";

/**
 * 1
 * 3.14
 * -2
 * 0шАБВГҐД
 * 0д0010101
 */
class NumberNode extends ASTNode {
    /**
     * @param context
     * @param {number} value
     */
    constructor(context, { value }) {
        super(context);

        this.value = value;
    }
}

export default NumberNode;
