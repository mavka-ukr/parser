import ASTNode from "./ASTNode.js";

/**
 * дія Паспорт.змінити_ім'я(нове_ім'я текст)
 *   я.ім'я = нове_ім'я
 * кінець
 */
class DiiaNode extends ASTNode {
    /**
     * @param context
     * @param {IdentifierNode} name
     * @param {ParamNode[]} params
     * @param {ASTNode[]} body
     * @param {IdentifierNode|null} structure
     * @param {boolean} async
     * @param {IdentifierNode|IdentifiersChainNode|null} type
     */
    constructor(context, { name, params, body, structure, async, type }) {
        super(context);

        this.name = name;
        this.params = params || [];
        this.body = body || [];
        this.structure = structure;
        this.async = async;
        this.type = type;
    }
}

export default DiiaNode;
