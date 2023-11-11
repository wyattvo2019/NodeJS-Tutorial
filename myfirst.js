// ======================================
// ======= 1. Use http module
// ======================================
// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.write('Hello World!');
//       res.end();
// }).listen(8080);

// ======================================
// ======= 2. Use custom module in myfirstmodule.js
// ======================================
// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// ======================================
// ======= 3. Read file use fs module
// ======================================
// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// ======================================
// ======= 4. append() file use fs module
// ======================================
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// ======================================
// ======= 5. open() file use fs module
// ======================================
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ======================================
// ======= 6. write() file use fs module
// ======================================
// var fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// ======================================
// ======= 7. delete file use fs module
// ======================================
// var fs = require('fs');

// fs.writeFile('mynewfile4.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// fs.unlink('mynewfile4.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// ======================================
// ======= 8. Rename file use fs module
// ======================================
// var fs = require('fs');

// fs.writeFile('mynewfile4.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
// fs.rename('mynewfile4.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });
// ======================================
// ======= 9. parse URL path use url module
// ======================================
// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

// ======================================
// ======= 11. Show file content base on URL path
// ======================================
// http://localhost:8080/summer.html
// http://localhost:8080/winter.html
// =======================================
// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// ======================================
// ======= 12. Use upper-case package down formn npm
// ======================================
//npm install upper-case
// change to use import() instead of require()
//======================
// import {createServer} from 'http';
// import { upperCase, localeUpperCase } from "upper-case";
// createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(upperCase("Hello World!"));
//   res.end();
// }).listen(8080);

// ======================================
// ======= 13. Event in Node JS
// ======================================
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }
// //Assign the eventhandler to an event:
// eventEmitter.on('scream', myEventHandler);
// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// ======================================
// ======= 14. Upload file
// ======================================
// const http = require('http');
// const formidable = require('formidable');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
//     const form = new formidable.IncomingForm();

//     // Specify the directory where uploaded files will be stored
//     form.uploadDir = path.join(__dirname, 'uploads');

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       var originalFilename,oldPath;
//       console.log(files)
//       const uploadedFiles = files.file;
      
//       uploadedFiles.forEach((uploadedFile) => {
//       originalFilename= uploadedFile.originalFilename;
//       oldPath=uploadedFile.filepath;
//         console.log(originalFilename);    
//       });
//       const newPath = path.join(form.uploadDir, originalFilename);

//       fs.rename(oldPath, newPath, (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }

//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('File uploaded successfully');
//       });
//     });
//   } else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <form action="/upload" method="post" enctype="multipart/form-data">
//         <input type="file" name="file">
//         <input type="submit" value="Upload File">
//       </form>
//     `);
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// ======================================
// ======= 15. Upload file follow W3 Tutorial
// ======================================
// const http = require('http');
// const formidable = require('formidable');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   if (req.url === '/upload' && req.method.toLowerCase() === 'post') {
//     const form = new formidable.IncomingForm();

//     // Specify the directory where uploaded files will be stored
//     form.uploadDir = path.join(__dirname, 'uploads');

//     form.parse(req, (err, fields, files) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       var originalFilename,oldPath;
//       console.log(files)
//       const uploadedFiles = files.file;
      
//       uploadedFiles.forEach((uploadedFile) => {
//       originalFilename= uploadedFile.originalFilename;
//       oldPath=uploadedFile.filepath;
//         console.log(originalFilename);    
//       });
//       const newPath = path.join(form.uploadDir, originalFilename);

//       fs.rename(oldPath, newPath, (err) => {
//         if (err) {
//           console.error(err);
//           return;
//         }

//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('File uploaded successfully');
//       });
//     });
//   } else {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end(`
//       <form action="/upload" method="post" enctype="multipart/form-data">
//         <input type="file" name="file">
//         <input type="submit" value="Upload File">
//       </form>
//     `);
//   }
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// ======================================
// ======= 16. SQL NodeJS
// ======================================
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // Query the database
//   var sql = "SELECT * FROM sys.sys_config";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });

// ======================================
// ======= 17. SQL NodeJS Create DB
// ======================================
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password"
// });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   /*Create a database named "mydb":*/
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// ======================================
// ======= 18. SQL NodeJS Create TABLE
// ======================================
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});