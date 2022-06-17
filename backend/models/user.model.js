const mongoose = require('mongoose');
const {isEmail} = require('validator');

//Shéma utilisateur

const userSchema = mongoose.Schema({
    nom: {type: String, required: true},
    prenom: {type: String, required: true},
    email: {type: String, required: true, validate:[isEmail]},
    password: {type: String, required: true},
    picture: {type: String, default: "./uploads/profil/random-user.png"}
});



//exporte ce modèle utilisable
module.exports = mongoose.model('User', userSchema);