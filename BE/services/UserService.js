const db = require("../models");

exports.findAll = async () => {
  try {
    const result = await db.users.findAll({
      // orderBy: [["NamaClient","ASC"]]
    });

    console.log('result', result)

    return result;
  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {
    const result = await db.users.findByPk(id);

    return result;
  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  try {
    const result = await db.users.create(data);
    return result;
  } catch (e) {
    throw e;
  }
};

exports.update = async (id, data) => {

  console.log('BE service: id', id)
  console.log('BE: data service', data)

  try {
    const result = await db.users.update(data, {
      where: { Id: id },
    });
  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
//   console.log("destroy==>", id);
  try {
    const result = await db.users.destroy({
      where: { Id: id },
    });
    return result;
  } catch (e) {
    throw e;
  }
};
