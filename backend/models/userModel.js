const Joi = require("joi");
const { DataTypes, Model } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../database/db");

class User extends Model {
  // hashPassword
}

User.init(
  {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => uuidv4(),
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    country: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
  }
);

function validateUser(user) {
  const schema = Joi.object({
    fullName: Joi.string().min(5).required(),
    emailAddress: Joi.string().email().required(),
    password: Joi.string().min(8).trim().required(),
    dateOfBirth: Joi.date(),
    country: Joi.string(),
  });

  return schema.validate(user);
}

module.exports = { User, validateUser };
