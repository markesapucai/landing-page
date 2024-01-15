const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router();

route.use(bodyParser.json());

//Controllers
const UserController = require('./src/controllers/UserController');

route.get('/', UserController.index);

route.post('/test', (req, res) => {
  console.log(JSON.stringify(req.body));
  console.log(req.body);
  UserController.test(req.body);
});

route.post('/register', UserController.index); // Cadastrar no banco de dados aqui

module.exports = route;