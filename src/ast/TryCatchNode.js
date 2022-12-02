import ASTNode from "./ASTNode.js";

class ArithmeticNode extends ASTNode {
    /**
     * @param context
     * @param {ASTNode} tryBody
     * @param {string} catchName
     * @param {ASTNode} catchBody
     */
    constructor(context, { tryBody, catchName, catchBody }) {
        super(context);

        this.tryBody = tryBody;
        this.catchName = catchName;
        this.catchBody = catchBody;
    }
}

export default ArithmeticNode;
