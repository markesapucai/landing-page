const UserModel = require('../models/userModel');

exports.index = (req, res) => {
  res.send('tá fluindo esse tixe')
}

exports.test = async function(reqBody) {
  try {
    const userTest = new UserModel();
    await userTest.test(reqBody);
  } catch (error) {
    console.log(error)
  }
}
