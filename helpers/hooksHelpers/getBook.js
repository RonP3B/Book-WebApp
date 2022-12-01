const { Books } = require("../../exports/models");

const getBook = async (id) => {
  let res;

  try {
    res = await Books.findOne({ where: { id } });
  } catch (error) {
    console.log(`\n${error}\n`);
  }

  return res ? res.dataValues : null;
};

module.exports = getBook;
