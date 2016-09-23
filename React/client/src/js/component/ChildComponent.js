var React= require('react');
var ChildComponent= React.createClass({
  handleClick: function(e)
  {
    e.preventDefault();
   this.props.handleClick("New state got updated");
  },
  render: function()
  {
    return(
    <div>
    <h1> I am a child </h1>
    <button onClick={this.handleClick}> click Here</button>

    </div>
  )
  }
})
module.exports=ChildComponent;
