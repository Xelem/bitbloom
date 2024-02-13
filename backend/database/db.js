const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "coingrove",
  "postgres",
  process.env.POSTGRES_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
};

module.exports = connectDB;
