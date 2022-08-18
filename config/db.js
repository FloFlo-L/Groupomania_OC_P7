const mongoose = require('mongoose');

mongoose
    .connect(
        process.env.MONGO_URL,
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log('Connexion à MongoDB échouée !', err));

