const passwordSchema = require('../models/password.model.js');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'mauvais format mdp' });
    } else {
        next();
    }
};