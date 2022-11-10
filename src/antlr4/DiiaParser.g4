parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

program: program_line (nl program_line)* EOF;
program_line: chain | assign | diia | if | each | nls | structure | take | give;

nl: NL;
nls: nl*;

take: 'взяти' (t_pak='пак' ':')? t_module=identifier ('.' t_elements_chain=identifiers_chain)? ('як' t_as=identifier)?;
give: 'дати' g_name=identifier ('як' g_as=identifier)?;

identifier: ID;
identifiers_chain: identifier ('.' identifier)*;

// a; a.b; a.b.c; a.b().c().d.e.f() etc
chain: chain_element (nls '.' nls chain_element)*
     | 'чекати' c_wait=chain;
chain_element: identifier | call;

// 1; 1.2322; "abcd"; так; ні; пусто
literal: l_number=NUMBER | l_string=STRING | l_yes=YES | l_no=NO | l_none=NONE;

// single expression
atom: literal | chain | arithmetic | test | lambda;

// 1 + 1; a + 1; a() + 1; (a() + 1) + 1;
arithmetic: a_left=arithmetic a_op=arithmetic_op a_right=arithmetic
          | a_literal=literal
          | a_chain=chain
          | '(' a_nested=arithmetic ')';
arithmetic_op: '+' | '-' | '/' | '*';

// a(); a(x, y(), 1 + 1);
call: c_name=identifier '(' nls (c_parameters=call_parameters | c_named_parameters=call_named_parameters)? nls ')';
// (a, b, c)
call_parameters: call_parameter (',' call_parameter)*;
call_parameter: nls cp_value=atom nls;
// (name1: a, name2: b, name3: c)
call_named_parameters: call_named_parameter (',' call_named_parameter)*;
call_named_parameter: nls cnp_name=identifier ':' cnp_value=atom nls;

// a = 1; a = 1 + 1; a = 1 == 1;
assign: a_chain=identifiers_chain '=' a_value=assign_value;
assign_value: atom;

// block body
body: body_line (nl body_line)*;
body_line: assign | if | arithmetic | chain | each | nls | return_body_line;
return_body_line: RETURN rbl=body_line;

// дія а: друк(а)
lambda: 'дія' l_parameters=diia_parameters? ':' atom;

// дія тест()
//   a = 1
//   друк("ок")
// кінець
diia: (d_async='тривала')? 'дія' (d_structure=diia_structure)? d_name=identifier '(' ( nls d_parameters=diia_parameters? nls ) ')' nl (d_body=body nl)? 'кінець';
diia_parameters: diia_parameter (nls ',' nls diia_parameter)*;
diia_parameter: dp_name=identifier ('=' dp_value=atom)?;
diia_structure: ds_name=identifier '.';

// a == 1; a() == 1; (1 + 1) == 1;
test: test_expr (test_expr_op test_expr)*;
test_expr: te_left=test_part (te_op=test_op te_right=test_part)? | '(' test_expr ')';
test_part: literal | chain | arithmetic | '(' test_part ')';
test_op: '==' | '!=' | '>=' | '<=' | 'є';
test_expr_op: 'і' | 'або';

// якщо бути
//   друк("най буде")
// кінець
if: (i_start=if_start)+ 'кінець';
if_start: 'якщо' is_expr=atom nl (is_body=body nl)?;

// кожній х беручи діапазон(1, 10)
//   друк(х)
// кінець
each: 'кожній' e_name=identifier 'беручи' e_iterator=atom nl (e_body=body nl)? 'кінець';

// структура Ракета
//   назва
//   швидкість
// кінець
structure: 'структура' s_name=identifier nl nls (s_parameters=structure_parameters nl)? nls 'кінець';
structure_parameters: structure_parameter (nl structure_parameter)*;
structure_parameter: nls sp_name=identifier ('=' sp_value=atom)? nls;
