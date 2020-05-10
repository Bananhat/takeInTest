const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRoute = require('./routes/products');
const userRoutes = require('./routes/user');

const app = express();



mongoose.connect('mongodb+srv://samuel:dora@cluster0-bd8h1.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useCreateIndex : true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json());







app.use('/api/products', reflexionRoutes);

//AUTH START
app.use('/api/auth', userRoutes);
//AUTH END





module.exports = app;