const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const Schema = mongoose.Schema;
//user Schema
const userSchema = new Schema({
   username : String,
   useremail: String,
   userpassword: String,
   fullname: String,
   nickname: String,
   phone: String,
   gender: String,
   personal_information: String,
});

var user = module.exports = mongoose.model('user',userSchema,'users');

module.exports.getUserById = function(id, callback){
    user.findById(id, callback);
}
module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    user.findOne(query, callback);
}
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err,salt){
        bcrypt.hash(newUser.userpassword, salt, function(err, hash){
            if(err) throw err;
            newUser.userpassword = hash; 
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMath){
        if(err) throw err;
        callback(null, isMath);
    });    
}

