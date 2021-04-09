CREATE TABLE IF NOT EXISTS users (
        "ID" serial PRIMARY KEY,
        "UserName" VARCHAR(50) NOT NULL,
        "Parent" INTEGER
);

INSERT INTO users ("ID", "UserName", "Parent")
VALUES(1, 'Ali', 2);
INSERT INTO users ("ID", "UserName", "Parent")
VALUES(2, 'Budi', 0);
INSERT INTO users ("ID", "UserName", "Parent")
VALUES(3, 'Cecep', 1);

SELECT usrChild."ID", usrChild."UserName", usrParent."UserName" FROM users usrChild
LEFT JOIN users usrParent ON usrChild ."Parent" = usrParent ."ID" ;