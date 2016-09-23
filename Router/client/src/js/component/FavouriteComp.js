var React = require('react');
var FavDisplay = require('./FavDisplay');
var FavouriteComp=React.createClass({
  getInitialState: function() {
  return {data: [],url:'http://localhost:8080/movie/get',jsondata:[]};
},
getFromServer: function() {
  $.ajax({
    url: this.state.url,
    dataType: 'json',
    type:'GET',
    cache: false,
    success: function(data) {
      console.log(data);
      this.setState({data: data});
      this.setState({jsondata: data});
         }.bind(this),
    error: function(xhr, status, err) {
      console.error("http://localhost:8080/movie/get", status, err.toString());
    }.bind(this)
  });
},
 componentDidMount : function()
 {
   this.getFromServer();
 },
render:function(){
          var movieNodes = this.state.jsondata.map(function(movie) {
                               console.log(movie);

                        return (
                          <FavDisplay title={movie.Title} Year={movie.Year}  imdbID={movie.imdbID} src={movie.Poster} >
                          </FavDisplay>
                        );
                      });

                   return(
                   <div className="MovieList">
                   {movieNodes}
                    </div>)
         }
})
module.exports=FavouriteComp;
