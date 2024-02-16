const Transaction = require("../models/transactionModel");
const { User } = require("../models/userModel");
const Wallet = require("../models/walletModel");

module.exports = async () => {
  try {
    await User.sync({ alter: true });
    await Wallet.sync({ alter: true });
    await Transaction.sync({ force: true });
    console.log("All models synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing user model:", error);
  }
};
