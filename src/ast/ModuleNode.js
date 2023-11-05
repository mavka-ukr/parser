import ASTNode from "./ASTNode.js";

/**
 * модуль ТелеграмБот
 *   структура Бот
 *     токен текст
 *   кінець
 *
 *   дія Бот.запустити()
 *     ;; логіка запуску...
 *   кінець
 *
 *   дати Бот
 * кінець
 */
class ModuleNode extends ASTNode {
    /**
     * @param context
     * @param {string|null} name
     * @param {ASTNode[]} body
     */

    constructor(context, { name, body }) {
        super(context);

        this.name = name;
        this.body = body;
    }
}

export default ModuleNode;
