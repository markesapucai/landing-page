const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    lowercase: true
  },
  password: String,
  month: Number,
  day: Number,
  year: Number,
});

const UserModel = mongoose.model('User', UserSchema);

class User {
  async test(reqBody) {
    await UserModel.create(reqBody)
      .then(dados => console.log(dados))
      .catch(e => console.error(e))
  }
}

module.exports = User;



// OBJ test
/*
{
      
      name: 'olaMundoAlo',
      email: 'puts@maisumavez.com',
      emailVerified: true,
      password: '123456',
      phone: {
        number: '+555 635 498 12',
        verified: true
      }
      
    }
*/