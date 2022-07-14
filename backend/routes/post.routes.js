const router = require('express').Router();

const postCtrl = require('../controllers/post.controller')

const multer = require('../middleware/multer-config')


router.get('/', postCtrl.getAllPost);
router.get('/:id', postCtrl.getOnePost)
router.post('/', multer, postCtrl.createPost);
router.put('/:id', multer, postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost); 

router.post('/:id/like', postCtrl.likePost);



module.exports = router;