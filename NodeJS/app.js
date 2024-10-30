// we are "importing" the http package from node
// const http = require("http");

// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.end("<h1>Hello World!</h1>");
//   }
// }

// //  we are creating a server
// const server = http.createServer(handleRequest);

// //  we are listening to the server
// server.listen(3000);

//  REDOING THE BAOVE TASK USING EXPRESS

// importing fs (core package)

const fs = require("fs");
const path = require("path");

// importing express
const express = require("express");
const e = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); //localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name: </label><input type="text" name="username"><button>submit</button></form>'
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  const filePath = path.join(__dirname, "data", "users.json");
  // reading the array as a raw string and converting it to a JSON
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  // adding the username into the array
  existingUsers.push(userName);
  //converting JSON array back to a string
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  //
  console.log(userName);
  res.send("<h1>Username sorted!</h1>");
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json");
  // reading the array as a raw string and converting it to a JSON
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";

  res.send(responseData);
});

app.listen(3000);
