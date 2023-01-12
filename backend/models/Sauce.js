const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manifacturer: { type: String, required: true },
    description: { type: String, required: true },
    MainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    userLiked: { type: Array, required: true },
    userdisliked: { type: Array, required: true }
});

module.exports = mongoose.model('Sauce', sauceSchema);