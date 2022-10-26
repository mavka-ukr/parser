import { parse } from "../src/main.js";
import ChainNode from "../src/ast/ChainNode.js";

test('parse ChainNode', () => {
    const code = `а.б.в.Г.ґ`;

    const ast = parse(code, { start: 'only_for_testing' });
    const node = ast[0];

    expect(node).toBeInstanceOf(ChainNode);
});
