# Mavka Parser

Mavka language parser written in ANTLR4 and C++.

## Usage

Clone the repository:

```shell
git clone https://github.com/mavka-ukr/mavka-parser
```

Using:

```c++
#include <iostream>
#include "mavka-parser/parser.h"

int main() {
  const auto code = "друк(2 + 2)";
  const auto parser_result = mavka::parser::parse(code, "тест.м");
  if (parser_result->error) {
    std::cout << "Error: " << parser_result->error->message << std::endl;
    return 1;
  }
  std::cout << "Success!" << std::endl;
  return 0;
}
```

> Note that ANTLR4 can throw exceptions

## Development

Requirements:

- Clang
- CMake
- Make
- Java 8+

Installation:

```shell
git clone https://github.com/mavka-ukr/mavka-parser

cd mavka-parser
```

Generating ANTLR4 files:

```shell
bash generate.sh
```

Building:

```shell
mkdir build
cd build
cmake ..
make
```