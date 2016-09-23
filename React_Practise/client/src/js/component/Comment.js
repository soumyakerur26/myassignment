var React = require('react');
var Comment= React.createClass({
  reender: function()
  {
    return(
      <div>
      <h1 className="author">
      {this.props.author}
      </h1>
      
      {this.props.children}
      </div>
    )
  }
})
module.exports=Comment;
