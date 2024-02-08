set(MAVKA_PARSER mavka_parser CACHE INTERNAL "")
set(MAVKA_PARSER_SRC
        ast.cpp
        ast.h
        parser.cpp
        parser.h
)

add_subdirectory(syntax)

add_library(${MAVKA_PARSER} ${MAVKA_PARSER_SRC})

target_include_directories(${MAVKA_PARSER} PUBLIC .)
target_link_libraries(${MAVKA_PARSER} mavka_syntax)