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
  const token = newUser.generateAuthToken();
  console.log(token);
  res
    .cookie("jwt", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .send({
      status: "success",
      user: _.omit(newUser.toJSON(), "password"),
    });
});

exports.login = catchAsync(async (req, res, next) => {
  const { emailAddress, password } = req.body;

  let user = await User.findAll({
    where: {
      emailAddress,
    },
  });

  if (user[0] === undefined) {
    return next(new AppError("Incorrect email or password", 400));
  }

  user = user[0];
  if ((await user.comparePasswords(password, user.password)) === false) {
    return next(new AppError("Incorrect email or password", 400));
  }

  const token = user.generateAuthToken();
  console.log(token);
  res
    .cookie("jwt", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    })
    .send({
      status: "success",
      user: _.omit(user.toJSON(), "password"),
    });
});
