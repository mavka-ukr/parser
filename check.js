import { parse } from "./src/main.js";

// const code = `
// 1 + (2 + 3) + 4 / друк(1)
// `.trim();

const code = `
структура Паспорт
  ім'я
  прізвище
кінець

дія Паспорт.змінити_ім'я()
кінець
`.trim();

const ast = parse(code);

console.log(ast);
