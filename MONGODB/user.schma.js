const mongoose = require('mongoose');

const user = mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const User = mongoose.model('User', user);

module.exports = User;