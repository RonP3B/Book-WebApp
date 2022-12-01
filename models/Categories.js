const Sequelize = require("sequelize");
const sequelizeObj = require("../util/databaseObj");

const Categories = sequelizeObj.define("categories", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Categories;
