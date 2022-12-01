const Sequelize = require("sequelize");
const sequelizeObj = require("../util/databaseObj");

const Books = sequelizeObj.define("books", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  image: {
    type: Sequelize.TEXT("long"),
    allowNull: false,
  },

  publish_year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Books;
