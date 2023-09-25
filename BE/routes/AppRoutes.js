const express = require('express')
const route = express.Router()
const userController = require('../controllers/UserController')
const roleController = require('../controllers/RoleController')

route.get('/api/users', userController.findAll)
route.get('/api/userById/:id', userController.findByPk)
route.post('/api/user/post', userController.post)
route.put('/api/user/update/:id', userController.update);
route.delete('/api/user/delete/:id', userController.delete);

route.get('/api/roles', roleController.findAll)
route.get('/api/roleById/:id', roleController.findByPk)
route.get('/api/role/post', roleController.post)
route.get('/api/role/update/:id', roleController.update)
route.get('/api/role/delete/:id', roleController.delete)




module.exports = route;