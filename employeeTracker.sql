DROP DATABASE IF EXISTS employeeTracker_DB;
Create DATABASE employeeTracker_DB;

USE employeeTracker_DB;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)

);

CREATE TABLE role (

  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
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


