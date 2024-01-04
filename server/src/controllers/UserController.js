const UserModel = require('../models/userModel');

UserModel.create({
  name: 'olaMundoAlo',
  email: 'puts@maisumavez.com',
  emailVerified: true,
  password: '123456',
  phone: {
    number: '+555 635 498 12',
    verified: true
  }
})
  .then(dados => console.log(dados))
  .catch(e => console.log(e));