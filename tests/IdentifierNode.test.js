import { parse } from "../src/main.js";
import IdentifierNode from "../src/ast/IdentifierNode.js";

test('parse IdentifierNode', () => {
    const code = `добуток`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(IdentifierNode);
});
