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
    .then(() => res.status(201).json({ message: 'post enregistré !'}))
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