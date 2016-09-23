var React=require('react');
var MovieDesc=require('./MovieDesc.js');


var Movielist=React.createClass(
      {
         render:function(){
           var movieNodes = this.props.jsondata.map(function(movie) {
                                console.log(movie);

                         return (
                           <MovieDesc movieData={movie} title={movie.Title} Year={movie.Year}  imdbID={movie.imdbID} src={movie.Poster} >
                           </MovieDesc>
                         );
                       });

                    return(
                    <div className="MovieList">
                    {movieNodes}
                     </div>)
          }
      })

module.exports=Movielist;
