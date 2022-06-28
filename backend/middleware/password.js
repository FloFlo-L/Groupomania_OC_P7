const passwordSchema = require('../models/password.model')
const UserModel = require('../models/user.model');

module.exports = (req, res, next) => { 
    UserModel.findOne({ email: req.body.email })
    .then(user => {
        if (req.body.nom.length === 0) {
            return res.status(400).send({ message: "Vous n'avez pas renseigné votre Nom" });
        } 
        if (req.body.prenom.length === 0) {
            return res.status(400).send({ message: "Vous n'avez pas renseigné votre Prenom" });
        }
        if (req.body.email.length === 0) {
            return res.status(400).send({ message: "Vous n'avez pas renseigné votre Email" });
        }
        if(user){
            return res.status(401).send({ message: "Vous avez renseigné un Email déjà utilisé" });
        }
        if(req.body.password.length === 0 || !passwordSchema.validate(req.body.password)){
            res.status(400).json({ message: 'Vous n\'avez pas renseigné votre mot de passse ou celui-ci n\'a pas le bon format attendu <br/> 8 caractères minimum dont 1 majuscule, 1 minuscule et un chiffre' });
        }
            else {
            next();
        }
    })
};