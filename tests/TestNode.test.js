import { parse } from "../src/main.js";
import ComparisonNode from "../src/ast/ComparisonNode.js";

test('parse ComparisonNode', () => {
    const code = `бути().результат() == так`;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(ComparisonNode);
});
