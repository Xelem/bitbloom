const { User, validateUser } = require("../models/userModel");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const { error } = validateUser(req.body);
  if (error) return next(new AppError(error.details[0].message, 400));

  const { fullName, emailAddress, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await User.create({
    fullName,
    emailAddress,
    password: hashedPassword,
  });

  res.send({
    status: "success",
    user: _.omit(newUser.toJSON(), "password"),
  });
});

exports.login = (req, res) => {};
