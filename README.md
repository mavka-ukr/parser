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

## Development

Requirements:

- NodeJS 16+ with NPM
- Java 8+

Installation:

```shell
git clone https://github.com/kohutd/diia-parser

cd diia-parser

npm install
```

Generating antlr4 files:

```shell
npm run antlr4
```

Running tests:

```shell
npm test
```
