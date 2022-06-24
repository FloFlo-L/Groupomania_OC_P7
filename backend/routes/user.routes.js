const router = require('express').Router();

const userCtrl = require('../controllers/user.controller')

const checkPassword = require("../middleware/password")

//connexion
router.post('/register', checkPassword, userCtrl.signup)
router.post('/login', userCtrl.login)
// router.post('/logout', userCtrl.logout)

router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getOneUser)

module.exports = router;