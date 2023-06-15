var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  port: 3306,
  database: "db",
});

module.exports = { connectionMySql: connection };
