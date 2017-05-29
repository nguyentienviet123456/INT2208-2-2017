const user = require('./user');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//photo Schema
const photoSChema = new Schema({
  
  user_id : String,
  caption : String,
  image_path: String,
  date_created: String,

});

var photo = module.exports = mongoose.model('photo',photoSChema,'photos');

