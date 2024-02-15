const Joi = require("joi");
const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const { sequelize } = require("../database/db");

class User extends Model {
  async comparePasswords(userPwd, currentHash) {
    return await bcrypt.compare(userPwd, currentHash);
  }

  generateEmailToken() {
    const emailToken = crypto.randomBytes(32).toString("hex");

    this.emailConfirmToken = crypto
      .createHash("sha256")
      .update(emailToken)
      .digest("hex");

    return emailToken;
  }

  generateAuthToken() {
    const token = jwt.sign({ uuid: this.uuid }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  }
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
      validate: {
        len: [8, 255],
      },
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
    emailConfirmToken: {
      type: DataTypes.STRING,
    },
    emailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
