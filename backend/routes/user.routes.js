const router = require('express').Router();

const userCtrl = require('../controllers/user.controller')

//auth
router.post('/register', userCtrl.signup)
router.post('/login', userCtrl.login)

//user Action
router.get('/', userCtrl.getAllUsers)
router.get('/:id', userCtrl.userInfo)
router.put('/:id', userCtrl.updateUser)
router.delete('/:id', userCtrl.deleteUser)

module.exports = router;