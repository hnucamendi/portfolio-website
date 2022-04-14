const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const axios = require("axios").default;
require("dotenv").config();

const SQL_PORT = process.env.SQL_PORT;
const SQL_PASSWORD = process.env.SQL_PASSWORD;
const CAT_API = process.env.CAT_API;
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "portfolio.ctul2xxq1xtc.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: SQL_PASSWORD,
  database: "portfolio_content",
});

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: SQL_PASSWORD,
//   database: "portfolio_content",
// });

db.connect((err) => {
  if (err) throw err;
  console.log("Connection Successful");
});

app.get("/", (req, res) => {
  db.query("SELECT * FROM portfolio", (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

// app.get("/api/cat", async (req, res) => {
//   const response = await axios.get(
//     `https://api.thecatapi.com/v1/images/search?${CAT_API}`
//   );
//   res.status(200).json(response.data);
// });

app.post("/form", (req, res) => {
  const userName = req.body.userName;
  const userEmail = req.body.userEmail;
  const userMessage = req.body.userMessage;

  db.query(
    "INSERT INTO user_form(name, email, message)VALUES (?,?,?)",
    [userName, userEmail, userMessage],
    (err, result) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});

app.listen(SQL_PORT, () => {
  console.log(`Listening on port ${SQL_PORT}`);
});
