import { parse } from "../src/main.js";
import TestNode from "../src/ast/TestNode.js";

test('parse TestNode', () => {
    const code = `бути().результат() == так`;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(TestNode);
});
