const UserModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.signup = (req, res) => {
    
    bcrypt.hash(req.body.password, 10)//crypté le mdp
        .then(hash => {
            const user = new UserModel({//create new user
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                password: hash//mdp crypté
            });
            
            console.log(user) 
             
            user.save()//enregistré user dans base de données
                .then(() => res.status(201).json({ message: 'Vous êtes inscrit !', user: user._id }))
                .catch(error => res.status(400).json({ error }))
        })
        .catch(error => res.status(500).json({ error }));
}

exports.login = (req, res) => {
    UserModel.findOne({ email: req.body.email })
    .then(user => {//vérifier si on a récupérer ou non un user grâce au mail
        if (!user) {//si on a pas trouvé de user...erreur
          return res.status(401).json({ error: 'Utilisateur non trouvé ! Email incorrect' });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {//ou non
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    {userId: user._id},
                    process.env.TOKEN_SECRET,
                    {expiresIn:"24h"}//durée validitée du token
                )
            });
            console.log('Connexion réussie !!!')
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
}

exports.logout = (req,res) => {
    console.log(req.params)
    UserModel.findOne({ _id: req.params.id})
    .then(user =>{
        res.status(200).json({
            userId: user._id,
            token: jwt.sign(
                {userId: user._id},
                process.env.TOKEN_SECRET,
                {expiresIn:"1s"}
            )
        });
        console.log('Déconnexion réussie !!!')
    })
}

exports.getAllUsers = (req, res) =>{
    UserModel.find().select('-passeword')
    .then(users => res.status(200).json(users))
    .catch(error => res.status(400).json({ error }));
    console.log('Liste utilisateurs')
}

exports.getOneUser = (req, res)=>{
    console.log(req.params)
    UserModel.findOne({ _id: req.params.id })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
        console.log('Utilisateur trouvé')
}
