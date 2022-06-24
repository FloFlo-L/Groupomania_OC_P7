const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://Groupomania123:1234AZER@cluster0.5bneh.mongodb.net/?retryWrites=true&w=majority',
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée !', err));

