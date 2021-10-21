var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const User = require("./models/User");

// MONGODB CONNECTION
const database_url = process.env.MONGO_URL;
mongoose.connect(database_url);
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});
db.once("open", () => console.log("database is running."));

app.use("/", usersRouter);

module.exports = app;
