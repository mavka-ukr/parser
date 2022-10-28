parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

nl: NL;
nls: nl*;

program: program_line (nl program_line)* EOF;
program_line: chain | assign | diia | if | each | nls | structure | take | give;

only_for_testing: identifier | call | arithmetic | assign | diia | if | each | test | structure | take | give;

take: 'взяти' (pak_v='пак' ':')? paknme_v=pakname ('.' identifiers_chain_v=identifiers_chain)? ('як' as_name_v=NAME)?;
give: 'дати' name_v=NAME ('як' as_name_v=NAME)?;

identifier: NAME;

pakname: NAME (':' NAME)?;
identifiers_chain: identifier ('.' identifier)+ | identifier_v=identifier;

// a; a.b; a.b.c; a[1]; a[1 + 1]; a.b().c().d.e.f() etc
chain: left=chain (nls '.' nls | '.') right=chain
     | 'чекати' wait_chain_v=chain
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
call: name_v=NAME '(' nls (call_parameters_v=call_parameters | call_parameters_with_name_v=call_parameters_with_name)? nls ')';
// (a, b, c)
call_parameters: call_parameter (',' call_parameter)*;
call_parameter: nls value_v=atom nls;
// (name1: a, name2: b, name3: c)
call_parameters_with_name: call_parameter_with_name (',' call_parameter_with_name)*;
call_parameter_with_name: nls name_v=NAME ':' value_v=atom nls;

// a = 1; a = 1 + 1; a = 1 == 1;
assign: identifier_v=identifiers_chain '=' value_v=assign_value;
assign_value: atom;

// block body
body: body_line (nl body_line)*;
body_line: assign | if | arithmetic | chain | each | nls;

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
test_part: literal | chain | '(' arithmetic ')';
test_ops: '==' | '!=' | '>=' | '<=';

// якщо бути
//   друк("най буде")
// кінець
if: 'якщо' expression_v=atom nl (body_v=body nl)? 'кінець';

// кожній х беручи діапазон(1, 10)
//   друк(х)
// кінець
each: 'кожній' name_v=NAME 'беручи' iterator_v=atom nl (body_v=body nl)? 'кінець';

// структура Ракета
//   назва
//   швидкість
// кінець
structure: 'структура' name_v=NAME nl nls (parameters_v=structure_parameters nl)? nls 'кінець';
structure_parameters: structure_parameter (nl structure_parameter)*;
structure_parameter: nls name_v=NAME nls;
