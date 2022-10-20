import { parse } from "../src/main.js";
import AssignNode from "../src/ast/AssignNode.js";

test('parse AssignNode', () => {
    const code = `а = 2`;

    const ast = parse(code)[0];

    expect(ast).toBeInstanceOf(AssignNode);
});
