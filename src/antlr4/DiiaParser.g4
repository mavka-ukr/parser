parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

file: f_program=program EOF;

program: program_element (nl program_element)*;
program_element: module | structure | diia | if | each | while | try | expr | throw | wait_assign | assign | nls | take | give;

module: 'модуль' m_name=identifier nl (m_program=program nl)? nls 'кінець';

structure: 'структура' s_name=identifier ('є' s_parent=identifiers_chain)? nl nls (s_params=structure_params nl)? 'кінець';
structure_params: param (nl param)*;

diia: (d_async='тривала')? 'дія' (d_structure=identifier '.')? d_name=identifier '(' ( nls d_params=params? nls ) ')' (d_type=type_value)? nl (d_body=body nl)? nls 'кінець';

if: 'якщо' i_value=expr nl (i_body=body nl)? ((('інакше' i_else_body=body nl)? 'кінець') | (i_else_if=if));

each: 'перебрати' e_iterator=expr 'як' (e_key_name=identifier ',')? e_name=identifier nl (e_body=body nl)? 'кінець';

while: 'поки' w_value=expr nl (w_body=body nl)? 'кінець';

try: 'спробувати' nl t_body=body nl 'зловити' tc_name=identifier? (tc_body=body nl)? 'кінець';

take: 'взяти' (((t_pak='пак' | t_relative='.')? t_elements_chain=identifiers_chain (t_star='.*')?) | t_remote=STRING) ('як' t_as=identifier)?;

give: 'дати' g_name=identifier ('як' g_as=identifier)?;

value: NUMBER #number
     | STRING #string
     | identifier #id
     | c_left=value '.' c_right=value #chain
     | c_value=value '(' (c_args=args | c_named_args=named_args)? ')' #call
     | '+' p_value=value  #positive
     | '-' n_value=value  #negative
     | DECREMENT pd_value=value  #pre_decrement
     | INCREMENT pi_value=value  #pre_increment
     | pd_value=value DECREMENT #post_decrement
     | pi_value=value INCREMENT #post_increment
     | '!' n_value=value  #not
     | a_left=value '[' a_inner=expr ']' #access
     | '(' n_value=expr ')' #nested
     | '(' c_value=expr ')' '(' (c_args=args | c_named_args=named_args)? ')' #call_expr
     | 'чекати' w_value=value #wait
     | a_left=value a_operation=arithmetic_op_mul a_right=value #arithmetic_mul
     | a_left=value a_operation=arithmetic_op_add a_right=value #arithmetic_add
     | t_value=value nls '?' nls t_positive=expr nls ':' nls t_negative=expr #ternary
     | t_left=value t_operation=test_op t_right=value #test
     | c_left=value c_operation=comparison_op c_right=value #comparison
     ;

expr: value #simple
    | '(' f_params=params? ')' f_type=type_value? ':' f_body=expr #function
    | (d_async='тривала')? 'дія' '(' ( nls d_params=params? nls ) ')' (d_type=type_value)? nl (d_body=body nl)? nls 'кінець' #anonymous_diia
    ;

throw: 'впасти' t_value=expr;

assign: (a_identifiers_chain=identifiers_chain | a_identifier=identifier a_type=type_value?) '=' a_value=assign_value;
assign_value: expr | assign;
wait_assign: 'чекати' wa_assign=assign;

identifier: ID;
identifiers_chain: ic_identifier=identifier | ic_left=identifiers_chain '.' ic_right=identifiers_chain;

type_value: tv_single=identifiers_chain | tv_left=type_value tv_operation=test_op tv_right=type_value;

args: arg (',' arg)* ','?;
arg: nls a_value=expr nls;
named_args: named_arg (',' named_arg)* ','?;
named_arg: nls na_name=identifier '=' na_value=expr nls;

params: param (nls ',' nls param)*;
param: p_name=identifier p_type=type_value? ('=' p_value=param_value)?;
param_value: NUMBER #param_value_number
           | STRING #param_value_string
           | identifier #param_value_identifier;

body: body_element (nl body_element)*;
body_element: structure | diia | if | each | while | try | expr | throw | wait_assign | assign | return_body_line | nls;
return_body_line: 'вернути' rbl=body_element;

arithmetic_op_mul: '*' | '/' | PERCENT | DIVDIV | POW | XOR;
arithmetic_op_add: '+' | '-';
test_op: 'і' | 'або';
comparison_op: '==' | '!=' | '>=' | '<=' | 'є' | 'рівно' | 'більше' | 'менше' | 'не більше' | 'не менше' | 'не рівно' | 'не є' | 'не';

nl: NL;
nls: nl*;
