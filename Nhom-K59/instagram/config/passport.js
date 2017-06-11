const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../server/models/user');


module.exports = function(passport){
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey ='mysecret';
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload);
    User.getUserById(jwt_payload._doc._id, (err, user) => {
      if(err){
        return done(err, false);
      }

      if(user){
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}