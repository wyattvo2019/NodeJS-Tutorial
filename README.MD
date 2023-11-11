```
Main file is myfirst.js
##Node.js is an open source server environment
##Node.js is free
##Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
##Node.js uses JavaScript on the server
##Node.js uses asynchronous programming
##Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

#What Can Node.js Do?
##Node.js can generate dynamic page content
##Node.js can create, open, read, write, delete, and close files on the server
##Node.js can collect form data
##Node.js can add, delete, modify data in your database

#What is a Module in Node.js?
##Consider modules to be the same as JavaScript libraries.
##A set of functions you want to include in your application.

# Read file
##fs.readFile()

# Create file
## appendFile()
## open()
## writeFile()

# Update file
## appendFile()
## writeFile()

# Delete File
## unlink()

# Rename file
## rename()

# URL module
## parse()

# What is NPM?
## NPM is a package manager for Node.js packages, or modules if you like.

# What is a Package?
##A package in Node.js contains all the files you need for a module.
##Modules are JavaScript libraries you can include in your project.

# Using a package
## require('package-name')

# Event in Node JS
## EventEmitter()

# Upload file
## npm install formidable
## Step 1: Create an Upload Form
## Step 2: Parse the Uploaded File
## Step 3: Save the File

# Node JS MySQL
##  Create connection
### var mysql = require('mysql');
### var con = mysql.createConnection
### con.connect

## Create DB
### con.query

## Create TABLE
### var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
### con.query
### var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
### Differnet between DELETE, TRUNCATE, DROP TABLE

## Insert into table
###   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";

## Insert Multiple Records to DB

## Select from DB
###   con.query("SELECT * FROM customers", function (err, result, fields) {

## Where from DB
###   var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
###   var sql = "SELECT * FROM customers WHERE address LIKE 'S%'";

## Order By
### ORDER BY ASC con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
### ORDER BY DESC

## Drop table
### Drop var sql = "DROP TABLE customers";
### Drop if exist var sql = "DROP TABLE IF EXISTS customers";

## Update table
### var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";

## Limit the results
### var sql = "SELECT * FROM customers LIMIT 5";

## JOIN
### JOIN  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
### LEFT JOIN var sql = "SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products ON users.favorite_product = products.id";
### RIGHT JOIN   var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";








```