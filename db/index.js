const { Sequelize } = require("sequelize");

// Option 1: Passing a connection URI
const sequelize = new Sequelize("mysql://root:seven@localhost:3306/TeachMe"); // Example for mysql

module.exports = sequelize;