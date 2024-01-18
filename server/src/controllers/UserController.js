const UserModel = require('../models/userModel');

exports.index = (req, res) => {
  res.send('tá fluindo esse tixe')
}

exports.register = async function(reqBody) {
  try {
    const userTest = new UserModel();
    await userTest.test(reqBody);
  } catch (error) {
    console.log(error)
  }
}

exports.login = async function(reqBody) {
  const userTest = new UserModel();
  await userTest.login(reqBody)
}