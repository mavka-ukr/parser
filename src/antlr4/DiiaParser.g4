parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

program: program_line (NL NL program_line)* EOF;
program_line: call | arithmetic | assign;

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
