const { DataTypes, Model } = require("sequelize");
const crypto = require("crypto");
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../database/db");
const { User } = require("./userModel");

class Wallet extends Model {
  static associations() {
    Wallet.belongsTo(User, { foreignKey: "walletAddress" });
  }
}

Wallet.init(
  {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    walletAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: () => crypto.randomBytes(32).toString("hex"),
    },
    availableBal: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    totalDeposit: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    totalWithdrawal: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Wallet",
  }
);

module.exports = Wallet;
