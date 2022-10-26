import { parse } from "../src/main.js";
import IfNode from "../src/ast/IfNode.js";

test('parse IfNode', () => {
    const code = `
якщо бути == так
  друк("йой, най буде")
кінець
`;

    const ast = parse(code)[0];

    expect(ast).toBeInstanceOf(IfNode);
});
