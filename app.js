const express = require("express");

const app = express();
var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  port: 3306,
  database: "db",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  connection.query("SELECT * FROM `Products`;", (err, results) => {
    if (err) {
      res.json(err);
    }
    res.json(results);
  });
});

app.get("/products", async (req, res) => {
  connection.query("SELECT * FROM `Products`;", (err, results) => {
    if (err) {
      res.json(err);
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Listen to port 3000");
});
