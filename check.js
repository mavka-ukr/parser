import { parse } from "./src/main.js";

// const code = `
// 1 + (2 + 3) + 4 / друк(1)
// `.trim();

const code = `
дія знайти_добуток()
  а * б
  
  г = д
кінець
`.trim();

const ast = parse(code);

console.log(ast);
