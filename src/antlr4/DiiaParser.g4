parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

program: program_line (NL NL program_line)* EOF;
program_line: call | arithmetic | assign | diia | if;

// a; a.b; a.b.c; a[1]; a[1 + 1]; etc
identifier: NAME;

// 1; 1.2322; "abcd"; так; ні; пусто
literal: NUMBER | STRING | TRUE | FALSE | NONE;

// 1 + 1; a + 1; a() + 1; (a() + 1) + 1;
arithmetic: left=arithmetic_part (op=arithmetic_ops right=arithmetic_part)*;
arithmetic_part: literal | identifier | call | '(' arithmetic ')';
arithmetic_ops: '+' | '-' | '/' | '*';

// a(); a(x, y(), 1 + 1);
call: identifier '(' call_parameters? ')';
call_parameters: call_parameter (',' call_parameter)*;
call_parameter: (NAME ':')? arithmetic;

// a = 1; a = 1 + 1; a = 1 == 1;
assign: identifier '=' assign_value;
assign_value: arithmetic;

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
if: 'якщо' (arithmetic | test) NL (body NL)? 'кінець';
