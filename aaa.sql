
-- Table: sxs_poem_list
CREATE TABLE sxs_poem_list ( 
    id        INTEGER PRIMARY KEY ASC AUTOINCREMENT
                      UNIQUE,
    author    VARCHAR,
    content   TEXT,
    translate TEXT,
    level     INTEGER DEFAULT ( 0 ),
    title     VARCHAR,
    pid       INTEGER,
    typeid    INTEGER,
    url       VARCHAR 
);

