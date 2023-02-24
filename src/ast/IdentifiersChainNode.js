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
     */
    constructor(context, { left, right }) {
        super(context);

        this.left = left;
        this.right = right;
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
