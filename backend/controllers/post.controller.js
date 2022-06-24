const PostModel = require('../models/post.model');
const fs = require('fs');

exports.getAllPost = (req, res, next) => {
    PostModel.find()//renvoyer un tableau contenant toutes les posts dans notre base de données.
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
    console.log('Liste post');
};

exports.createPost = (req, res, next) => {
    const post = new PostModel({
        ...req.body,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      });
    post.save()
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ error }));
    console.log('Nouveau post ajouté');
};

exports.updatePost = (req, res, next) => {
    if (req.file) {//req fichier
        // si l'image est modifiée, il faut supprimer l'ancienne image dans le dossier /image
        PostModel.findOne({ _id: req.params.id })
            .then(post => {
                const filename = post.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    // une fois que l'ancienne image est supprimée dans le dossier /image, on peut mettre à jour
                    const postObject = {
                        ...req.body,
                        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                    }
                    PostModel.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Post modifié  avec changement img !' }))
                    .catch(error => res.status(400).json({ error }));
                })
            })
            .catch(error => res.status(500).json({ error }));
    } else {
        // si l'image n'est pas modifiée
        const postObject = { ...req.body };//req formulaire
        PostModel.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Post modifié sans changement img!' }))
        .catch(error => res.status(400).json({ error }));
    }
};

exports.deletePost = (req, res, next) => {
    PostModel.findOne({ _id: req.params.id })
    .then(post=> {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {//supprimer fichier
        PostModel.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Post supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
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