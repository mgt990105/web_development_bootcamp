const path = require("path");

const express = require("express");

const app = express();

// importing other files that have functions

//  importing routes
const defaultRoutes = require("./routes/default");
const restauarntsRoutes = require("./routes/restaurants");

//  importing EJS

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));

// this is how we bring in the endex and about ejs
app.use("/", defaultRoutes);

// this is how we bring in the restaurant ejs
app.use("/", restauarntsRoutes);

//  add custom middlewear (some functionality that executes on multiple incoming request) to handle a "catch all" 404 page. app.use() handles every incoming requests.

app.use(function (req, res) {
  res.status(404).render("404");
});

// adding a middlewear for the 500 errpr (server side errors)
app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

app.listen(3000);
