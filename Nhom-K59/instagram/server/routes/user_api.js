const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User  = require('../models/user');
const db = "mongodb://viet:viet@ds147551.mlab.com:47551/imaggie";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("error!"+ error);
    }
});
// get users
router.get('/users', function(req,res){
   console.log('get request videos');
   User.find({})
   .exec(function(err,users){
       if(err){
           console.log("error retrieving videos");
       }else {
           res.json(users);
       }
   });
});
// get single user
router.get('/users/:id', function(req,res){
   console.log('get request single videos');
   User.findById(req.params.id)
   .exec(function(err,video){
       if(err){
           console.log("error retrieving videos");
       }else {
           res.json(user);
       }
   });
});
// post new user
router.post('/user',function(req,res){
    console.log('post a user');
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.userpassword = req.body.userpassword;
    newUser.email = req.body.email;
		newUser.name = req.body.name;
    newUser.save(function(err, insertedUser){
        if(err){
            console.log('error');
        }else{
            res.json(insertedUser);
        }
    });
});
// update user into database
router.put('/video/:id', function(req,res){
    console.log('update a user');
    User.findByIdAndUpdate(req.params.id,
    {
        $set: {name: req.body.name,
                email : req.body.email,
                userpassword: req.body.userpassword}
    },
    {
        new : true
    },
    function(err, updatedUser){
        if(err){
            res.send("error");
        }else{
            res.json(updatedUser);
        }
    }
    );
});
// delete user
router.delete('/user/:id', function(req,res){
    console.log('delete user');
    User.findByIdAndRemove(req.params.id, function(err, deletedUser){
        if(err){
            res.send('err');
        } else {
            res.json(deleteduser);
        }
    });
});
module.exports = router;