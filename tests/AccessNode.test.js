import { parse } from "../src/main.js";
import GetElementNode from "../src/ast/GetElementNode.js";

test('parse AccessNode', () => {
    const code = `a[1]`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(GetElementNode);
});
