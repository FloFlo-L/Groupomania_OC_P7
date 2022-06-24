const router = require('express').Router();

const userCtrl = require('../controllers/user.controller')

//connexion
router.post('/register', userCtrl.signup)
router.post('/login', userCtrl.login)
// router.post('/logout', userCtrl.logout)

router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getOneUser)

module.exports = router;