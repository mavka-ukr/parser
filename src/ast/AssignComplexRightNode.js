import ASTNode from "./ASTNode.js";

/**
 * а = 2
 * б = Людина(ім'я="Давид")
 * б := Людина(ім'я="Давид")
 */
class AssignComplexRightNode extends ASTNode {
    /**
     * @param context
     * @param {string|null} name
     * @param {ASTNode|null} element
     */
    constructor(context, { name, element }) {
        super(context);

        this.name = name;
        this.element = element;
    }
}

export default AssignComplexRightNode;
