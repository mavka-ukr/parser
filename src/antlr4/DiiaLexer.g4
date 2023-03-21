lexer grammar DiiaLexer;

END: 'кінець';
DEF: 'дія';
STRUCTURE: 'структура';
TAKING: 'перебрати';
EQ: '==';
NOT_EQ: '!=';
GREATER: '>=';
SMALLER: '<=';
FOR: 'для';
IF: 'якщо';
WAIT: 'чекати';
TAKE: 'взяти';
GIVE: 'дати';
PAK: 'пак';
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
NOT_WORD: 'не';
STAR: '.*';

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
    | 'ʼ' ID_START
    ;

fragment ESCAPE_CHAR
    : '\\' [0btnfr"'\\]
    ;
