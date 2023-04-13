parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

file: f_program=program EOF;

program: program_element (nl program_element)*;
program_element: module | structure | mockup | diia | if | each | while | try | expr | throw | eval | wait_assign | assign | nls | take | give;

module: 'модуль' (m_name=identifier)? nl (m_program=program nl)? nls 'кінець';

structure: 'структура' s_name=identifier ('є' s_parent=identifiers_chain)? ('втілює' m_parents=mockup_parents)? nl nls (s_elements=structure_elements nl)? 'кінець';
structure_elements: structure_element (nl structure_element)*;
structure_element: param | diia | nls;

mockup: 'макет' m_name=identifier ('втілює' m_parents=mockup_parents)? nl nls (m_elements=mockup_elements nl)? 'кінець';
mockup_parents: identifiers_chain (',' identifiers_chain)*;
mockup_elements: mockup_element (nl mockup_element)*;
mockup_element: me_name=identifier '(' ( nls m_params=params? nls ) ')' (m_type=type_value)?;

diia: (d_async='тривала')? 'дія' (d_structure=identifier '.')? d_name=identifier '(' ( nls d_params=params? nls ) ')' (d_type=type_value)? nl (d_body=body nl)? nls 'кінець';

if: 'якщо' i_value=expr nl (i_body=body nl)? ((('інакше' i_else_body=body nl)? 'кінець') | (i_else_if=if));

each: 'перебрати' e_iterator=expr ('як' (e_key_name=identifier ',')? e_name=identifier)? nl (e_body=body nl)? 'кінець';

while: 'поки' w_value=expr nl (w_body=body nl)? 'кінець';

eval: 'js' e_value=value;

try: 'спробувати' nl t_body=body nl 'зловити' tc_name=identifier? (tc_body=body nl)? 'кінець';

take: 'взяти' (tm_absolute='.')? tm_elements_chain=identifiers_chain (tm_star='.*')? ('як' tm_as=identifier)? #take_module
    | 'взяти пак' tp_elements_chain=identifiers_chain (tp_star='.*')? ('як' tp_as=identifier)? #take_pak
    | 'взяти файл' tf_name=STRING 'як' tf_as=identifier #take_file
    | 'взяти' tr_url=STRING ('як' tr_as=identifier)? #take_remote;

give: 'дати' give_element (',' give_element)*;
give_element: ge_name=identifier ('як' ge_as=identifier)?;

value: NUMBER #number
     | STRING #string
     | identifier #id
     | c_left=value '.' c_right=extended_identifier #chain
     | c_value=value '(' (c_args=args | c_named_args=named_args)? ')' #call
     | '+' p_value=value  #positive
     | '-' n_value=value  #negative
     | DECREMENT pd_value=value  #pre_decrement
     | INCREMENT pi_value=value  #pre_increment
     | pd_value=value DECREMENT #post_decrement
     | pi_value=value INCREMENT #post_increment
     | '!' n_value=value  #not
     | a_left=value '[' a_element=expr ']' #get_element
     | '(' n_value=expr ')' #nested
     | '(' c_value=expr ')' '(' (c_args=args | c_named_args=named_args)? ')' #call_expr
     | a_left=value a_operation=arithmetic_op_mul a_right=value #arithmetic_mul
     | a_left=value a_operation=arithmetic_op_add a_right=value #arithmetic_add
     | b_left=value b_operation=bitwise_op b_right=value #bitwise
     | c_left=value c_operation=comparison_op c_right=value #comparison
     | t_left=value t_operation=test_op t_right=value #test
     | t_value=value nls '?' nls t_positive=expr nls ':' nls t_negative=expr #ternary
     | '[' a_elements=array_elements? ']' #array
     | '(' d_args=dictionary_args? ')' #dictionary
     ;

array_elements: array_element (',' array_element)*;
array_element: nls ae_value=expr nls;

dictionary_args: dictionary_arg (',' dictionary_arg)*;
dictionary_arg: nls (da_name_id=extended_identifier | da_name_string=STRING) '=' da_value=expr nls;

expr: value #simple
    | 'чекати' w_value=value #wait
    | '(' f_params=params? ')' f_type=type_value? ':' f_body=expr #function
    | (d_async='тривала')? 'дія' '(' ( nls d_params=params? nls ) ')' (d_type=type_value)? nl (d_body=body nl)? nls 'кінець' #anonymous_diia
    ;

throw: 'впасти' t_value=expr;

array_destruction: '[' array_destruction_el (',' array_destruction_el)* ']';
array_destruction_el: nls ade_id=identifier nls;

object_destruction: '(' object_destruction_el (',' object_destruction_el)* ')';
object_destruction_el: nls ode_id=identifier nls;

assign: ((a_identifiers_chain=identifiers_chain ('[' a_set_element=expr ']')?) | a_identifier=identifier a_type=type_value? | a_array_destruction=array_destruction | a_object_destruction=object_destruction) a_symbol=assign_symbol a_value=assign_value;
assign_value: expr | assign;
assign_symbol: '=' | ':=' | '+=' | '-=' | '*=' | '/=' | '//=' | '%=' | '**=' | '&=' | '|=' | '<<=' | '>>=' | '^=' | '&&=' | '||=' | '??=';
wait_assign: 'чекати' wa_assign=assign;

identifier: ID;
extended_identifier: ID | END | DIIA | STRUCTURE | FOR | IF | WAIT | TAKE | GIVE | AS | IS | RETURN | ASYNC | AND | OR | TRY | CATCH | ELSE | THROW | WHILE | MODULE | EQ_WORD | GR_WORD | SM_WORD | NOT_WORD | MOCKUP | IMPLEMENTS | EVAL | WHEN | TA;

identifiers_chain: ic_identifier=identifier | ic_left=identifiers_chain '.' ic_right=identifiers_chain;

type_value: tv_single=identifiers_chain | tv_left=type_value tv_operation=test_op tv_right=type_value;

args: arg (',' arg)*;
arg: nls a_value=expr nls;
named_args: named_arg (',' named_arg)*;
named_arg: nls na_name=extended_identifier '=' na_value=expr nls;

params: param (nls ',' nls param)*;
param: (p_name=extended_identifier | p_array_destruction=array_destruction | p_object_destruction=object_destruction) p_type=type_value? ('=' p_value=param_value)?;
param_value: NUMBER #param_value_number
           | STRING #param_value_string
           | identifier #param_value_identifier;

body: body_element (nl body_element)*;
body_element: structure | mockup | diia | if | each | while | try | expr | throw | wait_assign | assign | eval | return_body_line | nls;
return_body_line: 'вернути' rbl=body_element;

arithmetic_op_mul: '*' | '/' | PERCENT | DIVDIV | POW;
arithmetic_op_add: '+' | '-';
bitwise_op: XOR | OR_BW | AND_BW | BW_SHIFT_LEFT | BW_SHIFT_RIGHT;
test_op: 'і' | 'або' | '||' | '&&';
comparison_op: '==' | '!=' | '>' | '<' | '>=' | '<=' | 'є' | 'не є' | 'рівно' | 'не рівно' | 'більше' | 'не більше' | 'менше' | 'не менше' | 'містить' | 'не містить' | 'не';

nl: NL;
nls: nl*;
