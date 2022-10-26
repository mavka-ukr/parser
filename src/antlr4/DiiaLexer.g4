lexer grammar DiiaLexer;

DEF: 'дія';
END: 'кінець';
EACH: 'кожному';
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

fragment SPACES
 : [ \t]+
 ;

fragment LINE_JOINING
 : '\\' SPACES? ( '\r'? '\n' | '\r' | '\f')
 ;

SKIP_SPACES
 : ( SPACES ) -> skip
 ;

NL
    : '\r'? '\n'
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

NAME
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
    : '"' STRING_SEQ* '"'
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
    | '\''
    ;

fragment STRING_SEQ
    : .
    ;
