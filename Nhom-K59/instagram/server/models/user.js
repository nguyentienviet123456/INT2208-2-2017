const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//user Schema
const UserSChema = new Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    }
});

var User = module.exports = mongoose.model('User',UserSChema,'users');

