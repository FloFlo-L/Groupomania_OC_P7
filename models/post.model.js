const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userId : {type: String, require: true},
    posterId : {type: String, require: true},
    namePost : {type: String, require: true},
    message : {type: String, require:true, maxlength: 500},
    imageUrl: {type: String},
    likes : {type: Number, default: 0},
    usersLiked : {type: [String]},
})

module.exports = mongoose.model('post', postSchema);