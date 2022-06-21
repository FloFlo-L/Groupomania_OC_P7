const PostModel = require('../models/post.model');

exports.getAllPost = (req, res, next) => {
    PostModel.find()//renvoyer un tableau contenant toutes les sauces dans notre base de données.
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
        console.log('Liste post');
};

exports.createPost = (req, res, next) => {
  const post = new PostModel({
    ...req.body
  });
  post.save()
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.updatePost = (req, res, next) => {
    PostModel.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post modifié !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deletePost = (req, res, next) => {
    PostModel.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Post supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.likePost = (req, res) => {
    switch (req.body.like) {
        case 1 :
            PostModel.updateOne(
                { _id: req.params.id },
                { $push: {  usersLiked: req.body.userId  },//https://www.mongodb.com/docs/manual/reference/operator/update/push/
                $inc: { likes: +1 }})//https://www.mongodb.com/docs/manual/reference/operator/update/inc/
            .then(() => res.status(200).json({ message: 'Post liké !' }))
            .catch((error) => res.status(400).json({ error }))
        break;

        case 0 :
            PostModel.findOne({ _id: req.params.id })
            .then((post) => {
                if (post.usersLiked.includes(req.body.userId)) { 
                PostModel.updateOne(
                    { _id: req.params.id},
                    { $pull: { usersLiked: req.body.userId },//https://www.mongodb.com/docs/manual/reference/operator/update/pull/
                    $inc: { likes: -1 }})
                .then(() => res.status(200).json({ message: `Like non selectionné` }))
                .catch((error) => res.status(400).json({ error }))
                }
            })
            .catch((error) => res.status(404).json({ error }))
        break;

        default:
        console.log(error);

    }
}