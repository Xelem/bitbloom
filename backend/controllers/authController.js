const { User, validateUser } = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.signup = catchAsync(async (req, res, next) => {
  const { error } = validateUser(req.body);
  if (error) return next(new AppError(error.details[0].message, 400));

  const newUser = await User.create(req.body);

  console.log(newUser);
  res.send({
    status: "success",
    newUser,
  });
});
exports.login = (req, res) => {};
