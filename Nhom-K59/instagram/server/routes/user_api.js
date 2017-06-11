const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const db = "mongodb://viet:viet@ds147551.mlab.com:47551/imaggie";


mongoose.Promise = global.Promise;
mongoose.connect(db, function (err) {
    if (err) {
        console.error("error!" + error);
    }
});
// get users
router.get('/users', function (req, res) {
    console.log('get request users');
    User.find({})
        .exec(function (err, users) {
            if (err) {
                console.log("error retrieving users");
            } else {
                res.json(users);
            }
        });
});
// get single user
router.get('/users/:id', function (req, res) {
    console.log('get request single users');
    User.findById(req.params.id)
        .exec(function (err, video) {
            if (err) {
                console.log("error retrieving users");
            } else {
                res.json(user);
            }
        });
});
// register
router.post('/register', function (req, res, next) {
    console.log('post a user');
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.userpassword = req.body.userpassword;
    newUser.useremail = req.body.useremail;
    newUser.gender = req.body.gender;
    newUser.personal_information = req.body.personal_information;
    newUser.nickname = req.body.nickname;
    newUser.phone = req.body.phone;
    newUser.fullname = req.body.fullname;

    User.addUser(newUser, function (err, user) {
        if (err) {
            res.json({ success: false, msg: 'failed to register user' });
        } else {
            res.json({ success: true, msg: 'success to register user' });
        }
    })
});

// authenticate
router.post('/authen', (req, res, next) => {
    const username = req.body.username;
    const userpassword = req.body.userpassword;

    User.getUserByUsername(username, function (err, user) {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'user not found' });
        }

        User.comparePassword(userpassword, user.userpassword, function (err, isMatch) {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, "mysecret", {
                    expiresIn: 604800 // 1 week
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        mail: user.useremail,
                        fullname: user.fullname,
                        nickname: user.nickname,
                        phone: user.phone,
                        gender: user.gender,
                        information: user.personal_information
                    }
                });
            } else {
                return res.json({ success: false, msg: 'wrong userpassword' });
            }
        });
    });
});

//profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({user: req.user});
});

// update user into database
router.put('/video/:id', function (req, res) {
    console.log('update a user');
    User.findByIdAndUpdate(req.params.id,
        {
            $set: {
                name: req.body.name,
                email: req.body.email,
                userpassword: req.body.userpassword
            }
        },
        {
            new: true
        },
        function (err, updatedUser) {
            if (err) {
                res.send("error");
            } else {
                res.json(updatedUser);
            }
        }
    );
});
// delete user
router.delete('/user/:id', function (req, res) {
    console.log('delete user');
    User.findByIdAndRemove(req.params.id, function (err, deletedUser) {
        if (err) {
            res.send('err');
        } else {
            res.json(deleteduser);
        }
    });
});
module.exports = router;