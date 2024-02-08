cmake_minimum_required(VERSION 3.26)
project(mavka_parser)

set(CMAKE_CXX_STANDARD 20)

set(MAVKA_PARSER mavka_parser CACHE INTERNAL "")
set(MAVKA_PARSER_SRC
        ast.cpp
        ast.h
        parser.cpp
        parser.h
        tools.cpp
        tools.h
)

add_subdirectory(syntax)

add_library(${MAVKA_PARSER} ${MAVKA_PARSER_SRC})

target_include_directories(${MAVKA_PARSER} PUBLIC .)
target_link_libraries(${MAVKA_PARSER} mavka_syntax)