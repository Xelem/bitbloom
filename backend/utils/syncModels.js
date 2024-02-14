const { User } = require("../models/userModel");

module.exports = async () => {
  try {
    await User.sync();
    console.log("User model synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing user model:", error);
  }
};
