const db = require("../models");

exports.findAll = async () => {
  console.log('employee service')
  try {
    const result = await db.employees.findAll({
      // orderBy: [["NamaClient","ASC"]]
    });

    // console.log('result', result)

    return result;
  } catch (e) {
    throw e;
  }
};

exports.findByPk = async (id) => {
  try {
    const result = await db.employees.findByPk(id);

    return result;
  } catch (e) {
    throw e;
  }
};

exports.create = async (data) => {
  try {
    const result = await db.employees.create(data);
    return result;
  } catch (e) {
    throw e;
  }
};

exports.update = async (id, data) => {

  // console.log('BE service: id', id)
  // console.log('BE: data service', data)

  try {
    const result = await db.employees.update(data, {
      where: { Id: id },
    });
  } catch (e) {
    throw e;
  }
};

exports.delete = async (id) => {
//   console.log("destroy==>", id);
  try {
    const result = await db.employees.destroy({
      where: { Id: id },
    });
    return result;
  } catch (e) {
    throw e;
  }
};
