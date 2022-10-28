import { parse } from "./src/main.js";

// const code = `
// 1 + (2 + 3) + 4 / друк(1)
// `.trim();

const code = `
взяти test.a.b.c
`.trim();

const ast = parse(code);

console.log(ast);
