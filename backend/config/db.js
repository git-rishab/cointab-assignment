const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("db", process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect:"mysql",
    "dialectOptions": {
        "ssl": {
          "rejectUnauthorized": true,
        }
    }
});

module.exports = {
    sequelize
}
