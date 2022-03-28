const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();

const SQL_PORT = process.env.SQL_PORT;
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "portfolio_content",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connection Successful");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM portfolio", (err, result) => {
    if (err) {
      throw err;
    }
    res.status(200).send(result);
  });
});

app.listen(SQL_PORT, () => {
  console.log(`Listening on port ${SQL_PORT}`);
});
