import ASTNode from "./ASTNode.js";
import IdentifierNode from "./IdentifierNode.js";

/**
 * а.Б.в.г.Ґ.Д
 */
class IdentifiersChainNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} left
     * @param {IdentifierNode} right
     * @param {string} tokenText
     */
    constructor(context, { left, right, tokenText }) {
        super(context);

        this.left = left;
        this.right = right;
        this.tokenText = tokenText;
    }

    toFlatArray() {
        const toFlat = (id) => {
            if (id instanceof IdentifierNode) {
                return [id.name];
            }

            return [...toFlat(id.left), ...toFlat(id.right)];
        }

        return toFlat(this).flat(Infinity);
    }
}

export default IdentifiersChainNode;
