// const http = require("http");

// http
//      .createServer(function (req, res) {
//          console.log("Server")
//          res.write("Hello World!");
//          res.end();
//      })
//      .listen(8080);

// var fs = require('fs');

// fs.readFile('mynewfile1.txt', 'utf8', (err, data) => {
//          if (err) {
//              console.error(err);
//              return;
//          }
//          console.log(data);
//      });

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//      if (err) throw err;
//      console.log('Saved!');
// });

// fs.writeFile('mynewfile3.txt', 'This is my text 212121', function (err) {
//      if (err) throw err;
//      console.log('Replaced!');
// });

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

var http = require("http");
var url = require("url");
var fs = require("fs");

var EventEmitter = require("events");

const event = new EventEmitter();

let count = 0;

event.on("inc", () => {
  count++;
  console.log("count: ", count);
});

event.on("dec", () => {
  count--;
  console.log("count: ", count);
});

const serever = http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log("filename : ", q.pathname);
  if (q.pathname === "/mynewfile1.txt") event.emit("inc");
  else event.emit("dec");
  const fileData = fs.readFileSync(filename);
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(fileData);
  return res.end();
});

serever.listen(8080, () => console.log("Server Started successfully!"));
