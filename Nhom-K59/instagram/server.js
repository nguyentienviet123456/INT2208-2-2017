const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const user_api = require('./server/routes/user_api');
const photo_api = require('./server/routes/photo_api');
const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/user_api',user_api);
app.use('/photo_api',photo_api);
app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, function(){
    console.log("server running on localhost:" +port);
});