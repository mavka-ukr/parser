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
     * @param {IdentifierNode|null} name
     * @param {ProgramNode} program
     */

    constructor(context, { name, program }) {
        super(context);

        this.name = name;
        this.program = program;
    }
}

export default ModuleNode;
