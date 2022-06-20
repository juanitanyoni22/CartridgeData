const express = require("express"),
  bodyparser = require("body-parser"),
  app = express().use(bodyparser.urlencoded());
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");

require("dotenv").config();

/* Database Connection */

const databaseName = "cartridges";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbname: databaseName,
};
const uri = process.env.MONGODB_URI;

let connection = mongoose.connect(uri || process.env.DB_URI, options);

const database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", async function () {
  //wait for db to connect before running server
  console.log(`DAtabase connection established  and checking`);
  app.listen(PORT, () => {
    console.log("LISTEN ON" + PORT);
  });

  app.get("/upload", (req, res) => {
    console.log(req.body);
    res.send(req.body);
  });
});
