import { parse } from "../src/main.js";
import IfNode from "../src/ast/IfNode.js";

test('parse IfNode', () => {
    const code = `
якщо бути().результат() == так
  друк("йой, най буде")
кінець
`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(IfNode);
});
