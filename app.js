const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const routes = require("./routes/index");
const app = express();

require("./util/square-client");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, ".well-known")));

app.use("/", routes);

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render("error", {
    status: err.status,
    message: err.message,
    error: err.errors ? JSON.stringify(err.errors, null, 4) : err.stack
  });
});

module.exports = app;
