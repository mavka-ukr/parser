cmake_minimum_required(VERSION 3.26)
project(mavka_parser)

set(CMAKE_CXX_STANDARD 20)

set(MAVKA_PARSER mavka_parser CACHE INTERNAL "")
set(MAVKA_PARSER_SRC
        visitor/visitArgs.cpp
        visitor/visitArithmetic.cpp
        visitor/visitAs.cpp
        visitor/visitAssign.cpp
        visitor/visitBitwise.cpp
        visitor/visitBitwise_not.cpp
        visitor/visitBody.cpp
        visitor/visitCall.cpp
        visitor/visitChain.cpp
        visitor/visitComparison.cpp
        visitor/visitComp_inst_assign.cpp
        visitor/visitComp_inst_block_program.cpp
        visitor/visitDiia.cpp
        visitor/visitEach.cpp
        visitor/visitFile.cpp
        visitor/visitGenerics.cpp
        visitor/visitGet_element.cpp
        visitor/visitGive.cpp
        visitor/visitGod.cpp
        visitor/visitIdentifier.cpp
        visitor/visitIf.cpp
        visitor/visitMockup.cpp
        visitor/visitMockup_diia.cpp
        visitor/visitMockup_module_body.cpp
        visitor/visitMockup_module.cpp
        visitor/visitMockup_structure_body.cpp
        visitor/visitMockup_structure_body_element.cpp
        visitor/visitMockup_structure.cpp
        visitor/visitMockup_subject.cpp
        visitor/visitModule.cpp
        visitor/visitMrm.cpp
        visitor/visitNegative.cpp
        visitor/visitNested.cpp
        visitor/visitNot.cpp
        visitor/visitNumber.cpp
        visitor/visitParams.cpp
        visitor/visitPositive.cpp
        visitor/visit_indecrement.cpp
        visitor/visitProgram.cpp
        visitor/visitString_value.cpp
        visitor/visitStructure.cpp
        visitor/visitTake.cpp
        visitor/visitTernary.cpp
        visitor/visitTest.cpp
        visitor/visitThrow.cpp
        visitor/visitTry.cpp
        visitor/visitTypeless_array.cpp
        visitor/visitTypeless_dictionary.cpp
        visitor/visitType_value.cpp
        visitor/visitValue_atom.cpp
        visitor/visitWait.cpp
        visitor/visitWhile.cpp
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