var Express = require('express');
var addmovies1 = require('../model/addmovie.js');
var route= Express.Router();
route.get('/get',function(req,res,next)
{
  addmovies1.find({},function(err,docs){
   res.json(docs);
});
});
route.post('/add',function(req,res){
  console.log('Inside');
  console.log(req.body);
  var addmovie= new addmovies1(req.body);

  addmovie.save(function(err)
{
  if(err){
    res.send(err);
  }
  else{
    res.send("movie added successfully");
  }
});
});
route.delete('/delete/:imdbID',function(req,res){

  addmovies1.remove({imdbID:req.params.imdbID},function(err)
{
  if(err){
    res.send(err);
  }
  else{
    res.send("movie deleted");
  }
});
});
route.put('/',function(req,res,next)
{
  res.send("put method executed");
}
);

module.exports = route;
