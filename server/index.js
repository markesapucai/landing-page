require('dotenv').config();

const express = require('express');
const app = express();

//cors
const cors = require('cors');
app.use(cors('http://localhost:5173'));


//database
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
  .catch(e => console.log(e));

//routes  
const route = require('./routes');
app.use(route);

//csurf
/*
const crsf = require('csurf');
app.use(crsf({ cookie: true }));
*/
//Session
/*
const session = require('express-session');
const sessionOptions = session({
  secret: 'sgfdgdfhdfhd',
  store: mongoose.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
})
app.use(sessionOptions);
*/

//Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express está ouvindo na porta ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
