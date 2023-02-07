import { parse } from "./src/main.js";

const code = `
друк(
  дія(б)
    вернути б
  кінець
)
`;

try {
    console.log(parse(code));
} catch (e) {
    console.log(e);
}
