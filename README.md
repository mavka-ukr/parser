# diia-parser

Diia language parser written in antlr4 and JavaScript.

## Installation

```
npm i diia-parser
```

## Usage

```javascript
import { parse } from 'diia-parser';

const code = `
дія знайти_суму(а, б)
  а + б
кінець

сума = знайти_суму(2, 2)

друк(сума)
`;

const ast = parse(code);

console.log(ast);
```
