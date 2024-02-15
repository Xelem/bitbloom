const { User } = require("../models/userModel");
const Wallet = require("../models/walletModel");

module.exports = async () => {
  try {
    await User.sync({ alter: true });
    await Wallet.sync({ alter: true });
    console.log("User, Wallet models synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing user model:", error);
  }
};
