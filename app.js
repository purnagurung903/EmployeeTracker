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
      if (answer.action === "Add employer"){
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
        message: "Type employee role",
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
        manager_id: answer.manager_id,


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
  
}
        
       

        


      
    
