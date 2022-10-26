parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

only_for_testing: identifier | call | arithmetic | assign | diia | if;

program: program_line (NL NL program_line)* EOF;
program_line: call | assign | diia | if;

// a; a.b; a.b.c; a[1]; a[1 + 1]; etc
identifier: left=identifier '.' right=identifier | name=NAME;

// 1; 1.2322; "abcd"; так; ні; пусто
literal: number=NUMBER | string=STRING | true=TRUE | false=FALSE | none=NONE;

// single expression
atom: literal | identifier | call | arithmetic | test;

// 1 + 1; a + 1; a() + 1; (a() + 1) + 1;
arithmetic: left=arithmetic op=arithmetic_ops right=arithmetic
          | literal_v=literal
          | identifier_v=identifier
          | call_v=call
          | '(' nested=arithmetic ')';
arithmetic_ops: '+' | '-' | '/' | '*';

// a(); a(x, y(), 1 + 1);
call: identifier '(' call_parameters? ')';
call_parameters: call_parameter (',' call_parameter)*;
call_parameter: (NAME ':')? atom;

// a = 1; a = 1 + 1; a = 1 == 1;
assign: identifier '=' assign_value;
assign_value: atom;

// block body
body: body_line (NL body_line)*;
body_line: call | assign | if | arithmetic;

// дія тест()
//   a = 1
//   друк("ок")
// кінець
diia: 'дія' (diia_for_structure)? NAME ('(' diia_parameters? ')')? NL (body NL)? 'кінець';
diia_parameters: diia_parameter (',' diia_parameter)*;
diia_parameter: NAME;
diia_for_structure: 'для' NAME NAME?;

// a == 1; a() == 1; (1 + 1) == 1;
test: test_part test_ops test_part;
test_part: call | literal | identifier | '(' arithmetic ')';
test_ops: '==' | '!=' | '>=' | '<=';

// якщо бути
//   друк("най буде")
// кінець
if: 'якщо' atom NL (body NL)? 'кінець';
