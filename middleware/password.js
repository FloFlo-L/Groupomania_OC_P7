const passwordSchema = require('../models/password.model')
const UserModel = require('../models/user.model');

module.exports = (req, res, next) => { 
    UserModel.findOne({ email: req.body.email })
    .then(user => {
        if(user){
            return res.status(401).send({ message: "Vous avez renseigné un Email déjà utilisé" });
        }
        if(req.body.password.length === 0 || !passwordSchema.validate(req.body.password)){
            res.status(400).json({ message: 'Le mot de passe doit avoir huit caractères minimum dont une majuscule, une minuscule et un chiffre' });
        }else {
            next();
        }
    })
};
