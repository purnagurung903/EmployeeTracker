var mysql = require("mysql");
var inquirer = require("inquirer");
// var express = require("express");

// const app = express();

// // create connection to mysql database

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "7Angelpa",
  database: "employeeTracker_DB"

});

// connect to mysql server and aql database

connection.connect(function(err) {
  if (err) throw err;
// run start function after the connection is made to prompt the user
  start();
})

// function which prompts the user for what action they should take

function start(){
  inquirer
    .prompt([{
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add employee",
        "Add department",
        "Add role",
        "Update info",
        "View info",
        "Delete info",
        "Exit"


      ]
    }
  ])// response to the action 
    .then(function(answer){
      if (answer.action === "Add employee"){
        addEmployee();
      }else if(answer.action === "Add department"){
        addDepartment()
      }else if(answer.action === "Add role"){
        addRole()
      }else if(answer.action === "Update info"){
        myUpdate()
      }else if(answer.action === "View info"){
        myView()
      }else if(answer.action === "Delete info"){
        myDelete()
      } else{
        connection.end();
      }

       
    
}   )} 

// function to handle if user choose Add employee

function addEmployee() {
  inquirer
   .prompt([
     {
       name: "first_name",
       type: "input",
       message: "Type employees first name",
      },
      {
       name: "last_name",
       type: "input",
       message: "Type employee last name",
      },
      {
        name: "role_id",
        type: "number",
        message: "Type employee role id",
      },
      {
        name: "manager_id",
        type: "number",
        message: "Type your manager id?",
      }
      
  ])
  .then(function(answer){
    //after prompting add a new item in db with that info
    connection.query(
      "INSERT INTO employee SET ?",
      {
        first_name: answer.first_name,
        last_name: answer.last_name,
        role_id: answer.role_id,
        manager_id: answer.manager_id


      },
      function(err){
        if (err) throw err;
        console.log("Employee was created!");
        start();
      }
    )
  })

}

function addDepartment(){
  inquirer
   .prompt({
     name: "department",
     type: "input",
     message: "Add a department",
   })
   .then(function (answer){
     connection.query(
       "INSERT INTO department (name) VALUES (?)",
       answer.department,
       function (err) {
         if (err) throw err;
         console.log(answer.department);
         start();
       }
     )
   })
}

function addRole(){
  inquirer
    .prompt([
      {
      name: "title",
      type: "input",
      message: "What is the title of the role?",


    },
    {
      name: "salary",
      type: "number",
      message: "How much is the salary?",
    },
    {
      name: "department_id",
      type: "number",
      message: "What is department id?",
    },
  ])
  .then(function(answer){
    connection.query(
      "INSERT INTO roles SET ?",
      {
        title: answer.title,
        salary: answer.salary,
        department_id: answer.department_id,
      },
      function (err) {
        if (err) throw err;
        console.log("the role is created");
        
        start();

      }
    )
  })

}

function myView(){
  inquirer
   .prompt({
     name: "view",
     type: "list",
     message: "What would you like to view?",
     choices: ["Department", "Roles", "Employees", "Exit"],

   })
   .then(function (answer){
     switch (answer.view) {
       case "Department":
         viewDepartment();
         break;
        case "Roles":
          viewRoles();
          break;
        case "Employees":
          viewEmployee();
          break;
        case "Exit":
          connection.end();
          break;
     }
   });
}

function viewDepartment(){
  connection.query("SELECT * FROM department", function (err, results){
    if (err) throw err;
    console.table(results);
    start();
  });
}

function viewRoles() {
  connection.query("SELECT roles.id, title, salary, department.name AS department FROM roles LEFT JOIN department 0N roles.department_id = department.id", function (err, results){
    if (err) throw err;
    console.table(results)
    start();
  })
}

function viewEmployee(){
  connection.query("SELECT employee.id, first_name, last_name, roles.title AS roles  FROM employee LEFT JOIN roles ON employee.role_id = roles.id", function (err, results){
    if (err) throw err;
    console.table(results)

    start();
  })
}


        
       

        


      
    
