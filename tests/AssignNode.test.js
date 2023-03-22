import { parse } from "../src/main.js";
import AssignNode from "../src/ast/AssignNode.js";

test('parse AssignNode', () => {
    const code = `б = Людина(імʼя="Давид")`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(AssignNode);
});
