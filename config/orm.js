// Require our connection file
var connection = require("./connection.js");

// Create our object which contains our SQL statements for export
var orm = {

    // Given a table, return all the rows
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(error, result) {
            if (error) {
                throw error;
            } else {
                cb(result);
            }
        });
    },

    // Insert one record into the database
    insertOne: function(table, col1, val1, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col1, val1], function(error, result) {
            if (error) {
                throw error;
            } else {
                cb(result);
            }
        })
    },

    // Update one record in the database
    updateOne: function(table, col1, val1, whereCol1, whereVal1, cb) {
        var queryString = "UPDATE ?? SET ??=? WHERE ??=?";
        connection.query(queryString, [table, col1, val1, whereCol1, whereVal1], function(error, result) {
            if (error) {
                throw error;
            } else {
                cb(result);
            }
        })
    }
}

// Export object for use within the application
module.exports = orm;
