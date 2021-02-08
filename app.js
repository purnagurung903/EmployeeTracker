var mysql = require("mysql");
var inquirer = require("inquirer");
var express = require("express");

const app = express();

// create connection to mysql database

var connection = mysql.createConnection({
  host: "localhost",
  port: "root",
  password: "",
  database: "top_songsDB"

});
