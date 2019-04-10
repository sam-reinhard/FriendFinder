// NPM Dependencies
var express = require("express");
var path = require("path");

// Set up express app and let it handle data parsing
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// look up static path for express, might be the key to getting the css to load
app.use(express.static(__dirname + "/app/public")); //doesn't actually work...


// Require the routes for the api
require("./app/routing/apiRoutes.js")(app);

// Require the routes for the html
require("./app/routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function() {
    console.log("App listening, http://localhost:" + PORT);
});