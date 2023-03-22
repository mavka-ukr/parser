import { parse } from "../src/main.js";
import EachNode from "../src/ast/EachNode.js";

test('parse EachNode', () => {
    const code = `
перебрати діапазон(1, 10) як х
  друк(х)
кінець
    `;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(EachNode);
});
