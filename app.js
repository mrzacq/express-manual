const express = require("express");

const { connectionMySql } = require("./connection");

const app = express();
const { getCatalogs } = require("./controllers/catalog.controller");

connectionMySql.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connectionMySql.threadId);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  connectionMySql.query("SELECT * FROM `Products`;", (err, results) => {
    if (err) {
      res.json(err);
    }
    res.json(results);
  });
});

app.get("/products", async (req, res) => {
  connectionMySql.query("SELECT * FROM `Products`;", (err, results) => {
    if (err) {
      res.json(err);
    }
    res.json(results);
  });
});

app.get("/catalogs", getCatalogs);

app.listen(3000, () => {
  console.log("Listen to port 3000");
});
