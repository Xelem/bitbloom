const { User } = require("../models/userModel");

module.exports = async () => {
  try {
    await User.sync({ alter: true });
    console.log("User model synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing user model:", error);
  }
};
