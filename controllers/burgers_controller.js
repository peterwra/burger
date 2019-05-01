// Require express
var express = require("express");

// The router to handle the requests
var router = express.Router();

// Get our burger model
var burger = require("../models/burger.js");

// Get all the burgers in the database
router.get("/", function(request, response) {
    burger.selectAll(function(data) {
        var dbData = {
            burgers: data
        };
        console.log(dbData);
        response.render("index", dbData);
    });
});

// Insert a new burger record into the database
router.post("/api/burgers", function(request, response) {
    burger.insertOne("burger_name", request.body.burger_name, function(result) {
        response.json("Successfully created new burger!");
    });
});

// Devour a burger from the list
router.put("/api/burgers/:id", function(request, response) {
    var burgerId = request.params.id;
    var devouredState = request.body.devoured;
    console.log("Burger Id: " + burgerId);
    burger.updateOne("devoured", devouredState, "id", burgerId, function(result) {
        // Check for updated rows
        if (result.changedRows == 0) {
            response.status(404).end();
        } else {
            response.status(200).end();
        }
    });
});

// Export router for the server to use
module.exports = router;
