const db = require("../models");
const { QueryTypes } = require("sequelize");

exports.getAll = async () => {
  //   console.log('services')
  try {
    const data = await db.sequelize.query(
      "SELECT * FROM interface.mdr_exported_agreements ORDER BY last_update DESC FETCH FIRST 100 ROWS ONLY;",
      {
        type: QueryTypes.SELECT,
      }
    );
    //console.log(data);

    return data;
  } catch (e) {
    throw e;
  }
};

exports.getAllByPaging = async (query) => {
  // console.log("[services] query", query);

  // const { parseInt(page), size } = query;
  const page = parseInt(query.page);
  const size = parseInt(query.size);

  const { limit, offset } = getPagination(page, size);

  // console.log("[service] limit", limit);
  // console.log("[service] offset", offset);

  try {

    // const count = await db.sequelize
    //   .query(`SELECT COUNT(*) as total FROM interface.mdr_exported_agreements`, {
    //     type: QueryTypes.SELECT,
    //   })

    // const totalItems = await count[0].TOTAL
    const totalItems = await getRowCount()


    // console.log('totalItems', totalItems[0].TOTAL)

    // console.log('totalItems', totalItems)

    const data = await db.sequelize.query(
      `SELECT * FROM interface.mdr_exported_agreements ORDER BY last_update, po_number, poli_id OFFSET ${offset} ROWS FETCH NEXT ${limit} ROWS ONLY `,
      {
        type: QueryTypes.SELECT,
      }
    );
    
    // console.log('totalItems', totalItems)

    // console.log('[service] data =>', data)
    // console.log("[service] page", page);
    // console.log("[service] limit", limit);

    const response = getPagingData(data, page, limit, totalItems[0].TOTAL);

    // console.log('response', response)
    // res.send(response);
    return response;
  } catch (e) {
    throw e;
  }
};

const getPagingData = (data, page, limit, totalItems) => {
  // const totalItemsx = 12903; //getRowCount()

  // const { count: totalItems, rows: agreements } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  // console.log("[service] totalItems", totalItems);
  // // console.log('[service] data', data)
  // console.log("[service] totalPage", totalPages);
  // console.log("[service] currentPage", currentPage);

  return { totalItems, data, totalPages, currentPage, limit };
};

const getRowCount = async () => {
  try {
    const count = await db.sequelize.query(
      `SELECT COUNT(*) as TOTAL FROM interface.mdr_exported_agreements`,
      {
        type: QueryTypes.SELECT,
      }
    );
    return count;
  } catch (e) {
    throw e;
  }
};

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit - size : 0;

  return { limit, offset };
};
