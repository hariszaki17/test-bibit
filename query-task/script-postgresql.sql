CREATE TABLE IF NOT EXISTS users (
        "ID" serial PRIMARY KEY,
        "UserName" VARCHAR(50) NOT NULL,
        "Parent" INTEGER
);