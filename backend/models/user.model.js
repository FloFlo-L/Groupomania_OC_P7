const mongoose = require('mongoose');
const {isEmail} = require('validator');

//Shéma utilisateur

const userSchema = mongoose.Schema({
    email: {type: String, required: true, validate:[isEmail]},
    password: {type: String, required: true}
});



//exporte ce modèle utilisable
module.exports = mongoose.model('User', userSchema);