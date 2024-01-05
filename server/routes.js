const express = require('express');
const route = express.Router();

//Controllers
const UserController = require('./src/controllers/UserController');

route.get('/', UserController.index)
route.post('/', UserController.test)

module.exports = route;