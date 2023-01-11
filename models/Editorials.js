const Sequelize = require("sequelize");
const sequelizeObj = require("../util/databaseObj");

const Editorials = sequelizeObj.define("editorials", {
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },

  user_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  phone: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  country: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Editorials;
