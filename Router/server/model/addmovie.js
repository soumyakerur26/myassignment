var mongoose = require('mongoose');
var schema  = mongoose.Schema;
var addmovie= new schema({
  Title: String,
  Year: String,
  Poster:String,
  imdbID:String
});
module.exports= mongoose.model('addmovie',addmovie);
