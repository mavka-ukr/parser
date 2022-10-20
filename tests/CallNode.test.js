import { parse } from "../src/main.js";
import CallNode from "../src/ast/CallNode.js";

test('parse CallNode', () => {
    const code = `друк(1)`;

    const ast = parse(code);

    expect(ast).toBeInstanceOf(CallNode);
});
