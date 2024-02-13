const express = require("express");
const morgan = require("morgan");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

// app.use('/api/v0/users', )

module.exports = app;
