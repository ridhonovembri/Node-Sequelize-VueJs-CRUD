const user = require("../services/AgreementService");

exports.getAll = (req, res) => {
  user
    .getAll()
    .then((result) => {
      //console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.getAllByPaging = (req, res) => {
  // console.log('[controller] req.query', req.query)
  user
  .getAllByPaging(req.query)
  .then((result) => { 
    res.status(200).send(JSON.stringify(result))
  })
  .catch((e) => {
    throw e
  });
}

