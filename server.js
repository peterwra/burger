// Require express
var express = require("express");

// Require handlebars
var expresshbs = require("express-handlebars");

// Port for the application
var PORT = process.env.PORT || 3000;

// Set up express
var app = express();

// Server content for app (public directory)
app.use(express.static("public"));

// Use JSON and set handlebars
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", expresshbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

// Start the server
app.listen(PORT, function () {
    console.log("Server on: http://localhost:" + PORT);
});
