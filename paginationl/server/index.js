const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./userData.js");
app.use(cors());
app.get("/", (req, res) => {
  const { q } = req.query;
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((user) => {
      return keys.some((key) => user[key].toLowerCase().includes(q));
    });
  };
  res.json(search(users).splice(0, 20));
  console.log("log");
});

app.listen(8080, (err) => {
  !err ? console.log("started server listening") : console.log(err);
});
