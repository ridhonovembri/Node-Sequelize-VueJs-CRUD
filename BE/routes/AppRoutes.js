const express = require('express')
const route = express.Router()
const agreementController = require('../controllers/AgreementController')

route.get('/api/agreements', agreementController.getAll)
route.get('/api/agreementByPaging', agreementController.getAllByPaging)

module.exports = route;