var mysql = require("mysql");
var inquirer = require("inquirer");
var express = require("express");

const app = express();

// create connection to mysql database

var connection = mysql.createConnection({
  host: "localhost",
  port: "root",
  password: "",
  database: "employeeTracker_DB"

});

// connect to mysql server and aql database

connection.connect(function(err) {
  if (err) throw err;
// run start function after the connection is made to prompt the user
  Start();
})

// function which prompts the user for what action they should take

function start(){
  inquirer
    .prompt({
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
    })// response to the action 
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
        
       

        


      
    
