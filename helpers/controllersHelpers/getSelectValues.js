const { Editorials, Categories, Authors } = require("../../exports/models");

const getSelectValues = async () => {
  const editorialsRes = await Editorials.findAll();
  const categoriesRes = await Categories.findAll();
  const authorRes = await Authors.findAll();

  const editorials = editorialsRes.map((res) => res.dataValues);
  const categories = categoriesRes.map((res) => res.dataValues);
  const authors = authorRes.map((res) => res.dataValues);

  return { editorials, categories, authors };
};

module.exports = getSelectValues;
