import { parse } from "../src/main.js";
import DiiaNode from "../src/ast/DiiaNode.js";

test('parse DiiaNode', () => {
    const code = `
дія знайти_добуток(а, б)
  а * б
кінець
`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(DiiaNode);
});
