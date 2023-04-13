lexer grammar DiiaLexer;

END: 'кінець';
DIIA: 'дія';
STRUCTURE: 'структура';
FOR: 'перебрати';
EQ: '==';
NOT_EQ: '!=';
GREATER_EQ: '>=';
SMALLER_EQ: '<=';
GREATER: '>';
SMALLER: '<';
IF: 'якщо';
WAIT: 'чекати';
TAKE: 'взяти';
TAKE_PAK: 'взяти пак';
TAKE_FILE: 'взяти файл';
GIVE: 'дати';
AS: 'як';
IS: 'є';
RETURN: 'вернути';
ASYNC: 'тривала';
AND: 'і';
OR: 'або';
TRY: 'спробувати';
CATCH: 'зловити';
ELSE: 'інакше';
THROW: 'впасти';
WHILE: 'поки';
MODULE: 'модуль';
TERNARY: '?';
EQ_WORD: 'рівно';
GR_WORD: 'більше';
SM_WORD: 'менше';
NOT_GR_WORD: 'не більше';
NOT_SM_WORD: 'не менше';
NOT_EQ_WORD: 'не рівно';
NOT_IS_WORD: 'не є';
HAS_IS_WORD: 'містить';
NOT_HAS_IS_WORD: 'не містить';
NOT_WORD: 'не';
STAR_ALL: '.*';
MOCKUP: 'макет';
IMPLEMENTS: 'втілює';
EVAL: 'js';
WHEN: 'коли';
TA: 'та';

SKIP_SPACES: ( ' ' | '\t' ) -> skip;
NL: ( '\r'? '\n' );
DECREMENT: '--';
INCREMENT: '++';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
OPEN_ARRAY: '[';
CLOSE_ARRAY: ']';
COMMA: ',';
ASSIGN: '=';
ASSIGN_PARENT: ':=';
ASSIGN_ADD: '+=';
ASSIGN_SUB: '-=';
ASSIGN_MUL: '*=';
ASSIGN_DIV: '/=';
ASSIGN_DIVDIV: '//=';
ASSIGN_MOD: '%=';
ASSIGN_BW_OR: '|=';
ASSIGN_BW_AND: '&=';
ASSIGN_BW_SHIFT_LEFT: '<<=';
ASSIGN_BW_SHIFT_RIGHT: '>>=';
ASSIGN_XOR: '^=';
ASSIGN_POW: '**=';
ASSIGN_OR: '||=';
ASSIGN_AND: '&&=';
ASSIGN_IF: '??=';
PLUS: '+';
MINUS: '-';
MUL: '*';
DIV: '/';
COLON: ':';
DOT: '.';
NOT: '!';
PERCENT: '%';
DIVDIV: '//';
POW: '**';
XOR: '^';
OR_SYM: '||';
AND_SYM: '&&';
OR_BW: '|';
AND_BW: '&';
BW_SHIFT_LEFT: '<<';
BW_SHIFT_RIGHT: '>>';
ID: ID_START ID_CONTINUE*;
NUMBER: FLOAT| INTEGER;
INTEGER: DIGIT+;
FLOAT: INTEGER '.' INTEGER;
STRING: '"' ( ~[\\"] | ESCAPE_CHAR )* '"';
LINE_COMMENT: ';;' (LINE_COMMENT | ~[\r\n])* -> skip;
COMMENT: ';--' (COMMENT | .)*? '--;' -> skip;

fragment DIGIT
    : '0'..'9'
    ;

fragment ID_START
    : 'a'..'z' | 'A'..'Z'
    | 'а'..'я' | 'А'..'Я' | 'і' | 'І' | 'ї' | 'Ї' | 'є' | 'Є' | 'ґ' | 'Ґ'
    | '_'
    ;

fragment ID_CONTINUE
    : ID_START
    | '0'..'9'
    | 'ʼ'
    | '\''
    | ID_START
    ;

fragment ESCAPE_CHAR
    : '\\' [0btnfr"'\\]
    ;
