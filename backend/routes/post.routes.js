const router = require('express').Router();

const postCtrl = require('../controllers/post.controller')


router.get('/', postCtrl.getAllPost);
router.post('/', postCtrl.createPost);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost); 

router.post('/:id/like', postCtrl.likePost);



module.exports = router;