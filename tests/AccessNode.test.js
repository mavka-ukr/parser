import { parse } from "../src/main.js";
import AccessNode from "../src/ast/AccessNode.js";

test('parse AccessNode', () => {
    const code = `a[1]`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(AccessNode);
});
