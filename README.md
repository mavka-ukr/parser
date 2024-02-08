# Mavka Parser

Mavka language parser written in ANTLR4 and C++.

## Usage

Clone the repository:

```shell
git clone https://github.com/mavka-ukr/parser
```

Using:

```CMake
# CMakeLists.txt

cmake_minimum_required(VERSION 3.26)
project(mavka)

set(CMAKE_CXX_STANDARD 20)

add_subdirectory(parser)

add_executable(mavka main.cpp)
target_link_libraries(mavka mavka_parser)
target_compile_options(mavka PRIVATE -fexceptions)
set_target_properties(mavka PROPERTIES OUTPUT_NAME "мавка")
```

```c++
// main.cpp

#include <iostream>
#include "parser/parser.h"

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
git clone https://github.com/mavka-ukr/parser

cd parser
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