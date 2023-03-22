import { parse } from "../src/main.js";
import ArithmeticNode from "../src/ast/ArithmeticNode.js";

test('parse ArithmeticNode', () => {
    const code = `а.б + в() - (7 + М.корінь(2))`;

    const ast = parse(code);
    const node = ast.body[0];

    expect(node).toBeInstanceOf(ArithmeticNode);
});
