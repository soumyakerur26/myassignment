var React= require('react');
var ReactDom = require('react-dom');
var SearchBox =require('./component/SearchBox');
var MovieList = require('./component/MovieList');
var MovieDesc = require('./component/MovieDesc');
var NavBar = require('./component/NavBar');
 var ParentNode=React.createClass({
   getInitialState: function() {
   return {data: [],url:'http://www.omdbapi.com/?s=',jsondata:[]};
 },
 searchFunction: function(name) {
   $.ajax({
     url: this.state.url+name,
     dataType: 'json',
     type:'GET',
     cache: false,
     success: function(data) {
       this.setState({data: data});
       this.setState({jsondata: data.Search});
          }.bind(this),
     error: function(xhr, status, err) {
       console.error("http://www.omdbapi.com/", status, err.toString());
     }.bind(this)
   });
 },



   render: function(){
    return(
      <div>
<NavBar/>
<SearchBox searchFunction={this.searchFunction}/>
<MovieList jsondata={this.state.jsondata} />


        </div>

    )
  }
})
module.exports=ParentNode;
ReactDom.render(< ParentNode />,document.getElementById('Movie_App'));
