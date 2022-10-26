import { parse } from "../src/main.js";
import ArithmeticNode from "../src/ast/ArithmeticNode.js";

test('parse ArithmeticNode', () => {
    const code = `1 + 1 - 2 * (1 / (2 / 1))`;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(ArithmeticNode);
});
