const db = require('../models')
const Roles = db.roles 

exports.findAll = (req, res) => {
  Roles.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};
