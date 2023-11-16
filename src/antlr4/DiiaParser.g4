parser grammar DiiaParser;

options {
    tokenVocab=DiiaLexer;
}

file: f_program=program EOF;

program: program_element (nl program_element)*;
program_element: module | structure | mockup | diia | if | each | while | try | expr | throw | eval | wait_assign | assign | nls | take | give;

module: 'модуль' (m_name=identifier)? nl (m_body=module_body nl)? nls 'кінець';
module_body: module_body_element (nl module_body_element)*;
module_body_element: module | structure | mockup | diia | if | each | while | try | expr | throw | wait_assign | assign | nls | give;

method_declaration: md_name=identifier '(' (nls md_params=params? nls) ')' (md_type=type_value)?;

structure: 'структура' s_name=identifier ('є' s_parent=identifiers_chain)? nl (s_elements=structure_elements nl)? nls 'кінець';
structure_elements: structure_element (nl structure_element)*;
structure_element: structure_param | nls;
structure_param: sp_name=identifier sp_type=type_value? ('=' sp_value=structure_param_value)?;
structure_param_value: NUMBER | STRING | identifier;

mockup: mockup_object | mockup_structure | mockup_module | mockup_diia;
mockup_object: 'макет' mo_name=identifier (mo_type=type_value | (nl nls (mo_elements=mockup_body nl)? nls 'кінець'));
mockup_structure: 'макет' 'структура' ms_name=identifier nl nls (ms_elements=mockup_body nl)? nls 'кінець';
mockup_module: 'макет' 'модуль' mm_name=identifier nl nls (mm_elements=mockup_body nl)? nls 'кінець';
mockup_diia: 'макет' (md_async='тривала')? 'дія' '(' ( nls md_params=params? nls ) ')' (md_type=type_value)?;
mockup_body: mockup_body_element (nl mockup_body_element)*;
mockup_body_element: structure_param | method_declaration | nls;

diia: (d_async='тривала')? 'дія' (d_structure=identifier '.')? d_name=identifier '(' ( nls d_params=params? nls ) ')' (d_type=type_value)? nl (d_body=body nl)? nls 'кінець';

if: 'якщо' i_value=expr nl (i_body=body nl)? ((('інакше' i_else_body=body nl)? 'кінець') | ('інакше' i_else_if=if));

each: 'перебрати' (e_iterator=expr | e_fromto=fromto) 'як' (e_key_name=identifier ',')? e_name=identifier? nl (e_body=body nl)? 'кінець';

fromto: f_from=fromto_value '..' (f_symbol=fromto_symbol)? f_to=fromto_value ('..' f_middle=fromto_middle)?;
fromto_value: NUMBER #fromto_number
            | STRING #fromto_string
            | identifier #fromto_id
            | '(' fn_value=value ')' #fromto_nested;
fromto_middle: '(' fi_value=value ')';
fromto_symbol: '!=' | '==' | '>' | '<' | '>=' | '<=';

while: 'поки' w_value=expr nl (w_body=body nl)? 'кінець';

eval: 'js' e_value=value;

try: 'спробувати' nl t_body=body nl 'зловити' tc_name=identifier? (tc_body=body nl)? 'кінець';

take: 'взяти' (tm_relative='.')? tm_elements_chain=identifiers_chain (tm_star='.*')? ('як' tm_as=identifier)? #take_module
    | 'взяти файл' tf_name=STRING 'як' tf_as=identifier #take_file
    | 'взяти' tr_url=STRING ('як' tr_as=identifier)? #take_remote;

give: 'дати' give_element (',' give_element)*;
give_element: ge_name=identifier ('як' ge_as=identifier)?;

string: STRING | STRING_MULTILINE;

value: NUMBER #number
     | string #string_value
     | identifier #id
     | c_left=value nls '.' nls c_right=extended_identifier #chain
     | c_value=value '(' (c_args=args | c_named_args=named_args)? ')' #call
     | '+' p_value=value  #positive
     | '-' n_value=value  #negative
     | DECREMENT pd_value=value  #pre_decrement
     | INCREMENT pi_value=value  #pre_increment
     | pd_value=value DECREMENT #post_decrement
     | pi_value=value INCREMENT #post_increment
     | '!' n_value=value  #not
     | '~' bn_value=value  #bitwise_not
     | a_left=value '[' a_element=expr ']' #get_element
     | '(' n_value=expr ')' #nested
     | '(' c_value=expr ')' '(' (c_args=args | c_named_args=named_args)? ')' #call_expr
     | a_left=value 'як' a_right=value #as
     | a_left=value a_operation=arithmetic_op_mul a_right=value #arithmetic_mul
     | a_left=value a_operation=arithmetic_op_add a_right=value #arithmetic_add
     | b_left=value b_operation=bitwise_op b_right=value #bitwise
     | c_left=value c_operation=comparison_op c_right=value #comparison
     | t_left=value t_operation=test_op t_right=value #test
     | t_value=value nls '?' nls t_positive=expr nls ':' nls t_negative=expr #ternary
     | '[' a_elements=array_elements? ']' #array
     | '(' d_args=dictionary_args? ')' #dictionary
     | value ('та' value)+ #god
     ;

array_elements: nls array_element nls (nls ',' nls array_element nls)*;
array_element: ae_value=expr;

dictionary_args: dictionary_arg (',' dictionary_arg)*;
dictionary_arg: nls (da_name_id=identifier | da_name_string=STRING) '=' da_value=expr nls;

expr: value #simple
    | 'чекати' w_value=value #wait
    | (f_async='тривала')? '(' f_params=params? ')' f_type=type_value? ':' f_body=expr #function
    | (d_async='тривала')? 'дія' '(' ( nls d_params=params? nls ) ')' (d_type=type_value)? nl (d_body=body nl)? nls 'кінець' #anonymous_diia
    ;

throw: 'впасти' t_value=expr;

array_destruction: '[' nls array_destruction_el nls (nls ',' nls array_destruction_el nls)* ']';
array_destruction_el: ade_id=identifier;

object_destruction: '(' object_destruction_el (',' object_destruction_el)* ')';
object_destruction_el: nls ode_id=identifier nls;

assign: assign_simple | assign_define | assign_complex | assign_array_destruction | assign_object_destruction;
assign_simple: (as_subject='субʼєкт')? as_identifier=identifier (as_type=type_value)? as_symbol=assign_symbol as_value=expr;
assign_define: 'субʼєкт' as_identifier=identifier (as_type=type_value)?;
assign_complex: ac_left=assign_complex_left ac_right=assign_complex_right ac_symbol=assign_symbol ac_value=expr;
assign_complex_left: acl_chain=identifiers_chain | acl_left=assign_complex_left '[' acl_element=expr ']';
assign_complex_right: ('.' acr_identifier=identifier) | ('[' acr_element=expr ']');
assign_array_destruction: aad_array_destruction=array_destruction '=' aad_value=expr;
assign_object_destruction: aod_object_destruction=object_destruction '=' aod_value=expr;
assign_symbol: 'це' | '=' | ':=' | '+=' | '-=' | '*=' | '/=' | '//=' | '%=' | '**=' | '&=' | '|=' | '<<=' | '>>=' | '^=' | '&&=' | '||=' | '??=';
wait_assign: 'чекати' wa_assign=assign;

identifier: ID;
extended_identifier: ID | END | DIIA | STRUCTURE | FOR | IF | WAIT | TAKE | GIVE | AS | IS | RETURN | ASYNC | AND | OR | TRY | CATCH | ELSE | THROW | WHILE | MODULE | EQ_WORD | GR_WORD | SM_WORD | MOCKUP | IMPLEMENTS | EVAL | WHEN | TA;

identifiers_chain: ic_identifier=identifier | ic_left=identifiers_chain '.' ic_right=identifiers_chain;

type_value: (tv_array=type_value_array)? tv_single=identifiers_chain | tv_left=type_value tv_operation=test_op tv_right=type_value;
type_value_array: '[' ']';

args: arg (',' arg)*;
arg: nls (a_spread='...')? a_value=expr nls;
named_args: named_arg (',' named_arg)*;
named_arg: nls na_name=identifier '=' na_value=expr nls;

params: param (nls ',' nls param)*;
param: ((p_spread='...')? p_name=identifier | p_array_destruction=array_destruction | p_object_destruction=object_destruction) p_type=type_value? ('=' p_value=param_value)?;
param_value: NUMBER | STRING | identifier;

body: body_element_or_return (nl body_element_or_return)*;
body_element_or_return: body_element | return_body_line;
body_element: if | each | while | try | expr | throw | wait_assign | assign | nls;
return_body_line: 'вернути' rbl=body_element;

arithmetic_op_mul: '*' | '/' | PERCENT | DIVDIV | POW;
arithmetic_op_add: '+' | '-';
bitwise_op: XOR | OR_BW | AND_BW | BW_SHIFT_LEFT | BW_SHIFT_RIGHT;
test_op: 'і' | 'або' | '||' | '&&';
comparison_op: '==' | '!=' | '>' | '<' | '>=' | '<=' | 'є' | 'не є' | 'рівно' | 'не рівно' | 'більше' | 'не більше' | 'менше' | 'не менше' | 'містить' | 'не містить';

nl: NL;
nls: nl*;
