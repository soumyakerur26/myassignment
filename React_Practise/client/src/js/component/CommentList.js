var React = require('react');
var CommentList= React.createClass({
  render: function()
  {
    return(
      <div>
      <h2> I am CommentList </h2>
      <Comment author="Peter-Hunt"> This is one comment </Comment>
      <Comment author="Luis-Benz"> This is another Comment </Comment>
      </div>
    )
  }
})
module.exports=CommentList;
