CREATE TABLE IF NOT EXISTS users (
        "ID" serial PRIMARY KEY,
        "UserName" VARCHAR(50) NOT NULL,
        "Parent" INTEGER
);

INSERT INTO users ("ID", "UserName", "Parent")
VALUES(1, 'Ali', null);
INSERT INTO users ("ID", "UserName", "Parent")
VALUES(2, 'Budi', null);
INSERT INTO users ("ID", "UserName", "Parent")
VALUES(3, 'Cecep', null);