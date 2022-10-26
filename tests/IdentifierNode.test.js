import { parse } from "../src/main.js";
import IdentifierNode from "../src/ast/IdentifierNode.js";

test('parse IdentifierNode', () => {
    const code = `добуток`;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(IdentifierNode);
});
