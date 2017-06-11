const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session')
const mongoose = require('mongoose');
const user_api = require('./server/routes/user_api');
const photo_api = require('./server/routes/photo_api');
//port number
const port = 3000;
const app = express();

//cors middleware
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({extended: false}));

//body parser middleware
app.use(bodyParser.json());
// passport middleware
 
app.use(passport.initialize());
app.use(passport.session());

require ('./config/passport')(passport);

app.use('/user_api',user_api);
app.use('/photo_api',photo_api);

//index route
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// start server
app.listen(port, function(){
    console.log("server running on localhost:" +port);
});