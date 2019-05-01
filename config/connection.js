// Require mysql for use with our databse
var mysql = require("mysql");
var connection;

// Create our connection to the database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
}

// Connect to our database
connection.connect(function (error) {
    if (error) {
        console.log("Cannot connect to database: " + error.stack);
        return -1;
    } else {
        console.log("Connected as id: " + connection.threadId);
    }
});

// Export the connection so it can be used for the application
module.exports = connection;
