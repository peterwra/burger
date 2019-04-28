// Import ORM that allows us to send commands to the database
var orm = require("../config/orm.js");

var burger = {
    // Get all data from the table
    selectAll: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },

    // Insert a record into the table
    insertOne: function(col1, val1, cb) {
        orm.insertOne("burgers", col1, val1, function(result) {
            cb(result);
        });
    },

    // Update a record in the table
    updateOne: function(col1, val1, whereCol1, whereVal1, cb) {
        orm.updateOne("burgers", col1, val1, whereCol1, whereVal1, function(result) {
            cb(result);
        });
    }
};

// Export the variable for use with the program controller
module.exports = burger;
