import { parse } from "./src/main.js";

// const code = `
// 1 + (2 + 3) + 4 / друк(1)
// `.trim();

const code = `
дія Ракета.запустити()
  друк("Ракету %(я.назва) запущено!")
кінець

нептун = Ракета(назва: "Нептун",
                швидкість: 1000,
                вага: 500)

нептун.запустити()

`.trim();

const ast = parse(code);

console.log(ast);
