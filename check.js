import { parse } from "./src/main.js";

// const code = `
// 1 + (2 + 3) + 4 / друк(1)
// `.trim();

const code = `
кожній х беручи діапазон(1, 10)
  друк(х)
кінець
`.trim();

const ast = parse(code);

console.log(ast);
