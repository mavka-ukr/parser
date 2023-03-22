import { parse } from "../src/main.js";
import ComparisonNode from "../src/ast/ComparisonNode.js";

test('parse ComparisonNode', () => {
    const code = `бути().результат() == так`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(ComparisonNode);
});
