lexer grammar DiiaLexer;

DEF: 'дія';
END: 'кінець';
EACH: 'кожній';
TAKING: 'беручи';
STRUCTURE: 'структура';
EQ: '==';
NOT_EQ: '!=';
GREATER: '>=';
SMALLER: '<=';
YES: 'так';
NO: 'ні';
NONE: 'пусто';
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

SKIP_SPACES
 : ( ' ' | '\t' ) -> skip
 ;

NL
    : ( '\r'? '\n' )
    ;

OPEN_PAREN
    : '('
    ;

CLOSE_PAREN
    : ')'
    ;

OPEN_ARRAY
    : '['
    ;

CLOSE_ARRAY
    : ']'
    ;

COMMA
    : ','
    ;

ASSIGN
    : '='
    ;

PLUS
    : '+'
    ;

MINUS
    : '-'
    ;

MUL
    : '*'
    ;

DIV
    : '/'
    ;

COLON
    : ':'
    ;

DOT
    : '.'
    ;

NOT
    : '!'
    ;

ID
    : ID_START ID_CONTINUE*
    ;

NUMBER
    : FLOAT
    | INTEGER
    ;

INTEGER
    : DIGIT+
    ;

FLOAT
    : INTEGER '.' INTEGER
    ;

STRING
    : '"' STRING_SEQ*? '"'
    ;

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
    | '\'' ID_START
    ;

fragment STRING_SEQ
    : .
    ;
