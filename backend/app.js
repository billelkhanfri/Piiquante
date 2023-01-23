// import express
const express = require('express');

// import mongoose
const mongoose = require('mongoose');

//import routes
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce')

//import path to handle system local endpoints syntax
const path = require('path');

// hide sensitive data
const dotenv = require('dotenv').config();

const app = express();

// connect to the database
mongoose.connect(process.env.MONGODB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// avoid CORS restrictions
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// parse resources and send it on JSON gformat
app.use(express.json());

// import Routes
app.use('/api/auth', userRoutes);
app.use('/api/sauces', sauceRoutes);

// upload images from local file
app.use('/images', express.static(path.join(__dirname, 'images')));


// export app
module.exports = app;