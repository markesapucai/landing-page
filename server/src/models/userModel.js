const mongoose = require('mongoose');

// cryptography
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

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
    this.body = { ...reqBody };

    const salt = bcrypt.genSaltSync(saltRounds);
    this.body.password = bcrypt.hashSync(this.body.password, salt);

    this.DbCreate({ ...this.body })
  }

  async DbCreate(reqBody) {
    await UserModel.create(reqBody)
    .then(dados => console.log(dados))
    .catch(e => console.error(e))
  }

  async login(reqBody) {
    this.body = { ...reqBody };

    try {
      console.log(this.body.email)
        const user = await UserModel.findOne({ email: this.body.email });

        if (!user) {
            console.log('Email não existe');
            return; // Se o email não existir, encerre a função aqui
        }

        const passwordMatch = bcrypt.compareSync(this.body.password, user.password);

        if (passwordMatch) {
            console.log('Login bem-sucedido');
        } else {
            console.log('Senha incorreta');
        }
    } catch (error) {
        console.error(error);
    }
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