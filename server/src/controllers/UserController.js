const UserModel = require('../models/userModel');

exports.index = (req, res) => {
  res.send('tá fluindo esse tixe')
}

exports.test = async function(req, res) {
  try {
    const userTest = new UserModel();
    await userTest.test();
  } catch (error) {
    console.log(error)
  }
}
