CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employee(
	id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES
    (1, 'Sotero', 3216),
    (2, 'Mercedes', 6000)


    DELETE FROM employee
WHERE id = 3, 4, 5;