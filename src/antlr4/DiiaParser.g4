parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

nl: NL;
nls: nl*;

program: program_line (nl nl program_line)* EOF;
program_line: chain | assign | diia | if | nls;

only_for_testing: identifier | call | arithmetic | assign | diia | if | test | nls;

identifier: NAME;

identifiers_chain: left=identifiers_chain '.' right=identifiers_chain
     | identifier_v=identifier;

// a; a.b; a.b.c; a[1]; a[1 + 1]; a.b().c().d.e.f() etc
chain: left=chain (nls '.' nls | '.') right=chain
     | identifier_v=identifier
     | call_v=call;

// 1; 1.2322; "abcd"; так; ні; пусто
literal: number=NUMBER | string=STRING | yes=YES | no=NO | none=NONE;

// single expression
atom: literal | chain | arithmetic | test;

// 1 + 1; a + 1; a() + 1; (a() + 1) + 1;
arithmetic: left=arithmetic op=arithmetic_ops right=arithmetic
          | literal_v=literal
          | chain_v=chain
          | '(' nested=arithmetic ')';
arithmetic_ops: '+' | '-' | '/' | '*';

// a(); a(x, y(), 1 + 1);
call: identifier '(' nls call_parameters? nls ')';
call_parameters: call_parameter (',' call_parameter)*;
call_parameter: nls (NAME ':')? atom nls;

// a = 1; a = 1 + 1; a = 1 == 1;
assign: identifier_v=identifiers_chain '=' value_v=assign_value;
assign_value: atom;

// block body
body: body_line (nl body_line)*;
body_line: assign | if | arithmetic | chain | nls;

// дія тест()
//   a = 1
//   друк("ок")
// кінець
diia: 'дія' (diia_for_structure)? name_v=NAME ('(' nls parameters_v=diia_parameters? nls ')')? nl (body_v=body nl)? 'кінець';
diia_parameters: left=diia_parameters nls ',' nls right=diia_parameters | parameter_v=diia_parameter;
diia_parameter: NAME;
diia_for_structure: structure_name_v=NAME '.';

// a == 1; a() == 1; (1 + 1) == 1;
test: left=test_part op=test_ops right=test_part;
test_part: call | literal | chain | '(' arithmetic ')';
test_ops: '==' | '!=' | '>=' | '<=';

// якщо бути
//   друк("най буде")
// кінець
if: 'якщо' expression_v=atom nl (body_v=body nl)? 'кінець';
