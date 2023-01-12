
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
//const sauceRoutes = require('./routes/sauce')

mongoose.connect('mongodb+srv://Billel:Maramfaiza17112013@cluster0.brwroh3.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(express.json());
//app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;