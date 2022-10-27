import { parse } from "./src/main.js";

// const code = `
// 1 + (2 + 3) + 4 / друк(1)
// `.trim();

const code = `
дія Рахунок.знайти_добуток(а, б)
  а * б.в()
  б.х = М.корінь(2)
кінець
`.trim();

const ast = parse(code, { start: 'only_for_testing' });

console.log(ast);
