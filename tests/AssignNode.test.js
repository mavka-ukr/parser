import { parse } from "../src/main.js";
import AssignNode from "../src/ast/AssignNode.js";

test('parse AssignNode', () => {
    const code = `а = 2`;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(AssignNode);
});
