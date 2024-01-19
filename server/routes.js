require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const route = express.Router();
const jwt = require('jsonwebtoken');

route.use(bodyParser.json());

//Controllers
const UserController = require('./src/controllers/UserController');

route.get('/', UserController.index);

route.post('/register', (req, res) => {
  UserController.register(req.body);
});

route.post('/login', (req, res) => {
  const { email } = { ...req };

  if(UserController.login(req.body)) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
    return true
  }

});

//route.post('/register', UserController.index); // Cadastrar no banco de dados aqui

module.exports = route;