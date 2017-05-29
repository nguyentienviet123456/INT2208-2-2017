const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//user Schema
const userSChema = new Schema({
    username: {
        type: String,
        index: true
    },
    userpassword: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    useravatar_path: {
        type: String,
    }
});

var user = module.exports = mongoose.model('user',userSChema,'users');

