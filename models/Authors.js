const Sequelize = require("sequelize");
const sequelizeObj = require("../util/databaseObj");

const Authors = sequelizeObj.define("authors", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Authors;
