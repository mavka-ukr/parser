import { parse } from "./src/main.js";

// const code = `
// 1 + (2 + 3) + 4 / друк(1)
// `.trim();

const code = `
якщо бути().результат() == так
  друк("йой, най буде")
кінець
`.trim();

const ast = parse(code, { start: 'only_for_testing' });

console.log(ast[0]);
