const Joi = require("joi");
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory");

class User extends Model {}

User.init(
  {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
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
    uuid: Joi.string().required(),
    fullName: Joi.string().min(5).required(),
    emailAddress: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-z0-9]{8,100}$"))
      .trim()
      .required(),
    dateOfBirth: Joi.date(),
    country: Joi.string(),
  });

  return schema.validate(user);
}

module.exports = { User, validateUser };
