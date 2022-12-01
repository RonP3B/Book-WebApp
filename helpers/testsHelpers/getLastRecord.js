const getLastRecord = async (model) => {
  let recordValue;

  try {
    const record = await model.findOne({
      order: [["createdAt", "DESC"]],
    });

    recordValue = record ? record.dataValues : null;

    console.log(recordValue);
  } catch (error) {
    console.log(`\n${error}\n`);
  }

  return recordValue;
};

module.exports = getLastRecord;
