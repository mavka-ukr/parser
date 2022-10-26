import { parse } from "../src/main.js";
import IfNode from "../src/ast/IfNode.js";

test('parse IfNode', () => {
    const code = `
якщо бути == так
  друк("йой, най буде")
кінець
`;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(IfNode);
});
