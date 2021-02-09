DROP DATABASE IF EXISTS employeeTracker_DB;
Create DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE roles (

  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER,
  manager_id INTEGER,
  PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES ("Engineering");
INSERT INTO department (name) VALUES ("Teaching");
INSERT INTO department (name) VALUES ("Restaurant");

SELECT * FROM department;

INSERT INTO roles (title, salary, department_id) VALUES ("engineer", 10000, 1);
INSERT INTO roles (title, salary, department_id) VALUES ("Teacher", 4000, 2);
INSERT INTO roles (title, salary, department_id) VALUES ("chef",95000, 3);

SELECT roles.id, title, salary, department.name AS department  FROM roles LEFT JOIN department ON roles.department_id = department.id;

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Purna", "Gurung", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Doe", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Peter", "Rabbit", 3, 3);


SELECT employee.id, first_name, last_name, roles.title AS roles  FROM employee LEFT JOIN roles ON employee.role_id = roles.id;


