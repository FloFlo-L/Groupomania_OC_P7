const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    posterId : {type: String, require: true},
    message : {type: String, require:true, maxlength: 500},
    imageUrl: {type: String, require: true},
    likes : {type: Number, default: 0},
    dislikes : {type: Number, default: 0},
    usersLiked : {type: [String]},
    usersDisliked : {type: [String]}
})

module.exports = mongoose.model('post', postSchema);