const router = require('express').Router();

const userCtrl = require('../controllers/user.controller')

const checkForm = require("../middleware/password")

//connexion
router.post('/register', checkForm , userCtrl.signup )
router.post('/login', userCtrl.login)
router.get('/logout/:id', userCtrl.logout)

router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.getOneUser)

module.exports = router;