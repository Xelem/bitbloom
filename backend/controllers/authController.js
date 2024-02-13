const { User, validateUser } = require("../models/userModel");

exports.signup = (req, res) => {
  try {
    const { error } = validateUser(req.body);
    if (error) return res.send(error);
    console.log(req.body);
  } catch (error) {
    console.error(error);
  }
};
exports.login = (req, res) => {};
