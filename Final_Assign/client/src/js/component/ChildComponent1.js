var React= require('react');
var ChildComponent1= React.createClass({
  render: function()
  {
    return(
      <div>
      <h3> This is the second child Component</h3>
      <h4> {this.props.stateData} </h4>
      </div>
    )
  }
})
module.exports=ChildComponent1;
