const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const errorHandler = require("./controllers/errorController");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.use("/api/v0/users", userRouter);
app.use("/api/v0/auth", authRouter);

app.use(errorHandler);

module.exports = app;
