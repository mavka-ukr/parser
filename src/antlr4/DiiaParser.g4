parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

program: program_line (NL NL program_line)* EOF;
program_line: chain | assign | diia | if;

only_for_testing: identifier | call | arithmetic | assign | diia | if | test;

identifier: NAME;

// a; a.b; a.b.c; a[1]; a[1 + 1]; a.b().c().d.e.f() etc
chain: left=chain '.' right=chain
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
call: identifier '(' call_parameters? ')';
call_parameters: call_parameter (',' call_parameter)*;
call_parameter: (NAME ':')? atom;

// a = 1; a = 1 + 1; a = 1 == 1;
assign: identifier '=' assign_value;
assign_value: atom;

// block body
body: body_line (NL body_line)*;
body_line: assign | if | arithmetic | chain;

// дія тест()
//   a = 1
//   друк("ок")
// кінець
diia: 'дія' (diia_for_structure)? NAME ('(' diia_parameters? ')')? NL (body NL)? 'кінець';
diia_parameters: diia_parameter (',' diia_parameter)*;
diia_parameter: NAME;
diia_for_structure: NAME '.';

// a == 1; a() == 1; (1 + 1) == 1;
test: left=test_part op=test_ops right=test_part;
test_part: call | literal | chain | '(' arithmetic ')';
test_ops: '==' | '!=' | '>=' | '<=';

// якщо бути
//   друк("най буде")
// кінець
if: 'якщо' expression_v=atom NL (body_v=body NL)? 'кінець';
