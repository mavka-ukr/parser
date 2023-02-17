import { parse } from "../src/main.js";
import EachNode from "../src/ast/EachNode.js";

test('parse EachNode', () => {
    const code = `
для х беручи діапазон(1, 10)
  друк(х)
кінець
    `;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(EachNode);
});
