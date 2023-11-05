import ASTNode from "./ASTNode.js";

/**
 * спробувати
 *   впасти ":("
 * зловити
 *   друк(":)")
 * кінець
 */
class TryNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode[]} tryBody
     * @param {string|null} catchName
     * @param {ASTNode[]} catchBody
     */
    constructor(context, { tryBody, catchName, catchBody }) {
        super(context);

        this.tryBody = tryBody;
        this.catchName = catchName;
        this.catchBody = catchBody;
    }
}

export default TryNode;
