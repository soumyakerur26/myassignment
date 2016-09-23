var mongoose = require('mongoose');
var schema  = mongoose.Schema;
var userDetailsSchema= new schema({
  username: String,
  password: String,
  uid :String
});
module.exports= mongoose.model('user',userDetailsSchema);
