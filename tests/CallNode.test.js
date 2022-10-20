import { parse } from "../src/main.js";
import CallNode from "../src/ast/CallNode.js";

test('parse CallNode', () => {
    const code = `друк(1)`;

    const ast = parse(code)[0];

    expect(ast).toBeInstanceOf(CallNode);
});
