const mongoose = require('mongoose');
// add email restriction for users
const uniqueValidator = require('mongoose-unique-validator');

//add model for each user
const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
//add the plugin of restriction in the model
userSchema.plugin(uniqueValidator);

//export user model

module.exports = mongoose.model('User', userSchema);