const express = require('express');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const path = require('path');

require('dotenv').config({path: './config/.env'});
require('./config/db');

const app = express();

const reactBuild = path.join(__dirname, 'frontend', 'build')
app.use(express.static(reactBuild))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');//Autorise l'accès à l'API pour n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');//Définit les Headers utilisé par l'API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');//méthodes possible à utiliser
    next();
});

// routes

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


// server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Connected`)
})