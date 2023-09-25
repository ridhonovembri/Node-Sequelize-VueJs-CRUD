const db = require("../models");

exports.findAll = async () => {
  try {
    const result = await db.roles.findAll({
    });

    // console.log('result', result)

    return result;
  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {
    const result = await db.roles.findByPk(id);

    return result;
  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  try {
    const result = await db.roles.create(data);
    return result;
  } catch (e) {
    throw e;
  }
};

exports.update = async (id, data) => {

  // console.log('BE service: id', id)
  // console.log('BE: data service', data)

  try {
    const result = await db.roles.update(data, {
      where: { Id: id },
    });
  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
//   console.log("destroy==>", id);
  try {
    const result = await db.roles.destroy({
      where: { Id: id },
    });
    return result;
  } catch (e) {
    throw e;
  }
};
