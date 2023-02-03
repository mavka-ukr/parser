import { parse } from "./src/main.js";

const code = `
чекати а = 1
`;

try {
    console.log(parse(code));
} catch (e) {
    console.log(e);
}
