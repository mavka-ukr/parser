import { parse } from "../src/main.js";
import ArithmeticNode from "../src/ast/ArithmeticNode.js";

test('parse ArithmeticNode', () => {
    const code = `1 + 1 - 2 * (1 / (2 / 1))`;

    const ast = parse(code)[0];

    expect(ast).toBeInstanceOf(ArithmeticNode);
});
