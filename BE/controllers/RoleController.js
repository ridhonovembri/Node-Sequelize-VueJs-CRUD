const role = require("../services/RoleService");

exports.findAll = (req, res) => {
  role
    .findAll()
    .then((result) => {
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.findByPk = (req, res) => {
  const id = req.params.id;

  role
    .findByPk(id)
    .then((result) => {
      // console.log(result)
      res.status(200).send(JSON.stringify(result));
    })
    .catch({});
};

exports.post = (req, res) => {
  role
    .create(req.body)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Added", status: true });
    })
    .catch({});
};

exports.update = (req, res) => {
  const id = req.params.id;

  // console.log('BE: id', id)
  // console.log('BE: req.body', req.body)

  role
    .update(id, req.body)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Updated", status: true });
    })
    .catch({});
};

exports.delete = (req, res) => {
  const id = req.params.id;

  role
    .delete(id)
    .then((result) => {
      res.status(200).send({ message: "Row Has Been Deleted", status: true });
    })
    .catch({});
};
