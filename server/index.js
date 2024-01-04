require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
  .catch(e => console.log(e));


app.get('/', (req, res) => {
  res.send('hello world')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express está ouvindo na porta ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
