const { Editorials, Categories, Authors } = require("../../exports/models");

const getSelectValues = async (req) => {
  const editorialsRes = await Editorials.findAll({ where: { user_id: req.session.user.id } });
  const categoriesRes = await Categories.findAll({ where: { user_id: req.session.user.id } });
  const authorRes = await Authors.findAll({ where: { user_id: req.session.user.id } });

  const editorials = editorialsRes.map((res) => res.dataValues);
  const categories = categoriesRes.map((res) => res.dataValues);
  const authors = authorRes.map((res) => res.dataValues);

  return { editorials, categories, authors };
};

module.exports = getSelectValues;
