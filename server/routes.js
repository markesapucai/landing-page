const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router();

route.use(bodyParser.json());

//Controllers
const UserController = require('./src/controllers/UserController');

route.get('/', UserController.index);

route.post('/register', (req, res) => {
  UserController.register(req.body);
});

route.post('/login', (req, res) => {
  UserController.login(req.body);
});

//route.post('/register', UserController.index); // Cadastrar no banco de dados aqui

module.exports = route;