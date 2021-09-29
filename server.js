// Dependencies
// =============================================================
var express = require("express");
var path = require("path-posix");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 8080;

// Sets up the Express app to handle data parsing
// Middleware route
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// this line allows the server to look for and use the public directory
app.use(express.static("public"));

// Routes
// =========================================================
app.get("/blog", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/blog.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on http://localhost:" + PORT);
});
