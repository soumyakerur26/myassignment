var React= require('react');
var CommentList= require('CommentList');
var CommentForm =require('CommentForm');
var ReactDom= require('react-dom');
var Commentbox = React.createClass({
  render: function()
  {
    return(
      <div>
      <h1> This is Comment Box <h1>
      <CommentList/>
      <CommentForm/>
      </div>
    )
  }
})
ReactDom.render(< Commentbox/>, document.getElementById('app'));
